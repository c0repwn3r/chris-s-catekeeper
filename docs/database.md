## Decoding a database file:

#### Current database version integer: 2

1. Open the username.json file
2. Read the "data" value string.
3. Decode from base64.
4. Check the version integer. If it does not match,throw an error.
(how to fix a database version mismatch: run .d rd <username> to recreate the data list, and manually update statuses like developer)
5. if read, take the data nessecary.

#### Database format:
player.json
{
    "data": "raw base64 data string"
}

data:
{
    "version": 2,
    "rank": "guest, res, co, or owner",
    "usedskips": 0,
    "skipsleft": 3,
    "discord": "discord ID or none",
    "giveaways": "list of won giveaways by type",
    "developer": 0,
    "moderator": 0,
    "owner": 0,
    "vip": 0
}
Version: version this file is in
Rank: the players rank
Usedskips: the amount of skips the player has used
Skipsleft: the amount of skips a player has left
Discord: the players discord ID. Can either be a valid discord ID with tag, or none.
Giveaways: a list which contains "res", "skip", or "mskip".
Developer: 1 if the player is a CG developer, 0 if not.
Moderator: 1 i the player has access to bot commands, 0 if not.
Owner: 1 if the player owns the server, 0 if not.
VIP: 1 if the player is a bot VIP, 0 if not.
