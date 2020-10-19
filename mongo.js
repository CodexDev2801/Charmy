const { Client } = require("discord.js");
const mongoose = require("mongoose");
const client = new Client();
client.config = require("./config.json");

module.exports = async () => {
  await mongoose.connect(client.config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}