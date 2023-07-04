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


const addTocartButtons = document.getElementsByClassName('marvel__button');
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName('shoppingCart__message')[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let InfinityRing = 0;
let avengers = 0;
let drStrange = 0;
let thanos = 0;
let InfinityRingPrice = 0;
let avengersPrice = 0;
let drStrangePrice = 0;
let thanosPrice = 0;

for(let i = 0; i < addTocartButtons.length; i++){
    addTocartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addTocartButtons[i].dataset.product){
            case 'InfinityRing':
                InfinityRing += 1;
                InfinityRingPrice = InfinityRing * 15;
            break;
            case 'avengers':
                avengers += 1;
                avengersPrice = avengers * 22;
            break;
            case 'drStrange':
                drStrange += 1;
                drStrangePrice = drStrange * 13;
            break;
            case 'thanos':
                thanos += 1;
                thanosPrice = thanos * 30;

            break;
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = 'flex';
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = 'none';
                modalIsOpen = false;
            },2000);
        }

    }
}

const checkoutbutton = document.getElementById('js--shoppingcart');
const checkoutWindow = document.getElementById('js--checkoutWindow');
let checkoutisOpen = false;

checkoutbutton.onclick = function(){
    if(checkoutisOpen === false){
        document.querySelector('main').style.display = 'none';
        checkoutWindow.style.display = 'block';
        checkoutisOpen = true;
        document.getElementById('js--amount-infinity').innerHTML = InfinityRing + 'x';
        document.getElementById('js--amount-avengers').innerHTML = avengers + 'x';
        document.getElementById('js--amount-drStrange').innerHTML = drStrange + 'x';
        document.getElementById('js--amount-thanos').innerHTML = thanos + 'x';
        document.getElementById('js--amount-infinity').innerHTML = InfinityRing + 'x €' + InfinityRingPrice;
        document.getElementById('js--amount-avengers').innerHTML = avengers + 'x €' + avengersPrice;
        document.getElementById('js--amount-drStrange').innerHTML = drStrange + 'x €' + drStrangePrice;
        document.getElementById('js--amount-thanos').innerHTML = thanos + 'x €' + thanosPrice;


        return;
    }
    document.querySelector('main').style.display = 'block';
    checkoutWindow.style.display = 'none';
    checkoutisOpen = false;
}