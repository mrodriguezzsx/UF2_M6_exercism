// Exercici 1
function checkHumidityLevel(humedad){
    try{
         if(humedad > 70){
             throw new Error('Throws an error');
         }
    }catch(error){
         console.log(error.message);
    }
 }
 checkHumidityLevel(100); // => Throws an Error
 //checkHumidityLevel(60); // => undefined
 
// Exercici 2
 let argumentError = new Error("Throws an ArgumentError");
 let overheatingError = new Error("Throws an OverheatingError");
 
 function reportOverheating(temp){
     if(temp == null){
         console.log(argumentError.message);
     }else if(temp > 500){
         console.log(overheatingError.message);
     }
 }
 reportOverheating(800); // => Throws an OverheatingError
 //reportOverheating(null); // => Throws an ArgumentError
 
// Exercici 3
 let actions = {
     check: function check(){},
     alertDeadSensor: function alertDeadSensor(){},
     alertOverheating: function alertOverheating(){},
     shutdow: function shutdow(){},
 };
 function monitorTheMachine(actions){
     try{
         this.actions = actions;
     }catch(error){
         check()
         if(error instanceof argumentError){
             alertDeadSensor();
         }else if(error instanceof overheatingError){
             if(temp < 600){
                 alertOverheating();
             }else if(temp > 600){
                 shutdow();
             }
         }else{
             throw new error("Error en el programa");
         }
     }
 }
 monitorTheMachine(actions); 