// Requires
var TelegramBot = require('node-telegram-bot-api');
var translate   = require('./lib/translate');            

// Token
var token = ''; // Cambiar el token por el token de SakuraTranslate

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
  var fromId = msg.from.id;
  var input  = match[1];
  translate({ text: input, source: 'ja', target: 'es' }, function(result) { sakura.sendMessage(fromId, "'" + input + "', traducido, significa '" + result + "'."); });
});

// Español a Japonés
sakura.onText(/\/esp (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var input  = match[1];
  translate({ text: input, source: 'es', target: 'ja' }, function(result) { sakura.sendMessage(fromId, "'" + input + "', traducido, significa '" + result + "'."); });
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
