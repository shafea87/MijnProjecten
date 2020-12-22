



<?php
include 'db.php';

$sql=$pdo->query("SELECT * FROM result ORDER BY RAND()");
$row=$sql->fetch();
//echo $row[1];
$photo=$row[1];
$hot=$row[2];
//$row[2]=$row[2]+1;
//print_r ($row[2]);



// //$hot=addHot();
// ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./mySyle.css">
  <title>Hot Or Snot</title>
</head>
<body>
 <div class="top"><p>
 <a id="top" href="result.php">Click her to find Top 10</a></p></div> 
<div id="pre">
  <div id="foto">
    <img src="./img/<?php echo $photo ?>">
  </div>
  <br>
  <!-- <div id="or"> -->
      
  <!-- <input id="hot" type="submit" name="hot" onclick=""<a href="">>Hot</a></input> -->
  
    <!-- <button id="snot" name="snot">Snot</button> -->

    <form method="post">
    <input type="submit" name="hot" id="hot" value="Hot" />
    <input type="submit" name="snot" id="snot" value="Snot" /><br/>

</form>
</div>
<?php 
// function testfun()
// {
//   echo $photo;
// }
// $stm->execute([
//   'title'=> $titel,
//   'body'=> $body
// ]);

if(array_key_exists('hot',$_POST)){
  // testfun();$h;
  //$row[1]++;
  try{
    //echo $row[1];
    //$row[2]=$row[2]+1;
    //echo $hot;
    //UPDATE result SET `hot` = '2' where pic='003.jpg'
    $sqlh="UPDATE  result SET `hot` = (:hot) where `pic`=:nam1";
    $stm=$pdo->prepare($sqlh);
      $stm->execute([
        'hot'=>$row[2]+1,
         'nam1'=>$photo]);
      //header('Location: /index.php');
    }  catch(PDOException $e){
        echo "conection error";
        // echo $e;
      }  
} else if(array_key_exists('snot',$_POST)){
 // $row[2]++;
 try{
  $sqls="UPDATE  result SET `snot` = (:snot) where `pic`=:nam2";
  $stm=$pdo->prepare($sqls);
    $stm->execute(['snot'=>$row[3]+1, 'nam2'=>$photo ]);
    //header('Location: /index.php');
  }  catch(PDOException $e){
      echo "conection error";
      // echo $e;
    }  
}

?>
  </div>
</div>



</body>
</html>