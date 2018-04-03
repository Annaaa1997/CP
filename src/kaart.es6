
 //Een kaart moet weten 
    //      hij moet een lege array hebben waar de kaarten in moeten komen √
    //      hoeveel er zijn, √
    //      het aantal kaarten dat er zijn √
    //      of hij is omgedraaid of niet , het board moet weten hoeveel er omgedraaid zijn.
    //      
  
import Delen from "./shuffle.es6";

export default class Kaart {

    constructor(aantal, kaarten) {
        this.aantalkaarten = aantal;
        this.kaarten = [];
        this.generateCards(); 
        this.draai();
        this.maaktkaart();




    }

    //hier krijgt hij dan twee keer kaarten met dezelfde waarde
    generateCards() {
        for (let i = 0; i < this.aantalkaarten; i++)
        {
            this.kaarten.push(i); //dit zorgt ervoor dat 1 array twee keer dezelfde waarde krijgt.
            this.kaarten.push(i);
        }
        let delen = new Delen(this.kaarten); // hier worden de kaarten geschud. 
    }
    
    draai(){
    
            // console.log("de draai function");
            console.log(this.kaarten);
            // console.log(this.kaarten.length);

             for (let i = 0; i < this.kaarten.length; i++)
                {
                    // console.log("ik doe het ook");

                    let klik = document.getElementById('klik'+eval(i+1));
                    let that = this;


                    klik.onclick = function() //dit zorgt ervoor dat elke klik een onclick function krijgt
                    {
                        // console.log(that.kaarten);
                        let a = that.kaarten[i]; //de kaart in de betreffende div

                        document.getElementById('klik'+eval(i+1)).innerHTML = that.kaarten[i];
                
                    }
                    //     if ( that.faceDown )
                    //     {
                    //         that.faceDown = false; //kaart wordt zichtbaar
                    //         that.openkaart = a; //de kaart die open staat
                    //         that.openedElement = document.getElementById('klik'+eval(i+1)); 
                    // // console.log(a);
                            
                    //     } else {
                    //         if ( that.openkaart == that.kaarten[i] ) //de kaart die open zijn moeten
                    //         {
                    //             that.opengoed += 2; //als ze goed zijn wordt er 2 bij geteld 
                    //             if (that.opengoed == that.kaarten.length) //als alle kaarten open en goed zijn, dan heb je gewonnen.
                    //             {
                    //                 alert('win');
                    //                 let board = new Board(that.aantalkaarten += 2); //nieuw level.
                    //                 board.maak(); //maakt nieuw board aan
                    //     }
                    // } else {
                        
                    //         setTimeout(function(){
                    //             document.getElementById('klik'+eval(i+1)).innerHTML = ''; //als ze fout zijn, worden ze terug gedraaid en zijn ze niet meer zichtbaar.
                    //             that.openedElement.innerHTML = '';
                    //         }, 500)
                    //         that.score += 1; //score plus 1 als je het fout heb
                    //         document.querySelector('.score').innerHTML = that.score;   //score wordt veranderd in de html 
                        
                    //         }
                    //         that.faceDown = true; 
                    //     }

            }
        // }
    }

    maaktkaart(){

            // console.log(this.aantalkaarten);
            console.log('ik werk in kaart')
            let html = ''; //een lege string voor in html
            for (let i = 0; i<this.kaarten; i++)  //for loop zorgt ervoor dat de code elke keer gecheck wordt, zolang er kaarten zijn.
            {
                html += '<div id="klik' + eval(i+1) +'"></div>'; 
    
         
                  //hier worden de verschillende divjes aangemaakt  //klik + eval(i+1) is div=klik + 1 (klik1, klik2, klik3, enzo)
            }
            // document.getElementById('board').innerHTML = html; //hier worden de divjes in het board getekend 
    
        
    }
}