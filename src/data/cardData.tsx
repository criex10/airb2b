import katieZaferes from "@/images/katie-zaferes.png";
import wedding from "@/images/bride.png";
import bicycle from "@/images/bicycle.png";
import {CardProps} from "@/components/card";

const CardData: CardProps[] = [
    {
        id: 1,
        title: `Life lessons with Katie Zaferes`,
        rating: 5,
        numRatings: 5,
        country: 'USA',
        priceInUsd: '136',
        units: 'person',
        inventoryStatus: 'SOLD OUT',
        image: katieZaferes,
        alt: "Katie Zaferes, life coach",
    },
    {
        id: 2,
        title: 'Learn wedding photography',
        rating: 5.0,
        numRatings: 30,
        country: 'USA',
        priceInUsd: '125',
        units: 'person',
        inventoryStatus: 'ONLINE',
        image: wedding,
    },
    {
        id: 3,
        title: 'Group Mountain Biking',
        rating: 4.8,
        numRatings: 2,
        country: 'USA',
        priceInUsd: '50',
        units: 'person',
        image: bicycle,
    },
];
export default CardData;