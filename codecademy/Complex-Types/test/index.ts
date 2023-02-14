import {Restaurant, restaurants} from "./restaurants";
import {Order, orders, PriceBracket} from "./orders";

function getMaxPrice(price: PriceBracket): number {
    switch(price) {
        case PriceBracket.Low:
            return 10.0;
        case PriceBracket.Medium:
            return 20.0;
        case PriceBracket.High:
            return 30.0;
    }
}

function getOrders(price: PriceBracket,orders:Order[][]):Order[][]{
    let filteredOrders: Order[][] = [];
    let maxPrice = getMaxPrice(price);
    restaurants.forEach((el,idx) => {
        let _orders = orders[idx].filter((order) => order.price < maxPrice);
        filteredOrders.push(_orders)
    })
    return filteredOrders
}

function printOrders(restaurants:Restaurant[], orders: Order[][]){
    restaurants.forEach((restaurant,index) => {
        if(orders[index].length > 0) {
            let str = restaurant.name + '\n';
            orders[index].forEach((order, idx) => str += `  --- ${order.name}: $${order.price} \n`);
            console.log(str);
        }
    })
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
