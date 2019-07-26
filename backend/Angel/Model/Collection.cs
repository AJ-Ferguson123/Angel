using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angel.Model
{
    public class Collection
    {
        public int CollectionId { get; set; }
        public int ManufacturerId { get; set; }
        public string CollectionName { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }

        public virtual List<Watch> Watches { get; set; }
    }
}
