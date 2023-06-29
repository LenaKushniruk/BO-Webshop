let webschopKnop = document.getElementById('webschopKnop');
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three" 

for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "one-two-three"
        }
    }
}


let alljewellerys = document.getElementsByClassName('jewellery');
let filters = document.getElementsByClassName('filter');

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    document.getElementsByTagName('main')[0].style.opacity = 1;

}, 1500);

console.log(filters);
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let ringFilter = document.getElementById('checkbox-ring');
ringFilter.onchange = function(){
    if(ringFilter.checked === true){
        for(let i = 0 ; i < alljewellerys .length; i++){
            if(alljewellerys[i].dataset.category === 'ring'){
                alljewellerys[i].style.display = 'block';
            }
        }
    }
    else{
        for(let i = 0 ; i < alljewellerys.length; i++){
            if(alljewellerys[i].dataset.category === 'ring'){
                alljewellerys[i].style.display = 'none';
            }
        }
    }
}

let braceletFilter = document.getElementById('checkbox-bracelet');
braceletFilter.onchange = function(){
    if(braceletFilter.checked === true){
        for(let i = 0 ; i < alljewellerys.length; i++){
            if(alljewellerys[i].dataset.category === 'bracelet'){
                alljewellerys[i].style.display = 'block';
            }
        }
    }
    else{
        for(let i = 0 ; i < alljewellerys.length; i++){
            if(alljewellerys[i].dataset.category === 'bracelet'){
                alljewellerys[i].style.display = 'none';
            }
        }
    }
}

let chainFilter = document.getElementById('checkbox-chain');
chainFilter.onchange = function(){
    if(chainFilter.checked === true){
        for(let i = 0 ; i < alljewellerys.length; i++){
            if(alljewellerys[i].dataset.category === 'chain'){
                alljewellerys[i].style.display = 'block';
            }
        }
    }
    else{
        for(let i = 0 ; i < alljewellerys.length; i++){
            if(alljewellerys[i].dataset.category === 'chain'){
                alljewellerys[i].style.display = 'none';
            }
        }
    }
}