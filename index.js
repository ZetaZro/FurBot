
/////Programado Por GenericDev#9111 necesitas asistencia mandame un Dm Al Discord
/////De paso gracias por usar mi codigo aunque sea de referencia

const Discord = require("discord.js");

//const yiff = require("yiff_api");

const yiffupdate = require("yiff");

const pornhub = require('@justalk/pornhub-api');

const Booru = require('booru');

const token = "Tu Token Aqui";

const fs = require("fs");

const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource
} = require('@discordjs/voice');



////////////
const { createCanvas, loadImage } = require('canvas')
const mergeImages = require('merge-images');
const { Console } = require("console");
////////////

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES","GUILD_MEMBERS","GUILD_PRESENCES","GUILD_VOICE_STATES"], partials: ["CHANNEL"] });




///////////(7w7)
/*var y = new yiff.yiff()
var e6 = new yiff.e621()*/
const s = setTimeout;
//////////////////////////////////
client.on("ready", async () => {
  client.user.setActivity("T!ayuda", { type: 'PLAYING' });

  console.log("El bot a sido iniciado con Exito")
})

///////////////////////////////////////////Funciones
function argumentos(args,cmd){
  const testguardar = []
  var prefix = "T!"
  var number = 0
  for (var val of args){
    if (val == prefix + cmd){
      console.log("Se salta la primera palabra  ")
      continue
 
    }
  testguardar.splice(number,0,val)
  number =+ 1
  }
  
  return testguardar
}
function delay(time) {  
  return new Promise(resolve => setTimeout(resolve, time));
}
/////////////////////////////////////////////////////////////
client.on("guildBanAdd", async (guild, user) => {
  console.log(`a member is banned from a guild`);
  const despedidas = client.channels.cache.get("")
  despedidas.send(`${user.tag} C Fue Baneado`)
  despedidas.send({ files: ["./Archivos/Banned.mp4"] })
})

client.on('guildMemberRemove', function(member) {
  console.log(member.user.username)
  const despedidas = client.channels.cache.get("")
  despedidas.send(member.user.tag + " c fue del server")
  ///
  const canvas = createCanvas(720, 720)
  
  const ctx = canvas.getContext('2d')

  const { Client, Intents, MessageAttachment } = require('discord.js');
  
  loadImage('./Archivos/BackGround.png').then((image) => {
    //Remplazar message.author.avatarurl por la persona por q si
    loadImage(member.displayAvatarURL().replace('webp','png')).then((img) =>{

      ctx.drawImage(img,500,150,100,100)

      loadImage('./Archivos/Grabby.png').then((image) => {
    
        ctx.drawImage(image, 420  , 0, 300, 250)
      
        loadImage("./Archivos/Trash.png").then((img => {

          ctx.drawImage(img,320,420,360,360)

          const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
          despedidas.send({ files: [attachment] });
    
        }))
      })

    })
  })
  /////despedidas.send({ files: ["./Archivos/leave.mp4"] })
  ////https://images.gamebanana.com/img/ss/mods/60e3e3593d779.jpg
});



client.on('guildMemberAdd', member => {
const bienvenidas = client.channels.cache.get("")

  bienvenidas.send("Bienvenido/a " + member.user.toString() + " al server lee las reglas y pasala bien")

  const canvas = createCanvas(300, 250)

  const ctx = canvas.getContext('2d')

  const { Client, Intents, MessageAttachment } = require('discord.js');

  loadImage('./Archivos/BackGround.png').then((image) => {
    
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#" + randomColor)
    ctx.fillStyle = "#" + randomColor
    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.drawImage(image, 0, 0, 300, 250)

    
    //Remplazar message.author.avatarurl por la persona por q si
    loadImage(member.displayAvatarURL().replace('webp','png') ).then((img) =>{

      ctx.drawImage(img,100,50,100,100)

      loadImage('./Archivos/B.png').then((image) => {
        ctx.drawImage(image, 0, 0, 300, 250)
      
        const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        bienvenidas.send({ files: [attachment] });
  
      })

    })
  })
  ///bienvenidas.send({ files: ["./Archivos/Bienvenida.mov"] })

console.log(member.user.tag)
});

let points = JSON.parse(fs.readFileSync("./UserData.json", "utf8"));

//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on("messageCreate", message => {
  var prefix = "T!"
  const yiffupdateMain = new yiffupdate();
  
  if (!message.content.startsWith(prefix) ) return

 //const promise1 = Promise.resolve(y.gay());*/
  const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase();
  // 
  if(!points[message.author.id]) points[message.author.id] = {
   coins: 0
 };
let userData = points[message.author.id];

if (cmd === "leaderboard"){
  function lista() {
    console.log(points)
    const embedprueba = {
      title: "lista de personas con dinero",
      description: "n1 "
    };
    message.channel.send({ embeds: [embedprueba] });
  }
  lista()
}

  if (cmd === "caja"){
    message.channel.send("insertar imagen de caja")
    message.channel.send("Has recibido · Nombre de bate ·")
    
  }
  
  if (cmd === "talkinvc"){
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator
  })

  const player = createAudioPlayer()
  const resource = createAudioResource('./Archivos/nobbo.mp3')

  connection.subscribe(player)

  player.play(resource)
  }


  if (cmd === "holdit"){
    message.delete().catch((err => (console.log(err))))
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator
  })

  const player = createAudioPlayer()
  const resource = createAudioResource('./Archivos/Holdit.mp3')

  connection.subscribe(player)

  player.play(resource)
  }


  if (cmd === "readtextfile"){
    
    let points = JSON.parse(fs.readFileSync("./UserData.json", "utf8"))

    message.channel.send(points).catch((err) => { message.channel.send("¡Error! ",err) })
  }

  if (cmd === "coins"){
    message.channel.send(`${message.author} Tienes ${userData.coins } Coins`)  
   }

  if (cmd === "ruleta"){
    const testguardar = []
    const emiji = ["😳","😂","🤣","😎","😈","👌"]
    var number = 0
    for (var val of args){
      if (val == prefix + cmd){
        console.log("Se salta la primera palabra  ")
        continue
   
    }

    testguardar.splice(number,0,val)
    number =+ 1
    }
    
    const pb = Math.floor(Math.random() * testguardar.length);

    console.log(testguardar)
    console.log("---------------------------")

    message.channel.send("Girando La Ruleta").then((botmensj => {
      delay(25000).then(botmensj.edit("Girando La Ruleta ."))
      delay(35000).then(botmensj.edit("Girando La Ruleta . ."))
      delay(40000).then(botmensj.edit("Girando La Ruleta . . ."))

      if (testguardar[pb] == undefined){
        delay(65000).then(botmensj.edit("No puedo decidir no hay argumentos"))
        delay(65000).then(botmensj.react("😢") )

      }else{
        
      delay(65000).then(botmensj.edit("Mi Respuesta Es " + testguardar[pb]) )
      delay(65000).then(botmensj.react(emiji[Math.floor(Math.random() * emiji.length)]) )

      }
    }))
  }
  if (cmd == "emo") {
    console.log("iniciao")
    var x = 100

    var yimg = 0

    if (!args[2])
    {
      yimg = 0
    }else
    {
      yimg = args[2]
    };

    if (!args[1]){
      x = 100
      
    }else{
      x = args[1]
    };
    const canvas = createCanvas(720, 720)

    const ctx = canvas.getContext('2d')
    const { Client, Intents, MessageAttachment } = require('discord.js');
      loadImage(message.author.avatarURL().replace('webp','png') ).then((img) =>{
  
        ctx.drawImage(img,0,0,720,720)
  
        loadImage('./Archivos/emo.png').then((image) => {
          ctx.drawImage(image, x, yimg, 500, 500)

          const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

          message.channel.send({ files: [attachment] });
    

        })
  
      })
/*    message.channel.send({ files: ["./Archivos/Perro.mov"] })
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })*/
  }
  ////////////////////------------------------inicio de la zona nsfw-------------------------------///////////////////////////
if (cmd === "r34"){
  if (message.channel.nsfw){
    Booru.search('rule34.xxx',[args[1]],{limit: 1 , random: true}).then(function(r34result){
      message.channel.send("Creador : " + r34result[0].data.owner).catch((err) => { message.channel.send("No tiene Owner?") })
      message.channel.send(r34result[0].fileUrl)
    }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrads correctamente") })
   }else{
     message.channel.send("no pos estas en un canal sfw")
   }
}
 if (cmd === "ph"){
   if (message.channel.nsfw){
    pornhub.search(args[1]).then(function(phresult){
      var phtestresult = phresult.results[Math.floor(Math.random()* phresult.results.length)]
      message.channel.send("bueno eeh aca ta :flushed:\n\n Creador : " + phtestresult.author)
      message.channel.send(phtestresult.link)
    }).catch((err) => { message.channel.send("Error al recibir la info") })
   }else{
     message.channel.send("no pos estas en un canal sfw")
   }
 }
  if (cmd === "e621") {
    if (message.channel.nsfw) {
      const tags = [args[1],args[2],args[3],args[4],args[5]]
      console.log(tags.join(" "))
     yiffupdateMain.e621(tags.join(" "),1).then(function(result) {
     console.log(result) 
     message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
     if (result[0].file.ext == "webm"){
       message.channel.send(result[0].file.url.replace("webm","mp4" ))

     }else{
            
     message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
     }

     message.delete()//.catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
      }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrados correctamente") })
      
    } else {
      message.channel.send("no pos estas en un canal sfw")
    }
  }

  if (cmd === "rg") {
      if (message.channel.nsfw) {
      
     yiffupdateMain.e621("Gay",1).then(function(result) {
     console.log(result) 
     message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
     if (result[0].file.ext == "webm"){
       message.channel.send(result[0].file.url.replace("webm","mp4" ))

     }else{
            
     message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
     }

     message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
      }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrados correctamente") })
      
    } else {
      message.channel.send("no pos estas en un canal sfw")
    }
  }
  if (cmd === "rbut") {
    if (message.channel.nsfw) {
      
      yiffupdateMain.e621("Butt",1).then(function(result) {
      console.log(result) 
      message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
      if (result[0].file.ext == "webm"){
        message.channel.send(result[0].file.url.replace("webm","mp4" ))
 
      }else{
             
      message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
      }
 
      message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
       }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrados correctamente") })
       
     } else {
       message.channel.send("no pos estas en un canal sfw")
     }
  }

  if (cmd === "ramp") {
    if (message.channel.nsfw) {
      
      yiffupdateMain.e621("andromorph",1).then(function(result) {
      console.log(result) 
      message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
      if (result[0].file.ext == "webm"){
        message.channel.send(result[0].file.url.replace("webm","mp4" ))
 
      }else{
             
      message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
      }
 
      message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
       }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrados correctamente") })
       
     } else {
       message.channel.send("no pos estas en un canal sfw")
     }
  }

  if (cmd === "rgyn") {
    if (message.channel.nsfw) {
      
      yiffupdateMain.e621("gynomorph",1).then(function(result) {
      console.log(result) 
      message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
      if (result[0].file.ext == "webm"){
        message.channel.send(result[0].file.url.replace("webm","mp4" ))
 
      }else{
             
      message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
      }
 
      message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
       }).catch((err) => {message.channel.send("Los tags no pudieron ser encontrados correctamente") })
       
     } else {
       message.channel.send("no pos estas en un canal sfw")
     }
  }
  ////////////////////------------------------fin de la zona nsfw-------------------------------///////////////////////////
  if (cmd === "borrareveryone"){
    if(message.channel.type === "dm"){
      if (!message.member.roles.cache.has('865397856662716427')) {
        return message.reply('No Puedes Usar Esta Comando Razon Permisos no suficientes')
      
    }
    else{
      channel.messages.fetch({ limit: 500 }).then(msg => {
        console.log(`Received ${msg.size} messages`);
        //Iterate through the messages here with the variable "messages".
        msg.forEach(msg => console.log(msg.content))
        if(msg.content.startsWith("@everyone")){
          msg.delete} })
    }
    }else{
      message.channel.send("error no se puede hacer esta accion")
    }
  }
  if (cmd === "comandosecreto") {
    message.channel.send("https://www.youtube.com/watch?v=Cene-YQKQhs")
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
  }
  if (cmd === "comandoparamandarnsfwencualquierladolol") {
    yiffupdateMain.e621("Bulge",1).then(function(result) {
      console.log(result) 
      message.channel.send("Artista/s: " + result[0].tags.artist[0]).catch((err) => { message.channel.send("Artista no especificado") })
      if (result[0].file.ext == "webm"){
        message.channel.send(result[0].file.url.replace("webm","mp4" ))
 
      }else{
             
      message.channel.send(result[0].file.url).catch((err) => { message.channel.send("intenta de nuevo y si no funciona pos sad") })
      }
 
      message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
       }).catch((err) => {message.channel.send(" ") })
  /*  y.bulge().then(function(result) {
      message.channel.send("Descubriste el comando de paso")
      message.channel.send("El creador de ese arte es " + result.artists0)

      message.channel.send(result.shortURL)
    });
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })*/
  }
  if (cmd === "sugerencia"){
    message.channel.send("Sugerencia Enviada")
    message.channel.messages.fetch(message.id)
    .then(msg => {
      client.users.fetch('429731165642031104', false).then((user) => {
        const args = msg.content.trim().split(' ');
        args.shift();
        user.send('Sugerencia De ' + message.author.tag + " " + args.join(' '));
       });
    })

  }

  if (cmd === "unfurro") {
    message.channel.send("Jaja no soy un furro");
    delay(2000).then(() => message.channel.send("Espera un segundo"));
    delay(5000).then(() => message.channel.send("SI SOY UN FURRO NOooOoOooOoOoOoO"));
  }

  if (cmd === "llamar") {
    message.channel.send("llamando al owner")
    delay(5000).then(() => message.channel.send("no c pudo :pensive:"))

  }

  if (cmd === "ayuda") {

    const comandos = {
      title: ('Comandos'),
      description: ("prefix = T! \n\n ruleta = Dile algunas palabras y selecionara una de ellas \n\n emo = te vuelve emo con una calidad de 720x720 / uso : T!emo posX(opcional),posY(opcional)\n\n tabien = tabien :thumbsup:  \n\n look = :O *lo apunta*\n\n borrareveryone = uso T!borrareveryone  / Basicamente borra los everyone tan molestos pero los pings no se quitan :Pensive: \n\n Sugerencia = Enviar Una Sugerencia al creador Para El Bot \n\nAvatar = Consigue el avatar del usuario con el @ o ponlo solo para tu imagen  \n\nmatarpup = mata a un pup de kaiju paradise  \n\n laroca = la roca  \n\ninfo = muestra info del bot \n\ncomandos nsfw \n [ ||  \n\nrg = Random gay  \n\nrb = random bulge  \n\nrbut = culo .3. \n\nrsyn = random synormorph  \n\nramp = random andromorph \n\ne621 = buscar cosas turbias [hasta 4 argumentos separados por espacio] \n\n ph = tu ya sabe ( ͡° ͜ʖ ͡°) [solo 1 argumento :Pensive:] \n\n r34 = rule 34 po [1 argumento por q lazy]||\n  ]  \n\nesos son los commandos por ahora ")
    };

    message.channel.send({ embeds: [comandos] });
  }

  if (cmd === "info") {
    const info = {
      title: ('info'),
      description: ("Bot hecho por GenericDev#9111 \n c puede morir en algunos momentos")
    };
    message.channel.send({ embeds: [info] });
  }

  //////////////////////////////////////////////////////////////
  if (cmd === "look"){
    const canvas = createCanvas(300, 250)

    const ctx = canvas.getContext('2d')
  
    const { Client, Intents, MessageAttachment } = require('discord.js');
    loadImage('./Archivos/BackGround.png').then((image) => {
      
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      console.log("#" + randomColor)
      ctx.fillStyle = "#" + randomColor
      ctx.fillRect(0,0,canvas.width,canvas.height)
  
      ctx.drawImage(image, 0, 0, 300, 250)
  
      
      //Remplazar message.author.avatarurl por la persona por q si
      loadImage(message.author.avatarURL().replace('webp','png') ).then((img) =>{
  
        ctx.drawImage(img,100,50,100,100)
  
        loadImage('./Archivos/B.png').then((image) => {
          ctx.drawImage(image, 0, 0, 300, 250)
        
          const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
          message.channel.send({ files: [attachment] });
    
        })
  
      })
    })
  }
  if (cmd === "hater"){
    const canvas = createCanvas(720, 720)

    const ctx = canvas.getContext('2d')
  
    const { Client, Intents, MessageAttachment } = require('discord.js');
    loadImage('./Archivos/LosHatersDe.png').then((image) => {
      
  
      ctx.drawImage(image, 0, 0, 720, 720)
  
      
      //Remplazar message.author.avatarurl por la persona por q si
      loadImage(message.author.avatarURL().replace('webp','png') ).then((img) =>{
  
        ctx.drawImage(img,485,0,250,250 )

          const attachment = new MessageAttachment(canvas.toBuffer(), 'losHaters de ' + message.author.username + '.png');
          message.channel.send({ files: [attachment] });
      })
    })
  }
  if (cmd === "tabien") {
    let thePerson = message.mentions. users.first() || message.author;
  const canvas = createCanvas(720, 720)

  const ctx = canvas.getContext('2d')

  const { Client, Intents, MessageAttachment } = require('discord.js');
  loadImage(message.author.avatarURL().replace("webp","png")).then((img => {


    ctx.drawImage(img,0,0,720,720)

    loadImage("./Archivos/Mano.png").then((img => {


      ctx.drawImage(img,420,420,250,250)
      const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
      message.channel.send({ files: [attachment] });
    }))
  }))


    /*   const avatar = thePerson.displayAvatarURL({format: "png"})
let b64 =  mergeImages(['./Tabien.png,avatar'], { Canvas: Canvas, Image: Image });
message.channel.send(({ files: [{ attachment: Buffer.from(b64, 'base64'), name: `avatar.png` }] }))*/
  }

  if (cmd === "avatar") {
    let thePerson = message.mentions.users.first();
    if (!(thePerson || args[1])) {
      message.channel.send("Uso T!avatar <numeros> o @usuario")
    }
    else if ((thePerson || args[1])) {

      if (!thePerson) {
        let argumentoget = client.users.fetch(args[1]);
        argumentoget.then(function(result1) {
          const embedavatarid = {
            title: ('El Avatar Es'),
            image: {
              url: result1.displayAvatarURL(),
            },
          }
          message.channel.send({ embeds: [embedavatarid] })
        }).catch((err) => { message.channel.send("usuario no encontrado") });

      } else {
        const exampleEmbed = {
          title: ('El Avatar Es'),
          image: {
            url: thePerson.avatarURL(),
          },
        };
        message.channel.send({ embeds: [exampleEmbed] });

      }
    }
  }
  /* if (cmd === "imagen"){
    const client = new imageSearch("d4214b8fa73c53352", "AIzaSyDZF7j76tLEB-X1QukVN54Bw1bah8Y7Vi8") 
    const resultados = client.search(args[1]).catch((err) => { message.channel.send("¡Error! Imagen no encontrada o no hay un argumento") })
    const respuestas = resultados.length 
    var test = [Math.floor(Math.random()* resultados.length)]
    console.log(resultados)
     message.channel.send("Prueba uwu");


    
  /*  client.search(args[1]).then(function(result){
      
      message.channel.send(result[0].url).catch((err) => { message.channel.send("¡Error! Imagen no encontrada") })
    }).catch((err) => { message.channel.send("¡Error! Imagen no encontrada") }) 
  }*/


  //////////////////////////////////////////////////////////////
  if (cmd === "matarpup") {
    function matargooPup() {
      var images1 = [];
      images1.push({ url: "https://t3.rbxcdn.com/cc7de2857af808fc79ee84515eafc424", description: "Bate Dorado" });

      images1.push({ url: "https://cdn.discordapp.com/attachments/896201510294257727/896451304195510272/LastCorridor.png", description: "Baiteo al pup para que sans lo balase con sus gaster blasters" });

      images1.push({ url: "https://cdn.discordapp.com/attachments/896201510294257727/896447574721056798/EA.png", description: "Cachetada" });

      images1.push({ url: "https://cdn.discordapp.com/attachments/896431921473675275/908893134744854548/Muerte.png", description: "/kill Pup" });

      images1.push({ url: "https://cdn.discordapp.com/attachments/896431921473675275/908895092390113341/Uzi.png", description: "UZI GIGANTE 😳" });

      images1.push({ url: "https://t3.rbxcdn.com/cc7de2857af808fc79ee84515eafc424", description: "ZZZ" });

      images1.push({ url: "https://cdn.discordapp.com/attachments/896431921473675275/908897738652020826/Venom.png", description: "Veneno para Pups" });

      var index1 = Math.floor(Math.random() * images1.length);
      const embedprueba = {
        title: message.author.username + " Uso " + images1[index1].description + " Para Matar a un Pup",
        image: {
          url: images1[index1].url,
        },
      };
      message.channel.send({ embeds: [embedprueba] });
    }
    var coinsgained = Math.floor(Math.random() * 400)
    
    console.log(coinsgained)
    userData.coins = userData.coins + coinsgained
    console.log(userData.coins)
    fs.writeFile("./UserData.json", JSON.stringify(points), (err) => {
      if (err) console.error(err)
    });
matargooPup();

message.channel.send("Ganaste " + coinsgained + " Coins")

}
  ////////////////////////////////////////////////////////////// Comandos Basicos
  if (cmd === "laroca") {
    message.channel.send("https://tenor.com/view/rock-one-eyebrow-raised-rock-staring-the-rock-gif-22113367")
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
  }
  if (cmd === "amimir") {
    message.channel.send("a mimir")
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
  }
  if (cmd === "novos") {
    message.channel.send("No Vos")
    message.delete().catch((err) => { message.channel.send("no c puede eliminar mensaje aca") })
  }
})



client.login(token)
