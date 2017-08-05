<?php
  $file_name=$_FILES['fileToUpload']['name'];
  $file_tmp=$_FILES['fileToUpload']['tmp_name'];
  $resume=file_get_contents($_FILES['fileToUpload']['tmp_name']);
  move_uploaded_file($file_tmp,"uploads/".$file_name);
 $name=$_POST['name'];
 $phone=$_POST['phone'];
 $roll=$_POST['roll'];
 $email=$_POST['email'];
 $dept=$_POST['dept'];
 $year=$_POST['year'];
 $servername="localhost";
 $username="root";
 $password="Weiss-2sfj";
 $dbname="users";
 $dbc=@mysqli_connect($servername,$username,$password,$dbname);
 $query="INSERT INTO ecell(name,phone,roll,email,dept,year,resume) VALUES (?,?,?,?,?,?,?)";
 $stmt=mysqli_prepare($dbc,$query);
 mysqli_stmt_bind_param($stmt,"sssssss",$name,$phone,$roll,$email,$dept,$year,$resume);
 mysqli_execute($stmt);
 echo "Submitted,Redirecting";
 header("Refresh:2;url=form.php");
?>