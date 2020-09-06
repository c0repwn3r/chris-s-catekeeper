const events = require("events");
var c = new events.EventEmitter();
function b(a, b) {
    switch (a[3]) {
        case "add":
            c.emit("pskipadd", a, b);
            break;
        case "remove":
            c.emit("pskipremove", a, b);
            break;
        case "set":
            c.emit("pskipset", a, b);
            break;
    }
}
function c(a, b){
    switch (a[2]) {
        case "skips":
            b(a, b);
            break;
        case "discord":
            c.emit("pdiscordset", a, b);
            break;
        case "rank":
            c.emit("prankset", a, b);
            break;
    }
}
function a(b) {
    var a = b.content.split(" ");
    console.log(b.author.id);
    switch (a[0]) {
        case ".help":
            c.emit("help", a, b);
            break;
        case ".log":
            c.emit("log", a, b);
            break;
        case ".skip":
            c.emit("skip", a, b);
            break;
        case ".hello":
            c.emit("hello", a, b);
            break;
        case ".player":
            c(a, b);
            break;
        case ".reset":
            c.emit("reset", a, b);
            break;
        case ".confirmdel":
            c.emit("del", a, b);
            break;
        case ".write":
            c.emit("write", a, b);
            break;
        case ".dgar":
            c.emit("dgar", a, b);
            break;
    }
}
exports.c = c;
exports.parseCommand = a;