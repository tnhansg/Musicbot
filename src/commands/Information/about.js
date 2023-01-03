const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: ["botinfo", "info"],
    description: "See information about this project.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new ActionRowBuilder()
			.addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
   /* new ButtonBuilder()
    .setLabel("Facebook Admin")
    .setStyle(ButtonStyle.Link)
    .setURL("https://www.facebook.com/tnhantl"),*/
    new ButtonBuilder()
    .setLabel("Support")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/NQZGgabR5e")
			);

      const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Thien Nhan ✨', iconURL: 'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png'})
            .setThumbnail('https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setColor(client.embedColor)
            .addFields([
                { name: 'Creator', value: '[tnhan#1234](https://www.facebook.com/tnhantl)', inline: true },
                { name: 'Organization', value: '[Thien Nhan](https://www.facebook.com/tnhantl)', inline: true },
                { name: '\u200b', value: `[Thien Nhan ✨](https://www.facebook.com/tnhantl) was created by [Thien Nhan](https://www.facebook.com/tnhantl). He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using Thien Nhan ✨!`, inline: true },
            ]);
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
