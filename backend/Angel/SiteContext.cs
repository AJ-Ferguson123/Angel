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
            public DbSet<Manufacturer> Manufacturers { get; set; }
            public DbSet<Collection> Collections { get; set; }
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
                        Description = "Rolex SA is a Swiss luxury watch manufacturer based in Geneva, Switzerland. Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915.",
                        ImageURL = "https://upload.wikimedia.org/wikipedia/en/9/95/Rolex_logo.svg",
                        Country = "Swiss"
                    },
                    new Manufacturer()
                    {
                        ManufacturerId = 2,
                        Name = "Omega SA",
                        Description = "Omega SA is a Swiss luxury watchmaker based in Biel/Bienne, Switzerland. Founded by Louis Brandt in La Chaux-de-Fonds in 1848, the company formally operated as the La Generale Watch Co. until incorporating the name Omega in 1903, becoming Louis Brandt et Frère - Omega Watch & Co.",
                        ImageURL = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwilvpuK79vjAhVJDq0KHW1iD5QQjRx6BAgBEAU&url=http%3A%2F%2Flogok.org%2Fomega-logo%2F&psig=AOvVaw3-48uIkp6C4cUFSgLfGQfX&ust=1564549445969194",
                        Country = "Swiss"
                    }                    
                    );

                modelBuilder.Entity<Collection>().HasData(
                    new Collection()
                    {
                        CollectionId = 1,
                        CollectionName = "Classic",
                        ManufacturerId = 1,                       
                        Description = "The Rolex Classic collection consists of models that combines Rolex’s know-how and high standards of perfection in an approach that heightens watchmaking heritage in its most timeless form.",
                       
                    },
                    new Collection()
                    {
                        CollectionId = 2,
                        CollectionName = "Sea Master",
                        ManufacturerId = 2,                        
                        Description = "In 1970 OMEGA officially launched a watch that had been created to withstand the crushing pressures endured by divers working deep below the ocean’s surface. It was the Seamaster ",
                        
                        
                    }
                
                    );

                modelBuilder.Entity<Watch>().HasData(
                    new Watch()
                    {
                        WatchId = 1,
                        Name = "PearlMaster 39",
                        ImageURL = "https://www.rolex.com/watches/pearlmaster/m86285-0001.html#",
                        Movement = "3701",
                        CollectionId = 1
                    },
                    new Watch()
                    {
                        WatchId = 2,
                        Name = "Ploprof",
                        ImageURL = "https://www.omegawatches.com/en-us/watch-omega-seamaster-ploprof-1200m-omega-co-axial-55-x-48-mm-22432552101002",
                        Movement = "55 X 48 MM",
                        CollectionId = 2
                    }
             
                    );



            }
        }
    }
