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


        // POST api/Manufacturer
        [HttpPost]
        public ActionResult<IEnumerable<Manufacturer>> Post([FromBody] Manufacturer Manufacturer)
        {
            db.Manufacturers.Add(Manufacturer);
            db.SaveChanges();
            return db.Manufacturers.ToList();
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
