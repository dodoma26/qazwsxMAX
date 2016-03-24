<?php
require_once("database.php");
require_once("articles.php");

$link = db_connect();
$articles = articles_get($link, $_GET["id"]);

include("Last.php");
?>