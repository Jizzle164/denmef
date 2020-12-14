const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setDescription(`
    Yardım Komutları bıla bıla
    
  ```
c!sunucu-kayıt  ┃ c!karşılama-mesaj

c!ban-sistem    ┃ c!komut-cevap-sistem

c!mute-sistem   ┃ c!ses-mute-sistem

c!sayaç-sistem  ┃ c!karantina-sistem

c!fake-sistem   ┃ c!yasak-tag-sistem

c!seviye-sistem ┃ c!oto-isim-sistem

c!şablon-sistem ┃ c!tag-rol-sistem                                     
                              ```
 `)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Logo Yaparsınız',
  usage: 'yardım'
};