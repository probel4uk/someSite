$(document).ready(function(){
    
/*
�������� ������� � 98-�� �����.

����� ���� ����� ��� ������:

1. �������� �������� e-mail ������ � ������� ����������� ��������� (��. ����). 
�������� ������ �������������� � ������ ����� �� ���� ��� ����� e-mail (������� blur). 
� ������ ���� e-mail ������������� ����������� ���������, �� ���������� ���� ������� ������, 
����  �� ������������, �� �������, � ���� � ���� ��������� �������� �� ���������, �� �����. 
��� ���� ���� �������� �� ����������������, ��� ������� � ������ ������� ����� 
������������ �������� �� ���������.

��� ��������� ��� �������� e-mail:
[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}

2. ��������� ��������� �������� �����., �.�. ����� ������������ ������� ������ "��������� ������", 
��� ������ �������������.
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
    $(this).attr('value', '���������...');
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
�������� ������� � 97-�� �����.

�������� � �������� ������ ������ �������� � ������� enter, 
�����  �������� ��������� ����� ��������� ����������. 

����������� ���������� ����� ��, ��� � ���� ��� ����� e-mail 
�� ������ ������� �����: "������: you@site.ru"
��� �������� �� ���������, � ��� ����� ��� �� ���� �������� value="������: you@site.ru", 
������� ���� � ����� ���������� ����.

���� ������ ������� � ���, �����, ����� ������������ ������ � ��� ����, ��� ���������.
�� ��������� �� ������, � ������ ���� � ���� ��������� �������� �� ��������� 
�.�. "������: you@site.ru"


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
    alert('�� �� ��������� ���� email!')
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
    $('#mytextarea').val('���� ��������');
})
*/

/*

$('#my_form :checkbox:checked').fadeOut(3000);

###�������� ������� ��� ��������� ����###
:input - �������� ��� ��������, ������� ������ �� ���� ������ � �����
:text - ���� �����, ������� ������� ��� <input type="text"...
:password - ���� �����, ������� ������� ��� <input type="password"...
:radio - ���� �����, ������� ������� ��� <input type="radio"...
:checkbox - ���� �����, ������� ������� ��� <input type="text"...
:submit - ���� �����, ������� ������� ��� <input type="checkbox"...
:image - ���� �����, ������� ������� ��� <input type="image"...
:reset - ���� �����, ������� ������� ��� <input type="reset"...
:botton - ���� �����, ������� ������� ��� <input type="botton"...
:file - ���� �����, ������� ������� ��� <input type="file"...
:hidden - ���� �����, ������� ������� ��� <input type="hidden"...
:checked - �������� ��������� ����������� � ��������(������ ����� ������!!!, ����  ����� ������� � ����� ��� � ���������)
:seleckted - �������� �������� �������� �������
*/


/*
�������� ������� � 91-�� �����.

������� ���, ����� �� ����� ������� ������ �������� ����� � id="#my_button", 
���������� ��������� � ��������: "�� ������������� ������������ ����� ������?" 
� ���� ������ ������ ���� ������ "OK" � "������".

���� ������� ������ "��" �� ����� ������������ ��� ��������, � ���� ������ "������", 
�� �����  �� ������������.

���������: ��� ������� ������� ����������� ����� confirm()

$('#my_button').click(function(elementObject){
    var userAns = confirm('�� ������������� ������������ ����� ������?');
    if (!userAns){
        elementObject.preventDefault();
    }
});

*/

/*
###���������� �� ������� ������� ####
pageX
pageY
screenX
screenY
altKey
shiftKey
ctrlKey
target -����� ����� ����������� �� �������
*/

/* 91
$('#superlink').click(function(eventObject){
    eventObject.preventDefault(); // �������� �� ��� �������� �� ���������( ����� �������� return false)
    $('#forresults').append('<p>������ �������� �� ������ ��������� ���� ����� </p>');
});
*/

/* 90
$('#div_for_img').click(function(eventObject){
    alert('���� �� ������ ������� ����: ' + eventObject.altKey);
});
*/


/* 89 ��������� � �������!!!!

$('#moto_table tr').hover(function(){
    $(this).addClass('svet')
},function(){
    $(this).removeClass('svet')    
}); //hover - ���� ����� ��� � 88 ������ ����� ���������
*/

$('#formHide').click(function() {
    $('#my_form').toggle('blind');
    
});

/*

$('#formHide').click(function(){
     if ($(this).text()=='�������� �����'){
    $('#my_form').fadeOut(1000);
    $(this).text('���������� �����');
    
}
else {
    $('#my_form').fadeIn(1000);
    $(this).text('�������� �����');
   
}
  
})
*/
/* ��� ������ 2(������ � ������� �� ����������)
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

/* ������� 3
var i = 0;
$('#formHide').click(function(){
    if(i==0){
    $('#my_form').fadeOut(1000);
    $(this).text('���������� �����');
    i=1;
}
else {
    $('#my_form').fadeIn(1000);
    $(this).text('�������� �����');
    i=0;
}
});
*/

/*
������ �������� ������� � 88-�� �����.

��� ����� �������� ���������� �������, ������� ����� ������������ 
������ ������� (id="moto_table"), �� ������� ������ ������ ���� 
��� ����� ������: #1F233C, � ����� ����� ������ �����.

���������: ���� ��� ����, ��� ������ ������ ������, �� ��������� ���� 77.

var svetTr = $('#moto_table tr');
svetTr.mouseover(function(){
    $(this).addClass('svet')
    });    

svetTr.mouseout(function(){
    $(this).removeClass('svet')    
});

*/


/*
������ �������� ������� � 88-�� �����.

�������� ���������� �������, ������� ������ ���������.
��� ����� ����� �� ����� �� �������� ���������� � ���� �����:
<ol id="moto_models">
        <li>������ ��������</li>
        <li>��������� ��������</li>
        <li>�������� ��������</li>
        <li>�������������� ��������</li>
 </ol>

� ��� � ������� � id="moto_table" ������ ���������� ����� �������, 
� ������� ������ ���������� ����� �� ��������, �� �������� ��������.

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
    alert('�� �������� �� �����');
});

$(window).scroll(function(){
    alert('��������� ������� ��������� ����');
});
*/


/* 87
var myMoto = document.getElementById('img_1'); // ����� � ������������ ������������
function motoClick(){
    alert("������ ��������" + myMoto.width);

}
myMoto.onclick = motoClick;
*/



/*
#######������� ����:#########
mouseover - ������ ������
mouseout - ����� ������
click
dblclick
mousemove - �������� ������
mousedown - ������ ������ �� �� ����������
mouseup -  ���������� �����

������� �����:

submit - ��������
focus - ���� �������
blur - ���� �������� �����
change - ���������
reset - ����� �����

������� ����������:
keypress - ������� ������� �� �����
keyout - ������ � �� ��������� �������
keyup - ���������

������� ���� ��������:
load - �������� ��������
resize - �������� ������ ��������
scroll
unload 
*/




/* 83
//$('img[width=200], a[href*=document]').fadeOut(5000);//����� ����������� ����� ��');
$('img[alt]').fadeOut(5000);// �������� ��� �������� � ������� ���� ������� ����
*/

/*82
//var myDiv = $('#div_for_img').clone(); //������������ ������
//$('#my_form').after(myDiv);

var myForm = $('#my_form').remove(); // ������� ������� �� ��������, �� ��������� �� � ����������
$('#moto_table').before(myForm);
*/

/* 81
var myDiv = $('div').size(); // ������� ���������� ��������� � �������
var myDiv = $('div').get(0); //�������� ������������ ������
alert(myDiv);
*/


/*
�������� ������� � 80-�� �����.

���� ������ ��������� ��� �������� ����� �������� � �������� ������� 1px ����� ��� �� ���, 
� ������� � �������� title ����������� ����� "�", � ������ ������ 50, �� ������ 100.

$('img[title*= �]').each(function(){
   if ($(this).height()>50 && $(this).height()<100 ) {
    $(this).css({'border' : '1px solid #cc0000'});
   }
    
    
});
*/

/* 80
$('img').each(function(){
    if ($(this).width()>400){
    $(this).fadeOut(3000); //����� �� �������. $(this) - ������ �����.
}

});
*/
    
/*
�������� ������� � 79-�� �����.
$('body').append('<p id="newparagraph"> ����� ����� � ����� ������� � ���� ����� ������</p>');    
  $('#newparagraph').css({
    'color': '#FFFFFF',
    'background-color': '#000000'
    });  
    
var  myDiv =$('#div_for_img').css({'border': '2px solid #cc0000'})
myDiv.before('<p> ������ ����� �������� � ������� ������ before</p>');
myDiv.after('<p> ������ ����� �������� � ������� ������ after</p>');
myDiv.prepend('<p> ������ ����� �������� � ������� ������ prepend</p>');
myDiv.append('<p> ������ ����� �������� � ������� ������ append</p>');
*/


/*
�������� ������� � 78-�� �����.


$('#img_2').css({'border':'1px solid #333333'}).animate({'borderWidth':'5px'}, 5000).fadeOut(5000);

*/

/* 78
$('#main_h1').css({'border' : '2px solid #cc0000'}).animate({'paddingTop': '70px'}, 5000, function(){
    alert('������')
    });
$('#div_for_img').css({'border' : '2px solid #cc0000'}).animate({'width': '450px'}, 4000, function(){
    alert('������')
    });
    
    // animate - �� ��� ������, ������� ����������,�������� ��� ������ �����
*/
    
/*
�������� ������� � 77-�� �����.

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
    }); //���������� ������� �������
// ������� ������ 2: $('#main_h1').css('color', '#3F4078').css('font-size','19px'); // ��� ��������� ���������� ���� ������ ������ �������� �������� ( �������� -��� � �������)
 */


 /* 76   
$('#div_for_img + p').addClass('new'); // ���������� ����� ��� � ������ ����� #div_for_img
$('#moto_table').removeClass('mototable');// �������� ������ � ���������� �� ���� �������� 
*/



/*
�������� ������� � 75-�� �����.
function changeAttr(idEl, nameAtr, newZna){
    $(idEl).attr(nameAtr, newZna);
}
changeAttr('#img_1','title','�������� �������' )
*/

/* 75
 $('#moto_table').removeAttr('title'); // �������� ��������, ������ �����, �������� �������� �������� .attr()
 //$('#motoSelect').attr('size',4); // ����� ��������, ������ �������� ��������
*/

/*74
 $('img[src*=logo]').slideUp(4000).slideDown(4000);
*/

 /* 73
 $('img[src*=logo]').fadeTo(3000,0.1).fadeTo(3000,1);  // ����� ������������, ������� �� 0 ��1 
*/
    
 /*
�������� ������� � 72-�� �����.

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
 $('img[src*=logo]').fadeOut(4000).fadeIn(4000); //��������� � ���������, ����� �������� ��� ����� ���  
*/    
    
    
    
/*
$('#moto_models').html('<li>������ <strong>��������</strong></li><li>��������� ��������</li><li>�������� ��������</li><li>�������������� ��������</li>'); 
*/    
    
/* ������� 70
function razmEl(idEl) { 
    var resultW = $(idEl).width();
    var resultH = $(idEl).height();
    $('#forresults').text("������� ���������� �����: " + resultW + " � " + resultH);
    
}   
 razmEl('#div_for_img');   
  */  


// var divW = $('#div_for_img').height(130).width(815);//���� 70


/*
$('img:not([src *="logo.jpg"])').hide(5000); // �������� 69
*/
/*
�������� ������� � 69-�� �����.

�������� � jquery ����� ��� �������� ����� ������ � ������ �� � ������� ������� hide() �� 5 ������.

���������: ��� ������������ ������ ����������� ������ not.
*/

/*
$('#div_for_img').hide(3000); // �������������� �����
*/

/*
var myLink = $('a[href$=".PDF"]');//�������� 68
myLink.hide().text('����� ������ � ������� ������ �������').show(2000);
*/

/*    
var textH1 = $('#main_h1').text('����� ���������� � ������� jquery');
var myLogo= $('img[src *="logo.jpg"]');
myLogo.hide(3000).show(3000); //������ �������� 
*/

}); // ����� ready!!!!!!!!!!!!!!!!!!  


/*
var myLogo= $('img[src *="logo.jpg"]');
myLogo.hide(3000); //�������� �������� �� 3000 ���� 
myLogo.show(3000); //��������� �������� �� 3000 ����  

$('moto_table tr:odd'); // ������ ����� even - ������,odd- ��������
$('img:not(#div_for_img)'); //������ ��� - �������� �����, ��� �������� ����� �������������� ����� � ����
$('div:has(fieldset)'); // ������ ������ ������� ��� ���������� � ���� ��������
$('p:contains(��������)'); // ������ ������ ������� ���������� ����� �������.
$('#div_for_img:first'); // ���� ������ ������� ������ ���������� �����
$('#div_for_img:last'); // ���� ��������� ������� ������ ���������� �����
$('div:hidden');//����� ���� ������� ������
$('div:visibility'); // ����� ���� ������� ������

$('#my_links a[href^=documents]');
$('#forfooter img[title=�������������]');

$('img[src *= moto]'); // ������� ��� �������� � �������� �������� ����������� moto
$('img[src $= .jpg]'); // ����� �� �������� ��������( � ������ ������ ���������� ������ �������)
$('a[href^=http]'); // ����� �� ���������� ��������
$('img[width= 200]'); // ����� ���� �������� � ������� 200�� 
$('#div_for_img img'); // ����� ���� �������� ������ �������� � ����
$('#main_h1 + p'); // ����� ���������� ���� �� ���������� � ����
$('#div_for_img > img') // ����� ������ �������� �������� ������ ������� � ����
$('p'); // ����� �������� �� �������� ���� ��� � CSS
$('#main_h1'); //����� �� id
$('.maindiv'); // ����� �� �������� ������
*/


//$();����������� ��� ������ ����������� ���������� jquery(); 
















/*���� 60
var myDiv = document.getElementById('div_for_img');
myDiv.innerHTML = "<p><strong>������� ��������� innerHTML </strong></p>" //������ ����� ��� ��������� ���� ����������� ����� ����������
alert(myDiv.innerHTML);*/

/* var mainHeader = document.getElementById('main_h1');
alert(mainHeader.textContent);  // ����� ����������� ����� ( �������� ������ ��� ��������)
*/
/* ���� 59 
var myDiv = document.getElementById('div_for_img');
var brotherDiv = myDiv.nextSibling; // next ������� ���������� �� ������, ��� �����, previous -����������
alert(brotherDiv);
*/

/* var parentDiv = myDiv.parentNode; // ������������ ����
alert(parentDiv.id);
*/
/*var childDiv = myDiv.childNodes;
for (var i=0; i < childDiv.length ;i++){
        alert(childDiv[i].alt);
}
*/
/* ���� 58 var moto = document.getElementById('img_1');
alert(moto.alt);
*/

/* ���� 57 var allImg = document.getElementsByTagName('img'); 
alert("����� ��������: " + allImg.length);
*/