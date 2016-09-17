<?php 

    /** How to access MySQL
     *   1. Use the following require_once:
     *      require_once '/etc/mysql-creds/ideashare-mysql.inc.php';
     *   2. Use the array named $ISM
     *   3. Fields: host,     user,     pass,     db
     *              hostname  username  password  database
     */

    require_once '/etc/mysql-creds/ideashare-mysql.inc.php';
    
    // Create connection
    $conn = mysqli_connect("ideashare.ml", $ISM["user"], $ISM["pass"], $ISM["db"], 33306);

    // Check connection
    if (mysqli_connect_errno()) {
        die(mysqli_connect_error());
    }

?>