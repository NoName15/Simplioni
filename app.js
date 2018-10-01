const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")
var prefix = "c:";
bot.on('ready', () => {
  bot.user.setGame('c:help for commands');
  console.log(`Kitilen initilized.`);
  
  bot.on('guildDelete', guild => {
  bot.channels.get("495636254432690177")
const embed = new Discord.RichEmbed()
   .setAuthor(`Nameless Bot left a server ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('Simplioni Bot' , client.user.avatarURL)
           client.channels.get("495636254432690177").send({embed});
}

);
  bot.on('guildCreate', guild => {
    
  bot.channels.get("495636254432690177")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('Simplioni Bot' , client.user.avatarURL)
           client.channels.get("495636254432690177").send({embed});
}

);
     bot.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "c:";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size}**`)
         message.channel.send({embed});

    }
      });
  bot.on('message', message => {
if(message.content.startsWith("c:slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
  bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
             Please Select Your Language
${prefix}help-ar
${prefix}help-en
             
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   bot.on("message", message => {
 if (message.content === "c:help-ar") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
            اختر:
 
##help-gn-ar ⇏ اوامر عامة
##help-ad-ar ⇏ اوامر ادارة السيرفر
             
##help-mu-ar ⇏ اوامر الموسيقى
`)
message.channel.sendEmbed(embed)
 
}
});
 
bot.on("message", message => {
    if (message.content === "c:help-en") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
         
              Chose:
               
   ##help-gn-en ⇏ General commands
   
   ##help-ad-en ⇏ Server management commands
               
   ##help-mu-en ⇏ Music commands
   
   
   `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help-gn-ar") {
     message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
===================== اوامر عامة =====================
##id ➾ معلومات عن حسابك
##ping ➾ سرعة اتصالك بالانترنت
##avatar ➾ يظهر صورة بروفابلك
##server ➾ معلومات عن السيرفر
##bot ➾ معلومات عن البوت
##credit ➾ يظهرلك الكردت حقق
##daily ➾ يومية
##trans [@someone] [number] ➾ لتحويل كردت لشخص اخر
##count ➾ يعرضلك عدد الاشخاص الي بالسيرفر
##short ➾ يختصرلك الروابط
##say ➾ يكرر كلامك
##image ➾ صورة السيرفر
##contact ➾ لمراسله صاحب البوت
##invites ➾ يعرضلك عدد انفايتاتك بالسيرفر
##inv ➾ رابط اذخال البوت
##support ➾ سيرفر الدعم
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
 
 
 
 
   bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help-gn-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== General commands =====================
##id ➾ your informations
##ping ➾ your ping
##avatar ➾ your profile avatar
##server ➾ server informations
##bot ➾ bot informations
##credit ➾ your credits
##daily ➾ your daily credits
##trans [@mention] [number] ➾ to transfer credits for someone
##count ➾ server members without bots
##short ➾ shorten links
##say ➾ repeat your words
##image ➾ server image
##contact ➾ send text to bot owner
##invites ➾ to see your invites
##inv ➾ bot invite link
##support ➾ support server
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help-ad-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر ادارية =====================
##bc ➾ لارسال رساله لجميع الاعضاء
##ban [@mention] [reason] ➾  لحظر شخص من السيرفر
##kick [@mention] [reason] ➾ لطرد شخص من السيرفر
##mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
##unmute [@mention] ➾ لفك الميوت عن عضو
##move [@mention] ➾ لنقل عضو لرومك الصوتي
##ccolors [number] ➾ لصنع عدد من الالوان
##mutechannel ➾ لاقفال الشات
##unmutechannel ➾ لفتح الشات
##clear ➾ لمسح الشات
##role humans [role name] ➾ لعطاء رتبة للاشخاص فقط
##role bots [role name] ➾ لاعطاء رتبة للبوتات فقط
##role [@mention] [role name] ➾ لاعطاء رتبة لعضو
##hchannel ➾ لاخفاء الشات
##schannel ➾ لاظهار الشات
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
   message.author.sendEmbed(embed)
   
}
});
 
bot.on("message", message => {
 var prefix = "c:";
if (message.content === "c:help-ad-en") {
  message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`
         
==================== Management commands =====================
##bc ➾ for massage send message to server members
##ban [@mention] [reason] ➾ to ban someone from the server
##kick [@mention] [reason] ➾ to kick someone from the server
##mute [@mention] [reason] ➾ to mute someone
##unmute [@mention] ➾ to umnute someone
##move [@mention] ➾ to move someone to your channel
##ccolors [number] ➾ to create colors
##mutechannel ➾ to mute chat
##unmutechannel ➾ to ummute chat
##clear ➾ to clear chat
##role humans [role name] ➾ to give role for humans only
##role bots [role name] ➾ to give role for bots only
##role [@mention] [role name] ➾ to give role fo someone
##hchannel ➾ to hide chat
##schannel ➾ to show chat
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
message.author.sendEmbed(embed)
 
}
});
 
 
bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help-mu-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر الميوزك =====================
##play ➾ لتشغيل اغنية
##skip ➾ لتخطي اغنية
##pause ➾ لإيقآف الأغنية مؤقتا
##resume ➾ لتشغيل الاغننية
##vol ➾ لتغير مستوى الصوت 0 - 100
##stop ➾ لاخراج البوت من الروم
##np ➾ لمعرفة الاغنية مشغلة
##queue ➾ قائمة الاغاني
 
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
   message.author.sendEmbed(embed)
   
}
});
 
 
bot.on("message", message => {
    var prefix = "c:";
 if (message.content === "c:help-mu-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== Music commands =====================
##play ➾ to play song
##skip ➾ to skip song
##pause ➾ to pause the song
##resume ➾ To resume the song
##vol ➾ to change the volume 0 - 100
##stop ➾ top remove the bot from room
##np ➾ to show the song that is currently playing
##queue ➾ to see the song list
 
=========================================================
More codes soon
=========================================================
Support server : https://discord.gg/cUgYbEr
`)
   message.author.sendEmbed(embed)
   
}
});
  bot.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('http://live-timely-4jepdssgmc.time.ly/wp-content/uploads/2018/08/welcomeEvents.jpg') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'join-leave') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });
  bot.on('message', message => {  
if (message.author.boss) return;
;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You are not autherized to do this!! ").then(msg => msg.delete(5000));
if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The bot doesnt have enough permissions ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "muted");
if (!muteRole) return message.reply("** Create a role called 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** Mention an user ,Please **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} You have been punished with a text mute for breaking rules!
 
 ${message.author.tag} Punished by
 
[ ${reason} ] : Reason
 
If you believe that this is a mistake, contact a moderator.
`)
.setFooter(`In server : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "muted");
if (!muteRole) return message.reply("** Create a role named 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** Mention a user ,Please **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`Unmuted ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});
  bot.on('message', omar => {
var prefix = "c:";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`Deleted all the roles succesfully!`")
}// omar jedol / Codes
});
  bot.on('message', message => {
    if(message.content == ('c:profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png','./ID2.png','./ID3.png','./ID4.png','./ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
  
  bot.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith('c:role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription(':white_check_mark:** Modified Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription(':white_check_mark:** Modified Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else {
                message.reply(`Name a role`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`Wait...`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`Wait...`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`Wait...`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`Wait...`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`Wait`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`Wait...`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});
  bot.on("message", async message => {
    var prefix = "c:";
    if (message.content.startsWith(prefix + "achieve")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});
  bot.on("message", (Duy0) => {
  if (Duy0.content.startsWith('c:dtchannel')) {
      if (!Duy0.member.hasPermission('MANAGE_CHANNELS')) return Duy0.reply("No can do pal! ``Manage_Channels`` You dont have the permission");
      if(!Duy0.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I cant do that ``Manage_Channels`` I need this permission to do that.");



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
    bot.channels.get("495636254432690177").send({embed:iiMo});
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
  if (msg.content === 'مغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

bot.on('message', msg => {
  if (msg.content === 'عراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

bot.on('message', msg => {
  if (msg.content === 'جزائر') {      
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
  if (msg.content === 'ليبا') {      
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
  if (msg.content === 'صومال') {      
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
  if (msg.content === 'موريطانبا') {      
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
            .setTitle("**「  Date 」 **")
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
