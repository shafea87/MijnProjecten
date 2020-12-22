<?php 
include_once 'db.php';
// specifying directory 
$mydir = './img'; 

//scanning files in a given diretory in ascending order 
$myfiles = scandir($mydir); 

//displaying the files in the directory 
//print_r($myfiles); 
array_shift($myfiles);
array_shift($myfiles);
echo'<br>';
//print_r($myfiles); 



foreach( $myfiles as $path ){
echo $path.'<br>';
try{
$sql="INSERT INTO result (pic) VALUES (:pic)";
$stm=$pdo->prepare($sql);
  $stm->execute(['pic'=> $path]);
  //header('Location: /index.php');
}  catch(PDOException $e){
    echo "conection error";
    // echo $e;
  }  
}
?> 
