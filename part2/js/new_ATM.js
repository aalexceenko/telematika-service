
const cellCount = document.querySelector('#cellCount');

const cellListElement = document.querySelector(`.cells-container`);

const createCellsListTemplate = (i) => (
    `<div class="info-block">
        <label title="100, 200,500, 1000, 2000, 5000">Номинал: <input class="money-value" id="moneyValue${i}" type="number" min="100" max="5000" ></label>
        <label>Кол-во купюр: <input class="money-count" id="moneyCount${i}" type="number" min="0"></label>
        <label>Исправна: <input class="cell-availible" id="isActive${i}" type="checkbox"></label>
    </div>`
);

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
  };



let CELL_COUNT;
var flag = false;
console.log(flag);
// let coins = [];
var coins = {push:function push(element){ [].push.call(this,element)}};
console.log(coins);


var addCellsCount = () => {

    CELL_COUNT = cellCount.value;
    for (let i = 0; i < CELL_COUNT; i++) {
        // debugger;
        new Array(CELL_COUNT)
            .fill(``)
            .forEach(
                () => render(cellListElement, createCellsListTemplate(i), `beforeend`)
            );

        
    // const moneyValue = document.querySelector('#moneyValue');
    // console.log(moneyValue);
    // const moneyCount = document.querySelector('#moneyCount');
    // const isActive = document.querySelector('#isActive');
    
    // // if (flag) {
    //     let coinsCount, coinsActive, coinsValue;
    //     // let coinsValue = moneyValue.value;
    // // }
    
    // moneyValue.addEventListener('change', function () {
    //     console.log(moneyValue.value);
    //     coinsValue = moneyValue.value;

    //     if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
    //         coins.push({ "value": coinsValue, "count": coinsCount});
    //         console.log(coins);
    //     }
    //     // return coinsValue;
    // });

    // moneyCount.addEventListener('change', function () {
    //     console.log(moneyCount.value);
    //     coinsCount = moneyCount.value;
    //     if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
    //         // var coins = [{ "value": coinsValue, "count": coinsCount}];
    //         coins.push({ "value": coinsValue, "count": coinsCount});
    //         console.log(coins);
            
    //     }
    //     // return coinsCount;
    // });

    // isActive.addEventListener('change', function () {
    //     coinsActive = false;
    //     if (isActive.checked) {
    //         coinsActive = true;
    //     }
    //     console.log(coinsActive);
    //     if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
    //         // var coins = [{ "value": coinsValue, "count": coinsCount}];
    //         coins.push({ "value": coinsValue, "count": coinsCount});
    //         console.log(coins);
    //     }
    // });
    };

    const divCount = document.querySelectorAll('.info-block');
    // const divCount = document.querySelectorAll('.info-block');
    console.log(divCount.length);
    if (cellCount.value !== '') {
        // debugger;
        for (let i = 0; i < divCount.length; i++) {
            addElementToArray(i);
            // console.log(coins);

        }
        
    }
    
};



cellCount.addEventListener('change', addCellsCount);


var addElementToArray = (i) => {

    var moneyValue = document.querySelector('#moneyValue' + i);
    var moneyCount = document.querySelector('#moneyCount' + i);
    var isActive = document.querySelector('#isActive' + i);

    let coinsCount, coinsActive, coinsValue;
    
    moneyValue.addEventListener('change', function () {
        console.log(moneyValue.value);
        coinsValue = moneyValue.value;

        if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
            // coins.push({ "value": coinsValue, "count": coinsCount});
            console.log(coins);
        }
   
    });

    moneyCount.addEventListener('change', function () {
        console.log(moneyCount.value);
        coinsCount = moneyCount.value;
        if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
            // coins.push({ "value": coinsValue, "count": coinsCount});
            console.log(coins);
            
        }
    });

    isActive.addEventListener('change', function () {
        coinsActive = false;
        if (isActive.checked) {
            coinsActive = true;
            if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
                // var coins = [{ "value": coinsValue, "count": coinsCount}];
                coins.push({ "value": coinsValue, "count": coinsCount});
                console.log(coins);
            }
        } else {
            coins = Array.prototype.pop.call(coins);
            // coins.pop();
            // obj.coins.pop();
            // coins.pop({ "value": coinsValue, "count": coinsCount});
            console.log(coins);
        }
        console.log(coinsActive);
        // if (isActive && (coinsCount !== undefined) && (coinsValue !== undefined)) {
        //     // var coins = [{ "value": coinsValue, "count": coinsCount}];
        //     coins.push({ "value": coinsValue, "count": coinsCount});
        //     console.log(coins);
        // }
    });
    // console.log(coins);

    return coins;
};


// debugger;




const getChange = (coins, amount, coinIndex = 0) => {
    if (amount === 0){
        return [];
    }
    if (coinIndex >= coins.length){
        return null;
    }

    let coin = coins[coinIndex];
    coinIndex += 1;
    canTake = Math.min(parseInt(amount / coin.value), coin.count);
    // console.log(canTake);
    for (let count = canTake; count > -1; count--){
        change = getChange(coins, amount - coin.value * count, coinIndex);
        if (change !== null){
            if (count){
                change.push({"value": coin.value, "count": count});
                return change;
            }
            return change;
        }
    }
}

const main = (amount) => {

    // MUST BE SORTED IN DESCENDING ORDER BY VALUE !!!!
    // let coins = [
    //     { "value": 5000, "count": 2},   
    //     { "value": 2000, "count": 543434},
    //     { "value": 1000, "count": 44345},
    //     { "value": 500, "count": 5461115},
    //     { "value": 200, "count": 178678870},
    //     { "value": 100, "count": 504534540}
    // ];
    let sum = 0;
    for (let i=0; i < coins.length; i++){
        let{value,count} = coins[i];
        sum += value * count;
    }
    // console.log(`Balance is ${sum} rubles`)
    if (amount <= sum){
        if (amount % coins[coins.length-1].value === 0){
            result = getChange(coins, amount);
            if (result !== undefined){
                console.log(`For ${amount} rubles the ATM can give you:`);
                for (let i=0; i < result.length; i++){
                    let{value,count} = result[i];
                    console.log(`\t\t\t\t${count} denomination of ${value} rubles`);
                }
            } else {
                console.log('No change money in the ATM');
            } 
        } else {
            console.log(`Must be a multiple of ${coins[coins.length-1].value}`);
        }
    }
    else {
        console.log('Not enough money in the ATM');
    }
};

if (coins.length > 0){
    var amount = 13600;
    var t0 = performance.now();
    main(amount);
    var t1 = performance.now();
    console.log(`Execution time was ${t1 - t0} milliseconds`);
}




