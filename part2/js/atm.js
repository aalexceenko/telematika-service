// // const {performance} = require('perf_hooks');

// class ATM {
    
//     constructor(bills) {
//         this.bills = new Map(bills);
//       }

//     _convertToMap(o) {
//         return new Map(Object.entries(o).reverse());
//     }
    
//     getChange = (bills, amount, billIndex = 0) => {
//         if (amount === 0){
//             return [];
//         }

//         if (billIndex >= bills.size){
//             return null;
//         }
        
//         let bill_map = bills.entries();
//         let bill = bill_map.next().value;
//         let bill_value = bill[0];
//         let bill_count = bill[1];
//         bills.delete(bill_value);
//         let canTake = Math.min(parseInt(amount / parseInt(bill_value)), parseInt(bill_count));
//         for (let count=canTake; count > -1; count--){
//             let change = this.getChange(bills, amount - parseInt(bill_value) * count);
//             if (change !== null){
//                 if (count){
//                     let nominal = (bill_value).toString();
//                     change = {...change, ...{[nominal]: count}};
//                     return change;
//                 }
//                 return change;
//             }
//         }
//     }

//     main = (amount) => {

//         let sum = 0;
//         for (let [value, count] of this.bills.entries()){
//             sum += value * count;
//         }
//         console.log(`Balance is ${sum} rubles`)
//         if (amount <= sum){
//             if (amount % (Array.from(this.bills.keys()).reduce((lastKey, currKey) => this.bills.get(currKey) !== undefined ? currKey : lastKey)) === 0){
//                 let result = this.getChange(this.bills, amount);
//                 result = this._convertToMap(result);
//                 if (result !== undefined){
//                     console.log(`For ${amount} rubles the ATM can give you:`);
//                     for (let [value, count] of result.entries()){
//                         console.log(`\t\t\t\t${count} denomination of ${value} rubles`);
//                     }
//                     return result;
//                 } else {
//                     console.log('No change money in the ATM');
//                 } 
//             } else {
//                 console.log(`Must be a multiple of ${Array.from(this.bills.keys()).reduce((lastKey, currKey) => this.bills.get(currKey) !== undefined ? currKey : lastKey)}`);
//             }
//         }
//         else {
//             console.log('Not enough money in the ATM');
//         }
//     }
// };

// let amount = 13600;

// // MUST BE SORTED IN DESCENDING ORDER BY VALUE !!!!
// let default_bills = new Map();
// default_bills.set('5000', 15)
//              .set('2000', 15)
//              .set('1000', 15)
//              .set('500', 15)
//              .set('200', 15)
//              .set('100', 15)

// let t0 = performance.now();

// const bankomat = new ATM(default_bills);
// let result = bankomat.main(amount);
// for (const [def_key, def_value] of default_bills.entries()) {
//     for (const [res_key, res_value] of result.entries()) {
//         if (def_key === res_key){
//             default_bills.set(def_key, parseInt(def_value) - parseInt(res_value));
//         }
//     }
// }
// bankomat.bills = default_bills;
// console.log(bankomat.bills);

// let t1 = performance.now();
// console.log(`Execution time was ${t1 - t0} milliseconds`);