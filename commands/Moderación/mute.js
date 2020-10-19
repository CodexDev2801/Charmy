const muteSchema = require('../../schemas/mute-schema.js')

const reasons = {
    SPAM: 1,
    ADVERTENCIA: 1,
    SPAMDM: 1,
    FLOOD: 1,
    TOXICO: 1,
  }

module.exports = {
    name: "mute", // set command name
    aliases: [ "tempmute" ], // set command aliases
    permissions: ['MANAGE_MESSAGES'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
 
        const { guild, author: staff } = message

        if (args.length !== 2) {
          message.channel.send(
            `Uso correcto: mute <usuario @> <Razon>`
          )
          return
        }
    
        const target = message.mentions.users.first()
        if (!target) {
          message.channel.send('Especifica al usuario a mutear')
          return
        }
    
        const reason = args[1].toUpperCase()
        if (!reasons[reason]) {
          let validReasons = ''
          for (const key in reasons) {
            validReasons += `${key}, `
          }
          validReasons = validReasons.substr(0, validReasons.length - 2)
    
          message.channel.send(
            `Razón desconocida, por favor use uno de los siguientes: \`${validReasons}\``
          )
          return
        }
    
        const previousMutes = await muteSchema.find({
          userId: target.id,
        })
    
        const currentlyMuted = previousMutes.filter((mute) => {
          return mute.current === true
        })
    
        if (currentlyMuted.length) {
          message.channel.send('El usuario se encuentra muteado')
          return
        }
    
        let duration = reasons[reason] * (previousMutes.length % 1)
    
        const expires = new Date()
        expires.setHours(expires.getHours() + duration)
    
        const mutedRole = guild.roles.cache.find((role) => {
          return role.name === 'Muted'
        })
        if (!mutedRole) {
          message.channel.send('No se ha encontrado el rol \`Muted\` rol')
          return
        }
    
        const targetMember = (await guild.members.fetch()).get(target.id)
        targetMember.roles.add(mutedRole)
    
        await new muteSchema({
          userId: target.id,
          guildId: guild.id,
          reason,
          staffId: staff.id,
          staffTag: staff.tag,
          expires,
          current: true,
        }).save()
    
        message.channel.send(
          `Muteaste exitosamente a <@${target.id}> por "${reason}". Duracion: ${duration} horas.`
        )
        message.react('767481686186917969')
        const boost = message.guild.emojis.cache.find(emoji => emoji.name === 'charmystrike');

        target.send(`${boost} Fuiste muteado por ${duration} horas. Razón: ${reason}`)
      }
    }