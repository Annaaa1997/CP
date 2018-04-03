
export default class Delen { 
    constructor (kaarten, huidigekaarten)
    {
            this.kaarten = kaarten; //het aantal kaarten
            this.huidigekaarten = this.kaarten.length; // de huidige kaarten bestaat uit de kaart lengte
            this.randomvolgorde = this.schudden(); //hier schud hij de kaarten
           
        
        // totdat er geen kaarten meer gehusseld kunnen worden, blijft hij de random indelen
     
    }

    schudden(){
        console.log ("ikwerkook");
        let that = this;
        while (0 !== that.huidigekaarten)  
            {
                // !== true, NIET hetzelfde //zolang het niet groter is dan de huidige kaarten, blijft hij werken
      
                that.randomvolgorde = Math.floor(Math.random() * that.huidigekaarten); //random plaats
                that.huidigekaarten -= 1; //elke keer eentje er vanaf
    
                // dit zorgt ervoor dat het geruild wordt in de array
                that.waarde = that.kaarten[that.huidigekaarten];
                that.kaarten[that.huidigekaarten] = that.kaarten[that.randomvolgorde];
                that.kaarten[that.randomvolgorde] = that.waarde;
                // console.log ("test");
            }
            
            return this.kaarten ; //zorgt ervoor dat de kaarten "Zichtbaar " worden
            // console.log(this.kaarten)
           
        }
        
        
}

