using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class LikesRepository : ILikesRepository
    {
        private readonly DataContext _context;
        public LikesRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<UserLike> GetUserLike(int sourceUserId, int likedUserID)
        {
            return await _context.Likes.FindAsync(sourceUserId, likedUserID);
        }

        public async Task<PageList<LikeDto>> GetUserLikes(LikeParams likeParams)
        {
            var users=_context.Users.OrderBy(u=>u.UserName).AsQueryable();
            var likes=_context.Likes.AsQueryable();

            if(likeParams.predicate=="liked"){
                likes=likes.Where(like=>like.SourceUserId==likeParams.UserId);
                users=likes.Select(likes=>likes.LikedUser);
            }

            if(likeParams.predicate=="likedBy"){
                likes=likes.Where(like=>like.LikedUserId==likeParams.UserId);
                users=likes.Select(likes=>likes.SourceUser);
            }

            var likedUsers = users.Select(user=>new LikeDto
            {
                Username=user.UserName,
                KnownAs=user.KnownAs,
                Age=user.DateOfBirth.CalculateAge(),
                PhotoUrl=user.Photos.FirstOrDefault(p=>p.IsMain).Url,
                City=user.City,
                Id=user.Id
            });

            return await PageList<LikeDto>.CreateAsync(likedUsers, likeParams.PageNumber, likeParams.PageSize);

        }

        public async Task<AppUser> GetUserWithLikes(int userId)
        {
            return await _context.Users
                   .Include(x => x.LikedUsers)
                   .FirstOrDefaultAsync(x=>x.Id==userId);
                   
        }
    }
}