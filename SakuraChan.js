// Requires
var TelegramBot = require('node-telegram-bot-api');            

// Token
var token = ''; // Cambiar el token por el token de SakuraTranslate
var bt = require('bing-translate').init({ 
                                        client_id: 'SakuraTranslate_bot', 
                                        client_secret: '' // Token secreto de Sakura en Bing Translate
                                      });

// Inicialización
var sakura = new TelegramBot(token, {polling: true});
console.log("Sakura-chan está funcionando!");

// Start
sakura.onText(/\/start/, function (msg) {
  var fromId = msg.from.id;
  sakura.sendMessage(fromId, "Konnichiwa!");
});

// Japonés a Español
sakura.onText(/\/jp (.+)/, function (msg, match) {
  console.log("Mensaje enviado: ", msg.text); // Debug
  var fromId = msg.from.id;
  var input  = match[1];
  bt.translate(input, 'ja', 'es', function(err, res) { sakura.sendMessage(fromId, "'" + input + "', traducido, significa '" + res.translated_text + "'."); });
});

// Español a Japonés
sakura.onText(/\/esp (.+)/, function (msg, match) {
  console.log("Mensaje enviado: ", msg.text); // Debug
  var fromId = msg.from.id;
  var input  = match[1];
  bt.translate(input, 'es', 'ja', function(err, res) { sakura.sendMessage(fromId, "En japonés, '" + input + "' se escribe " + res.translated_text) });
});

// Repo
sakura.onText(/\/repo/, function (msg) {
  var fromId = msg.from.id;
  sakura.sendMessage(fromId, "https://github.com/JuanjoSalvador/SakuraChan");
});

// Like
sakura.onText(/\/like/, function (msg) {
  var fromId = msg.from.id;
  sakura.sendMessage(fromId, "¡Gracias " + msg.from.first_name + "! ¡A Sakura-chan también le gustas tu!");
});