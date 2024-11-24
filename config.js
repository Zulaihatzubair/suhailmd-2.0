const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_08_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWdGRThadnpNUHVBaXBObFFIMit6K2h0ak1VUXpWWW1GclRLWnpueXFUZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDhWaEU0X1RSQS1ydnI3bnRvVmVOZ1wiLFxuICBcInBob25lSWRcIjogXCIwZGY0YThiOC0wMmVkLTQ5YzEtOWU4Mi04YzZjYjhhMmQ1NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgOTMsXG4gICAgICAyNCxcbiAgICAgIDk4LFxuICAgICAgMTQzLFxuICAgICAgNDQsXG4gICAgICAxNjgsXG4gICAgICAyMTksXG4gICAgICAxOTcsXG4gICAgICAxOTIsXG4gICAgICA3MixcbiAgICAgIDE2MixcbiAgICAgIDE0LFxuICAgICAgMTcxLFxuICAgICAgMTAxLFxuICAgICAgMjQ0LFxuICAgICAgMTI2LFxuICAgICAgMTMyLFxuICAgICAgMjA3LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgNjYsXG4gICAgICAyMDgsXG4gICAgICAyMTIsXG4gICAgICAxODQsXG4gICAgICA2NCxcbiAgICAgIDEzMCxcbiAgICAgIDIzOCxcbiAgICAgIDMwLFxuICAgICAgMjcsXG4gICAgICAxNTcsXG4gICAgICA2OSxcbiAgICAgIDIzNixcbiAgICAgIDcwLFxuICAgICAgMTgwLFxuICAgICAgNjAsXG4gICAgICAxNjAsXG4gICAgICAxMzYsXG4gICAgICAxOCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkyMks1U0oyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYyODY1MjUyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTIzMzc3NzgwNzU2NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01UTWxyRUZFTGVyanJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnpLTzAvUnVWRCsyYUpKK2VOMkhSZUtkUlQ5eFlJR3o1K0lGdEFlM2t5TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOOGNFb2FGalJiRHBtZjlQakE4ajh2dUNIMU9LMHkvWXA0WFJ5dElQZmtROGszek1KSHpGY25hTVp3cW5YVjEyWncwSUljbnVESU5UYzVabnNacUdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1dmpkRm5YYnlrMnRod3YxdzNPU1lVSkxzcnUxMnExRzdrd0psSnRlcXR0S3FLSUlzYm9oZ3E3eXYvNXJOYmJBMG1Sd2ZjL1V3b3UrMkdkODd1WXFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyODY1MjUyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQ4MjQ5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
