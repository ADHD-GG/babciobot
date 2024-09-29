const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('babcia')
		.setDescription('Kim jest serwerowa babcia?'),
	async execute(interaction) {
		await interaction.reply('A co chcesz o mnie wiedzieć, osobo wnusiowa? https://discord.com/channels/1269650292215906418/1274782836221804554/1289909163295637657');
	},
};
