
const htmlSpeed=`<form id="calculateForm">
            <label for="kilometersVal">Kilometers: </label>
            <input type="number" id="kilometersVal" placeholder="Enter kilometers"  min="0">

            <label for="metersVal">Meters: </label>
            <input type="number" id="metersVal" placeholder="Enter meters"  min="0">
            
            <label for="hoursVal">Hours: </label>
            <input type="number" id="hoursVal" placeholder="Enter hours"  min="0">

            <label for="minutesVal"> Minutes: </label>
            <input type="number" id="minutesVal" placeholder="Enter minutes"  min="0">

            <label for="secondsVal">Seconds: </label>
            <input type="number" step="any" id="secondsVal" placeholder="Enter seconds" min="0">

            <button type="submit"> Calculate speed</button>
        </form>`;


const htmlTime =`<form id="calculateForm">

            <label for="speedVal">Speed(km/h): </label>
            <input type="number" step="any" id="speedVal" placeholder="Enter speed"  min="0">

            <label for="kilometersVal">Kilometers: </label>
            <input type="number" id="kilometersVal" placeholder="Enter kilometers"  min="0">

            <label for="metersVal"> Meters: </label>
            <input type="number" id="metersVal" placeholder="Enter meters"  min="0">

            <button type="submit"> Calculate time </button>
        </form>`;      


    //try with the same Id
        const htmlDistance = `<form id="calculateForm">
             <label for="speedVal">Speed(km/h): </label>
            <input type="number" step="any" id="speedVal" placeholder="Enter speed"  min="0">
          
            <label for="hoursVal">Hours: </label>
            <input type="number" id="hoursVal" placeholder="Enter hours"  min="0">

            <label for="minutesVal"> Minutes: </label>
            <input type="number" id="minutesVal" placeholder="Enter minutes" min="0">

            <label for="secondsVal">Seconds: </label>
            <input type="number" id="secondsVal" placeholder="Enter seconds"  min="0">

            <button type="submit"> Calculate distance </button>
        </form>`;  




const calculatorType = document.getElementsByName("calculatorType");
const formContainer = document.getElementById(`formContainer`);
const selectedRadio = document.querySelector("input[name='calculatorType']:checked");

if(selectedRadio.value ==="SPEED"){

    formContainer.innerHTML = htmlSpeed;
    document.getElementById("calculateForm").addEventListener("submit",calculateSpeed);

} else if(selectedRadio.value=== `DISTANCE`){
    
    formContainer.innerHTML = htmlDistance;
    document.getElementById("calculateForm").addEventListener("submit",calculateDistance);
   
   }
   else if(selectedRadio.value=== `TIME`){

    formContainer.innerHTML = htmlTime;
    document.getElementById("calculateForm").addEventListener("submit",calculateTime);
 
   }




// Array.from(calculatorType).forEach((e)=>
//     {e.addEventListener("change",formUpdate)})

calculatorType.forEach((e)=>
        {e.addEventListener("change",formUpdate)})

function formUpdate(e){
  const selectedType =  e.target.value;

    if(selectedType=="SPEED"){
        formContainer.innerHTML = htmlSpeed;
        resetResult();
        document.getElementById("calculateForm").addEventListener("submit",calculateSpeed);
       }
       else if(selectedType=== `DISTANCE`){
    
        formContainer.innerHTML = htmlDistance;
        resetResult();
        // document.removeEventListener("calculateForm", calculateSpeed);
        document.getElementById("calculateForm").addEventListener("submit",calculateDistance);
       
       }
       else if(selectedType=== `TIME`){
        
        formContainer.innerHTML = htmlTime;

        document.getElementById("calculateForm").addEventListener("submit",calculateTime);
        resetResult();
       }
};


function resetResult(){
    document.getElementById("result").textContent = `0`; 
}

    function calculateSpeed(e){
   
        e.preventDefault();
        console.log("speed start");
        const kilometers = parseFloat(document.getElementById("kilometersVal").value)||0;
        const meters = parseFloat(document.getElementById("metersVal").value)||0;
        const hours = parseFloat(document.getElementById("hoursVal").value)||0;
        const minutes = parseFloat(document.getElementById("minutesVal").value)||0;
        const seconds = parseFloat(document.getElementById("secondsVal").value) || 0;

        

             if(meters>0 || kilometers>0){

                if(hours>0 || minutes>0 || seconds >0){

                        const time = (hours)+(minutes/60)+(seconds/60/60);
                        const distance = kilometers + (meters/1000);
                        const speed = distance / time;

                        document.getElementById("result").innerText =`${speed.toFixed(2)} Km/H`;

                } else{
                    document.getElementById('result').innerText = `Please enter valid positive time`
                }

            } else{
                 document.getElementById('result').innerText = 'Please enter valid positive distance.';
            }
    };


    function calculateDistance(e){

        e.preventDefault();

        const speed = parseFloat(document.getElementById("speedVal").value)||0;
     
        const hours = parseFloat(document.getElementById("hoursVal").value) || 0;
        const minutes = parseFloat(document.getElementById("minutesVal").value) || 0;
        const seconds = parseFloat(document.getElementById("secondsVal").value) || 0;

        console.log(speed);
        console.log("Time:", hours, minutes, seconds); 
        if(speed > 0){

            if(hours > 0 || minutes > 0 || seconds >0){
                
                const time = hours + (minutes/60) + (seconds/60/60);
                const resultDistance = speed * time;

                if(resultDistance<1){
                document.getElementById("result").innerText = `${(resultDistance*1000).toFixed(2)} m`;
                    }
                    else{
                        document.getElementById("result").innerText = `${resultDistance.toFixed(3)} km`;
                    }
            }
            else{
                document.getElementById("result").innerText = `Enter  any time messure value`;
            }  
        }
            else{
                document.getElementById("result").innerText = `Enter  speed value`;
            }
    }

       function calculateTime(e){
        e.preventDefault();

        const speed = document.getElementById('speedVal').value || 0;

        const kilometers = document.getElementById("kilometersVal").value || 0;

        const meters = document.getElementById("metersVal").value || 0;

        if(speed > 0){

            if(kilometers > 0 || meters > 0){

                const distanceKm = kilometers +(meters/1000);
                
                const timeResult = distanceKm / speed;

                const hours = parseInt((timeResult));

                const minutes = parseInt((timeResult-hours)*60)

                const seconds = (timeResult-hours-(minutes/60)) * 60* 60;

                if(hours>0)
                document.getElementById("result").innerText = `${hours}h. ${minutes}m. ${seconds.toFixed(3)}s.`;
            else if(minutes > 0)
                document.getElementById("result").innerText = `${minutes}m. ${seconds.toFixed(3)}s.`;
            
            else  document.getElementById("result").innerText = ` ${seconds.toFixed(3)}s.`;
        }

       }
    }

   
////
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        for(let k = 0; k < nums.length; k++){
                if(nums[i]+nums[k]==target){
                    return [i,k];
                }
        }
    }

    return Array.of();
};


const s  = " a b c b ";

const ar = s.split(" ");
console.log(ar);

// console.log(ar[4]);