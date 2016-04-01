<?php
header("Access-Control-Allow-Origin: *");
require('includes/config.php');

if (isset($_POST['email'])) {

    // Create connection
    $conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sqlCheckuserEmail = "SELECT * FROM phonegap_login WHERE email=" . $email;
    $login = $conn->query($sqlCheckuserEmail);

    //$login = mysql_num_rows(mysql_query("select * from `phonegap_login` where `email`='$email'"));
    if ($login->num_rows != 0) {
        echo "exist";
        //. "<br/>" . $fullname . "<br/>" . $email . "<br/>" . $password;

    } else {
        date_default_timezone_set('America/Guatemala');
        $date = date("y-d-m- h:i:s");

        $sql = "INSERT INTO phonegap_login (reg_date, fullname, email, password)
                VALUES ('$date','$fullname','$email','$password')";

        if ($conn->query($sql) === TRUE) {
            echo "success";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();


    }
}
//echo 'no se envio post';
?>