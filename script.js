
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flipButton");
let resetBtn = document.querySelector("#resetButton");


flipBtn.addEventListener("click", () => {
let i = Math.floor(Math.random() * 10);
    
    coin.style.animation = "none";
    if(i%2 == 0){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
    	setTimeout(() => {if(i%2 == 0){
		document.getElementById("title").innerText = "It's HEADS!";
	}}, 3000);
        
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        setTimeout(() => {if(i%2 == 1){
		document.getElementById("title").innerText = "It's TAILS!";
	}}, 3000);
    }
    disableButton();
});

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
