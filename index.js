const config = require('./config');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const express = require('express');

const hook = new Webhook(config.webhook);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(404).redirect("https://http.cat/404"))
app.post(config.route, (req, res) => {
    var body = req.body
    var embed = new MessageBuilder()
    .setAuthor(`Error from: ${body.realm}`)
    .addField('GM', body.gamemode, true)
    .addField('Addon', body.addon == "0" ? "Not addon" : body.addon, true)
    .setColor('#c76e67')
    .setDescription(`**Error:**\n${body.error}\n**Stack trace:**\n${body.stack == "" ? "Empty" : body.stack}`)
    .setFooter(`Hash: ${body.hash} | os: ${body.os} | gmv: ${body.gmv}`)
    hook.setAvatar(config.img);
    hook.setUsername('Something is creating script errors')
    hook.send(embed);

})

app.listen(config.port, () => console.log(`Starting web-server for glua-errors on ${config.port} port`))