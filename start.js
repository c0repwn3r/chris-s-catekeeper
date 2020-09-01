const Discord = require("discord.js");
const embeds = require("./embeds.js");
const base64 = require("base-64");
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
	return JSON.parse(base64.decode(text));
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
		try {
			var object = parseData(require("./database/" + tokens[1] + ".json").data);
			var rank = "";
			if(object.rank === "co"){
				rank = "Co-Owner";
			} else if (object.rank == "res"){
				rank = "Resident";
			} else if (object.rank == "guest"){
				rank = "Guest";
			}
			msg.channel.send(embeds.playerInfo(tokens[1], rank, object.usedskips, object.skipsleft, object.discord, object.giveaways));
		} catch (e) {
			write("./database/" + tokens[1] + ".json", '{\n\t"data": \"' + base64.encode('{"version":1,"rank":"guest","usedskips":"0","skipsleft":"3","discord":"unset","giveaways":["none"]}') + "\"" + "\n}");
		}
	}
});

client.on("ready", () => {
    console.log("Logged in");
});

client.login("NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg");
