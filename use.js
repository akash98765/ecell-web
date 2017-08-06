
function showName(str)
{if(str.length==0)
{document.getElementById("name").innerHTML="";
 return;
}else{
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
document.getElementById("name").innerHTML=this.responseText;
if(this.responseText=="Insufficient length" || this.responseText=="name already taken")
document.getElementById("field1").style.borderBottom="2px solid red";
else
document.getElementById("field1").style.borderBottom="2px solid yellow";
}
};

xmlhttp.open("GET","aj.php?q="+str+"&&id=1",true);
xmlhttp.send();
}
}
function showPhone(str)
{if(str.length==0)
{document.getElementById("phone").innerHTML="";
 return;
}else{
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
document.getElementById("phone").innerHTML=this.responseText;
if(this.responseText=="Insufficient length" || this.responseText=="phone no already exists")
document.getElementById("field2").style.borderBottom="2px solid red";
else
document.getElementById("field2").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&&id=2",true);
xmlhttp.send();
}
}
function showRoll(str)
{if(str.length==0)
{document.getElementById("roll").innerHTML="";
 return;
}else{
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
document.getElementById("roll").innerHTML=this.responseText;
if(this.responseText=="Wrong number")
document.getElementById("field3").style.borderBottom="2px solid red";
else
document.getElementById("field3").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&&id=3",true);
xmlhttp.send();
}
}
function showEmail(str)
{if(str.length==0)
{document.getElementById("email").innerHTML="";
 return;
}else{
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
document.getElementById("email").innerHTML=this.responseText;
if(this.responseText=="Invalid email id" || this.responseText=="email already taken")
document.getElementById("field4").style.borderBottom="2px solid red";
else
document.getElementById("field4").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&&id=4",true);
xmlhttp.send();
}
}
function showtrack()
{var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function(){
 if(this.readyState==4 && this.status==200)
 document.getElementById("track").innerHTML=this.responseText+" forms submitted";
};
xmlhttp.open("GET","track.php",true);
xmlhttp.send();
}