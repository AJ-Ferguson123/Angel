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

        [HttpGet("{id}")]
        public ActionResult<Collection> GetById(int id)
        {
            return db.Collections.Single(a => a.CollectionId == id);
        }

        // POST api/Collection
        [HttpPost]
        public ActionResult<Manufacturer> Post([FromBody] Collection collection)
        {
            db.Collections.Add(collection);
            db.SaveChanges();
            return db.Manufacturers.Single(a => a.ManufacturerId == collection.ManufacturerId);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Collection>> Put([FromBody] Collection collection)
        {
            db.Collections.Update(collection);
            db.SaveChanges();
            return db.Collections.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Collection>> Delete(Collection collection)
        {
            db.Collections.Remove(collection);
            db.SaveChanges();
            return db.Collections.ToList();
        }

    }
}
