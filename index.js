require('dotenv').config()

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("messageDelete", msg => {
    msg.reply("stop deleting messages!!");
})

client.on("message", msg => {
    if (msg.content === "?") {
        msg.reply("don't ? me, that's rude")
    } else if (msg.content === "u good bro") {
        msg.channel.send("nah ofc not")
    } else if (msg.content === "emma is awesome") {
        msg.react("❤️")
    } else if (msg.content === "smh") {
        msg.reply("be careful! don't want to hurt your neck")
    }
})


client.login(process.env.BOT_TOKEN)