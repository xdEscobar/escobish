const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = message.author.displayAvatarURL;

    let inv = await message.guild.channels.first().createInvite()

    let msg = args.join(` `)

    if(!msg) return message.reply("Please give us reason for contacting").then(msg => {msg.delete(5000)});

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Help Needed in Ticket")
    .setDescription(msg)
    .addField("Ticket Channel ", `[${message.channel.name}]`, true)
    .addField("User", message.author, true)
    .addField("User ID", message.author.id)
    .setTimestamp()

    bot.channels.get("872868643896180757").send(emb);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", message.author)
    .addField("Message: ", msg)
    .setFooter("Thanks you for contacting the Gaming Chairs support!")
    .setFooter("Escobar by @Escobar", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        

 
}
    module.exports.help = {
        name: "contact"
}