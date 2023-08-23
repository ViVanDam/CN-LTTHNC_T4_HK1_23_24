// app.js
// const express = require("express");
// const routeFunction = require("./routeFunction.js");
// express()
//   .use("/api/v1/", routeFunction({ greeting: "Hello world" }))
//   .listen(3000);

// app.js
const express = require("express");
const greetMiddleware = require("./complicatedRouteFunction.js");
class GreetingService {
  constructor(greeting = "Hello hello") {
    this.greeting = greeting;
  }
  createGreeting(name) {
    return `${this.greeting}, ${name}!`;
  }
}
express()
  .use(
    "/service1",
    greetMiddleware({
      service: new GreetingService("hello hi"),
    })
  )
  .use(
    "/service2",
    greetMiddleware({
      service: new GreetingService("Hi"),
    })
  )
  .use(
    "/service3",
    greetMiddleware({
      service: new GreetingService(),
    })
  )
  .listen(3000);
