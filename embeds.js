const Discord = require("discord.js");

function playerInfo(user, rank, skipsused, skipsleft, discord, giveaways) {
    var embed = new Discord.MessageEmbed()
    .setTitle(user + "'s Stats")
    .setColor("#cec609")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", rank, true)
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true)
    .addField("Discord:", discord, true)
    .addField("Won Giveaways:", giveaways, true);
    return embed;
}
function failedSkip(user, rank, skipsused, skipsleft) {
    var embed = new Discord.MessageEmbed()
    .setTitle("Skip Failed")
    .setColor("#ff0000")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", rank, true)
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true);
    return embed;
}
function skipSuccess(user, rank, skipsused, skipsleft) {
    var embed = new Discord.MessageEmbed()
    .setTitle("Skip Success")
    .setColor("#ff0000")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", rank, true)
    .addField("Skips Used:", skipsused, true)
    .addField("Skips Remaning:", skipsleft, true)
    .setDescription(user + " has used a skip!");
    return embed;
}
function playerModifed(user, rank, skipsused, skipsleft, skipsadded) {
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
.setDescription("You need to have the **Co-Owner** role or higher to run these commands.\nIf a player is not in the database and you try to preform an action on them,\nthey will be added with the default info:\nRole: Guest\nSkips: 3\nDiscord: None\nGiveaways: None)
.setFooter("Written by core#8531 and GhostlyCoding#4665")
.addField(".help",,true)
.addField(".log <player username>","Retrieves information about a player from a database.",true)
.addField(".skip <player>","Attempts to use a skip for a player. If they do not have enough skips, the command will return an error. If they do, they will have one skip removed and this action will be logged.",true)
.addField(".player <player> skips add <amount>","Adds the amount specified to the player's Available Skips count.",true)
.addField(".player <player> skips remove <amount>","Removes the amount specified from the player's Available Skips count.",true)
.addField(".player <player> skips set <amount>","Sets the player's Avalible Skips count to the specified number.",true)
.addField(".player <player> rank set <rank>","Updates a player's rank in the database and automatically updates their role in the Discord.",true)
.addField(".player <player> discord set <disord ID with tag>","Updates a player's discord account information.",true);
exports.helpEmbed = helpEmbed;
exports.playerModified = playerModified;
exports.skipFailed = failedSkip;
exports.skipSuccess = skipSuccess;
exports.playerInfo = playerinfo;