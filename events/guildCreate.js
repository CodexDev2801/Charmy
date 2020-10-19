const { Client } = require("discord.js");
const client = new Client();

const guildModel = require("../models/guildModel");
module.exports = async guild => {
    await guildModel.create({
        guildID: guild.id
    });
    guild.language = "es";
    console.log(`[NUEVO INGRESO]: ${guild.name} | ${guild.id}`);
}
