const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const { token, prefix } = require("./config.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(`${prefix}Calango`)) {
        message.channel.send('Sou mais sagaz que um calango');
    }
    if (message.content.startsWith(`${prefix}Anthedegemon`)) {
        message.channel.send('Deletking tem que carregar todo dia o Anthedegemon');
    }
    // if (message.content.startsWith(`${prefix}Anthedegemon ta como ?`)) {
    //     message.channel.send('Carregado!');
    // }
    if (message.content.startsWith(`${prefix}Jumento`)) {
        message.channel.send('Mais bruto que um jumento!');
    }
    if (message.content.startsWith(`${prefix}Atiro`)) {
        message.channel.send('Eu só atiro, se morrer é porque Deus quis!');
    }
    if (message.content.startsWith(`${prefix}Mortal`)) {
        message.channel.send('Sou mais mortal que a jararaca!');
    }
    if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
    if (message.content === `${prefix}members`) {
        message.channel.send(`Members: ${message.guild.memberCount}`);
    }
    if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'user') {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);
    }
    if (command === 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        const taggedUser = message.mentions.users.first();

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }

    if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    }
    if (command === 'flecha') {

        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    }

});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;

    channel.send(`Cola na grade, ${member}`);
});

client.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});

client.login(token);