using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal static class PostRespository
    {
        internal async static Task<List<Post>> GetPostsAsync()
        {
            using var db = new AppDBContext();
            return await db.Posts.ToListAsync();
        }

        internal async static Task<Post> GetPostByIdAsync(int postId)
        {
            using var db = new AppDBContext();
            return await db.Posts.FirstOrDefaultAsync(post => post.PostId == postId);
        }

        internal static async Task<bool> InsertPostAsync (Post post)
        {
            using var db = new AppDBContext();
            try
            {
                await db.Posts.AddAsync(post);
                return await db.SaveChangesAsync() >= 1;
            }catch (Exception)
            {
                return false;
            }
            
        }

        internal static async Task<bool> UpdatePostAsync(Post post)
        {
            using var db = new AppDBContext();
            try
            {
                db.Posts.Update(post);
                return await db.SaveChangesAsync() >= 1;
            }catch (Exception)
            {
                return false;
            }
        }

        internal static async Task<bool> DeletePostAsync(int postId)
        {
            var db = new AppDBContext();
            try
            {
                var postToDelete = await GetPostByIdAsync(postId);
                db.Posts.Remove(postToDelete);
                return await db.SaveChangesAsync() >= 1;

            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
