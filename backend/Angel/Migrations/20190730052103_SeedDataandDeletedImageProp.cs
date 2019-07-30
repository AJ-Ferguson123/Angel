using Microsoft.EntityFrameworkCore.Migrations;

namespace Angel.Migrations
{
    public partial class SeedDataandDeletedImageProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Collections");

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 1,
                columns: new[] { "CollectionName", "Description" },
                values: new object[] { "Classic", "The Rolex Classic collection consists of models that combines Rolex’s know-how and high standards of perfection in an approach that heightens watchmaking heritage in its most timeless form." });

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 2,
                columns: new[] { "CollectionName", "Description" },
                values: new object[] { "Sea Master", "In 1970 OMEGA officially launched a watch that had been created to withstand the crushing pressures endured by divers working deep below the ocean’s surface. It was the Seamaster " });

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "Description",
                value: "Rolex SA is a Swiss luxury watch manufacturer based in Geneva, Switzerland. Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915.");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 2,
                columns: new[] { "Description", "ImageURL" },
                values: new object[] { "Omega SA is a Swiss luxury watchmaker based in Biel/Bienne, Switzerland. Founded by Louis Brandt in La Chaux-de-Fonds in 1848, the company formally operated as the La Generale Watch Co. until incorporating the name Omega in 1903, becoming Louis Brandt et Frère - Omega Watch & Co.", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwilvpuK79vjAhVJDq0KHW1iD5QQjRx6BAgBEAU&url=http%3A%2F%2Flogok.org%2Fomega-logo%2F&psig=AOvVaw3-48uIkp6C4cUFSgLfGQfX&ust=1564549445969194" });

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 1,
                columns: new[] { "ImageURL", "Name" },
                values: new object[] { "https://www.rolex.com/watches/pearlmaster/m86285-0001.html#", "PearlMaster 39" });

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 2,
                columns: new[] { "ImageURL", "Movement", "Name" },
                values: new object[] { "https://www.omegawatches.com/en-us/watch-omega-seamaster-ploprof-1200m-omega-co-axial-55-x-48-mm-22432552101002", "55 X 48 MM", "Ploprof" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Collections",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 1,
                columns: new[] { "CollectionName", "Description", "ImageURL" },
                values: new object[] { "Coll1", "Underwater Watch", "" });

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 2,
                columns: new[] { "CollectionName", "Description", "ImageURL" },
                values: new object[] { "Coll2", "Pilot Watch", "" });

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "Description",
                value: "Diver");

            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 2,
                columns: new[] { "Description", "ImageURL" },
                values: new object[] { "Pilot", "" });

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 1,
                columns: new[] { "ImageURL", "Name" },
                values: new object[] { "", "Submariner" });

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 2,
                columns: new[] { "ImageURL", "Movement", "Name" },
                values: new object[] { "", "3702", "GMT-MASTER" });
        }
    }
}
