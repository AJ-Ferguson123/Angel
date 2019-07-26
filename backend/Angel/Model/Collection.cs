using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angel.Model
{
    public class Collection
    {
        public int CollectionId { get; set; }
        public int ManuId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
    }
}
