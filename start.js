const Discord = require("discord.js");
const embeds = require("./embeds.js");
const base64 = require("base-64");
const CoreCuber = require("./database/CoreCuber.json");
const client = new Discord.Client();
var fs = require('fs');

function read(path){
	var contents = fs.readFileSync(path);
	return contents;
}

function write(path, text){
	fs.writeFile("./" + path, text, (err) => {
		if (err) return console.log(err);
	});
}

function parseData(text) {
	return JSON.parse(new Buffer(text, 'base64'));
}

client.on("message", msg => {
	var tokens = msg.content.split(" ");
    if (msg.content === ".hello") {
        msg.reply("Hello! I'm Chris's Gatekeeper. Type .help for help!");
    }
    if (msg.content === ".help") {
		msg.channel.send(embeds.helpEmbed);
	}
	if (tokens[0] === ".log"){
		var object = parseData(require("./database/" + tokens[1] + ".json").data);
		var rank = "";
		if(object.rank === "co"){
			rank = "Co-Owner";
		} else if (object.rank == "res"){
			rank = "Resident";
		} else if (object.rank == "guest"){
			rank = "Guest";
		}
		msg.channel.send(embeds.playerInfo("CoreCuber", rank, object.usedskips, object.skipsleft, object.discord, object.giveaways));
		msg.guild.member(msg.author).roles.add("721818071215374396");
	}
});

client.on("ready", () => {
    console.log("Logged in");
});

client.login("NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg");
