const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ileosobnapodworku')
		.setDescription('Ile osob jest online?'),

	async execute(interaction) {
		await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
			const totalOnline = fetchedMembers.filter(member => member.presence?.status === 'online');
			console.log(`There are currently ${totalOnline.size} members online in this guild!`);
			interaction.reply(`Babcia wygląda za okno i mówi, że na podwórku jest teraz ${totalOnline.size} dzieci!`);
		});
	},

};
