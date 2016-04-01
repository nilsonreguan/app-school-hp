<?php
/**
 * Created by PhpStorm.
 * User: Carlos
 * Date: 21/12/15
 * Time: 03:55 PM
 */

//Database Constants
defined('DB_SERVER')? null : define("DB_SERVER", "localhost");
defined('DB_USER')? null : define("DB_USER", "root");
defined('DB_PASS')? null : define("DB_PASS", "");
defined('DB_NAME')? null : define("DB_NAME", "app_colegios");


// Create connection
$conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>