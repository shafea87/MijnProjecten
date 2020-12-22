<?php
$dbuser = "root";
$dbname = "hotsnot";
$db_pass="";
$dsn = "mysql:host=localhost;dbname=$dbname";

try{
  $pdo = new PDO($dsn,$dbuser,$db_pass);
 // echo 'success <br>';

}catch(PDOException $e){
    echo "conection error";
    // echo $e;
  }
  

?>