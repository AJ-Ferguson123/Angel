using Angel.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angel
{
    
        public class SiteContext : DbContext
        {
            public DbSet<Collection> Collections { get; set; }
            public DbSet<Manufacturer> Manufacturers { get; set; }
            public DbSet<Watch> Watches { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                var connectionString = "Server=(localdb)\\mssqllocaldb;Database=Angel;Trusted_Connection=True;";

                      optionsBuilder.UseSqlServer(connectionString)
                            .UseLazyLoadingProxies();

                base.OnConfiguring(optionsBuilder);
            }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Manufacturer>().HasData(
                    new Manufacturer()
                    {
                        ManufacturerId = 1,
                        Name = "Rolex",                        
                        Description ="Diver",
                        ImageURL = "",
                        Country = "Swiss"
                    },
                    new Manufacturer()
                    {
                        ManufacturerId = 2,
                        Name = "Omega SA",
                        Description = "Pilot",
                        ImageURL = "",
                        Country = "Swiss"
                    }                    
                    );

                modelBuilder.Entity<Collection>().HasData(
                    new Collection()
                    {
                        CollectionId = 1,
                        CollectionName = "A",
                        ManufacturerId = 1,                        
                        Description ="Underwater Watch",
                        ImageURL = ""
                        
                    },
                    new Collection()
                    {
                        CollectionId = 2,
                        CollectionName = "B",
                        ManufacturerId = 2,                       
                        Description = "Pilot Watch",
                        ImageURL = ""
                    },
                    new Collection()
                    {
                        CollectionId = 3,
                        CollectionName = "C",
                        ManufacturerId = 3,                        
                        Description = "Chronograph",
                        ImageURL = ""
                    },
                    new Collection()
                    {
                        CollectionId = 4,
                        ManufacturerId = 4,                       
                        Description = "Chronograph",
                        ImageURL = ""
                    }
                    );

                modelBuilder.Entity<Watch>().HasData(
                    new Watch()
                    {
                        WatchId = 1,
                        Name = "Submariner",
                        RefNumber = "1234",
                        Movement = "3701",
                        CollectionId = 1
                    },
                    new Watch()
                    {
                        WatchId = 2,
                        Name = "GMT-MASTER",
                        RefNumber = "2345",
                        Movement = "3702",
                        CollectionId = 2
                    },
                    new Watch()
                    {
                        WatchId = 3,
                        Name = "Daytona",
                        RefNumber = "3456",
                        Movement = "3702",
                        CollectionId = 3
                    },
                    new Watch()
                    {
                        WatchId = 4,
                        Name = "Oyster Perpetual",
                        RefNumber = "4567",
                        Movement = "3703",
                        CollectionId = 4
                    }
                    );



            }
        }
    }
