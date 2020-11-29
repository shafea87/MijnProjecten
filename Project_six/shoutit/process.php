<?php

include 'database.php';

if(isset($_POST['submit'])){
  $user = mysqli_escape_string($con,$_POST['user']);
  $message = mysqli_escape_string($con,$_POST['message']);



  //set time
  // date_default_timezone_get('Europe/Amsterdam');
  $time = date('h:i:s a',time());

  // Validate input
  if(!isset($user) || $user=='' || !isset($message) || $message=='' ){
    $erorr = "Please fill in your name and a message";
    header ("Location: index.php?error=" . urlencode($erorr));
  }else{
    $query = "INSERT INTO shouts (user,message,time) VALUES ('$user','$message','$time')";
    if(!mysqli_query($con, $query)){
      die('Error:'.mysqli_error($con));
    }else{
      header("Location: index.php");
      exit();
    }
  }

}



?>