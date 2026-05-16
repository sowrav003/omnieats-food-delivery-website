import deals_01 from './deals_01.png';
import deals_02 from './deals_02.png';
import deals_03 from './deals_03.png';
import burger from './burger.png';
import pizza from './pizza.png';
import sushi from './sushi.png';
import desserts from './dessert.png';
import chicken from './chicken.png';
import steak from './steak.png';
import pasta from './pasta.png';
import soups from './soups.png';
import french_fries from './french_fries.png';

export const assets = {
    deals_01,
    deals_02,
    deals_03,
    burger,
    pizza,
    sushi,
    desserts,
    chicken,
    steak,
    pasta,
    soups,
    french_fries
}


export const deals = [
    {
        id: 1,
        title: 'Pizza Deals',
        restaurant: 'Gourmet Pizza',
        offer: "20%",
        image: deals_01,
    },
    {
        id: 2,
        title: 'Burger Combos',
        restaurant: 'Burger Haven',
        offer: "15%",
        image: deals_02,
    },
    {
        id: 3,
        title: 'Grill Specials',
        restaurant: 'Sweet Treats',
        offer: "25%",
        image: deals_03,
    },
]

export const categories = [
    {
        id: 1,
        name: 'Burgers',
        image: burger
    },
    {
        id: 2,
        name: 'Pizzas',
        image: pizza
    },
    {
        id: 3,
        name: 'Sushi',
        image: sushi
    },
    {
        id: 4,
        name: 'Desserts',
        image: desserts
    },
    {
        id: 5,
        name: 'Chicken',
        image: chicken
    },
    {
        id: 6,
        name: 'Steak',
        image: steak
    },
    {
        id: 7,
        name: 'Pasta',
        image: pasta
    },
    {
        id: 8,
        name: 'Soups',
        image: soups
    },
    {
        id: 9,
        name: 'Fries',
        image: french_fries
    }
]