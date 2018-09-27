const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('c:help for commands');
  console.log(`Kitilen initilized.`);
});
bot.on('message', message => {
var prefix = "c:";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});
bot.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "c:";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`Server informations`)
          .setDescription(`Informations about : ${guild.name}`)
          .addField("Server owner :", `${guild.owner}`, true)
          .addField("Server ID :", `${guild.id}`, true)
          .addField("Server Region :", `${guild.region}`, true)
          .addField("Server Protection :", `${guild.verificationLevel}`, true)
            .addField("Voice Channels Count :", `${voicechannels.size}`, true)
          .addField("Text Channels Count :", `${textchannels.size}`, true)
          .addField("Server Members Count :", `${members}`, true)
          .addField("Bots Count :", `${bots}`, true)
          .addField("Humans :", `${humans}`, true)
          .addField("Roles Count :", `${guild.roles.size}`, true)
          .addField(`Server Emojis : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`Server Created In: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });
function doMagic8BallVoodoo() {
    var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "calculateadd") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.sendMessage(total).catch(console.error);
  }

  if (command === "say") {
     msg.delete();
     msg.channel.sendMessage(args.join(" "));
  }

  if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  }

  if (command === "pong") {
     msg.channel.send("Ping! (hold on, processing latency...)").then(m => m.edit(`Ping! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );

  }
  if (command === "help") {
    msg.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
    msg.author.sendMessage("Thanks for using the help command this command will help you know the current commands.c:ping and c:pong are commands used to check if the bot is online.c:say allows you to make the bot say whatever you want it to say.c:calculateadd is an adding calculator.c:8ball is a fun command where you can ask the magic 8 ball a question and it will reply.c:invite makes the bot DM you an invite link to invite the bot to your server. And c:objection, c:holdit and c:takethat are AA commands. c:server gives you every peice of information you need to know about your server,c:date gives you a full date .And many updates are coming :) ")
  }

  if (command === "objection") {
    msg.channel.sendMessage(`http://i.imgur.com/19WEQFO.gif ${args.join(" ")}`);
  }

  if (command === "holdit") {
    msg.channel.sendMessage(`http://i.imgur.com/6kg9dtc.png ${args.join(" ")}`);
  }

  if (command === "takethat") {
    msg.channel.sendMessage(`http://i.imgur.com/S45Dsnb.png ${args.join(" ")}`);
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "8ball") {
    msg.channel.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=494915984747003914&permissions=8&scope=bot")
  }

  if (command === "cointoss") {
    msg.channel.sendMessage(coinToss())
  }

});

bot.login(config.token);
