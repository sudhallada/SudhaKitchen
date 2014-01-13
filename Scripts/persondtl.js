function hi()
{
if($("#firstname").val().length == 0)
{
alert('plase enter first name');
return;
}
else if($("#lastname").val().length ==0)
{
alert('plase enter last name');
return;
}
else
{
var FirstName=$("#firstname").val();
var LastName=$("#lastname").val();
var Sex=$('input:radio[name=Sex]:checked').val();

var SelClass=$('#ClassList option:selected').text();
var FullName=FirstName+' '+LastName+' '+'You are '+Sex +'Class '+SelClass;

alert(FullName);
} 
}