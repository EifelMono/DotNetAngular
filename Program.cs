using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace angular
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        private static IHostingEnvironment hostingEnvironment = null;
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
                WebHost.CreateDefaultBuilder(args)
                       .ConfigureAppConfiguration((hostingContext, config) =>
                        {
                            hostingEnvironment = hostingContext.HostingEnvironment;
                        })
                        //.UseContentRoot(hostingEnvironment.IsProduction()
                            //? Path.GetDirectoryName(Environment.GetCommandLineArgs()[0])
                            //: Directory.GetCurrentDirectory())
                        .UseStartup<Startup>()
                        .UseUrls("http://*:60003");
    }
}
