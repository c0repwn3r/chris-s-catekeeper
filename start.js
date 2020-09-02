const Discord = require("discord.js");
const embeds = require("./embeds.js");
const base64 = require("base-64");
const client = new Discord.Client();
var fs = require('fs');

function read(path){
	try {
		var contents = fs.readFileSync(path);
		return contents;
	} catch (e) {
		return null;
	}
}

function write(path, text){
	fs.writeFile("./" + path, text, (err) => {
		if (err) return console.log(err);
	});
}

function parseData(text) {
	return JSON.parse(base64.decode(text));
}

function writeField(path, field, value){
	try {
		var data = base64.decode(JSON.parse(read(path)).data);
	} catch (e) {
		return null;
	}
	console.log(data);
	var pattern = '"' + field + '":"[a-zA-Z\\[\\]#0-9]+"'
	var regex = new RegExp(pattern, "g");
	var substr = data.match(regex);
	var index = data.indexOf(substr[0]);
	data = data.replace(substr+',', '');
	if(field == "giveaways"){
		data = data.slice(0, index) + '"' + field + '":[' + value + '],' + data.slice(index);
	} else {
		data = data.slice(0, index) + '"' + field + '":"' + value + '",' + data.slice(index);
	}
	console.log(data);
	var encoded = base64.encode(data);
	write(path, '{\n\t"data":"' + encoded + '"\n}');
	return 0;
}

client.on("message", msg => {
	var tokens = msg.content.split(" ");
    if (msg.content === ".hello") {
        msg.reply("Hello! I'm Chris's Gatekeeper. Type .help for help!");
    }
    if (msg.content === ".help") {
		msg.channel.send(embeds.helpEmbed);
	}
	if (tokens[0] === ".reset") {
		try {
			var file = require("./database/" + tokens[1] + ".json");
			Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
			var object = parseData(file.data);
			msg.reply("WARNING! You are about to completley wipe **" + tokens[1] + "**'s data and rebuild the profile! Type .confirmdel " + tokens[1] + " to continue! WARNING!");
		} catch (e) {
			msg.reply("Cannot wipe user that does not exist!");
			console.log(e);
		}
	}
	if (tokens[0] === ".confirmdel") {
		try {
			var file = require("./database/" + tokens[1] + ".json");
			Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
			var object = parseData(file.data);
			msg.reply("Please wait, wiping data");
			write("./database/" + tokens[1] + ".json", '');
			msg.reply("Wipe complete");
			msg.reply("Deleting file");
			msg.reply("File deleted");
			msg.reply("Rebuilding with default data");
			write("./database/" + tokens[1] + ".json", '{\n\t"data": \"' + base64.encode('{"version":3,"rank":"guest","usedskips":"0","skipsleft":"3","discord":"unset","giveaways":["none"],"developer":0,"moderator":0,"owner":0,"vip":0}') + "\"" + "\n}");
			msg.reply("Reset complete.")
		} catch (e) {
			msg.reply("Cannot wipe user that does not exist!");
			console.log(e);
		}
	}
	if (tokens[0] === ".dgc"){
		if (tokens[1] == null || tokens[2] == null || tokens[3] == null || tokens[4] == null) {
			msg.reply("Usage: .dgc <username> <skipsused> <skipsleft> <rank> <isdev> <ismod> <isowner>");
			return;
		}
	}
	if (tokens[0] === ".log"){
		try {
			var file = require("./database/" + tokens[1].toLowerCase() + ".json");
			Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
			var object = parseData(file.data);
			var rank = "";
			var color = "";
			if(object.rank === "co"){
				rank = "Co-Owner";
				color = "#FFFF55";
			} else if (object.rank == "res"){
				rank = "Resident";
				color = "#FFAA00";
			} else if (object.rank == "guest"){
				rank = "Guest";
				color = "#AAAAAA";
			} else if (object.rank == "owner"){
				rank = "Owner";
				color = "#AA0000";
			}
			msg.channel.send(embeds.playerInfo(tokens[1].toLowerCase(), rank, object.usedskips, object.skipsleft, object.discord, object.giveaways, color));
		} catch (e) {
			console.log(e);
			write("./database/" + tokens[1].toLowerCase() + ".json", '{\n\t"data": \"' + base64.encode('{"version":3,"rank":"guest","usedskips":"0","skipsleft":"3","discord":"unset","giveaways":["none"],"developer":0,"moderator":0,"owner":0,"vip":0}') + "\"" + "\n}");
		}
	}
	if (tokens[0] === ".write"){
		if (writeField("./database/" + tokens[1].toLowerCase() + ".json", tokens[2], tokens[3]) == null) msg.reply("That user doesn't exist");
	}
});

client.on("ready", () => {
    console.log("Logged in");
});

client.login("NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg");
