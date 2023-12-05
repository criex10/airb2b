import styles from "@/app/page.module.css";
import Card from "@/components/card";
import katieZaferes from "@/images/katie-zaferes.png";

export default function Carousel() {
    return (
        <div className={styles.carousel}>
            <ul>
                <li>
                    <Card
                        title={`Life lessons with Katie Zaferes`}
                        rating={5}
                        numRatings={5}
                        country={'USA'}
                        priceInUsd={'136'}
                        units={'person'}
                        inventoryStatus={'SOLD OUT'}
                        image={katieZaferes}
                        alt={"Katie Zaferes, life coach"} />
                </li>
                <li>Wedding placeholder</li>
                <li>Biking placeholder</li>
            </ul>
        </div>
    );
}