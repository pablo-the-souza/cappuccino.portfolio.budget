using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Record> Records { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Category>().Property(c => c.Id).ValueGeneratedOnAdd();
            //seed database with dummy data
            modelBuilder.Entity<Record>().HasData(
                new Record()
                {
                    Id = 1,
                    Date = new System.DateTime(),
                    Name = "Woolies",
                    Value = 20,
                    CategoryId = 1,
                    Type = "Expense"
                },

                new Record()
                {
                    Id = 2,
                    Date = new System.DateTime(),
                    Name = "Traslink",
                    Value = 30,
                    CategoryId = 2,
                    Type = "Expense"
                },

                new Record()
                {
                    Id = 3,
                    Date = new System.DateTime(),
                    Name = "Cafe 64",
                    Value = 22,
                    CategoryId = 3,
                    Type = "Expense"
                }
                );

            modelBuilder.Entity<Category>()
               .HasAlternateKey(c => c.Name);

            modelBuilder.Entity<Category>().HasData(
            new Category()
            {
                Id = 1,
                Name = "Groceries"
            },

            new Category()
            {
                Id = 2,
                Name = "Transportation"
            },

            new Category()
            {
                Id = 3,
                Name = "Eating Out"
            }
            );

            
        }
    }
}