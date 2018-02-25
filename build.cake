// https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish?tabs=netcore2x
// https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
#addin nuget:?package=Cake.VersionReader
#addin nuget:?package=Cake.FileHelpers
#addin nuget:?package=Newtonsoft.Json

var target = Argument<string>("target", "Default");

#region Build
// Osx: osx-x64
// Windows: win-x64
// Linux: ubuntu-x64, rhel-x64, opensuse-x64
var runtime = Argument<string>("runtime", "");
var defaultProjectName= System.IO.Path.GetFileNameWithoutExtension(GetFiles("./*.sln").FirstOrDefault().ToString());
var projectName= Argument<string>("projectname", defaultProjectName); 
var sln= $"./{projectName}.sln";
var dist= "./dist";

Task("BuildIt")
    .Does(() => {
        if (string.IsNullOrEmpty(runtime))
        {
            System.OperatingSystem os = System.Environment.OSVersion;
            System.PlatformID pid = os.Platform;
            Information($"Build pid={pid}");
            // THIS DOES NOT WORK Correct
            // ON UNIX I NEED MacOSX for Test!
            switch(pid)
            {
                case System.PlatformID.Unix:
                case System.PlatformID.MacOSX:
                    runtime = "osx-x64";
                    break;
                //case System.PlatformID.Unix:
                //    runtime = "ubuntu-x64";
                //    break;
                default:
                    runtime = "win-x64";
                    break;
            }
        }
        Information($"Build runtime={runtime}");
        CleanDirectory(dist);
        DotNetCoreRestore(sln);
        DotNetCorePublish(sln, new DotNetCorePublishSettings{
            Configuration = "Release",
            OutputDirectory = dist,
            ArgumentCustomization= (arg)=> arg.Append("--self-contained")   
                                                .Append($"--runtime {runtime}")
        });
    });

Task("ZipIt")
    .Does(() => {
        foreach(var zipfile in GetFiles("./*.zip"))
            DeleteFile(zipfile);
        var file = MakeAbsolute(Directory(dist))+ $"/{projectName}.dll";
        var version= GetVersionNumber(file);
        Information($"{projectName}.{version}.zip");
        Zip(dist, $"{projectName}.{version}.zip");
    });    

Task("Build")
    .IsDependentOn("BuildIt")
    .Does(() => {
    });    

Task("Zip")
    .IsDependentOn("Build")
    .IsDependentOn("ZipIt")
    .Does(() => {
    });

Task("DefaultBuild")
    .IsDependentOn("Build")
    .IsDependentOn("Zip")
    .Does(() => {
    });

#endregion

#region Ng

var create = Argument<string>("create", "layout");
var name = Argument<string>("name", "abc");

var layoutDir= "./ClientApp/src/app/layout";
var templatePageDir= System.IO.Path.Combine(layoutDir, "template-page");
var template= "template";
var Template= "Template";

string ReplaceTemplate(string text, string name)
{
    var Name = System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase(name);
    return text.Replace("template", name)
               .Replace("Template", Name)
               .Replace($"{name}Url:", "templateUrl:");
}

void NgCreateLayout(string name)
{
    if (string.IsNullOrEmpty(name)) 
        throw new Exception("ng create layout \"name\" is empty");
    name = name.ToLower();
    var createPageDir= System.IO.Path.Combine(layoutDir, $"{name}-page");
    if (!System.IO.Directory.Exists(createPageDir))
        System.IO.Directory.CreateDirectory(createPageDir);
    foreach(var file in System.IO.Directory.GetFiles(templatePageDir, "*.*"))
    {
        var templateFilename= System.IO.Path.GetFileName(file);
        var createFilename= System.IO.Path.Combine(createPageDir, ReplaceTemplate(templateFilename, name));
        var text= System.IO.File.ReadAllText(file);
        System.IO.File.WriteAllText(createFilename, ReplaceTemplate(text, name));
    }
}

Task("ng")
    .Does(()=> {
        switch(create)
        {
            case "layout":
                NgCreateLayout(name);
                break;
            default:
                throw new Exception("ng create=\"{layout}\" not found");
        }
    });

Task("DefaultNg")
    .IsDependentOn("Ng")
    .Does(()=> {
    });


#endregion

Task("Default")
    .IsDependentOn("DefaultBuild")
    // .IsDependentOn("DefaultNg")
    .Does(() => {
    });


RunTarget(target);