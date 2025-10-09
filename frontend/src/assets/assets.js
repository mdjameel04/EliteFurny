import logo from './Logo.png'
import menu from './menu-icon.png'
import Logo_1 from './main-logo.png'
import close_icon from './close-icon.png'
import payment from './cash-payment.png'
import contact_support from './customer-service.png'
import shipping from './shipping-fast (1).png'
import Home_furnituer from './Home_furnituer.png'
import sofa_img1 from './Sofa-img1.png'
import sofa_img2 from './sofa-img2.png'
import sofa_img3 from './sofa-img3.png'
import sofa_img4 from './sofa-img4.png'
import sofa_img5 from './sofa-img5.png'
import chair_img1 from './chair-img1.jpg'
import chair_img2 from './chair-img2.jpg'
import chair_img3 from './chair-img3.jpg'
import chair_img4 from './chair-img4.png'
import hero_img1 from './hero-img1.webp'
import hero_img2 from './hero-img2.png'
import hero_img3 from './hero-img3.png'
import hero_img4 from './hero-img4.png'
import chair from './chair-3d.png'
import table from './table3d.png'
import background_image from './Background-img.png'
import cat_img1 from './cat-img1.png'
import cat_img2 from './cat-img2.png'
import cat_img3 from './cat-img3.png'
import cat_img4 from './cat-img4.png'
import cat_img5 from './cat-img5.png'
import funry1 from './Furny-img1.png'
import funry2 from './Furny-img2.png'
import funry3 from './Furny-img3.png'
import funry4 from './Furny-img4.png'
import funry5 from './Furny-img5.png'
import funry6 from './Furny-img6.png'
import funry7 from './Furny-img7.png'
import funry8 from './Furny-img8.png'
import funry9 from './Furny-img9.png'
import funry10 from './Furny-img10.png'
import customer1 from './customer1.png'
import customer2 from './customer2.png'
import customer3 from './customer3.png'


export const assets= {
    logo,
    menu,
    Logo_1,
    close_icon,
    payment,
    contact_support,
    shipping,
    Home_furnituer,
    sofa_img1, sofa_img2, sofa_img3,sofa_img4,sofa_img5,
    chair_img1, chair_img2, chair_img3, chair_img4, 
    hero_img1,hero_img2,hero_img3, hero_img4,
    chair,table, background_image,
    cat_img1,cat_img2,cat_img3,cat_img4,cat_img5,
    funry1, funry2, funry3, funry4, funry5, funry6, funry7, funry8, funry9, funry10,
    customer1, customer2, customer3
} 

export const navItems = [
 {name : "Home" , path:'/'},
 {name : "Shop" , path:'/Shop'},
{name : "About Us" , path:'/About'},
 {name : "Contact" , path:'/Contact'},
];


export const tabs=[
    {id:"arrival", label:"New arrival"},
    {id: "best", label: "Best Seller"},
    {id: "coming", label: "Coming Soon"},
];

export const products= {

    arrival: [
        {name : "Modern Sofa", img : assets.sofa_img1},
        {name : "classic Sofa", img : assets.chair_img1},
        {name : "Special Sofa", img : assets.sofa_img3},
        {name : "Minimalist Sofa", img : assets.chair_img2},
        {name : "new collection Sofa", img : assets.sofa_img5},
    ],
     best: [
        {name : "Modern Sofa", img : assets.sofa_img2},
        {name : "classic Sofa", img : assets.chair_img2},
        {name : "Special Sofa", img : assets.sofa_img4 },

        
    ],
     coming: [
        {name : "Modern Sofa", img : assets.chair_img4},
        {name : "classic Sofa", img : assets.sofa_img2},
        {name : "Special Sofa", img : assets.sofa_img3},
        {name : "Minimalist Sofa", img : assets.sofa_img4},
    ]
}

