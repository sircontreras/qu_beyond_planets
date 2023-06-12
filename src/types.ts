export interface Planet {
    "climate": string,
    "created": string,
    "diameter": string,
    "edited": string,
    "films": string[],
    "gravity": string,
    "name": string,
    "orbital_period": string,
    "population":string,
    "residents": string[],
    "rotation_period": string,
    "surface_water": string,
    "terrain": string,
    "url":string
}

export interface ResponseType {
    count : number,
    next: string | null,
    previous: string | null,
    results : Planet[]
}

export type PlanetImageType =  {
    'Tatooine' : string,
    'Alderaan' : string,
    'Yavin IV' : string,
    'Hoth' : string,
    'Dagobah' : string,
    'Bespin' : string,
    'Endor' : string,
    'Naboo' : string,
    'Coruscant' : string,
    'Kamino' : string,
    'Geonosis' : string,
    'Utapau' : string,
    'Mustafar' : string,
    'Kashyyyk' : string,
    'Polis Massa' : string,
    'Mygeeto' : string,
    'Felucia' : string,
    'Cato Neimoidia' : string,
    'Saleucami' : string
}