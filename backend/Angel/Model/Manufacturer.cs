using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angel.Model
{
    public class Manufacturer
    {
        public int ManufacturerId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
        public string Country { get; set; }

        public virtual List<Collection> Collections { get; set; }

    }
}
