# gmod-error-url

## How to install
You will need a dedicated server or VDS.

`npm i express`

`npm i discord-webhook-node`

For demonize nodejs process you can use PM2

`npm i pm2 -g`

`pm2 start index.js --name luaerrors`

## Configurate 

IN config.json

webhook - Your discord webhook

img - Webhook avatar

port - your webserver port

route - random it's need for http://localhost:1488/itsroute

## Server gmod

Put `lua_error_url "http://localhost:1488/itsroute"` in the garrysmod/cfg/server.cfg and restart server.

Send lua errors to Discord using webhooks.

![изображение](https://github.com/c0nfusecode/gmod-error-url/assets/55307836/12b610c5-6ec9-4aa6-98d2-557c0aac7fb9)
