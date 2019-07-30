using Microsoft.EntityFrameworkCore.Migrations;

namespace Angel.Migrations
{
    public partial class TestImageSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "ImageURL",
                value: "https://i0.wp.com/metalinjection.net/wp-content/uploads/2015/06/Disturbed1.jpg?fit=700%2C394&ssl=1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "ImageURL",
                value: "");
        }
    }
}
