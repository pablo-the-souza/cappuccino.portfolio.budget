using API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            // services.AddDbContext<DataContext>(x =>
            // x.UseSqlite(_config.GetConnectionString("DefaultConnection")));

            services.AddDbContext<DataContext>(options =>
            {
                // options.UseSqlServer(@"Server=localhost;Database=cappuccinoBudget_db;User ID=sa;Password=Blah123456;");
               options.UseSqlServer(
                    @"Server=tcp:cappuccinosqlserver.database.windows.net,1433;Initial Catalog=cappuccino_test_db;Persist Security Info=False;User ID=paguirre82;Password=Ingrid1pqp;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }); 

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                    {
                        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://cappuccinobudget.z8.web.core.windows.net");
                        // policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200");
                    });
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
