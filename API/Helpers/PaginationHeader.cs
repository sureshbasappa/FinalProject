namespace API.Helpers
{
    public class PaginationHeader
    {
        public PaginationHeader(int currentPage, int itemsPerPage, int totalItems, int totalpages)
        {
            CurrentPage = currentPage;
            ItemsPerPage = itemsPerPage;
            TotalItems = totalItems;
            Totalpages = totalpages;
        }

        public int CurrentPage{get;set;}
        public int ItemsPerPage{get;set;}
        public int TotalItems{get;set;}
        public int Totalpages{get;set;}
        

    }
}