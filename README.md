# Angular and ASP .NET Core Topics
* Project Setup
* Basics
* Bindings
* Bootstrap
* Routing
* Using Service
* Interaction Between Components
* Components
* Template Driven Forms
* Reactive Forms
* Inbuilt validation
* Custom Validation
* Pipes
* Save Data to Local Storage
* Observable
* Photo Gallery
* Lazy Loading
* Authentication
* Uploading Image
* Deployment on Firebase


# What is Angular ?
A Javascript Framework to develop SPA (Single Page Application)

# Angular History and Versioning
- Angular JS 1.x - 2010
- Angular 2+ - 2016
- Angular 3 - Skipped duo to miss alignment router package version which already distributed version 3.3
- Angular 4 
- Angular 5 - 8
- Angular 9 - 2020 Feb

**New release every 6 months**

* * *

# Getting Start
**Step 1**
- Install NPM - [Download](https://nodejs.org/en/)

**Step 2**
```command
npm install -g @angular/cli@latest
ng new my-first-app
cd my-first-app
ng serve
```

* * *
# What is new in Angular 9
- Max changes in compiler not in old angular version codes
- Smaller Size
- High Performance
- Better Development Experience
- Ivy Compiler - new code name of angular compiler that convert Angular code to Browser understandable code
- Before Ivy was VE (View Engine). Ivy is option in Angular 8. 

**To able in Angular 8**
```json
{
    "angularCompilerOptions" : {
        "enableIvy" : true
    }
}
```

**From Angular 9 it is defunct, To disable it in Angular 9**
```json
{
    "angularCompilerOptions" : {
        "enableIvy" : false
    }
}
```
* * *

# Ivy
* Smaller Size bundle. Angular 9 Compiler rewrite after Angular 4.
* Unused code removal and generate less code for each components
    * Small App - 30% Size Improvement
    * Medium Apps - 2% Size improvement
    * Large Aps - 25% to 40% Size improvement 
