import planet1 from "../assets/images/planets/planet1.svg";
import planet2 from "../assets/images/planets/planet2.svg";
import planet3 from "../assets/images/planets/planet3.svg";
import planet4 from "../assets/images/planets/planet4.svg";
import planet5 from "../assets/images/planets/planet5.svg";
import planet6 from "../assets/images/planets/planet6.svg";
import planet7 from "../assets/images/planets/planet7.svg";
import planet8 from "../assets/images/planets/planet8.svg";
import planet9 from "../assets/images/planets/planet9.svg";
import planet10 from "../assets/images/planets/planet10.svg";
import planet11 from "../assets/images/planets/planet11.svg";
import planet12 from "../assets/images/planets/planet12.svg";
import planet13 from "../assets/images/planets/planet13.svg";
import planet14 from "../assets/images/planets/planet14.svg";
import planet15 from "../assets/images/planets/planet15.svg";
import planet16 from "../assets/images/planets/planet16.svg";
import planet17 from "../assets/images/planets/planet17.svg";
import planet18 from "../assets/images/planets/planet18.svg";
import planet19 from "../assets/images/planets/planet19.svg";
import {PlanetImageType} from "../types";

const planetImages: PlanetImageType = {
    'Tatooine' : planet1,
    'Alderaan' : planet2,
    'Yavin IV' : planet3,
    'Hoth' : planet4,
    'Dagobah' : planet5,
    'Bespin' : planet6,
    'Endor' : planet7,
    'Naboo' : planet8,
    'Coruscant' : planet9,
    'Kamino' : planet10,
    'Geonosis' : planet11,
    'Utapau' : planet12,
    'Mustafar' : planet13,
    'Kashyyyk' : planet14,
    'Polis Massa' : planet15,
    'Mygeeto' : planet16,
    'Felucia' : planet17,
    'Cato Neimoidia' : planet18,
    'Saleucami' : planet19,
}

const usePlanetImages = ()=>{
     return planetImages;
}

export default usePlanetImages;