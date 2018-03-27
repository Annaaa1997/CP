// import Delen from "./shuffle.es6";
export default class Card {


    //Een kaart moet weten 
    //      hoeveel er zijn, 
    //      of hij is omgedraaid of niet
    //      

    constructor(aantal) {
        this.faceDown = true; //de kaart is niet zichtbaar
        this.aantalkaarten = aantal; //aantal kaarten
        this.kaarten = []; //lege array waar de kaarten in komen
        this.kaarten.length = this.kaarten;
      
        this.cards();
        

    }

    
    cards(){
            console.log("cards");
         
            
        }
    
}