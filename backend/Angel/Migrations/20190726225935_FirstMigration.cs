using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angel.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Manufacturers",
                columns: table => new
                {
                    ManufacturerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manufacturers", x => x.ManufacturerId);
                });

            migrationBuilder.CreateTable(
                name: "Collections",
                columns: table => new
                {
                    CollectionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ManufacturerId = table.Column<int>(nullable: false),
                    CollectionName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Collections", x => x.CollectionId);
                    table.ForeignKey(
                        name: "FK_Collections_Manufacturers_ManufacturerId",
                        column: x => x.ManufacturerId,
                        principalTable: "Manufacturers",
                        principalColumn: "ManufacturerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Watches",
                columns: table => new
                {
                    WatchId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    RefNumber = table.Column<string>(nullable: true),
                    Movement = table.Column<string>(nullable: true),
                    CollectionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Watches", x => x.WatchId);
                    table.ForeignKey(
                        name: "FK_Watches_Collections_CollectionId",
                        column: x => x.CollectionId,
                        principalTable: "Collections",
                        principalColumn: "CollectionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Manufacturers",
                columns: new[] { "ManufacturerId", "Country", "Description", "ImageURL", "Name" },
                values: new object[] { 1, "Swiss", "Diver", "", "Rolex" });

            migrationBuilder.InsertData(
                table: "Manufacturers",
                columns: new[] { "ManufacturerId", "Country", "Description", "ImageURL", "Name" },
                values: new object[] { 2, "Swiss", "Pilot", "", "Omega SA" });

            migrationBuilder.InsertData(
                table: "Collections",
                columns: new[] { "CollectionId", "CollectionName", "Description", "ImageURL", "ManufacturerId" },
                values: new object[,]
                {
                    { 1, "A", "Underwater Watch", "", 1 },
                    { 3, "C", "Chronograph", "", 1 },
                    { 2, "B", "Pilot Watch", "", 2 },
                    { 4, null, "Chronograph", "", 2 }
                });

            migrationBuilder.InsertData(
                table: "Watches",
                columns: new[] { "WatchId", "CollectionId", "Movement", "Name", "RefNumber" },
                values: new object[,]
                {
                    { 1, 1, "3701", "Submariner", "1234" },
                    { 3, 3, "3702", "Daytona", "3456" },
                    { 2, 2, "3702", "GMT-MASTER", "2345" },
                    { 4, 4, "3703", "Oyster Perpetual", "4567" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Collections_ManufacturerId",
                table: "Collections",
                column: "ManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_Watches_CollectionId",
                table: "Watches",
                column: "CollectionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Watches");

            migrationBuilder.DropTable(
                name: "Collections");

            migrationBuilder.DropTable(
                name: "Manufacturers");
        }
    }
}
