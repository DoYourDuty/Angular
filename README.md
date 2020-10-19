# Angular and ASP .NET Core Topics
* Project Setup, Basics, Bindings, Bootstrap, Routing, Using Service, Interaction Between Components, Components, Template Driven Forms, Reactive Forms, Inbuilt validation, Custom Validation, Pipes, Save Data to Local Storage, Observable, Photo Gallery, Lazy Loading, Authentication, Uploading Image, Deployment on Firebase

**What is Angular ?** <br />
A Javascript Framework to develop SPA (Single Page Application)

**Angular History and Versioning**
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

**From Angular 9 it is default, To disable it in Angular 9**
```json
{
    "angularCompilerOptions" : {
        "enableIvy" : false
    }
}
```
* * *

**Ivy Compiler new features**
* Smaller Size bundle. Angular 9 Compiler rewrite after Angular 4.
* Unused code removal and generate less code for each components
* Total Bundle Size (Version 9 Ivy vs Version 8) improvements after compile
    * Small App - 30% Size Improvement
    * Medium Apps - 2% Size improvement
    * Large Aps - 25% to 40% Size improvement 
* Faster Testing - Test recompile manually
* Improved Build Time - 
    * Angular 8 JIT (Just in Time) for ng build or ng serve and AoT (Ahead of Time) for ng build --prod (It may occurred lot error while build for production)
    * Angular 9 AoT (Ahead of Time) for both ng build or ng serve and ng build --prod 
* Improve Build Error - Stronger Type Safety while build Error will be more detailed with line and file location.
* Better Debugging - More Tools available to debug application. 
* Improved Styling & Binding.
* Faster Localization - Globalization multiple language support core features of Angular and angular 9 has made some changes. its making 10 times faster.

**Ng Update**
* ng update - will give more detailed information while update. For each migration you will know more about migration.

**YouTube Player and Google Maps** <br />
**Improved Language Service Extension** <br />
**Typescript 3.7 Support** <br />


# Breaking Changes in Angular 9 (When migrating from old version)
- Angular 9 - Ivy default compiler.
- CLI apps compile in AOT mode by default.
- Typescript 3.4 and 3.5 no longer supported. only Typescript 3.7 onwards.
- **tslib** is now peer dependency rather than a direct dependency. we need to it manually if needed. using
```command
yarn add tslib
```
**(or)**
```command
npm install tslib --save
```
