using Microsoft.EntityFrameworkCore.Migrations;

namespace Angel.Migrations
{
    public partial class AddImageTest2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "ImageURL",
                value: "https://upload.wikimedia.org/wikipedia/en/9/95/Rolex_logo.svg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Manufacturers",
                keyColumn: "ManufacturerId",
                keyValue: 1,
                column: "ImageURL",
                value: "https://i0.wp.com/metalinjection.net/wp-content/uploads/2015/06/Disturbed1.jpg?fit=700%2C394&ssl=1");
        }
    }
}
