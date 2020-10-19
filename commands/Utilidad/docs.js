const axios = require('axios')


module.exports = {
    name: "docs", // set command name
    aliases: [ "documentacion" ], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
        
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      args
    )}`

    axios
      .get(uri)
      .then((embed) => {
        const { data } = embed

        if (data && !data.error) {
          message.channel.send({ embed: data })
        } else {
          message.reply('No se ha encontrado la documentación')
        }
      })
      .catch((err) => {
        console.error(err)
      })
    }
}