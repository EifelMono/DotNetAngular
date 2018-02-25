# DotNetAngular

DotNetCore with Angular in one app as self-contained deploy

## Dotnet Angular template

https://www.nuget.org/packages/Microsoft.DotNet.Web.Spa.ProjectTemplates/

### more...
https://www.hanselman.com/blog/ASPNETSinglePageApplicationsAngularReleaseCandidate.aspx


## Angular Dashboard template

https://github.com/start-angular/SB-Admin-BS4-Angular-5




## CakeBuild to compile and deploy

https://cakebuild.net/

### build
./build.sh

## CakeBuild to add stuff

### Add a new layout

./build.sh --target=ng --create=layout --name=abc

adds a new page to src/app/layout

copies file from src/app/layout/abc-page/template-page => src/app/layout/abc-page

### todo by hand

add to the modules
src/app/layout/layout-routing.modules.ts
{ path: 'abc-page', loadChildren: './abc-page/abc-page.module#AbcPageModule' }

and in the navigation
src/app/layout/components/sidebar/sidebar.component.html