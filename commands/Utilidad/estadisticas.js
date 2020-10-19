const roleSizeSchema = require('../../schemas/role-size-schema.js')
const { fetchChannelData } = require('../../features/features/role-size-channel.js')

module.exports = {
    name: "stats", 
    aliases: [ "estadisticas" ], 
    permissions: [], 
    ownerOnly: true, 
    enabled: false, 
    cooldown: 5, 
    exec: async (client, message, args) => {


        const { guild } = message
        const syntax = `${client.prefix}stats <ID del vc> <Role ID o "all"> <Texto>`
    
        if (args.length < 3) {
            message.channel.send(`Uso correcto: ${syntax}`)
          return
        }
    
        const channelId = args.shift()
        const channel = guild.channels.cache.get(channelId)
        if (!channel || channel.type !== 'voice') {
          message.channel.send(`Debes proporcionar un ID de canal de voz:\n${syntax}`)
          return
        }
    
        const roleId = args.shift().toLowerCase()
        if (roleId !== 'all') {
          const role = guild.roles.cache.get(roleId)
          if (!role) {
            message.channel.send(
              `Debes proporcionar un ID de rol válido o la palabra "all" para todos los miembros del servidor.:\n${syntax}`
            )
            return
          }
        }
    
        const text = args.join(' ')
    
        await roleSizeSchema.findOneAndUpdate(
          {
            guildId: guild.id,
            channelId,
          },
          {
            guildId: guild.id,
            channelId,
            roleId,
            text,
          },
          {
            upsert: true,
          }
        )
    
        message.channel.send('Canal establecido!')
    
        fetchChannelData()


    }
}