using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface ITokenservice
    {
        Task<string> CreateToken(AppUser user);
    }
}