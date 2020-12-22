<?php
include 'db.php';
//SELECT *
// FROM result
// ORDER BY hotDESC
// LIMIT 10;
$sql=$pdo->query("SELECT * FROM result ORDER BY hot DESC LIMIT 10");
$row=$sql->fetchAll(PDO::FETCH_NUM);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./mySyle.css">
    <title>Top 10</title>
</head>
<body>
    <!-- <p><h3>RESULT</h3></p> -->
    
  <div id="container">
        <div id="hot_result"> <div class="hot_title"><h2>Top 10 Hot</h2></div><br>
            <?php
foreach($row as $hphoto){
    echo '<div class="rhotimg">';
    echo '<h3>'.$hphoto[2].' clicks </h3>';
  echo'<img class="rimg" src="./img/'.$hphoto[1].'"/>'.'<br>' ;
  echo '</div>';
   // echo $hphoto[1]."<br>";
}
            ?>
        </div>
        <div id="snot_result"> <div class="hot_title"><h2>Top 10 Snot</h2></div><br>
        <?php
        $sql=$pdo->query("SELECT * FROM result ORDER BY snot DESC LIMIT 10");
        $row=$sql->fetchAll(PDO::FETCH_NUM);?> 
        <?php
foreach($row as $sphoto){
        echo '<div class="rhotimg">';
        echo '<h3>'.$sphoto[3].' clicks </h3>';
        echo'<img class="rimg" src="./img/'.$sphoto[1].'"/>'.'<br>' ;
        echo '</div>';
// echo $hphoto[1]."<br>";
}  ?>
       
    </div>
  </div>  
</body>
</html>