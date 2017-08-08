<?php
  
$resume=$_GET['f7'];
 
$name=$_GET['f1'];
 
$phone=$_GET['f2'];
 
$roll=$_GET['f3'];
 
$email=$_GET['f4'];
 
$dept=$_GET['f5'];
 
$year=$_GET['f6'];
 
$config=parse_ini_file("C:\Apache24\config.ini");
 
$dob=$_GET['f8'];
 
$event=$_GET['e'];
//echo var_dump($dob);
 
$dbc=@mysqli_connect("localhost",$config['username'],$config['password'],$config['dbname']);
 
$query="INSERT INTO ecell (name,phone,roll,email,dept,year,resume,dob,event) VALUES (?,?,?,?,?,?,?,?,?)";
 
$stmt=mysqli_prepare($dbc,$query);
 
mysqli_stmt_bind_param($stmt,"sssssssss",$name,$phone,$roll,$email,$dept,$year,$resume,$dob,$event);
 
mysqli_execute($stmt);
 
echo "Submitted"." ".$name." ".$dept." ".$event;
 
//header("Refresh:2;url=form.php");


?>
