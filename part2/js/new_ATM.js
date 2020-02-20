function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

const cellCount = document.querySelector('#cellCount');
const cellListElement = document.querySelector(`.cells-container`);

let CELL_COUNT;
let bills = {push:function push(element){ [].push.call(this,element)}};

const createCellsListTemplate = (i) => (
    `<fieldset class="info-block">
        <label title="100, 200, 500, 1000, 2000, 5000">Value: 
            <select name="select" id="moneyValue${i}"> 
                <option value="100">100</option> 
                <option value="200">200</option> 
                <option value="500">500</option> 
                <option value="1000">1000</option> 
                <option value="2000">2000</option> 
                <option value="5000">5000</option> 
                </option>
            </select>
        </label>
        <label>Number of: <input type="text" onkeypress='validate(event)' class="money-count" id="moneyCount${i}"></label>
        <label>Avaliable: <input class="cell-availible" id="isActive${i}" type="checkbox"></label>
    </fieldset>`
);


const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
  };

let addCellsCount = () => {

    CELL_COUNT = cellCount.value;

    if(!CELL_COUNT || CELL_COUNT <1 || CELL_COUNT > 8) {
        alert('Диапазон от 1 до 8.');
        cellCount.value = '';
    } else {
        cellCount.disabled = true;
        for (let i = 0; i < CELL_COUNT; i++) {
            new Array(CELL_COUNT)
                .fill(``)
                .forEach(
                    
                    () => render(cellListElement, createCellsListTemplate(i), `afterbegin`)
                );
    
        };
    }
};


cellCount.addEventListener('change', addCellsCount);

const btnCount = document.querySelector('.form-btn');


let addElementToArray = (i) => {

    var moneyValue = document.querySelector('#moneyValue' + i);
    var moneyCount = document.querySelector('#moneyCount' + i);
    var isActive = document.querySelector('#isActive' + i);

    let billsCount, billsActive, billsValue;
    

    billsValue = moneyValue.value;
    billsCount = moneyCount.value;
    billsActive = false;

    if (isActive.checked) {
        billsActive = true;
        if (isActive && (billsCount !== undefined) && (billsValue !== undefined)) {
            bills.push({ "value": billsValue, "count": billsCount});
        }
    } 

};

let getChange = (bills, amount, billIndex = 0) => {
    if (amount === 0){
        return [];
    }
    if (billIndex >= bills.length){
        return null;
    }

    let bill = bills[billIndex];
    billIndex += 1;
    canTake = Math.min(parseInt(amount / bill.value), bill.count);

    for (let count = canTake; count > -1; count--){
        change = getChange(bills, amount - bill.value * count, billIndex);
        if (change !== null){
            if (count){
                change.push({"value": bill.value, "count": count});
                return change;
            }
            return change;
        }
    }
}

let doTextResult = (amount) => {

    let sum = 0;
    for (let i = 0; i < bills.length; i++){
        let{value,count} = bills[i];
        sum += value * count;
    }

    if (amount <= sum){
        if (amount % bills[bills.length-1].value === 0){
            result = getChange(bills, amount);
            if (result !== undefined){
                let = alert_string = `For ${amount} rubles the ATM can give you:\n`;
                for (let i = 0; i < result.length; i++){
                    let{value,count} = result[i];
                    alert_string += `\t\t\t\t\t\t\t${count} denomination of ${value} rubles\n`;
                }
                alert(alert_string);
            } else {
                alert('No change money in the ATM');

            } 
        } else {
            alert(`Must be a multiple of ${bills[bills.length - 1].value}`);

        }
    }
    else {
        alert('Not enough money in the ATM');
    }
};


let doCount = () => {
    let temp_keys = [];
    let temp_count = [];
    let temp_map = [];

    for (i = 0; i < bills.length; i++) {

        if (temp_keys.includes(bills[i].value)){
            let index = temp_keys.indexOf(bills[i].value)
            temp_map[index] = {"value": bills[i].value, "count": parseInt(bills[i].count) + parseInt(temp_count[index])};
            temp_count[index] = parseInt(bills[i].count) + parseInt(temp_count[index]);

        } else {
            temp_keys.push(bills[i].value);
            temp_count.push(bills[i].count);
            temp_map.push({"value": bills[i].value, "count": bills[i].count});
        } 
    }

    Array.prototype.sort_by = function(key_func, reverse=false){
        return this.sort( (a, b) => ( key_func(b) - key_func(a) ) * (reverse ? 1 : -1) ) 
    }
    
    temp_map.sort_by(el => el.value, reverse=true);
    bills = temp_map;
    
    var amount = cellListElement.querySelector('#amount').value;

        if (bills.length > 0 && (amount !== '')){
            var t0 = performance.now();
            doTextResult(amount);
            var t1 = performance.now();
            alert(`Execution time was ${t1 - t0} milliseconds`);
        }
};

let doCountAllCells = () => {

    let fieldsetCellListElement = cellListElement.querySelectorAll('.info-block');
    for (let i = 0; i < fieldsetCellListElement.length; i++) {
        fieldsetCellListElement[i].disabled = true;
        addElementToArray(i);
    }

    doCount();

};


btnCount.addEventListener('click', doCountAllCells);


const btnReset = cellListElement.querySelector('.form-reset');
const doReset = () => {
    cellCount.value = '';
    bills = [];
    cellCount.disabled = false;


    let node = document.querySelectorAll('.info-block');
    for (var i = 0; i < node.length; i++) {
        if (node[i].parentNode) {
            node[i].parentNode.removeChild(node[i]);
          }
    }

};

btnReset.addEventListener('click', doReset);




