1.What is NPM?<br/>
ans:
npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
<hr/>
2.What are the modules in Node.js?<br/>
ans:
In Node. js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders.
Core Modules.
local Modules.
Third-party Modules.
<hr/>
3.What is the purpose of the module.exports?<br/>
ans:
Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
The export statement is used in Javascript modules to export functions, objects, or primitive values from one module so that they can be used in other programs (using the 'import' statement). A module encapsulates related code into a single unit of code. All functions related to a single module are contained in a file.
<hr/>
4.Difference between default export and named export<br/>
ans:
Exports without a default tag are Named exports. Exports with the default tag are Default exports. Using one over the other can have effects on your code readability, file structure, and component organization. Named and Default exports are not React-centric ideas.
<hr/>
5.How do you import any module in Node.js<br/>
ans:
To import our own Node JS module. var arthmetic = require("arthmetic");
To import existing Node JS Module Import Node JS “express” module; var arthmetic = require("express"); Import Node JS “mongoose” module; var mongoose = require("mongoose");
<hr/>

6.What are the different types of HTTP requests?<br/>
ans:
The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE. These methods correspond to create, read, update, and delete (or CRUD) operations, respectively.
Also, the HTTP methods can be classified by the idempotent and safe properties.

The safe methods are the HTTP methods that do not modify resources. For instance, using GET or HEAD on a resource URL, should NEVER change the resource.

An idempotent HTTP method is an HTTP method that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same.
<hr/>
7.Explain the concept of middleware in Node.js.<br/>
ans:
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
<hr/>
8.Explain CORS<br/>
ans:
CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
What is CORS used for?
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
<hr/>
9.What is Express. how it helps you to create a backend application<br/>
ans:
It provides many features for developers to build a web application. It provides routing components and supports middleware to make web app development easier. It allows programmers to use HTML as a template language and provides various components to build a web app by extending HTML syntax.
Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
<hr/>
10.Explain min 5 status codes gets used in Backend development<br/>
ans:
An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled. Status codes specs are set by the W3C. Status codes are embedded in the HTTP header of a page to tell the browser the result of its request.
HTTP status codes are like short notes from a server that get tacked onto a web page. They’re not actually part of the site’s content. Instead, they’re messages from the server letting you know how things went when it received the request to view a certain page.
<hr/>
11.What is node.js ?<br/>
ans:
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
<hr/>
12.Difference between HTTP and HTTPS<br/>
ans:
HTTPS is HTTP with encryption and verification. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP.
The main difference between these two terms are that HTTPS makes use of TLS (SSL) encryption for even normal HTTP requests and responses and so HTTPS is more secure than HTTP.
<hr/>
13.What are JWT tokens?<br/>
ans:
JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.