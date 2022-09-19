function mygetvalueFunc(){
    var inputvalue = (document.getElementById("beta").value)
    var x = inputvalue.slice(-3,-2)
    if(x == "1"){
        document.body.style.backgroundColor = 'rgba(72, 65, 105)';
    }
    else if(x == "2"){
        document.body.style.backgroundColor = 'yellow';
    }
    else if(x == "3"){
        document.body.style.backgroundColor = 'black';
    }
    
}

