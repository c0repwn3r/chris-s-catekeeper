const events = require("events");

/*
EVENT ID's
HELP
LOG
SKIP
hello
pskipadd
pskipremove
pskipset
prankset
pdiscordset
*/

var c = new events.EventEmitter();

function skipCommandParser(tokens, msg) {
    switch (tokens[3]) {
        case "add":
            c.emit("pskipadd", tokens, msg);
            break;
        case "remove":
            c.emit("pskipremove", tokens, msg);
            break;
        case "set":
            c.emit("pskipset", tokens, msg);
            break;
    }
}

function playerCommandParser(tokens, msg){
    switch (tokens[2]) {
        case "skip":
            skipCommandParser(tokens, msg);
            break;
        case "discord":
            c.emit("pdiscordset", tokens, msg);
            break;
        case "rank":
            c.emit("prankset", tokens, msg);
            break;
    }
}

function parseCommand(msg) {
    var tokens = msg.split(" ");
    switch (tokens[0]) {
        case ".help":
            c.emit("help", tokens, msg);
            break;
        case ".log":
            c.emit("log", tokens, msg);
            break;
        case ".skip":
            c.emit("skip", tokens, msg);
            break;
        case ".hello":
            c.emit("hello", tokens, msg);
            break;
        case ".player":
            playerCommandParser(tokens, msg);
            break;
    }
}

exports.c = c;
exports.parseCommand = parseCommand;