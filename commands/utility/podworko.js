const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('podworko')
		.setDescription('Zapytaj babci czy możesz wyjść na podwórko'),
	async execute(interaction) {
		await interaction.reply('A obiadek zjedzony?');
	},
};
