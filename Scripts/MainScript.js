$(document).ready(function () {

$('#FirstName').blur(CheckLength($('#FirstName').val()));  
2	      
});

function login()
{
clearMessages();

if($("#UserName").val().length==0)
{
  $('#UserErrorMessage').css('visibility','visible');
  return;
}
else if($("#PassWord").val().length==0)
{
  $('#PassWordErrorMessage').css('visibility','visible');
  return;
}
else if($("#UserName").val() !="sudha") 
{

  $('#UserName').addClass('ErrorMessage');
  $('#WrongDetails').css('visibility','visible');
  return;
}
else if($('#PassWord').val() !="allada")
{
  $('#PassWord').addClass('ErrorMessage');
  $('#UserName').removeClass('ErrorMessage');
   $('#WrongDetails').css('visibility','visible');
  return;
}

else if ($("#UserName").val() =="sudha" && $("#PassWord").val()=="allada" )
{
     $('#LoginDetails').css('visibility','visible');
     $('#WrongDetails').css('visibility','hidden');
     $('#UserName').removeClass('ErrorMessage');
     $('#PassWord').removeClass('ErrorMessage');
   return;
}
else
{
alert("end");
    $('#WrongDetails').css('visibility','visible');
    $('#LoginDetails').css('visibility','hidden');
    $('#PassWord').addClass('ErrorMessage');
}
}
function clearMessages()
{
$('#UserErrorMessage').css('visibility','hidden');
  $('#PassWordErrorMessage').css('visibility','hidden');
}
function CheckLength(inputValue)
{    
   alert(inputValue);
   if(inputValue.length==0)
   {
   
     //return false;
	 alert("false");
   }
   else
   {
   //return true;
   alert("true");
   }
}

function test()
{
alert('hi');
}

