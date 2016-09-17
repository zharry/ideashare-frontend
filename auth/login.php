<?php

    session_start();
    require_once '../includes/connection.php';

    if (!empty($_POST)) {
        
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        
        $sql = "SELECT * FROM is_users WHERE email='$email' AND password='$password'";
        $result = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($result) == 1) {
            while ($row = mysqli_fetch_assoc($result)) {
                $_SESSION = $row;
            }
            echo "Welcome " . $_SESSION["username"];
        } else {
            echo "Login failed!";
        }
        
        mysqli_close($conn);
        die();
    }
?>

<form action="login.php" method="post">
Email: <input type="text" name="email"><br>
Pass: <input type="password" name="password"><br>
<input type="submit" value="Submit">
</form>