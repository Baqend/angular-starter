!["Logo"](https://cdn.rawgit.com/Baqend/angular-starter/master/src/assets/Angular+Baqend.svg)


# Angular and Baqend Starter
With this Angular and Baqend starter kit you can build **blazingly fast single page applications** in no time. Setup your project by following the simple steps below.

The starter is based on the [official Angular CLI](https://github.com/angular/angular-cli) and uses:

* [**SASS**](http://sass-lang.com) as a CSS precompiler with cool features and syntax
* [**TypeScript**](https://www.typescriptlang.org) for typed JavaScript, ES6 features and because it is recommended for Angular
* [**Bootstrap**](http://getbootstrap.com) for easy modern styling
* [**Baqend**](https://www.baqend.com) as a fully managed backend service for backend-less development

## How to use the template

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine
2. Clone the repository with `git clone https://github.com/Baqend/angular-starter.git`
3. Install the project with `npm install`
4. Start the server with `npm start`
5. Open the url in your browser [http://localhost:4200](http://localhost:4200), you should see a small sample application with signup capability
6. You can build a [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) production version with `npm run build -- --prod`

Your app is currently connected to a Baqend test instance called 'app-starter', which provides common backend features like data and file storage, user authentication (used in the example), queries and push notifications among others.

To develop your own application 

1. Launch a free Baqend instance at [baqend.com](http://dashboard.baqend.com/register)
2. Change the app name in your projects `src/app/db.ts` from `app-starter` to your app name
3. Your Angular app will automatically connect to your app instance
4. To start accessing data or backend features, simply import the `db`-object with `import {db} from 'baqend';` 
and see our [Guide](https://www.baqend.com/guide) and [API Docs](https://www.baqend.com/js-sdk/latest/baqend.html) for details

For more information: on [Angular](https://angular.io/docs/ts/latest/), the 
[Angular CLI](https://github.com/angular/angular-cli) or [Baqend](http://www.baqend.com).

## How the Baqend integration into Angular works

Before the Baqend SDK can be used, a connection to the Baqend instance must be established. There are two options 
to wait for the initialization. 

1. You can use the `DBReady` resolver to delay the route component rendering, or `DBLoggedIn` to prevent navigation to 
protected routes that are only accessible by logged in users. For a live example look into the `src/app/app-routing.modules.ts`.

2. Or you can manually wait on `db.ready()` within your components and use the SDK afterwards.
```js 
import { Component, OnInit } from '@angular/core';
import { db } from 'baqend';

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
([click here for details](https://medium.baqend.com/bringing-web-performance-to-the-next-level-an-overview-of-baqend-be3521bc2faf)). 
The [JavaScript API](https://www.baqend.com/js-sdk/latest/baqend.html) gives you access to common backend features 
while the [dashboard](https://www.baqend.com/guide/topics/dashboard/) lets you define data models and access rules as 
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

# License

[MIT](https://github.com/Baqend/angular-starter/blob/master/LICENSE) 
