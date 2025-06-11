const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pomoc-discord')
		.setDescription('Instrukcje i najczęściej zadawane pytania dotyczące aplikacji'),
	async execute(interaction) {
		await interaction.reply('Chodź, pokażę ci jak poklikać w tego Discorda, osobo wnusiowa. https://discord.com/channels/1269650292215906418/1382485764948103228/1382492355181023252⁠');
	},
};
