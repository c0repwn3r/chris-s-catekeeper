const Discord = require("discord.js");
const embeds = require("./embeds.js");
const base64 = require("base-64");
const client = new Discord.Client();
const command = require("./cx5.min.js");
const c = command.c;
var fs = require('fs');

const core = "476905356723748867";
const ghostly = "393543627227267073";

function read(path) {
	try {
		var contents = fs.readFileSync(path);
		return contents;
	} catch (e) {
		return null;
	}
}



function write(path, text) {
	fs.writeFile("./" + path, text, (err) => {
		if (err) return console.log(err);
	});
}

function parseData(text) {
	return JSON.parse(base64.decode(text));
}



function writeField(path, field, value) {
	try {
		var data = base64.decode(JSON.parse(read(path)).data);
	} catch (e) {
		return null;
	}
	console.log(data);
	var pattern = '"' + field + '":"?[a-zA-Z\\[\\]#0-9]+"?'
	var regex = new RegExp(pattern, "g");
	var substr = data.match(regex);
	var index = data.indexOf(substr[0]);
	data = data.replace(substr + ',', '');
	if (field == "giveaways") {
		data = data.slice(0, index) + '"' + field + '":[' + value + '],' + data.slice(index);
	} else if (Number.isInteger(value)) {
		data = data.slice(0, index) + '"' + field + '":' + value + ',' + data.slice(index);
	} else {
		data = data.slice(0, index) + '"' + field + '":"' + value + '",' + data.slice(index);
	}
	console.log(data);
	var encoded = base64.encode(data);
	write(path, '{\n\t"data":"' + encoded + '"\n}');
	return 0;
}

client.on("message", msg => {command.parseCommand(msg);});

c.on("help", (tokens, msg) => {
	console.log("Help");
	msg.channel.send(embeds.helpEmbed);
});

c.on("log", (tokens, msg) => {
	console.log("Log");
	try {
		var file = require("./database/" + tokens[1].toLowerCase() + ".json");
		Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
		var object = parseData(file.data);
		var rank = "";
		var color = "";
		var prefix = "";
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
		if (object.developer == 1) {
			prefix += ":diamond_shape_with_a_dot_inside:";
		}
		if (object.moderator == 1) {
			prefix += ":small_orange_diamond:";
		}
		if (object.owner == 1) {
			prefix += ":infinity:";
		}
		msg.channel.send(embeds.playerInfo(prefix + " " + tokens[1].toLowerCase(), rank, object.usedskips, object.skipsleft, object.discord, object.giveaways, color));
	} catch (e) {
		console.log(e);
		write("./database/" + tokens[1].toLowerCase() + ".json", '{\n\t"data": \"' + base64.encode('{"version":3,"rank":"guest","usedskips":0,"skipsleft":1,"discord":"unset","giveaways":["none"],"developer":0,"moderator":0,"owner":0,"vip":0,"badge":""}') + "\"" + "\n");
		var file = require("./database/" + tokens[1].toLowerCase() + ".json");
		Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
		var object = parseData(file.data);
		var rank = "";
		var color = "";
		var prefix = "";
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
		if (object.developer == 1) {
			prefix += ":diamond_shape_with_a_dot_inside:";
		}
		if (object.moderator == 1) {
			prefix += ":small_orange_diamond:";
		}
		if (object.owner == 1) {
			prefix += ":infinity:";
		}
		msg.channel.send(embeds.playerInfo(prefix + " " + tokens[1].toLowerCase(), rank, object.usedskips, object.skipsleft, object.discord, object.giveaways, color));
	}
});

c.on("skip", (tokens, msg) => {
	console.log("Skip");
	var file = require("./database/" + tokens[1] + ".json");
	Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
	var object = parseData(file.data);
	if (object.skipsleft > 0) {
		writeField("./database/" + tokens[1].toLowerCase() + ".json", "skipsleft", --object.skipsleft);
		writeField("./database/" + tokens[1].toLowerCase() + ".json", "usedskips", ++object.usedskips);
		msg.channel.send(embeds.skipSuccess(tokens[1], object.usedskips + 1, object.skipsleft - 1));
	} else {
		msg.channel.send(embeds.skipFailed(tokens[1], object.usedskips, object.skipsleft));
	}
});

c.on("hello", (tokens, msg) => {
	console.log("Hello");
	msg.reply("Hello! I'm Chris's Gatekeeper. Type .help for help!");
});

c.on("pskipadd", (tokens, msg) => {
	console.log("Player skip add");
	var file = require("./database/" + tokens[1] + ".json");
	Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
	var object = parseData(file.data);
	writeField("./database/" + tokens[1].toLowerCase() + ".json", "skipsleft", ++object.skipsleft);
});

c.on("pskipremove", (tokens, msg) => {
	console.log("Player skip remove");
	var file = require("./database/" + tokens[1] + ".json");
	Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
	var object = parseData(file.data);
	writeField("./database/" + tokens[1].toLowerCase() + ".json", "skipsleft", --object.skipsleft);
});

c.on("pdiscordset", (tokens, msg) => {
	console.log("Player discord set");
	writeField("/database/" + tokens[1] + ".json", "discord", tokens[4]);
});

c.on("prankset", (tokens, msg) => {
	console.log("Player rank set");
	//r.removeGuest(msg);
	//r.removeRes(msg);
	//r.removeCoOwner(msg);
	console.log("Player skip remove");
	var file = require("./database/" + tokens[1] + ".json");
	Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
	var object = parseData(file.data);
	switch (tokens[4].toLowerCase()) {
		case "guest":
			//r.addGuest(msg);
			writeField("./database/" + tokens[1].toLowerCase() + ".json", "rank", "");
			break;
		case "res":
			//r.addRes(msg);
			writeField("./database/" + tokens[1].toLowerCase() + ".json", "rank", "");
			break;
		case "co":
			//r.addCoOwner(msg);
			writeField("./database/" + tokens[1].toLowerCase() + ".json", "rank", "");
			break;
	}
});

c.on("dgar", (tokens, msg) => {
	msg.guild.member(msg.author).roles.add("751941550933803169");
	msg.delete();
});

c.on("reset", (tokens, msg) => {
	try {
		var file = require("./database/" + tokens[1] + ".json");
		Object.keys(require.cache).forEach(function (key) { delete require.cache[key] });
		var object = parseData(file.data);
		msg.reply("WARNING! You are about to completley wipe **" + tokens[1] + "**'s data and rebuild the profile! Type .confirmdel " + tokens[1] + " to continue! WARNING!");
	} catch (e) {
		msg.reply("Cannot wipe user that does not exist!");
		console.log(e);
	}
});

c.on("del", (tokens, msg) => {
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
		write("./database/" + tokens[1] + ".json", '{\n\t"data": \"' + base64.encode('{"version":3,"rank":"guest","usedskips":0,"skipsleft":1,"discord":"unset","giveaways":["none"],"developer":0,"moderator":0,"owner":0,"vip":0}') + "\"" + "\n}");
		msg.reply("Reset complete.")
	} catch (e) {
		msg.reply("Cannot wipe user that does not exist!");
		console.log(e);
	}
});

c.on("write", (tokens, msg) => {
	if (tokens.length < 4) msg.reply("You need more arguments");
	for(var i = 2; i < tokens.length; i+=2){
		if (!isNaN(tokens[i+1])){
			if (writeField("./database/" + tokens[1].toLowerCase() + ".json", tokens[i], +tokens[i+1]) == null) msg.reply("That user doesn't exist");
		} else {
			if (writeField("./database/" + tokens[1].toLowerCase() + ".json", tokens[i], tokens[i+1]) == null) msg.reply("That user doesn't exist");
		}	
	}
})

client.on("ready", () => {
	console.log("Logged in");
});

client.login("NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg");