var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


var result = document.getElementById("result");


var form = document.getElementById('xIsPrecentOfy');


form.addEventListener('submit',function(event){
    /*validation*/
    if (!num1.value || !num2.value){
        alert("Please enter values in the feilds!")
    }
    else{
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        var result_val = x/y ;
        var precent  = result_val * 100;
        
        
        result.innerText = "Answer "+ precent +"%";
        event.preventDefault();
    }
    
    
    
});