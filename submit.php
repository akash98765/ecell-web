<?php
  $resume="";
  if($_FILES['fileToUpload']['size']!=0){
  $file_name=$_FILES['fileToUpload']['name'];
  $file_tmp=$_FILES['fileToUpload']['tmp_name'];
  $resume=file_get_contents($_FILES['fileToUpload']['tmp_name']);
  move_uploaded_file($file_tmp,"uploads/".$file_name);
}
 else
 $resume=$_POST['resume'];
 $name=$_POST['name'];
 $phone=$_POST['phone'];
 $roll=$_POST['roll'];
 $email=$_POST['email'];
 $dept=$_POST['dept'];
 $year=$_POST['year'];
 $config=parse_ini_file("C:\Apache24\config.ini");
 $dob=$_POST['dob'];
 echo var_dump($dob);
 $dbc=@mysqli_connect("localhost",$config['username'],$config['password'],$config['dbname']);
 $query="INSERT INTO ecell (name,phone,roll,email,dept,year,resume,dob) VALUES (?,?,?,?,?,?,?,?)";
 $stmt=mysqli_prepare($dbc,$query);
 mysqli_stmt_bind_param($stmt,"ssssssss",$name,$phone,$roll,$email,$dept,$year,$resume,$dob);
 mysqli_execute($stmt);
 echo "Submitted,Redirecting";
 header("Refresh:2;url=form.php");

?>
