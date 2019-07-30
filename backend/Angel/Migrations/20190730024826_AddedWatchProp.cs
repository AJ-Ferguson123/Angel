using Microsoft.EntityFrameworkCore.Migrations;

namespace Angel.Migrations
{
    public partial class AddedWatchProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 4);

            migrationBuilder.RenameColumn(
                name: "RefNumber",
                table: "Watches",
                newName: "ImageURL");

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 1,
                column: "CollectionName",
                value: "Coll1");

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 2,
                column: "CollectionName",
                value: "Coll2");

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 1,
                column: "ImageURL",
                value: "");

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 2,
                column: "ImageURL",
                value: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageURL",
                table: "Watches",
                newName: "RefNumber");

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 1,
                column: "CollectionName",
                value: "A");

            migrationBuilder.UpdateData(
                table: "Collections",
                keyColumn: "CollectionId",
                keyValue: 2,
                column: "CollectionName",
                value: "B");

            migrationBuilder.InsertData(
                table: "Collections",
                columns: new[] { "CollectionId", "CollectionName", "Description", "ImageURL", "ManufacturerId" },
                values: new object[,]
                {
                    { 3, "C", "Chronograph", "", 1 },
                    { 4, null, "Chronograph", "", 2 }
                });

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 1,
                column: "RefNumber",
                value: "1234");

            migrationBuilder.UpdateData(
                table: "Watches",
                keyColumn: "WatchId",
                keyValue: 2,
                column: "RefNumber",
                value: "2345");

            migrationBuilder.InsertData(
                table: "Watches",
                columns: new[] { "WatchId", "CollectionId", "Movement", "Name", "RefNumber" },
                values: new object[] { 3, 3, "3702", "Daytona", "3456" });

            migrationBuilder.InsertData(
                table: "Watches",
                columns: new[] { "WatchId", "CollectionId", "Movement", "Name", "RefNumber" },
                values: new object[] { 4, 4, "3703", "Oyster Perpetual", "4567" });
        }
    }
}
