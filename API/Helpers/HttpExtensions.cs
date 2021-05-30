using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace API.Helpers
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalpages){
             var PaginationHeader=new PaginationHeader(currentPage,itemsPerPage,totalItems,totalpages);
             var options = new JsonSerializerOptions 
             {
                    PropertyNamingPolicy=JsonNamingPolicy.CamelCase
             };
            response.Headers.Add("Pagination", JsonSerializer.Serialize(PaginationHeader, options));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
        
    }
}