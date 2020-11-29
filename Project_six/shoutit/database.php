<?php

$con = mysqli_connect("localhost","root","","shout_it");
//test connection
if(mysqli_connect_errno()){
  echo"Failed to connect to MYSQL: ".mysqli_connect_error();
}

?>