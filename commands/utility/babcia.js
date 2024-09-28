const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('babcia')
		.setDescription('Kim jest serwerowa babcia?'),
	async execute(interaction) {
		await interaction.reply('A co chcesz o mnie wiedzieć, osobo wnusiowa?');
	},
};
