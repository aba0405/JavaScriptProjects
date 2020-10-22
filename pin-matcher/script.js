function generateBtn(){
    let number = Math.random()*9999;
    number = Math.ceil(number);
    if(number>999){
        document.getElementById("numbers").value=number;
    }    
}

function printOutput(num){
    document.getElementById("pin").value=num;	
}
function getOutput(){
	return document.getElementById("pin").value;
}

let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=getOutput();
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
}

let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
       if (this.id=="backspace") {
            let output=getOutput().toString();
            if (output) {
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
       else if(this.id=="clear"){
			printOutput("");
        }
    })
}

function submitBtn(){
    let numbers = document.getElementById("numbers").value;
    var pins = document.getElementById("pin").value;
    if (numbers==pins) {
        document.getElementById("yes").style.display="block";
    }
    else{
        document.getElementById("no").style.display="block";
    }
}