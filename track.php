<?php
 $c=0;
 $config=parse_ini_file("C:\Apache24\config.ini");
 $dbc=@mysqli_connect("localhost",$config['username'],$config['password'],$config['dbname']);
 $query="SELECT phone FROM ecell";
 $result=mysqli_query($dbc,$query);
 while($row=mysqli_fetch_assoc($result))
{++$c;
}
echo $c;
?>