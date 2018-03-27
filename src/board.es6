
import Kaart from "./kaart.es6";


//het board moet 
    //  weten hoeveel kaarten er zijn omgedraaid.
    //  de score bijhouden
    //  een nieuw board aanmaken 


export default class Board {

    constructor(aantal, kaarten) {

//hierover twijfel ik of het in het board moet, omdat het ook bij de kaart kan. Aangezien het een element is van de kaart, maar dan weet ik 
//niet hoe de board weet of die open of goed is. 
        this.openkaart = '';  //lege string eerste kaart
        this.opengoed = 0; //aantal open die goed zijn
        this.openedElement = ''; //lege string tweede kaart

//dit moet in de board blijven
        this.score = 0; //score, 
        this.aantalkaarten = aantal; //aantal kaarten
        this.kaarten = this.aantalkaarten;

    }

    //hier maakt hij het spel aan met alle onderdelen.
    maak() {

        //hij maakt nu twee kaarten aan, omdat in script.es6 staat dat er 2 moeten worden gemaakt. Maar dit zouden er vier moeten zijn, omdat je start met 4 kaarten   
        console.log(this.kaarten);
        let html = ''; //een lege string voor in html
        for (let i = 0; i<this.kaarten; i++)  //for loop zorgt ervoor dat de code elke keer gecheck wordt, zolang er kaarten zijn.
        {
            html += '<div id="klik' + eval(i+1) +'"></div>'; 

     
              //hier worden de verschillende divjes aangemaakt  //klik + eval(i+1) is div=klik + 1 (klik1, klik2, klik3, enzo)
        }
        document.getElementById('board').innerHTML = html; //hier worden de divjes in het board getekend 


        let showcards = new Kaart();



//dit hoort in de kaart te zitten. behalve dan dat er een nieuw board moet worden gemaakt.? 

        // for (let i = 0; i < this.kaarten.length; i++)
        // {
        //     let klik = document.getElementById('klik'+eval(i+1));
        //     let that = this;
        //     klik.onclick = function() //dit zorgt ervoor dat elke klik een onclick function krijgt
        //     {
        //         // console.log(that.kaarten);
        //         let a = that.kaarten[i]; //de kaart in de betreffende div

        //         document.getElementById('klik'+eval(i+1)).innerHTML = that.kaarten[i];
                
                
        //         if ( that.faceDown )
        //         {
        //             that.faceDown = false; //kaart wordt zichtbaar
        //             that.openkaart = a; //de kaart die open staat
        //             that.openedElement = document.getElementById('klik'+eval(i+1)); 
        //             // console.log(a);
                            
        //         } else {
        //             if ( that.openkaart == that.kaarten[i] ) //de kaart die open zijn moeten
        //             {
        //                 that.opengoed += 2; //als ze goed zijn wordt er 2 bij geteld 
        //                 if (that.opengoed == that.kaarten.length) //als alle kaarten open en goed zijn, dan heb je gewonnen.
        //                 {
        //                     alert('win');
        //                     let board = new Board(that.aantalkaarten += 2); //nieuw level.
        //                     board.maak(); //maakt nieuw board aan
        //                 }
        //             } else {
                        
        //             setTimeout(function(){
        //                 document.getElementById('klik'+eval(i+1)).innerHTML = ''; //als ze fout zijn, worden ze terug gedraaid en zijn ze niet meer zichtbaar.
        //                 that.openedElement.innerHTML = '';
        //             }, 500)
        //             that.score += 1; //score plus 1 als je het fout heb
        //             document.querySelector('.score').innerHTML = that.score;   //score wordt veranderd in de html 
                        
        //             }
        //             that.faceDown = true; 
        //         }

        //     }
        // }
    }



}