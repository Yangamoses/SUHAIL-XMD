const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23276834241";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_21_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUm9sQ1AvTzRVYUczaWRQOHIxUnZoZGExdW9LRW9UV3FSejZpUjZudkFHVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVJ2TXVDRThSYk9kdnQ5QXlXR0U0Z1wiLFxuICBcInBob25lSWRcIjogXCI1Yjk3ZTlhYS1iOWZjLTQ2ZWYtYWVhNy02MzM4Y2EwZDYxY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMzIsXG4gICAgICA2MCxcbiAgICAgIDE4NyxcbiAgICAgIDE2MCxcbiAgICAgIDYwLFxuICAgICAgMTY5LFxuICAgICAgMTExLFxuICAgICAgOTcsXG4gICAgICAxNzYsXG4gICAgICA1NixcbiAgICAgIDIzMixcbiAgICAgIDgyLFxuICAgICAgMjE0LFxuICAgICAgMTYsXG4gICAgICAzMyxcbiAgICAgIDE3MSxcbiAgICAgIDIyMixcbiAgICAgIDI0NixcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxODgsXG4gICAgICAxMjAsXG4gICAgICAyMDUsXG4gICAgICAxMDIsXG4gICAgICAxNjIsXG4gICAgICAxMjYsXG4gICAgICA3OSxcbiAgICAgIDE3OSxcbiAgICAgIDg4LFxuICAgICAgMTI5LFxuICAgICAgMTMyLFxuICAgICAgNjgsXG4gICAgICA1NixcbiAgICAgIDIzNyxcbiAgICAgIDk1LFxuICAgICAgMSxcbiAgICAgIDEwMSxcbiAgICAgIDExLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMyRVFTQTJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzI3NjgzNDI0MTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQE1vc2Vzb25cIixcbiAgICBcImxpZFwiOiBcIjEwMDg5MzM0NTIzMTA4Mjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tqL3VXd1E4T1BEdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXA1QTBEZmRkOFErdmQ2UmhkNHJ3dERnYzFtSGIzejdBY1N0dlF0Y2pURT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXdVFBenpsRldKWVRMR0JSYTBUZlQ3ODhPcHRBRkY5WmxNa0dna2VCYjkxTTQwMzQxVlc1SDh4UzMzallKQTJ4ckMveUZYZHcwRkY0dThzblZ3WHBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJveXpqL0MxcEtPN0plbGlwTTJBdWNmVWFmdFMrcC9UR0FDYmVJcVZ4YXYySzYzeW9leGJ5TEphRUZFbTVEdVhZMTRicXJoWFFjSWhUenNlOEk2dFFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI3NjgzNDI0MTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzNTgwNjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
