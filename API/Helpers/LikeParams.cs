namespace API.Helpers
{
    public class LikeParams : PaginationParams
    {
        public int UserId{get;set;}

        public string predicate{get;set;}
    }
}