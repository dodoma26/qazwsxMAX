<?php
define("MYSQL_SERVER",'ap-cdbr-azure-east-c.cloudapp.net');
define("MYSQL_USER",'b43dc0b08563a6');
define("MYSQL_PASSWORD",'aa4f3c1a');
define("MYSQL_DB",'articles');

function db_connect(){
    $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB) or die("Error: ".mysqli_error($link));
    if (!mysqli_set_charset($link, "utf8")){
        printf("Error: ".mysqli_error($link));
    }
    return $link;
}
?>
