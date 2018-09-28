const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('c:help for commands');
  console.log(`Kitilen initilized.`);
  bot.on("message", (Duy0) => {
  if (Duy0.content.startsWith('c:dtchannel')) {
      if (!Duy0.member.hasPermission('MANAGE_CHANNELS')) return Duy0.reply("No can do pal! ``Manage_Channels`` You dont have the permission");
      if(!Duy0.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I cant do that ``Manage_Channels`` I need this permission to do that.");



      let Alpha = Duy0.content.split(' ').slice(1);
      let channel = Duy0.client.channels.find('name', Alpha.join(' '));
      if (!channel) return Duy0.reply('**لCant find channel**').catch(console.error);
      channel.delete() 
  Duy0.channel.send(`${Alpha} The room has been deleted.`)
}
});
  bot.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === bot.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    bot.channels.get("494243335339245593").send({embed:iiMo});
    }
});
  bot.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

bot.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

bot.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

bot.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

bot.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

bot.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

bot.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

bot.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

bot.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

bot.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

bot.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

bot.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

bot.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});
});
bot.on('message', Sal => { // By me7#4595
  if(Sal.content === 'c:bot') { //هنا تغير البرفيكس
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(bot.user.avatarURL)
  .addField('Bot Name', bot.user.username, true)
  .setFooter(bot.user.tag, bot.user.avatarURL, true)
  .addField('Bot Tag', bot.user.discriminator, true)
  .addField('Bot id', bot.user.id, true)
  .addField('Create Bot At', bot.user.createdAt, true)
  Sal.channel.sendEmbed(embed);
}
});
const fs = require('fs');
var Swears = JSON.parse(fs.readFileSync("./swears.json", "utf8"));
bot.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var args1 = args.slice(1).join(' ');
    var command = args[0];
    var prefix = 'c:'; // <====== تقدر تغير البرفكس
   
   
    if(Swears.some(word => message.content.toLowerCase().includes(word))) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.channel.send(`:no_entry: | Hey <@${message.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
    }
   
   
    if(command == prefix + 'swears') {// حقوق الفا كودز & عبود
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return meessage.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
        if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
        var number = 1;// حقوق الفا كودز & عبود
       
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {// حقوق الفا كودز & عبود
            if(Swears.length > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}swears 2\`\` (${Math.round(Math.round(Swears.length / 10) + 1)} pages)`;
            }else {
                var more = '\n__';
            }
           
            let swearsWords = new Discord.RichEmbed()// حقوق الفا كودز & عبود
            .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
            .setColor('RED')
            .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(0, 10).join('\n')}__\n${more}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(swearsWords);
        }else if(!isNaN(args[1])) {// حقوق الفا كودز & عبود
            if(Swears.length < 10) {
                var morepage = 'This server have **1** Pages only.';
            }else {
                var morepage = `Please select page from 1 to ${Math.round(Swears.length / 10) + 1}`;
            }
            if(args[1] > Math.round(Swears.length / 10) + 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);
           if(args[1] < 1) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${morepage}`);// حقوق الفا كودز & عبود
           if(Swears.length > 10) {
               var more = `\n__:sparkles: **More?** \`\`${prefix}swears ${Math.round(args[1]) + 1}\`\` (${Math.round(Swears.length / 10) + 1} pages)`;
           }else {
               var more = '\n__';
           }
           if(args[1] === '5' && Swears.length > 40) more = '\n__';// حقوق الفا كودز & عبود
           var number = 1;
         
           let swearsWords = new Discord.RichEmbed()
           .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
           .setColor('RED')
           .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}__\n${more}`)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)// حقوق الفا كودز & عبود
         
           message.channel.send(swearsWords);
       }
   }
 
 
   if(command == prefix + 'add-swear') {// حقوق الفا كودز & عبود
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
       if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}add-swear <SWEAR>`);
       if(Swears.length == 50) return message.channel.send(':no_entry: | Maxmium number of swears is **50**');
       if(args1.length > 30) return message.channel.send(`:no_entry: | The swear **${args1.length}** characters. Please try with characters less then **30**`);
     
       Swears.push(args1);// حقوق الفا كودز & عبود
       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
           if(err) console.error(err);
       })
       message.channel.send(`:white_check_mark: | Successfully added **${args1}** To swears words!`);
   }// حقوق الفا كودز & عبود
 
 
   if(command == prefix + 'remove-swear') {// حقوق الفا كودز & عبود
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
       if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
       if(Swears.length == 1) {
           var to = 1;
       }else if(Swears.length > 1) {
           var to = `<1 to ${Swears.length}>`;// حقوق الفا كودز & عبود
       }
       if(!args[1]) return message.channel.send(`**➥ Useage:** ${prefix}remove-swear ${to}`);
        if(isNaN(args[1])) return message.channel.send(`:no_entry: | The args must be a number!`);
        if(args[1] > Swears.length) return message.channel.send(`:no_entry: | Please choose number from 1 to ${Swears.length}`);
     
       message.channel.send(`:white_check_mark: | Successfully remove **${Swears.splice(args[1] - 1, 1)}** from swears words`);
       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
           if(err) console.error(err);
       })
   }
 
 
   if(command == prefix + 'remove-all-swears') {// حقوق الفا كودز & عبود
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!');
       if(Swears.length < 1) return message.channel.send(`:no_entry: | No swears words founds to remove it! \`\`If you want to add some words type ${prefix}add-swear <SWEAR>\`\``);
       message.channel.send(`:white_check_mark: | Successfully remove **${Swears.length}** Swears words!`);
       Swears = [];
       fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
           if(err) console.error(err);
       })// حقوق الفا كودز & عبود
   }
});// حقوق الفا كودز & عبود
bot.on('messageUpdate', (oldMessage, newMessage) => {
    if(Swears.some(word => newMessage.content.toLowerCase().includes(word))) {// حقوق الفا كودز & عبود
        if(oldMessage.member.hasPermission('ADMINISTRATOR')) return;
        oldMessage.delete();// حقوق الفا كودز & عبود
        oldMessage.channel.send(`:no_entry: | Hey <@${oldMessage.author.id}>! Dont swear or you will get mute!`).then(msg => msg.delete(2000));
    }// حقوق الفا كودز & عبود
});
bot.on('guildMemberRemove', Sal => { //By me7#4595
  var embed = new Discord.RichEmbed()
  .setAuthor(Sal.user.username, Sal.user.avatarURL)
  .setThumbnail(Sal.user.avatarURL)
  .setImage('https://previews.123rf.com/images/dxinerz/dxinerz1509/dxinerz150901337/45612790-bye-goodbye-icon.jpg') //هنا حط الصوره الي تبيها
  .setTitle('Leave Warning')
  .setDescription('Cya ')
  .addField('``With ID``:',"" +  Sal.user.id, true)
  .addField('``With Tag``', Sal.user.discriminator, true)
  .addField('``Created In``', Sal.user.createdAt, true)
  .addField(' 👤 Right Now ',`**[ ${Sal.guild.memberCount} ]**`,true)
  .setColor('RED')
  .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
  var channel =Sal.guild.channels.find('name', 'join-leave') // هنا حط اسم الروم الي تبيه يكتب فيه
  if (!channel) return;
  channel.send({embed : embed});
  });
bot.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   

  if (message.content.startsWith('c:bc')) {
          if (!args[0]) {
message.channel.send("**c:bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
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
    msg.author.sendMessage("Thanks for using the help command this command will help you know the current commands.c:ping and c:pong are commands used to check if the bot is online.c:say allows you to make the bot say whatever you want it to say.c:calculateadd is an adding calculator.c:8ball is a fun command where you can ask the magic 8 ball a question and it will reply.c:invite makes the bot DM you an invite link to invite the bot to your server. And c:objection, c:holdit and c:takethat are AA commands. c:server gives you every peice of information you need to know about your server,c:date gives you a full date .c:bc allows you to send every user a costum message,and leave and join messages are also available.,c:bot bot info,c:server server info ,do c:dtchannel to delete a text channel,plus an autoresponse system and an antiswear system, do c:add-swear to add one,do c:remove-swear to remove one,and c:remove-all-swears,do c:swears for a list of corrunt added swears, do c:acheive to register an acheivement ")
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
