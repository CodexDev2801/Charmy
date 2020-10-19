const { MessageEmbed } = require('discord.js')
const muteSchema = require('../../schemas/mute-schema.js')



module.exports = {
    name: "check", // set command name
    aliases: [ "ismute" ], // set command aliases
    permissions: ['MANAGE_MESSAGES'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {

        const { guild } = message

    if (args.length !== 1) {
      message.reply(`Uso correcto: check <ID usuario>`)
      return
    }

    const id = args[0]

    const members = await guild.members.fetch()
    const target = members.get(id)
    const isInDiscord = !!target

    const currentMute = await muteSchema.findOne({
      userId: id,
      guildId: guild.id,
      current: true,
    })

    const embed = new MessageEmbed()
      .setAuthor(
        `Información para ${target ? target.user.tag : id}`,
        target ? target.user.displayAvatarURL() : ''
      )
      .addField('Actualmente Muteado', currentMute ? 'Si' : 'No')
      .addField('Está En Discord', isInDiscord ? 'Si' : 'No')

    if (currentMute) {
      const date = new Date(currentMute.expires)

      embed
        .addField('Muteado Por', `<@${currentMute.staffId}>`)
        .addField('Razón', currentMute.reason.toLowerCase())
        .addField('Expiración Del Mute', `${date.toLocaleString()} EST`)
    }

    message.channel.send(embed)


    }
}