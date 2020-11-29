<?php

require_once 'connection.php';

if(isset($_POST['but'])){
  
  $UserName = mysqli_real_escape_string ($con,$_POST['userName']);
  $Email = mysqli_real_escape_string ($con,$_POST['email']);
  $Password = mysqli_real_escape_string ($con,$_POST['pass']);
  $Cpassword = mysqli_real_escape_string ($con,$_POST['compass']);
 

  if(empty($UserName) || empty($Email) || empty($Password) || empty($Cpassword)){
  echo'Fill all blank fields';
  }
  if($Password!= $Cpassword){
    echo'Your password is not rieght';
  }else{
   $pass = md5($Password);
   $sql = "insert into users(uname,Email,password) values ('$UserName','$Email','$pass')";
   $result = mysqli_query($con,$sql);
  }
  if($result){
   echo'record has been added'; 
  }else{
    echo 'Error check the query';
  }

}


?>