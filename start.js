const Discord = require("discord.js");
const client = new Discord.Client();

function read(fileVar, path){
	fileVar = require(path);
}

function write(fileVar, path, text){
	fileVar.writeFile(path, text, function (err) {
		if (err) return console.log(err);
	});
}

client.on("message", msg => {
    if (msg.content === ".hello") {
        msg.reply("Hello! I'm Chris's Gatekeeper. Type .help for help!");
    }
    if (msg.content === ".help") {
        msg.reply("Not coded yet lol");
    }
});

client.on("ready", () => {
    console.log("Logged in");
});

client.login("NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg");
