var i = 0;
var txt = 'И вновь нерептилоид пожаловал('; 
var speed = 60; 
var textVariants = ['Кхм... Ты что-то сказал?','Ай донт андерстунд человеческий лангуаге','Ваш образ жизни напоминает наш... Но почему вы до сих пор не вымерли?','Я всего-лишь программа, написанная на трёх языках...','*звуки рёва рептилий*','С Днём Рождения...','Вы начинаете читать фразу, чтение которой вы уже заканчиваете'];

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("msg-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(
typeWriter,700);

  function typeWriterMassive() {
    txt = textVariants[Math.floor(Math.random()*textVariants.length)];
    i = 0;
    document.getElementById("msg-text").innerHTML = "";
    document.getElementById("inputText").value = "";
    typeWriter();
  }