using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Angel.Model;

namespace Angel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectionController : ControllerBase
    {
        private SiteContext db;

        public CollectionController(SiteContext db)
        {
            this.db = db;
        }

        //Collection Actions

        // GET api/Collections
        [HttpGet]
        public ActionResult<IEnumerable<Collection>> Get()
        {
            return db.Collections;

        }

        // POST api/Collection
        [HttpPost]
        public ActionResult<Manufacturer> Post([FromBody] Collection collection)
        {
            db.Collections.Add(collection);
            db.SaveChanges();
            return db.Manufacturers.Single(a => a.ManufacturerId == collection.ManufacturerId);
        }
    }
}