function solve(){
    let Amount = document.getElementById("val_input").value;
    let fromC = document.getElementById("frC_input").value;
    let toC = document.getElementById("toC_input").value;
    Amount = parseFloat(Amount);
    switch(fromC){
        case "vnd":
            if(toC === "usd"){
                Amount/=22679.03;
                document.getElementById("kq").innerHTML = Amount;
            }
            else if(toC === "yen"){
                Amount/=200.05;
                document.getElementById("kq").innerHTML = Amount;
            }
            else{
                document.getElementById("kq").innerHTML = Amount;
            }
            break;

        case "usd":
            if(toC === "vnd"){
                Amount*=22679.03;
                document.getElementById("kq").innerHTML = Amount;
            }
            else if(toC === "yen"){
                Amount*=113.33;
                document.getElementById("kq").innerHTML = Amount;
            }
            else{
                document.getElementById("kq").innerHTML = Amount;
            }
            break;

        case "yen":
            if(toC === "vnd"){
                Amount*=200.05;
                document.getElementById("kq").innerHTML = Amount;
            }
            else if(toC === "usd"){
                Amount/=113.33;
                document.getElementById("kq").innerHTML = Amount;
            }
            else{
                document.getElementById("kq").innerHTML = Amount;
            }
            break;
    }
}