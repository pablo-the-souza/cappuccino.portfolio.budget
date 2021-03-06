using System.Collections.Generic;
using API.Entities;

namespace API.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Record> Records { get; set; }
    }
}