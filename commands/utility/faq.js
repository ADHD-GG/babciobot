const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('faq')
		.setDescription('Najczęściej zadawane pytania dotyczące serwera'),
	async execute(interaction) {
		await interaction.reply('Masz pytanie? Chętnie ci pomogę, osobo wnusiowa! https://discord.com/channels/1269650292215906418/1274782836221804554/1274784828138721354');
	},
};
