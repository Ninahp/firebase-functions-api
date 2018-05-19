const app = "./app.js";
const config = "./config.js";

//app.set("env","production");

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: ", err);
});

var server = app.listen(config.port, config.host, () => {
    console.log("Quotes API running at " + config.host + ":" + config.host + "...");
});