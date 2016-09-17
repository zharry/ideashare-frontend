<?php

    require_once '../includes/connection.php';

    if (!empty($_POST)) {
        
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $first = mysqli_real_escape_string($conn, $_POST['first']);
        $last = mysqli_real_escape_string($conn, $_POST['last']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        
        $sql = "INSERT INTO is_users (username, email, frist, last, password) VALUES ('$username', '$email', '$first', '$last', '$password')";
        
        if (mysqli_query($conn, $sql)) {
            echo "Registered!";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
        
        mysqli_close($conn);
        die();
    }
?>

<form action="register.php" method="post">
    Username: <input type="text" name="username"><br>
    Email: <input type="text" name="email"><br>
    First: <input type="text" name="frist"><br>
    Last: <input type="text" name="last"><br>
    Pass: <input type="password" name="password"><br>
    <input type="submit" value="Submit">
</form>