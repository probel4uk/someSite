$(document).ready(function(){
    
/*
Домашнее задание к 98-му уроку.

Перед Вами стоит две задачи:

1. Добавить проверку e-mail адреса с помощью регулярного выражения (см. ниже). 
Проверка должна осуществляться в момент ухода из поля для ввода e-mail (событие blur). 
В случае если e-mail соответствует регулярному выражению, то подсветить поле зеленой рамкой, 
если  не соответсвует, то красной, а если в поле находится значение по умолчанию, то серой. 
При этом надо оставить ту функциональность, при которой в случае пустого ввода 
возвращается значение по умолчанию.

Рег выражение для проверки e-mail:
[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}

2. Запретить повторную отправку формы., т.е. после однократного нажатия кнопки "Отправить заявку", 
она должна блокироваться.
*/

var myEmail = $('#email');
var regV=/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
myEmail.focus(function(){
    if($(this).val() == $(this).attr('Value')){
        $(this).val("");
        
    };
    
});

myEmail.blur(function(){
    var userEmail = $(this).val()
    if(userEmail == ""){
        $(this).val($(this).attr('Value'));
        $(this).css('border', '2px solid #808080');
    }
    else if(userEmail.search(regV) == -1){
        $(this).css('border', '2px solid #cc0000');
    }
    else {
        $(this).css('border', '2px solid green');
    }
    
});

$('#my_button').click(function(){
    $(this).attr('disabled','disabled');
    $(this).attr('value', 'Отправляю...');
    })


$('#motoSelect').change(function(){
   var mySelect = $('#motoSelect :selected').val();
    if(mySelect == 4){
        $('#bag').attr('disabled','disabled' );
        $('label[for=bag]').css('color', '#cc0000');
    }
    else {
      $('#bag').attr('disabled',false );  
      $('label[for=bag]').css('color', '#646464')
    }
})


/*
Домашнее задание к 97-му уроку.

Щелкните в адресную строку своего браузера и нажмите enter, 
чтобы  страница тестового сайта полностью обновилась. 

Показателем обновления будет то, что в поле для ввода e-mail 
вы должны увидеть текст: "Пример: you@site.ru"
Это значение по умолчанию, и оно стоит там за счет атрибута value="Пример: you@site.ru", 
который есть у этого текстового поля.

Наша задача состоит в том, чтобы, когда пользователь встает в это поле, оно очищалось.
Но очищалось не всегда, а только если в поле находится значение по умолчанию 
т.е. "Пример: you@site.ru"


var myEmail = $('#email')
myEmail.focus(function(){
    if($(this).val() == $(this).attr('Value')){
        $(this).val("");
    };
    $(this).addClass('forEmail');
});

myEmail.blur(function(){
    if($(this).val() == ""){
        $(this).val($(this).attr('Value'));
    };
    $(this).removeClass('forEmail');
});
*/


/*
$('#motoSelect').change(function(){
   var myChoise = $('#motoSelect :selected').val();
    if(myChoise ==1){
    $('#daysSelect').html('<option value="1">1</option><option value="2">2</option>');
    }
    else  if(myChoise ==2){
    $('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');
    }
    else  if(myChoise ==3){
    $('#daysSelect').html('<option value="1">1</option>');
    }
    else {
    $('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');
    }

});
*/

/* 
$('#my_form').submit(function(eventObject){
   if($('#email').val() == "") {
    eventObject.preventDefault();
    alert('Вы не заполнили поле email!')
   };
    
}); 
*/
 
 
 
 /* 95
 $(':checkbox:checked').each(function(){
    alert($(this).val());
 });
 */
 
 /*   
$('#checkButton').click(function(){
    $('#mytextarea').val('Наше значение');
})
*/

/*

$('#my_form :checkbox:checked').fadeOut(3000);

###Создание выборок для элементов форм###
:input - выбирает все элементы, которые влияют на ввод данных в форме
:text - поля ввода, которые созданы как <input type="text"...
:password - поля ввода, которые созданы как <input type="password"...
:radio - поля ввода, которые созданы как <input type="radio"...
:checkbox - поля ввода, которые созданы как <input type="text"...
:submit - поля ввода, которые созданы как <input type="checkbox"...
:image - поля ввода, которые созданы как <input type="image"...
:reset - поля ввода, которые созданы как <input type="reset"...
:botton - поля ввода, которые созданы как <input type="botton"...
:file - поля ввода, которые созданы как <input type="file"...
:hidden - поля ввода, которые созданы как <input type="hidden"...
:checked - выбирает отмеченые радиокнопки и чекбоксы(писать нужно слитно!!!, если  охото добавит к радио или к чекбокусу)
:seleckted - выбирает активные элементы селекта
*/


/*
Домашнее задание к 91-му уроку.

Сделать так, чтобы во время нажатия кнопки отправки формы с id="#my_button", 
появлялось сообщение с вопросом: "Вы подтверждаете правильность ввода данных?" 
В этом окошке должны быть кнопки "OK" и "Отмена".

Если человек нажмет "Ок" то форма отправляется как положено, а если нажмет "Отмена", 
то форма  не отправляется.

Подсказка: для задания вопроса используйте метод confirm()

$('#my_button').click(function(elementObject){
    var userAns = confirm('Вы подтверждаете правильность ввода данных?');
    if (!userAns){
        elementObject.preventDefault();
    }
});

*/

/*
###Информация из объекта события ####
pageX
pageY
screenX
screenY
altKey
shiftKey
ctrlKey
target -какой обект отреагирует на событие
*/

/* 91
$('#superlink').click(function(eventObject){
    eventObject.preventDefault(); // Отменить то что делается по умолчанию( можно написать return false)
    $('#forresults').append('<p>Вместо перехода по ссылке добоавлен этот обзац </p>');
});
*/

/* 90
$('#div_for_img').click(function(eventObject){
    alert('Была ли нажата клавиша альт: ' + eventObject.altKey);
});
*/


/* 89 ПОВТОРИТЬ У ЫТЕПСКЕ!!!!

$('#moto_table tr').hover(function(){
    $(this).addClass('svet')
},function(){
    $(this).removeClass('svet')    
}); //hover - Тоже самое что и 88 только одним событитем
*/

$('#formHide').click(function() {
    $('#my_form').toggle('blind');
    
});

/*

$('#formHide').click(function(){
     if ($(this).text()=='Свернуть форму'){
    $('#my_form').fadeOut(1000);
    $(this).text('Развернуть форму');
    
}
else {
    $('#my_form').fadeIn(1000);
    $(this).text('Свернуть форму');
   
}
  
})
*/
/* Мой вариан 2(первый с заменой по содержанию)
$('#formHide').click(function(){
    $('#my_form').fadeOut(1000);
    $('#formShow').fadeIn(1000);
    $('#formHide').hide();
});
$('#formShow').hide().click(function(){
    $('#my_form').fadeIn(1000);
    $('#formHide').fadeIn(1000);
    $('#formShow').hide();
})
*/

/* Вариант 3
var i = 0;
$('#formHide').click(function(){
    if(i==0){
    $('#my_form').fadeOut(1000);
    $(this).text('Развернуть форму');
    i=1;
}
else {
    $('#my_form').fadeIn(1000);
    $(this).text('Свернуть форму');
    i=0;
}
});
*/

/*
Второе домашнее задание к 88-му уроку.

Вам нужно написать обработчик события, который будет подсвечивать 
строку таблицы (id="moto_table"), на которую навели курсор мыши 
вот таким цветом: #1F233C, а текст будет делать белым.

Подсказка: если нет идей, как решить данную задачу, то повторите урок 77.

var svetTr = $('#moto_table tr');
svetTr.mouseover(function(){
    $(this).addClass('svet')
    });    

svetTr.mouseout(function(){
    $(this).removeClass('svet')    
});

*/


/*
Первое домашнее задание к 88-му уроку.

Напишите обработчик события, который делает следующее.
При клике мышью на любом из названий мотоциклов в этом блоке:
<ol id="moto_models">
        <li>Харлей Дэвидсон</li>
        <li>Кроссовый мотоцикл</li>
        <li>Гоночный мотоцикл</li>
        <li>Концептуальный мотоцикл</li>
 </ol>

У Вас в таблице с id="moto_table" должна появляться новая строчка, 
в которой плавно появляется текст из элемента, по которому кликнули.

$('#moto_models li').click(function(){
   var myText = $(this).text()
    $('#moto_table tbody').append('<tr><td>'+ myText+ '</td><td>25000</td></tr>');
});

*/


/* 88
$('#div_for_img img').click(function(){
   var moto = $(this).clone();
   $('#forresults').append(moto);
});
*/


/*
$('#forheader img').click(function(){
    alert('Вы кликнули по шапке');
});

$(window).scroll(function(){
    alert('Произошло событие прокрутки окна');
});
*/


/* 87
var myMoto = document.getElementById('img_1'); // отбор в традиционном джаваскрипте
function motoClick(){
    alert("Ширина картинки" + myMoto.width);

}
myMoto.onclick = motoClick;
*/



/*
#######События мыши:#########
mouseover - навели мышкой
mouseout - увели мыышку
click
dblclick
mousemove - движение мышкой
mousedown - нажали мышкой но не отпускаете
mouseup -  отпустьили мышку

Событие формы:

submit - отправка
focus - поле выбрано
blur - поле потеряло вокус
change - изменение
reset - сброс формы

События клавиатуры:
keypress - нажатие клавиши на клаве
keyout - нажали и не отпускаем клавишу
keyup - отпустили

События окна браузера:
load - загрузка страницы
resize - изменеие ширины браузера
scroll
unload 
*/




/* 83
//$('img[width=200], a[href*=document]').fadeOut(5000);//выбор разнотипных через за');
$('img[alt]').fadeOut(5000);// выбирает все картинки у которых есть атрибут альт
*/

/*82
//var myDiv = $('#div_for_img').clone(); //клонирование обекта
//$('#my_form').after(myDiv);

var myForm = $('#my_form').remove(); // Удаляет майформ со страницы, но сохроняет ее в переменную
$('#moto_table').before(myForm);
*/

/* 81
var myDiv = $('div').size(); // считает количество элементов в выборке
var myDiv = $('div').get(0); //выберает определенный объект
alert(myDiv);
*/


/*
Домашнее задание к 80-му уроку.

Ваша задача перебрать все картинки нашей страницы и добавить красную 1px рамку тем из них, 
у которых в атрибуте title встречается буква "т", а высота больше 50, но меньше 100.

$('img[title*= т]').each(function(){
   if ($(this).height()>50 && $(this).height()<100 ) {
    $(this).css({'border' : '1px solid #cc0000'});
   }
    
    
});
*/

/* 80
$('img').each(function(){
    if ($(this).width()>400){
    $(this).fadeOut(3000); //отбор по условию. $(this) - объект цикла.
}

});
*/
    
/*
Домашнее задание к 79-му уроку.
$('body').append('<p id="newparagraph"> Новый абзац с любым текстом и дать этому абзацу</p>');    
  $('#newparagraph').css({
    'color': '#FFFFFF',
    'background-color': '#000000'
    });  
    
var  myDiv =$('#div_for_img').css({'border': '2px solid #cc0000'})
myDiv.before('<p> Данный обзац вставлен с помощью метода before</p>');
myDiv.after('<p> Данный обзац вставлен с помощью метода after</p>');
myDiv.prepend('<p> Данный обзац вставлен с помощью метода prepend</p>');
myDiv.append('<p> Данный обзац вставлен с помощью метода append</p>');
*/


/*
Домашнее задание к 78-му уроку.


$('#img_2').css({'border':'1px solid #333333'}).animate({'borderWidth':'5px'}, 5000).fadeOut(5000);

*/

/* 78
$('#main_h1').css({'border' : '2px solid #cc0000'}).animate({'paddingTop': '70px'}, 5000, function(){
    alert('Готово')
    });
$('#div_for_img').css({'border' : '2px solid #cc0000'}).animate({'width': '450px'}, 4000, function(){
    alert('Готово')
    });
    
    // animate - на что менять, сколько милисикунд,функуция что делать потом
*/
    
/*
Домашнее задание к 77-му уроку.

$('#my_h3 span').removeClass('pq').css({
    
'border': '1px solid #cc0000',
'padding': '5px',
'background-color': '#f6f6f6 '
    
});    
*/  
  
  
    
/* 77
$('#main_h1').css({
    'color': '#3F4078',
    'font-size':'19px'
    }); //Называется литерал объекта
// Вариант записи 2: $('#main_h1').css('color', '#3F4078').css('font-size','19px'); // Для получения результата нужн писать полное значения свойстав ( мэрждинг -топ к примеру)
 */


 /* 76   
$('#div_for_img + p').addClass('new'); // Добавление класа нью к обзацу после #div_for_img
$('#moto_table').removeClass('mototable');// Удаление класса у выбранного по айди элемента 
*/



/*
Домашнее задание к 75-му уроку.
function changeAttr(idEl, nameAtr, newZna){
    $(idEl).attr(nameAtr, newZna);
}
changeAttr('#img_1','title','Домашнее задание' )
*/

/* 75
 $('#moto_table').removeAttr('title'); // Удаление атрибута, дальше можно, добавить значение отрибута .attr()
 //$('#motoSelect').attr('size',4); // Выбор значения, ноовое значение атрибута
*/

/*74
 $('img[src*=logo]').slideUp(4000).slideDown(4000);
*/

 /* 73
 $('img[src*=logo]').fadeTo(3000,0.1).fadeTo(3000,1);  // Время исчезновения, степень от 0 до1 
*/
    
 /*
Домашнее задание к 72-му уроку.

function divFade(idEl, myTimeOut){
    if (isNaN(myTimeOut) || myTimeOut < 500 || myTimeOut > 10000){
    return false;
    }
    else {
        var FullId = "#" +idEl;
    $(FullId).fadeOut(myTimeOut);
    }
       
}
  divFade('my_form', 3000);
 */ 
 
    
/*    
 $('img[src*=logo]').fadeOut(4000).fadeIn(4000); //Появление и исчезание, более красивое чем хайди шоу  
*/    
    
    
    
/*
$('#moto_models').html('<li>Харлей <strong>Дэвидсон</strong></li><li>Кроссовый мотоцикл</li><li>Гоночный мотоцикл</li><li>Концептуальный мотоцикл</li>'); 
*/    
    
/* домашка 70
function razmEl(idEl) { 
    var resultW = $(idEl).width();
    var resultH = $(idEl).height();
    $('#forresults').text("Размеры выбранного блока: " + resultW + " х " + resultH);
    
}   
 razmEl('#div_for_img');   
  */  


// var divW = $('#div_for_img').height(130).width(815);//Урок 70


/*
$('img:not([src *="logo.jpg"])').hide(5000); // домашнее 69
*/
/*
Домашнее задание к 69-му уроку.

Отобрать в jquery набор все картинки кроме первой и скрыть их с помощью функции hide() за 5 секунд.

Подсказка: для формирования набора используйте фильтр not.
*/

/*
$('#div_for_img').hide(3000); // автоматические циклы
*/

/*
var myLink = $('a[href$=".PDF"]');//домашнее 68
myLink.hide().text('Новый текста с помощью цепной функции').show(2000);
*/

/*    
var textH1 = $('#main_h1').text('Текст изменненый с помощью jquery');
var myLogo= $('img[src *="logo.jpg"]');
myLogo.hide(3000).show(3000); //цепная функуция 
*/

}); // Конец ready!!!!!!!!!!!!!!!!!!  


/*
var myLogo= $('img[src *="logo.jpg"]');
myLogo.hide(3000); //скрывает картинку за 3000 мсек 
myLogo.show(3000); //показывае картинку за 3000 мсек  

$('moto_table tr:odd'); // фильтр выбор even - четный,odd- нечетный
$('img:not(#div_for_img)'); //Фильтр нот - означает кроме, все кортинки кроме картиноквнутри блока с айди
$('div:has(fieldset)'); // Фильтр выбора блокаов див содержащих в себе фильдсет
$('p:contains(мотоцикл)'); // фильтр выбора обзацев содержащих слово мотоцил.
$('#div_for_img:first'); // Выор первой картики внутри выбранного блока
$('#div_for_img:last'); // Выор последней картики внутри выбранного блока
$('div:hidden');//выбор всех скрытых блоков
$('div:visibility'); // выбор всех видимых блоков

$('#my_links a[href^=documents]');
$('#forfooter img[title=Производители]');

$('img[src *= moto]'); // отберет все картинки в отребуте которого встречается moto
$('img[src $= .jpg]'); // выбор по коечному отребуту( в данном случае выбираются только джепеги)
$('a[href^=http]'); // выбор по начальному отребуту
$('img[width= 200]'); // выбор всех кортинок с шириной 200пх 
$('#div_for_img img'); // выбор ВСЕХ картинок внктри эллемене с айди
$('#main_h1 + p'); // выбор следующего тега за эллементом с айди
$('#div_for_img > img') // выбор только дочерних картинок внутри элемент с айди
$('p'); // выбор элемента по названию тега как в CSS
$('#main_h1'); //выбор по id
$('.maindiv'); // выбор по названию класса
*/


//$();сокращенный вид записи подключения библиотеки jquery(); 
















/*Урок 60
var myDiv = document.getElementById('div_for_img');
myDiv.innerHTML = "<p><strong>Вставка свойством innerHTML </strong></p>" //вместо блока под выбранным айди вставляется новое содержание
alert(myDiv.innerHTML);*/

/* var mainHeader = document.getElementById('main_h1');
alert(mainHeader.textContent);  // вывод содержимого блока ( работает только для файрфокс)
*/
/* Урок 59 
var myDiv = document.getElementById('div_for_img');
var brotherDiv = myDiv.nextSibling; // next выводит следуещего за блоком, его брата, previous -предыдущий
alert(brotherDiv);
*/

/* var parentDiv = myDiv.parentNode; // родительский узел
alert(parentDiv.id);
*/
/*var childDiv = myDiv.childNodes;
for (var i=0; i < childDiv.length ;i++){
        alert(childDiv[i].alt);
}
*/
/* Урок 58 var moto = document.getElementById('img_1');
alert(moto.alt);
*/

/* Урок 57 var allImg = document.getElementsByTagName('img'); 
alert("Всего картинок: " + allImg.length);
*/