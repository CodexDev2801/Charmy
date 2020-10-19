const guildModel = require("../models/guildModel");
module.exports = async guild => {
    await guildModel.deleteMany({
        guildID: guild.id
    });
    console.log(`[NUEVA SALIDA]: ${guild.name} | ${guild.id}`);
}
