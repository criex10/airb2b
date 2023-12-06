import styles from "@/app/page.module.css";
import Card from "@/components/card";
import cardData from "@/data/cardData";

export default function Carousel() {
    return (
        <div className={styles.carousel}>
            {cardData.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}