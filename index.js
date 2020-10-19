const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('El bot sigue encendido.');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
}


const { Client } = require("discord.js");
const { I18n } = require("locale-parser");
const Mongoose = require("mongoose");
const { MessageEmbed } = require("discord.js");
const inviteNotifications = require('./invite-noti')
const client = new Client();
client.config = require("./config.json");
client.i18n = new I18n({ defaultLocale: "es" });
Mongoose.connect(client.config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.database = Mongoose.connection;
client.database.on("error", (err) => {
    throw err;
});


inviteNotifications(client)



    client.on('ready', () => {

        const actividades = [
            `Vigilando a ${client.users.cache.size} usuarios`,
            "Developed by Codex",
            "Charmy v1.0",
            `En ${client.guilds.cache.size} servidores`
            ];

        setInterval(() => {
            const index = Math.floor(Math.random() * actividades.length); 
            client.user.setPresence({
            status: "idle",
            activity: {
                name: actividades[index],
                type: "PLAYING"
            }
        })
        }, 5000); 
    });

client.database.once("open", async () => {
    require("./models");
    require("./handlers/eventHandler")(client);
    require("./handlers/moduleHandler")(client);
    client.login(client.config.bot_token);
});