<?php include 'database.php';
$uploaddir="highscore/";

print_r($_POST);
if (isset($_POST["highscore"])){ 
    // isset controleert of var bestaat
   
   
    // Verplaats het bestand 
    if (move_uploaded_file($_FILES["tmp_name"],$uploaddir.$_FILES["name"])) { 
        
        // opslaan info in database 
        $query = $db->prepare("insert into 'highscore' (score) values (?)"); 
        // insert into is data in de tabel in de database zetten
        
        $params=array($_POST["highscore"], $_FILES["name"],mktime()); 
        if ($query->execute($params)) { 
            echo "<div class=\"feedbackgoed\">item toegevoegd.</div>\n"; 
            
        }
      
    }
} 





// $query = $query = $db->prepare("SELECT * from highscore where score"); //het voorbereiden van de query

// $params = array($_GET["score"]);

// $query->execute($params);//voort de query uit

// $result= $query->fetch(PDO::FETCH_ASSOC);  //gegevens ophalen om te tonen
// echo $result["score"];?>