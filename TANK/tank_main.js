const tank = document.getElementById("tank");   
const boom = document.getElementById("boom");

function randBoom(){    /* lay gia tri ngau nhien cho toa do cua Boom */
    let topBoom = Math.floor(Math.random()*(180 - 9));
    let leftBoom = Math.floor(Math.random()*(180 - 9));
    boom.style.top = topBoom + "px";    
    boom.style.left = leftBoom + "px";
}
function Position(ele){ /* lay gia tri toa do hien tai cua Element (tank hoac boom) */
    return{
        left: ele.offsetLeft,
        top: ele.offsetTop
    }
}
function Move(event){
    let curPosition = Position(tank);
    let boomPosition = Position(boom);

    switch(event.target.id){
        case "leftButt":
            tank.style.transform = "rotate(270deg)";    /* xoay hinh */
            if(curPosition.left > 9){
                tank.style.left = curPosition.left - 28 + "px";
                console.log(curPosition.left-19); /* in ra man hinh console toa do x hien tai */
                if(curPosition.left - 28 < boomPosition.left){
                    /* dat dieu kien cho toa do left cua tank giao voi left cua boom */
                    if((curPosition.top >= (boomPosition.top - 19)) && (curPosition.top <= (boomPosition.top + 19))){
                        /* dat dieu kien khi toa do top cua tank nam trong 1 khoang +- cua toa do top cua boom */
                        tank.src = "./img/explosion.png";
                        alert("GAME OVER!");
                    }
                }
            }    
            break;

        case "rightButt":
            tank.style.transform = "rotate(90deg)";
            if(curPosition.left < 180){
                tank.style.left = curPosition.left + 10 + "px";
                console.log(curPosition.left+19);
                if(curPosition.left + 37 > boomPosition.left){
                    if((curPosition.top >= (boomPosition.top - 19)) && (curPosition.top <= (boomPosition.top + 19))){
                        tank.src = "./img/explosion.png";
                        alert("GAME OVER!");
                    }
                }
            }
            break;

        case "upButt":
            tank.style.transform = "rotate(0deg)";
            if(curPosition.top > 9){
                tank.style.top = curPosition.top - 28 + "px";
                console.log(curPosition.top-19);
                if(curPosition.top - 28 > boomPosition.top){
                    if((curPosition.left >= (boomPosition.left - 19)) && (curPosition.left <= (boomPosition.left + 19))){
                        tank.src = "./img/explosion.png";
                        alert("GAME OVER!");
                    }
                }
            }
            break;
        
        case "downButt":
            tank.style.transform = "rotate(180deg)";
            if(curPosition.top < 180){
                tank.style.top = curPosition.top + 10 +"px";
                console.log(curPosition.top+19);
                if(curPosition.top + 37 > boomPosition.top){
                    if((curPosition.left >= (boomPosition.left - 19)) && (curPosition.left <= (boomPosition.left + 19))){
                        tank.src = "./img/explosion.png";
                        alert("GAME OVER!");
                    }
            }
            }
            break;
    }
}