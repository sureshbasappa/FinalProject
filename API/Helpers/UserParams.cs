namespace API.Helpers
{
    public class UserParams : PaginationParams
    {
        public string CurrentUserName{set;get;}
        
        public string Gender{set;get;}

        public int MinAge{set;get;} = 18;

        public int MaxAge{set;get;} = 150;

        public string OrderBy{set;get;} = "lastActive";

    }
}