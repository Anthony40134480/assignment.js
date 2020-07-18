function feetToMile(feet){
    const mile = feet / 5280;
    return mile;
}
const gulshan = feetToMile(42240);
console.log('airport to gulshan:', gulshan);

const banani = feetToMile(26400);
console.log('airport to banani:', banani);


function woodCalculator(num){
    const woodFeet = 1;
    const woodNo = woodFeet * num;
    return woodNo;
}
let chair = woodCalculator(3);
console.log('wood for chair:', chair);
let table = woodCalculator(5);
console.log('wood for table:', table);
let bed = woodCalculator(8);
console.log('wood for bed:', bed);


//father need 3 chairs, brother need 7 tables and i need 10 beds//
let fathersChair = (chair / 3) * 3;
console.log('chair need for father:', fathersChair);
let brothersTable = (table / 5) * 7;
console.log('table need for brother:', brothersTable);
let mybed = (bed / 8) * 10;
console.log('bed need for me:', mybed);


//total wood count
const totalChairWood = chair * fathersChair;
const totalTableWood = table * brothersTable;
const totalBedWood = bed * mybed;
const totalWood = totalChairWood + totalTableWood + totalBedWood;
console.log('total wood need:', totalWood);




