function feetToMile(feet){
    const mile = feet / 5280;
    return mile;
}
const gulshan = feetToMile(42240);
console.log('airport to gulshan:', gulshan);

const banani = feetToMile(26400);
console.log('airport to banani:', banani);