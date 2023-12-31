import React from "react";

import Image, {StaticImageData} from "next/image";
import styles from "@/app/page.module.css";
import star from "@/images/star.svg";

type InventoryStatus = 'SOLD OUT' | 'ONLINE';

export interface CardProps {
    id: number,
    title: string,
    rating: {
        ratingNumber: number,
        numRatings: number,
    }
    country: string,
    priceInUsd: string,
    units: string,
    inventoryStatus?: InventoryStatus,
    image: {
        source: StaticImageData,
        alt?: string
    }
}

function createInventoryStatus(inventoryStatus?: InventoryStatus) {
    if (!!inventoryStatus) {
        return (<div className={styles.card_inventoryStatus}>{inventoryStatus}</div>)
    }
}
export default function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card_packageImageContainer}>
                <Image src={props.image.source}
                       alt={props.image.alt || ""}
                       width={175}
                       height={235}
                       className={styles.card_packageImage} />
                {createInventoryStatus(props.inventoryStatus)}
            </div>

            <span className={styles.rating}>
                <Image src={star} alt={'Star'} className={styles.rating_star}/>
                <span className={styles.rating_number}> {props.rating.ratingNumber.toFixed(1)} </span>
                {
                    `(${props.rating.numRatings}) 
                    \u2022
                    ${props.country}`
                }
            </span>
            <p className={styles.card_title}>{props.title}</p>
            <p className={styles.card_price}><b>From ${props.priceInUsd}</b> / {props.units}</p>
        </div>
    )
}