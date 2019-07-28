using Angel.Model;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufacturerController : ControllerBase
    {
        private SiteContext db;

        public ManufacturerController(SiteContext db)
        {
            this.db = db;
        }
        // GET: api/Manufacturers
        [HttpGet]
        public ActionResult<IEnumerable<Manufacturer>> Get()
        {
            return db.Manufacturers;
        }

        [HttpGet("{id}")]
        public ActionResult<Manufacturer> GetById(int id)
        {
            return db.Manufacturers.Single(a => a.ManufacturerId == id);
        }

        // POST api/Manufacturer
        [HttpPost]
        public ActionResult<IEnumerable<Manufacturer>> Post([FromBody] Manufacturer Manufacturer)
        {
            db.Manufacturers.Add(Manufacturer);
            db.SaveChanges();
            return db.Manufacturers.ToList();
        }

        // PUT api/<controller>/5
        [HttpPut]
        public ActionResult<IEnumerable<Manufacturer>> Put([FromBody] Manufacturer manufacturer)
        {
            db.Manufacturers.Update(manufacturer);
            db.SaveChanges();
            return db.Manufacturers.ToList();
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public ActionResult<IEnumerable<Manufacturer>> Delete(Manufacturer manufacturer)
        {
            db.Manufacturers.Remove(manufacturer);
            db.SaveChanges();
            return db.Manufacturers.ToList();
        }
    }
}
