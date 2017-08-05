<?php
 $servername="localhost";
 $username="root";
 $password="Weiss-2sfj";
 $dbname="users";
 $name="";
 $phone="";
 $roll="";
 $email="";
 $dept="";
 $year="";
 $resume="";
 $dbc=@mysqli_connect($servername,$username,$password,$dbname);
 $query="SELECT * FROM ecell";
 $result=mysqli_query($dbc,$query);
 if($_GET['id']=="1")
{$name=$_GET['q'];
 if(strlen($name)<3)
 echo "Insufficient length";
 else
{while($row=mysqli_fetch_assoc($result)){
 if($row['name']==$name)
{
 echo "name already taken";
 break;
}
}
}
}
mysqli_data_seek($result,0);
if($_GET['id']=="2")
{$phone=$_GET['q'];
 if(strlen($phone)<10)
 echo "Insufficient length";
 else
{while($row=mysqli_fetch_assoc($result)){
 if($row['phone']==$phone)
{
 echo "phone no already exists";
 break;
}
}
}
}
mysqli_data_seek($result,0);
if($_GET['id']=="3")
{$roll=$_GET['q'];
 if(strlen($roll)!=9)
 echo "Wrong number";
}
mysqli_data_seek($result,0);
if($_GET['id']=="4")
{$email=$_GET['q'];
 if(!filter_var($email,FILTER_VALIDATE_EMAIL))
 echo "Invalid email id";
 else
{while($row=mysqli_fetch_assoc($result)){
 if($row['email']==$email)
{
 echo "email already taken";
 break;
}
}
}
}
mysqli_data_seek($result,0);
?> 
