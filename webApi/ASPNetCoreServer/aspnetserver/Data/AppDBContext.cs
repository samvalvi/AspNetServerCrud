using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            dbContextOptionsBuilder.UseSqlServer(@"Server=DESKTOP-8AC42VI\SQLEXPRESS; Database=ApiServer; Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.HasKey(e => e.PostId);

                entity.Property(e => e.Title)
                .IsRequired(true)
                .HasMaxLength(300);

                entity.Property(e => e.Content)
                .IsRequired(true)
                .HasMaxLength(10000);
            });
        }
    }
}
