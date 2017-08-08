var keeptrack=1;
function showName(str)
{if(str.length==0)
{document.getElementById("name").innerHTML="";
 return;
}else{
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
var c=this.responseText;
var n=c.indexOf("length");
var n1=c.indexOf("taken");
document.getElementById("name").innerHTML=c;
var err="Insufficient length";
if(n>=0 || n1>=0)
document.getElementById("field1").style.borderBottom="2px solid red";
else
document.getElementById("field1").style.borderBottom="2px solid yellow";
}
};

xmlhttp.open("GET","aj.php?q="+str+"&id=1",true);
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
if(this.responseText.indexOf("length")>=0 || this.responseText.indexOf("exists")>=0)
document.getElementById("field2").style.borderBottom="2px solid red";
else
document.getElementById("field2").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&id=2",true);
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
if(this.responseText.indexOf("number")>=0)
document.getElementById("field3").style.borderBottom="2px solid red";
else
document.getElementById("field3").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&id=3",true);
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
if(this.responseText.indexOf("email")>=0|| this.responseText.indexOf("taken")>=0)
document.getElementById("field4").style.borderBottom="2px solid red";
else
document.getElementById("field4").style.borderBottom="2px solid yellow";
}
};
xmlhttp.open("GET","aj.php?q="+str+"&id=4",true);
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
var e=document.getElementById("even").value;

}
var divide;
var c;
function pass()
{
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function()
{if(this.readyState==4 && this.status==200)
{
 divide=this.responseText.split(" ");
 document.getElementById("s1").innerHTML=divide[0];
 var table=document.getElementById("t1");
 var row=table.insertRow(1);
 var cell1=row.insertCell(0);
 var cell2=row.insertCell(1);
 var cell3=row.insertCell(2);
 cell1.innerHTML=divide[1];
 cell2.innerHTML=divide[2];
 cell3.innerHTML=divide[3];
}
};
var f1=document.getElementById("field1").value;
var f2=document.getElementById("field2").value;
var f3=document.getElementById("field3").value;
var f4=document.getElementById("field4").value;
var f5=document.getElementById("field5").value;
var f6=document.getElementById("field6").value;
var f7=document.getElementById("field7").value;
var f8=document.getElementById("field8").value;
var e=document.getElementById("even").value;

xmlhttp.open("GET","submit.php?f1="+f1+"&f2="+f2+"&f3="+f3+"&f4="+f4+"&f5="+f5+"&f6="+f6+"&f7="+f7+"&f8="+f8+"&e="+e,true);
xmlhttp.send();
/*document.getElementById("field1").value="";
document.getElementById("field2").value="";
document.getElementById("field3").value="";
document.getElementById("field4").value="";
document.getElementById("field5").value="";
document.getElementById("field6").value="";
document.getElementById("field7").value="";
document.getElementById("field8").value="";
*/
document.getElementById("even").value="";
//++keeptrack();
document.getElementById("track").innerHTML="";
 /*var table=document.getElementById("t1");
 var row=table.insertRow(0);
 var cell1=row.insertCell(0);
 var cell2=row.insertCell(1);
 var cell3=row.insertCell(2);
 cell1.innerHTML=divide[1];
 cell2.innerHTML=divide[2];
 cell3.innerHTML=divide[3];
*/
document.getElementById("s1").innerHTML=c;
}
