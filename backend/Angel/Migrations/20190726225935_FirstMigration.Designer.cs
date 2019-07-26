﻿// <auto-generated />
using Angel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Angel.Migrations
{
    [DbContext(typeof(SiteContext))]
    [Migration("20190726225935_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Angel.Model.Collection", b =>
                {
                    b.Property<int>("CollectionId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CollectionName");

                    b.Property<string>("Description");

                    b.Property<string>("ImageURL");

                    b.Property<int>("ManufacturerId");

                    b.HasKey("CollectionId");

                    b.HasIndex("ManufacturerId");

                    b.ToTable("Collections");

                    b.HasData(
                        new { CollectionId = 1, CollectionName = "A", Description = "Underwater Watch", ImageURL = "", ManufacturerId = 1 },
                        new { CollectionId = 2, CollectionName = "B", Description = "Pilot Watch", ImageURL = "", ManufacturerId = 2 },
                        new { CollectionId = 3, CollectionName = "C", Description = "Chronograph", ImageURL = "", ManufacturerId = 1 },
                        new { CollectionId = 4, Description = "Chronograph", ImageURL = "", ManufacturerId = 2 }
                    );
                });

            modelBuilder.Entity("Angel.Model.Manufacturer", b =>
                {
                    b.Property<int>("ManufacturerId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Country");

                    b.Property<string>("Description");

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name");

                    b.HasKey("ManufacturerId");

                    b.ToTable("Manufacturers");

                    b.HasData(
                        new { ManufacturerId = 1, Country = "Swiss", Description = "Diver", ImageURL = "", Name = "Rolex" },
                        new { ManufacturerId = 2, Country = "Swiss", Description = "Pilot", ImageURL = "", Name = "Omega SA" }
                    );
                });

            modelBuilder.Entity("Angel.Model.Watch", b =>
                {
                    b.Property<int>("WatchId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CollectionId");

                    b.Property<string>("Movement");

                    b.Property<string>("Name");

                    b.Property<string>("RefNumber");

                    b.HasKey("WatchId");

                    b.HasIndex("CollectionId");

                    b.ToTable("Watches");

                    b.HasData(
                        new { WatchId = 1, CollectionId = 1, Movement = "3701", Name = "Submariner", RefNumber = "1234" },
                        new { WatchId = 2, CollectionId = 2, Movement = "3702", Name = "GMT-MASTER", RefNumber = "2345" },
                        new { WatchId = 3, CollectionId = 3, Movement = "3702", Name = "Daytona", RefNumber = "3456" },
                        new { WatchId = 4, CollectionId = 4, Movement = "3703", Name = "Oyster Perpetual", RefNumber = "4567" }
                    );
                });

            modelBuilder.Entity("Angel.Model.Collection", b =>
                {
                    b.HasOne("Angel.Model.Manufacturer")
                        .WithMany("Collections")
                        .HasForeignKey("ManufacturerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Angel.Model.Watch", b =>
                {
                    b.HasOne("Angel.Model.Collection")
                        .WithMany("Watches")
                        .HasForeignKey("CollectionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
