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
import burger_king from './Burger-King_Logo.png';
import kfc from './Kfc_logo.png';
import mcdonalds from './McDonalds-logo.png';
import pizza_hut from './Pizza-Hut-Logo.png';
import dominoes from './Dominos-logo.png';
import chicken_fil_a from './Logo-Chick-fil-A-1.png';
import banner from './banner_couple.png';
import appstore from './App-Store-Logo.png';
import playstore from './Google-Play-Logo.png';

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
    french_fries,
    burger_king,
    kfc,
    mcdonalds,
    pizza_hut,
    dominoes,
    chicken_fil_a,
    banner,
    appstore,
    playstore
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

export const restaurants = [
    {
        id: 1,
        name: 'McDonald\'s',
        cuisine: 'Fast Food',
        rating: 4.0,
        image: mcdonalds
    },
    {
        id: 2,
        name: 'Pizza Hut',
        cuisine: 'Italian',
        rating: 4.2,
        image: pizza_hut
    },
    {
        id: 3,
        name: 'KFC',
        cuisine: 'Fast Food',
        rating: 4.1,
        image: kfc
    },
    {
        id: 4,
        name: 'Domino\'s',
        cuisine: 'Italian',
        rating: 4.3,
        image: dominoes
    },
    {
        id: 5,
        name: 'Burger King',
        cuisine: 'Fast Food',
        rating: 4.0,
        image: burger_king
    },
    {
        id: 6,
        name: 'Chicken fil A',
        cuisine: 'Fast Food',
        rating: 4.4,
        image: chicken_fil_a
    }
]