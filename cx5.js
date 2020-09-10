const events = require("events");
const fs = require("fs");
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
        case "skips":
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
    var tokens = msg.content.split(" ");
    console.log(msg.author.id);
	if(msg.member){
		var userRole = msg.member.roles.cache.get('721818071215374396');
	}
	if(!userRole) userRole = msg.member.roles.cache.get('721818097031315566');
	if(!userRole) return;
	console.log(userRole.name);
	if(userRole.id === '721818071215374396' || userRole.id === '721818097031315566') {
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
				try {
					fs.readFileSync("./database/" + tokens[1] + ".json");
					playerCommandParser(tokens, msg);
				} catch (e) {
					msg.reply("Provide a valid player.");
				}
				break;
			case ".reset":
				c.emit("reset", tokens, msg);
				break;
			case ".confirmdel":
				c.emit("del", tokens, msg);
				break;
			case ".write":
				c.emit("write", tokens, msg);
				break;
			case ".dgar":
				c.emit("dgar", tokens, msg);
				break;
		}
	}
}
exports.c = c;
exports.parseCommand = parseCommand;
