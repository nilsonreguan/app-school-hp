<?php
require('config.php');


if( isset($_POST['casaNo']) )
{

    //declaracion de variables
    $vendedor           =$_POST['vendedor']; //1
    $proyecto           =$_POST['proyectos']; //2
    $casaNo             =$_POST['casaNo']; //3
    $estado             =$_POST['estado']; //4
    $nombre             =$_POST['nombre']; //5
    $correo             =$_POST['correo']; //6
    $telefono_cliente   =$_POST['telefono_cliente']; //7
    $tipo_documento     =$_POST['t_documento']; //8
    $monto              =$_POST['m_documento']; //9
    $no_documento       =$_POST['no_documento']; //10

    $html  = $vendedor .'<br/>';
    $html .= $proyecto .'<br/>';
    $html .= $casaNo .'<br/>';
    $html .= $estado .'<br/>';
    $html .= $nombre .'<br/>';
    $html .= $correo .'<br/>';
    $html .= $telefono_cliente .'<br/>';
    $html .= $tipo_documento .'<br/>';
    $html .= $monto .'<br/>';
    $html .= $no_documento .'<br/>';

    echo $html;



    // echo $casaNo.' ';
    // echo $estado;

    /*
    // Create connection
        $conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
    // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "UPDATE casa SET estado ='".$estado."' WHERE id =".$casaNo;
        $result = $conn->query($sql);

        if ($conn->query($sql) === TRUE) {
            echo "ok";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    //close conecction
        $conn->close();*/




}

?>