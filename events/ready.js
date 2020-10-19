const guildModel = require("../models/guildModel");
module.exports = async client => {
    for (let guild of client.guilds.cache.array()) {
        let language = "en";
        let guildDocument = await guildModel.findOne({ guildID: guild.id });
        if (guildDocument && guildDocument.language) language = guildDocument.language;
        guild.language = language;
    }
    process.stdout.write("\n");
    console.log("   Charmy    ");
    console.log("-------------------------------");
    console.log(`[      BOT     ]: ${client.user.username} esta online!`);
    console.log(`[    PREFIXES  ]: ${client.config.prefixes.join(" ")}`);
    console.log(`[    SERVERS   ]: ${client.guilds.cache.size}`);
    console.log(`[    CANALES   ]: ${client.channels.cache.size}`);
    console.log(`[    USUARIO   ]: ${client.users.cache.size}`);
    console.log(`[   BOOT TIME  ]: ${process.uptime() * 1000}ms`);
}