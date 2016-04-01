<?php
header("Access-Control-Allow-Origin: *");
require('includes/config.php');



if(isset($_POST['email']))
{

    // Create connection
    $conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $email=$_POST['email'];
    $password=$_POST['password'];

    //echo $email. " ".$password;

    $sqlloginuser = "SELECT * FROM phonegap_login WHERE email='$email' AND password = '$password'";
    $login = $conn->query($sqlloginuser);

    //$login=mysql_num_rows(mysql_query("select * from `phonegap_login` where `email`='$email' and `password`='$password'"));
    if ($login->num_rows != 0) {

        echo "login";
    }
    else
    {
        echo "failed";
    }
}



?>