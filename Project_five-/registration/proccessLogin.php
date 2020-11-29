<?php
require_once 'connection.php' ;

if(isset($_POST['bt-login']))
{
    $UName=$_POST['userName'];
    $Pass=$_POST['pass'];

      if(empty($UName) || empty($Pass)){
        echo 'Fill in the blank - user name or pass';
      } else{
        $query="select * from users where uname='$UName' or Email='$UName'";
        $result=mysqli_query($con,$query);

        if($row=mysqli_fetch_assoc($result)){

            $db_password=$row['password'];
            if(md5($Pass)==$db_password){
                header("location:admin.php");
                        } else { 
                            echo 'incorrect password';
                        }
        } else {
            echo 'check the query';
            }

    }
}
?>