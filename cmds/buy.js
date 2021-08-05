const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let inline = true
    let bicon = bot.user.displayAvatarURL;
 
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Buy Gaming Chair Services!")
    .setThumbnail(bicon)
    .addField("If you'd like to speak to staff, please use ", "'#contact' followed by what you need help with.")
    .addField("Warzone Camos!", "<#870627392677363743>", inline)
    .addField("Tools!", "<#872374293206548561>", inline)
    .addField("Want to get your order faster?", "Check out <#871390045054042162>")
    .addField("Dark Aether!", "<#870634835717292043>", inline)
    .addField("Bot Lobbies!", "<#872466809733922826>", inline)
    .addField("Ready to Order?", "If you're ready to purchase, please use '#order' followed by what you'd like to order and your payment method. (e.g. '#order savage paypal')")
    .setFooter("Escobar by @Escobar", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg")

    message.channel.send(embed)

}
    module.exports.help = {
        name: "buy"
}
