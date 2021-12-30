using aspnetserver.Data;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen( swaggerGenOptions =>
    swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "ASP.NET Core CRUD Tutorial", Version = "v1"})
    );

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(swaggerUIOptions =>
    {
        swaggerUIOptions.DocumentTitle = "ASP.NET CORE Tutorial";
        swaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API serving a very simple Post model.");
        swaggerUIOptions.RoutePrefix = string.Empty;
    });
}

app.UseHttpsRedirection();
//Route
app.MapGet("/get-posts", async () => await PostRespository.GetPostsAsync())
    .WithTags("Post Endpoints");

app.MapGet("/get-post-by-id/{postId}", async (int postId) =>

    {
        var postToReturn = await PostRespository.GetPostByIdAsync(postId);

        if (postToReturn != null)
        {
            return Results.Ok(postToReturn);
        }
        else
        {
            return Results.BadRequest();
        }
    }

).WithTags("Post Endpoints.");

app.MapPost("/create-post", async (Post postCreated) =>
    {
        bool createSuccesful = await PostRespository.InsertPostAsync(postCreated);

        if(createSuccesful)
        {
            return Results.Ok("Post created.");
        }
        else
        {
            return Results.BadRequest();
        }
    }
).WithTags("Post Endpoints.");

app.MapPost("/update-post", async (Post postToUpdate) =>
    {
        bool updateSuccesful = await PostRespository.UpdatePostAsync(postToUpdate);
        if(updateSuccesful)
        {
            return Results.Ok("Post updated.");
        }
        else
        {
            return Results.BadRequest();
        }
    }
).WithTags("Post Endpoints.");

app.MapDelete("/delete-post/{postId}", async (int postId) =>
    {
        bool deleteSuccesful = await PostRespository.DeletePostAsync(postId);
        if(deleteSuccesful)
        {
            return Results.Ok("Post deleted.");
        }
        else
        {
            return Results.BadRequest();
        }
    }
).WithTags("Post Endpoints.");

app.Run();