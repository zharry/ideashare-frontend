<?php

    /** How to access MySQL
     *   1. Use the following require_once:
     *      require_once '/etc/mysql-creds/ideashare-mysql.inc.php';
     *   2. Use the array named $ISM
     *   3. Fields: host,     user,     pass,     db
     *              hostname  username  password  database
     */
    require_once '/etc/mysql-creds/ideashare-mysql.inc.php';
    
    echo $ISM["host"];
    echo "<br/>Welcome to the future site of IdeaShare!!";
?>