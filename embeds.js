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
exports.playerModified = playerModified;
exports.skipFailed = failedSkip;
exports.skipSuccess = skipSuccess;
exports.playerInfo = playerinfo;