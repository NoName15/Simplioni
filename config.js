const config = {
  // Bot Owner, level 4. A User ID. Should never be anything else than the bot owner's ID.
  ownerID: "480407581085532180",

  // Your Bot's Token. Available on https://discordapp.com/developers/applications/me
  token: "NDk0OTE1OTg0NzQ3MDAzOTE0.Do7B0Q.Cgs4Uqym3XD_sTUw5t7v6l7SFlM",

  // Default per-server settings. New guilds have these settings.
  defaultSettings: {
    prefixes: ['+', '?'],
    lang: 'en',
    admins: [],
    mods: []
  },

  mongodb: { url: 'mongodb://user:password@localhost:27017/enmap' },

  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => true
    },
    {
      level: 2,
      name: 'Moderator',
      guildOnly: true,
      check: (message) => message.member.roles.some(role => config.support.includes(role.id))
    },
    {
      level: 3,
      name: 'Administrator',
      guildOnly: true,
      check: (message) => message.member.roles.some(role => config.admins.includes(role.id)) ||
        message.member.roles.some(role => role.hasPermission('ADMINISTRATOR')) ||
        message.author.id === message.guild.owner.user.id
    },
    {
      level: 4,
      name: 'Bot Owner',
      check: (message) => config.ownerID === message.author.id
    }
  ]
};

module.exports = config;
