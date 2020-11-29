<?php
include 'database.php';
?>
<?php
//Creat selct query
$query = "select * from shouts ORDER BY id DESC";
$shout = mysqli_query($con,$query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SHOUT IT!</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <div id="container">
    <header>
    <img src="./img/giphy.gif">
    <h1 class="h1">SHOUT IT ! SHOUTBOX</h1>
    
    </header>
    <div id="shouts">
      <ul><?php while ($row = mysqli_fetch_assoc($shout)): ?>
      <li class="shout"><span><?php echo $row['time']?>-</span><strong><?php echo $row['user']?></strong>: <?php echo $row['message']?></li><?php endwhile?>
      </ul>
    </div>
    <div id="input">
    <?php if(isset($_GET['error'])) :?>
    <div class='error'><?php echo$_GET['error']; ?></div>
    <?php endif;?>
      <form action="process.php" method="POST">
        <input type="text" name="user" placeholder="Enter Your Name">
        <input type="text" name="message" placeholder="Enter A Message">
        <br/>
        <input type="submit" value="Shout It Out" class="shout-btn" name="submit">
      </form>
    </div>
  </div>
</body>
</html>