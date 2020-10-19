module.exports = {
    name: "say", 
    aliases: [ "decir" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 5, 
    exec: async (client, message, args) => {

        const wtf = message.guild.emojis.cache.find(emoji => emoji.name === 'charmywtf');
        
        let MSG = args.join(" ");
    if (!MSG)
      return message.channel.send(`No puedo mandar este mensaje vacio ${wtf}`);
    message.channel.send(MSG);
    message.delete();

    }
}