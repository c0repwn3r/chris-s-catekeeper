## Chris's Gatekeeper

### Introduction
Hello! If you are reading this, you are a staff member on Chris's Discord server and Minecraft housings.

All staff members should learn how to use our custom-made bot, Chris's Gatekeeper.

If you ever need any help, or you discover a bug, DM core#8531 or GhostlyCoding#4665 on Discord with your question or bug report, and we will get back to you as soon as possible.

If you discover a bug that would allow someone to do damage to the server, **ping core in a DM explaning the bug.** If I am awake, I will stop the bot and fix it! I take security **very** seriously on this bot, and I have attempted to make this bot as secure as I can. Thanks <3!

### Chapter 1. All the commands

The bot only has a few commands. The bots prefix is `.`, and this **cannot** be changed. Details on all commands are below. Some commands have sub-commands, also detailed below.

Anything inside angle brackets (`<>`) is a **required paramater**. Anything inside square brackets (`[]`) are **optional**. If inside one of these brackets you see multiple things
with  a `|` in between them, you have to choose **one** of them to put there.

A quick note: All data in the bot is stored by IN GAME NAME, this way they do not have to have a discord account AND be in the server. The data **can** be manually copied, but this requires Ghostly or Core to edit the file manually, and this may take some time, so please just use their IGN. Another cool feature this enables is to get their hypixel profile, and provide skin and head renders from the bot! This is an expermental feature, and currently is not avalible in the production bot D:, however it may appear in the future!

#### Hello
Syntax: `.hello`

Prints a test message to ensure the bot is working correctly.

#### Log
Syntax: `.log <player>`

Prints out a player's information, including used and remaning skips, and their rank.

As noted above, all information in the bot is stored by IGN, so please remember to use it this way.

If a player does not exist in the database, they will be automatically added when you run this command, and therefore you should check their profile FIRST before attempting to modify it.

#### Skip
Syntax: `.skip <player>`

This is the most useful command! If you run this comamnd with a player that **already exists** in the database, it will check if they can use a skip, and if they can it will add one to the **Used Skips** count, and subtract one from the **Skips Remaning** count. A side effect of this, is that once a person confirms that they want to skip, the skip **cannot** easily be reversed, except by a developer. This means that you need to be **100% sure** that they want to skip, and only run the command **after** they have been let through the door. All skips can be logged by the date and time that the Skip Success message was sent, which will completley shut down any argument that goes along the lines of "I haven't used any skips!!!!" as you can give them the exact date and time that they used a skip. If you accidentally run a skip on the wrong person, **no worries!** Just let a dev know, and it can be reversed, however it may take a while as it requires manual editing of the files.

#### Player
Syntax: `.player <player> <skips|rank> <add|remove|set> <value>`

Note: the `set` subcommand is only used for setting a player's rank, and will do nothing if used with skips.

The player command is the most confusing command of all of them.

`.player <player>` by itself does nothing, in order to modify a player you have to tell the bot what to modify.

`.player <player> skips` lets you add to or remove from a player's **Avalible Skips** count, with the `add` or `remove` subcommands respectivley. The number you put after it is the amount that will be added/removed from the count.

#### Reset
Syntax: `.reset <player`

Completley deletes all of a player's data. Requires confirmation. More than 3 resets an hour will alert Chris and the developer as well as ban you from the bot for 6 hours. Bot usage bans can only be removed by the developer.

### Chapter 2. Three Scenarios
Read the scenario and come up wuth an answer. Then, compare it to the correct one.

A player wants to use a skip but does not go through the door. Do you run the skip command?
<details>
  <summary>Answer</summary>
  no
</details>

A player argues with you when you tell them they have no remaning skips. What should be your response?
<details>
  <summary>Answer</summary>
  We have a discord bot which keeps track of all skips. (or a variation of that)
</details>

A player hacks the discord bot and gains infiite skips. How do you take action?
<details>
  <summary>Answer</summary>
  The correct solution in this case would be to notify core or ghostly and we will relay the information as needed as well as fix the bug. The player should also be muted in the discord for 10m.
</details>

### Chapter 3. QNA
DM Core a question for it to be added here!

#### Q: Who can use the bot?
#### A: All co-owner's or higher.

#### Q: HEEEEEEEEEEEEEEEELP!
#### A: Read the entire guide.

#### Q: How do I undo an accidental skip?
#### A: Read:
> the skip **cannot** easily be reversed, except by a developer.

### Chapter 4. Conclusion
Thank you for reading and thanks for being an awesome part of this community! Let Core or Ghostly know if you need any help or have a feature request!

Happy modding!

-core
