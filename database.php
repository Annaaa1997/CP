<?php 

try {
    $db = new PDO('mysql:host=localhost; dbname=ajong9;charset=utf8',
    'ajong9','p3Juni19977');
} 

catch(PDOException $e){	
    echo $e->getMessage();	die(); 
} 
?>
