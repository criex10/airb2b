import Image, {StaticImageData} from "next/image";
import styles from "@/app/page.module.css";
import star from "@/images/star.svg";

type InventoryStatus = 'SOLD OUT' | 'ONLINE';

export interface CardProps {
    title: string,
    rating: number,
    numRatings: number,
    country: string,
    priceInUsd: string,
    units: string,
    inventoryStatus: InventoryStatus,
    image: StaticImageData
    alt?: string,
}
export default function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card_inventoryStatus}>{props.inventoryStatus}</div>
            <Image src={props.image}
                   alt={'Package image'}
                   className={styles.card_packageImage} />

            <span className={styles.rating}>
                <Image src={star} alt={'Star'} className={styles.rating_star}/>
                <span className={styles.rating_number}> {props.rating.toFixed(1)} </span>
                {
                    `(${props.numRatings}) 
                    \u2022
                    ${props.country}`
                }
            </span>
            <p className={styles.card_title}>{props.title}</p>
            <p className={styles.card_price}><b>From ${props.priceInUsd}</b> / {props.units}</p>
        </div>
    )
}