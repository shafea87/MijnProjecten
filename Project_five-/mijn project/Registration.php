<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="./css/registration.css">
 <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
  <title>Registration</title>
</head>
<body>
  <div class="signup-form">
    <img src="./img/nn.png">
    <form action="proccess.php" method="POST">
      <input type="text"  placeholder="Name User" class="text" name="userName">
      <input type="email"  placeholder="E-mail" class="text" name="email">
      <input type="password"  placeholder="password" class="text" name="pass">
      <input type="password"  placeholder="Comfirm password" class="text" name="compass">
      <input type="submit" value="Creat an account" class="but" name="but">
      <a href="login.php"> Already have an account</a>
    </form>
  </div>

</body>
</html>