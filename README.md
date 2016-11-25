!["Logo"](https://cdn.rawgit.com/Baqend/angular2-starter/master/src/assets/Angular+Baqend.svg)


#Angular2 and Baqend Starter
With this Angular2 and Baqend starter kit you can build **blazingly fast single page applications** in no time. Setup your project by following the simple steps below.

The starter is based on the [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) and uses:

* [**Webpack**](http://webpack.github.io) as a great module bundler
* [**SASS**](http://sass-lang.com) as a CSS precompiler with cool features and syntax
* [**TypeScript**](https://www.typescriptlang.org) for typed JavaScript, ES6 features and because it is recommended for Angular2
* [**Bootstrap**](http://getbootstrap.com) for easy modern styling
* [**Baqend**](http://www.baqend.com) as a fully managed backend service for backend-less development

## How to use the template

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine
2. Clone the repository with `git clone https://github.com/Baqend/angular2-starter.git`
3. Install the project with `npm install`
4. Start the server with `npm start` (or `npm run server:dev:hmr` for *hot module replacement* - only changed files are recompiled)
5. Open the url in your browser [http://localhost:3000](http://localhost:3000), you should see a small sample application with signup capability

Your app is currently connected to a Baqend test instance called 'app-starter', which provides common backend features like data and file storage, user authentication (used in the example), queries and push notifications among others.

To develop your own application 

1. Launch a free Baqend instance at [baqend.com](http://dashboard.baqend.com/register)
2. Change the app name in your projects `src/app/db.service.ts` from `app-starter` to your app name
3. Your Angular2 app will automatically connect to your app instance
4. To start accessing data or backend features, simply import the `db`-object with `import {db} from "baqend";` 
and see our [Guide](http://www.baqend.com/guide/#accessing-data) and [API Docs](http://www.baqend.com/js-sdk/latest/baqend.html) for details

For more information: on [Angular2](https://angular.io/docs/ts/latest/), the structure of this 
[project](https://github.com/AngularClass/angular2-webpack-starter) or [Baqend](http://www.baqend.com).

## How the Baqend integration into Angular2 works

Before the Baqend SDK can be used, a connection to the Baqend instance must be established. There are two options 
to wait for the initialization. 

1. You can use the `DBReady` resolver to delay the route component rendering, or `DBLoggedIn` to prevent navigation to 
protected routes that are only accessible by logged in users. For a live example look into the `src/app/app.routes.ts`.

2. Or you can manually wait on `db.ready()` within your components and use the SDK afterwards.
```js 
import {Component, OnInit} from '@angular/core';
import {db} from "baqend";

@Component({
  selector: 'myRoute'
})
export class MyRoute implement OnInit {
  
  ngOnInit(private router:Router) {
    db.ready().then(() => {
      db.MyClass.find()...
    });
  }
```

## How Baqend fits your Backend requirements

Baqend is a fully managed Backend-as-a-Service platform with a strong focus on performance and scalability 
([click here for details](http://blog.baqend.com/post/139788321880/bringing-web-performance-to-the-next-level-an)). 
The [JavaScript API](http://www.baqend.com/js-sdk/latest/baqend.html) gives you access to common backend features 
while the [dashboard](http://www.baqend.com/guide/#baqend-dashboard) lets you define data models and access rules as 
well as business logic to execute on the server side.

Baqend's feature set includes: 

* Automated Browser and CDN Caching
* Scalable Data Storage
* Realtime Streaming Queries
* Powerful Search and Query Language
* Push Notifications
* User Authentication and OAuth
* File Storage and Hosting
* Access Control on Object and Schema Level

#License

[MIT](https://github.com/Baqend/angular2-starter/blob/master/LICENSE) 
