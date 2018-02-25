// https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish?tabs=netcore2x
// https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
#addin nuget:?package=Cake.VersionReader
#addin nuget:?package=Cake.FileHelpers
#addin nuget:?package=Newtonsoft.Json

var target = Argument<string>("target", "Default");

// Osx: osx-x64
// Windows: win-x64
// Linux: ubuntu-x64, rhel-x64, opensuse-x64 
var runtime = Argument<string>("runtime", "osx-x64");

var projectName= Argument<string>("projectname", System.IO.Path.GetFileNameWithoutExtension(GetFiles("./*.sln").FirstOrDefault().ToString())); 

var sln= $"./{projectName}.sln";
var dist= "./dist";

Task("BuildOnly")
    .Does(() => {
        CleanDirectory(dist);

        DotNetCoreRestore(sln);

        DotNetCorePublish(sln, new DotNetCorePublishSettings{
            Configuration = "Release",
            OutputDirectory = dist,
            ArgumentCustomization= (arg)=> arg.Append("--self-contained")   
                                                .Append($"--runtime {runtime}")
        });
    });

Task("ZipOnly")
    .Does(() => {
        foreach(var zipfile in GetFiles("./*.zip"))
            DeleteFile(zipfile);
        var file = MakeAbsolute(Directory(dist))+ $"/{projectName}.dll";
        var version= GetVersionNumber(file);
        Information($"{projectName}.{version}.zip");
        Zip(dist, $"{projectName}.{version}.zip");
    });    

Task("Build")
    .IsDependentOn("BuildOnly")
    .Does(() => {
    });    

Task("Zip")
    .IsDependentOn("Build")
    .IsDependentOn("ZipOnly")
    .Does(() => {
    });


Task("Default")
    .IsDependentOn("Build")
    .IsDependentOn("Zip")
    .Does(() => {
    });

RunTarget(target);