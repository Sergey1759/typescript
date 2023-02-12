import products from "./products";
// const productName: string = 'beanie';
// const productName: string = 'fanny pack';
const productName: string = 'tote bag';
const product = products.filter(product => product.name == productName)[0];
console.log(product)

if('true' === product.preOrder){
    console.log('We will send you a message when your product is on its way.');
}
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
// const shippingAddress: string = '575 Broadway, New York City, New York';
const shippingAddress: string = '575 Broadway';

if(Number(product.price) > 25){
    shipping = 0;
    console.log('shipping free');
} else {
    shipping = 5;
}

if(shippingAddress.match(/New York/gm)){
    taxPercent =  0.1;
} else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(total)