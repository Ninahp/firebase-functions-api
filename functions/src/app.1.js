// const express = require("express");
// const app = express();


// app.get("/timestamp", (request, response) => {

// });

// app.use((req, res, next) => {
//     //Set custom headers, middleware
//     res.setHeader("X-Powered-By", "Bespoke Fusion");

//     //Cross-site Request Forgery
//     //res.locals._csrf = req.csrfToken();
//     //console.log("_csrf: ",res.locals._csrf);
//     //res.cookie("XSRF-TOKEN",req.csrfToken());

//     next();
// });

// // Error handling
// app.use((err, req, res, next) => {
//     console.error("Error: " + err.stack);
//     if (err.code === "EBADCSRFTOKEN") {
//         // handle CSRF token errors here
//         res.status(403);
//         res.json({
//             success: false,
//             message: "session has expired or form tampered with!"
//         });
//     } else {
//         res.status(500).json({
//             success: false,
//             message: err
//         });
//     }
// });

// // Set up routes
// //app.use(require("./routes.js"));

// // Catch the favicon.ico request and send a 204 No Content status
// app.use((req, res, next) => {
//     if (req.originalUrl === '/favicon.ico') {
//         res.status(204).json({
//             nope: true
//         });
//     } else () => {
//         next();
//     }
// });

// // Handle unmapped routes
// app.use((req, res, next) => {
//     res.status(404).json("Sorry, this is an invalid URL");
// });

// module.exports = app;