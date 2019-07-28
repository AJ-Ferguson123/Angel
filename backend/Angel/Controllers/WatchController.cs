using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angel.Model;

namespace Angel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WatchController : ControllerBase
    {
        private SiteContext db;

        public WatchController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Watches
        [HttpGet]
        public ActionResult<IEnumerable<Watch>> Get()
        {
            return db.Watches;
        }

        [HttpGet("{id}")]
        public ActionResult<Watch> GetById(int id)
        {
            return db.Watches.Single(a => a.WatchId == id);
        }


        // POST api/Watch
        [HttpPost]
        public ActionResult<Collection> Post([FromBody] Watch watch)
        {
            db.Watches.Add(watch);
            db.SaveChanges();
            return db.Collections.Single(a => a.CollectionId == watch.CollectionId);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Watch>> Put([FromBody] Watch watch)
        {
            db.Watches.Update(watch);
            db.SaveChanges();
            return db.Watches.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Watch>> Delete(Watch watch)
        {
            db.Watches.Remove(watch);
            db.SaveChanges();
            return db.Watches.ToList();
        }
    }
}