// Requires
var TelegramBot = require('node-telegram-bot-api');
var bing        = require('bing-translate');                    

// Token
var token = ''; // Cambiar el token por el token de SakuraTranslate
bing.init({ 
        client_id: 'SakuraTranslate_bot', 
        client_secret: '' // Token secreto de Sakura en Bing Translate
       });

// Inicialización
var sakura = new TelegramBot(token, {polling: true});
console.log("Sakura-chan está funcionando!");

// Japonés a Español
sakura.onText(/\/jp (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var input  = match[1];
  if (input) {
        bing.translate(input, 'ja', 'es', function(err, res) { sakura.sendMessage(fromId, "La traducción para '" + input + "' es: " + res.translated_text) });
  } else {
        sakura.sendMessage(fromId, "¡Necesito un texto para traducir! Indícamelo con /jp texto");
  }
});

// Español a Japonés
sakura.onText(/\/esp (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var input  = match[1];
  if (input) {
        bing.translate(input, 'es', 'ja', function(err, res) { sakura.sendMessage(fromId, "La traducción para '" + input + "' es: " + res.translated_text) });
  } else {
        sakura.sendMessage(fromId, "¡Necesito un texto para traducir! Indícamelo con /esp texto");
  }
});

// Repo
sakura.onText(/\/repo/, function (msg) {
  var fromId = msg.from.id;
  sakura.sendMessage(fromId, "https://github.com/JuanjoSalvador/SakuraChan");
});
