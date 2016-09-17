<?php

    session_start();

    if (empty($_SESSION)) {
        header("Location: login.php");
        die();
    }

    print_r($_SESSION);

?>