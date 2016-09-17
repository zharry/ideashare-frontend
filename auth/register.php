<?php

    require_once '../includes/connection.php';

    if (!empty($_POST)) {
        
        $prep = mysqli_prepare($conn, "INSERT INTO is_users (username, email, frist, last, password) 
            VALUES (?, ?, ?, ?, ?);
        ");
        mysqli_stmt_bind_param($prep, 'sssss', $_POST["username"], $_POST["email"], $_POST["frist"], $_POST["last"], $_POST["password"]);
        
        if (mysqli_stmt_execute($prep) && mysqli_stmt_close($prep)) {
            die("Registered!");
        } else {
            die("Registration Failed!");
        }
        
        
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