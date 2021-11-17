var inputs = document.querySelectorAll('.form-input');

var brexResult =      document.getElementById("brex-result");
var stripeResult =    document.getElementById("stripe-result");
var amexResult =      document.getElementById("amex-result");
var unlimitedResult = document.getElementById("unlimited-result");
var lifetimeResult =  document.getElementById("lifetime-rewards");

var optionalProgressBar = document.getElementsByClassName("optional-calc");
var progressBar = document.getElementsByClassName("automatically-calc");

var sum =   0;
var brex =  0;
var stripe =0;
var amex =  0;

var unlimitedRewards=0;
var lifetimeRewards =0;


    for (let i = 0; i < inputs.length; i++) {

        inputs[i].addEventListener("input", function() {
            let arr = [];
            let values = [];
            for(let i=0; i<inputs.length; i++){
                arr.push(+inputs[i].value);
                values.push(inputs[i].value);
            }
            console.log(arr)

            sum = arr.reduce((result,current)=> result+current, 0);
            
             unlimitedRewards = sum * 1.1;
             lifetimeRewards =  sum *1.2;

            brex =   sum* 0.3;
            stripe = sum *2.9;
            amex =   sum * 1.3;

            /* results appear automatically once the user has entered the 4 numbers */
                if(! values.includes('')){
                    brexResult.innerHTML = "$" + brex.toLocaleString(); 
                    stripeResult.innerHTML = "$" + stripe.toLocaleString();  
                    amexResult.innerHTML = "$" + amex.toLocaleString(); 
                    unlimitedResult.innerHTML = "$" + unlimitedRewards.toLocaleString();
                    lifetimeResult.innerHTML = "$" + lifetimeRewards.toLocaleString();
                    for(let i of optionalProgressBar){
                        i.max = brex+stripe+amex
                    }
                    document.getElementById("brex-bar").value = brex;
                    document.getElementById("stripe-bar").value = stripe;
                    document.getElementById("amex-bar").value = amex;
        
                    for(let j of progressBar){
                        j.max = unlimitedRewards + lifetimeRewards;
                    }
                    document.getElementById("unlimited-bar").value = unlimitedRewards;
                    document.getElementById("lifetime-bar").value = lifetimeRewards;
                    
                }
               
 
        });
    }



    var divs = ["Div1", "Div2", "Div3"];
    var visibleDivId = null;

        function toggleVisibility(divId) {


        /* check for all form fields */
        let allAreFilled = true;
        document.getElementById("form").querySelectorAll("[required]").forEach(function(i) {
            if (!allAreFilled) return;
            if (!i.value) allAreFilled = false;
          
            
        })
        if (!allAreFilled) {
            alert('Please fill all the fields');
            return
        }

        /* automatic result would appear relative to the branded button   */
        if(visibleDivId === divId) {
            //visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        hideNonVisibleDivs();
        }
        function hideNonVisibleDivs() {
        var i, divId, div;
        for(i = 0; i < divs.length; i++) {
            divId = divs[i];
            div = document.getElementById(divId);
            if(visibleDivId === divId) {
            div.style.display = "flex";
            } else {
            div.style.display = "none";
            }
        }
        }


        /* prevent form from being submitted */
        function mySubmitFunction(e) {
            e.preventDefault();
            return false;
          }
