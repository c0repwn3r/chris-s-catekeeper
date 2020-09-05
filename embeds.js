const Discord = require("discord.js");

function playerInfo(user, rank, skipsused, skipsleft, discord, giveaways, color) {
    var embed = new Discord.MessageEmbed()
    .setTitle(user + "'s Stats")
    .setColor(color)
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", rank, true)
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true)
    .addField("Discord:", discord, true)
    .addField("Won Giveaways:", giveaways, true);
    return embed;
}
function failedSkip(user, skipsused, skipsleft) {
    var embed = new Discord.MessageEmbed()
    .setTitle("Skip Failed")
    .setColor("#ff0000")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .setDescription(user + " has no remaning skips!")
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true);
    return embed;
}
function skipSuccess(user, skipsused, skipsleft) {
    var embed = new Discord.MessageEmbed()
    .setTitle("Skip Success")
    .setColor("#00ff00")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true)
    .setDescription(user + " has used a skip!");
    return embed;
}
function playerModified(user, rank, skipsused, skipsleft, skipsadded) {
    var embed = new Discord.MessageEmbed()
    .setTitle("Player Modified")
    .setColor("#8fff00")
    .setDescription("Added " + skipsadded + " skip to player " + user)
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", rank, true)
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true)
    .addField("Discord:", discord, true)
    .addField("Won Giveaways:", giveaways, true);
    return embed;
}
const helpEmbed = new Discord.MessageEmbed()
.setTitle("Help")
.setDescription("You need to have the **Co-Owner** role or higher to run these commands.\nIf a player is not in the database and you try to preform an action on them,\nthey will be added with the default info:\nRole: Guest\nSkips: 3\nDiscord: None\nGiveaways: None")
.setFooter("Written by core#8531 and GhostlyCoding#4665")
.addField(".help","Show this help screen.",true)
.addField(".log <player username>","Retrieves information about a player from a database.",false)
.addField(".skip <player>","Attempts to use a skip for a player. If they do not have enough skips, the command will return an error. If they do, they will have one skip removed and this action will be logged.",true)
.addField(".player <player> skips add <amount>","Adds the amount specified to the player's Available Skips count.",false)
.addField(".player <player> skips remove <amount>","Removes the amount specified from the player's Available Skips count.",false)
.addField(".player <player> rank set <rank>","Updates a player's rank in the database and automatically updates their role in the Discord.",false)
.addField(".player <player> discord set <discord ID with tag>","Updates a player's discord account information.",false);
exports.helpEmbed = helpEmbed;
exports.playerModified = playerModified;
exports.skipFailed = failedSkip;
exports.skipSuccess = skipSuccess;
exports.playerInfo = playerInfo;
