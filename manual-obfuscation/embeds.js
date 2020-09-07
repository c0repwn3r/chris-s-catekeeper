const ab = require("discord.js");

function a(b, c, d, e, f, g, h) {
    var embed = new ab.MessageEmbed()
    .setTitle(b + "'s Stats")
    .setColor(h)
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", c, true)
    .addField("Skips Used:", d, true)
    .addField("Skips Remaning:", e, true)
    .addField("Won Giveaways:", g, true);
    return embed;
}
function aa(b, d, e) {
    var embed = new ab.MessageEmbed()
    .setTitle("Skip Failed")
    .setColor("#ff0000")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .setDescription(b + " has no remaning skips!")
    .addField("Skips Used:", d, true)
    .addField("Skips Remaning:", e, true);
    return embed;
}
function aaa(b, d, e) {
    var embed = new ab.MessageEmbed()
    .setTitle("Skip Success")
    .setColor("#00ff00")
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Skips Used:", d, true)
    .addField("Skips Remaning:", e, true)
    .setDescription(b + " has used a skip!");
    return embed;
}
function aaaa(b, c, d, e, skipsadded) {
    var embed = new ab.MessageEmbed()
    .setTitle("Player Modified")
    .setColor("#8fff00")
    .setDescription("Added " + skipsadded + " skip to player " + b)
    .setFooter("Written by core#8531 and GhostlyCoding#4665")
    .addField("Rank:", c, true)
    .addField("Skips Used:", d, true)
    .addField("Skips Remaning:", e, true)
    .addField("a:", f, true)
    .addField("Won Giveaways:", g, true);
    return embed;
}
const aaaaa = new ab.MessageEmbed()
.setTitle("Help")
.setDescription("You need to have the **Co-Owner** role or higher to run these commands.\nIf a player is not in the database and you try to preform an action on them,\nthey will be added with the default info:\nRole: Guest\nSkips: 3\na: None\nGiveaways: None")
.setFooter("Written by core#8531 and GhostlyCoding#4665")
.addField(".help","Show this help screen.",true)
.addField(".log <player username>","Retrieves information about a player from a database.",false)
.addField(".skip <player>","Attempts to use a skip for a player. If they do not have enough skips, the command will return an error. If they do, they will have one skip removed and this action will be logged.",true)
.addField(".player <player> skips add <amount>","Adds the amount specified to the player's Available Skips count.",false)
.addField(".player <player> skips remove <amount>","Removes the amount specified from the player's Available Skips count.",false)
.addField(".player <player> c set <c>","Updates a player's c in the database and automatically updates their role in the a.",false);
exports.helpEmbed = aaaaa;
exports.playerModified = aaaa;
exports.skipFailed = aa;
exports.skipSuccess = aaa;
exports.playerInfo = a;