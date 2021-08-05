const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let Invite = await message.guild.channels.first().createInvite()
    let buyer = message.author;
    let inline = true
    const order = args.join(" ");
    if(!order) return message.reply("Please tell us what bot do you want to order and give us information!").then(msg => {msg.delete(5000)});

    let orderEmb = new Discord.RichEmbed()
    .setAuthor(buyer.tag)
    .setColor("#00ff00")
    .setDescription(`Order in ${message.channel.name}`)
    .setTitle("Service Order")
    .setThumbnail(buyer.displayAvatarURL)
    .addField("Buyer ID", buyer.id, inline)
    .addField("Order info", order)


    bot.channels.get("872868643896180757").send(orderEmb);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Order Sent!")
    .setDescription("Your order message has been sent!")
    .addField("Reqested by ", buyer.name)
    .addField("Order: ", order)
    .setFooter("Thank you for buying from Gaming Chairs!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        
        

}
    module.exports.help = {
        name: "order"
}