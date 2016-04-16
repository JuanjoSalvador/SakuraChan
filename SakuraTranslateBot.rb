require 'telegram/bot'

token = 'YOUR TOKEN HERE'

Telegram::Bot::Client.run(token) do |bot|

  bot.listen do |message|
  
    case message.text
    
		  when '/start'
		    bot.api.send_message(chat_id: message.chat.id, text: "Okaeri! Sakura te ayuda a traducir de Japonés a Español y de Español a Japonés.
¿Necesitas ayuda? Prueba con /help.
Creado por @Ironforge")

		  when '/help'
		    bot.api.send_message(chat_id: message.chat.id, text: "Sakura puede traducir Japonés (kanji, hiragana, katakana y romanji) a español, y viceversa.
		    
Para traducir desde japonés, usa el comando /jp, seguido del texto que quieras traducir.
Ejemplo: /jp Konichiwa
		    
Para traducir desde español, usa el comando /esp, seguido del texto que quieras traducir.
Ejemplo: /esp Hola")

			when '/repo'
							bot.api.send_message(chat_id: message.chat.id, text: "El código de Sakura está disponible en GitHub.
http://www.github.com/JuanjoSalvador")

		  end
		  
  end
  
end
