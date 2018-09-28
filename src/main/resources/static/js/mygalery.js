$(document).ready(function(){
    

$('#small a').click(function(eventObject){
    if($('#big img').attr('src')!= $(this).attr('href')){
    $('#big img').hide().attr('src', $(this).attr('href'));
    $('#big img').load(function(){
        $(this).fadeIn(2000);
        });
    }
    eventObject.preventDefault();
});
$('#small a').click(function(){
    $('#small a').fadeTo(1000,1);
    $(this).fadeTo(1000, 0.6);
})

}); // Конец ready!!!!!!!!!!!!!!!!!! 