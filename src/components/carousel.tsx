import styles from "@/app/page.module.css";
import Card from "@/components/card";
import katieZaferes from "@/images/katie-zaferes.png";
import wedding from "@/images/bride.png";
import bicycle from "@/images/bicycle.png";

export default function Carousel() {
    return (
        <div className={styles.carousel}>
            <Card title={`Life lessons with Katie Zaferes`}
                  rating={5}
                  numRatings={5}
                  country={'USA'}
                  priceInUsd={'136'}
                  units={'person'}
                  inventoryStatus={'SOLD OUT'}
                  image={katieZaferes}
                  alt={"Katie Zaferes, life coach"} />
            <Card title={'Learn wedding photography'}
                  rating={5.0}
                  numRatings={30}
                  country={'USA'}
                  priceInUsd={'125'}
                  units={'person'}
                  inventoryStatus={'ONLINE'}
                  image={wedding} />
            <Card title={'Group Mountain Biking'} rating={4.8} numRatings={2} country={'USA'} priceInUsd={'50'} units={'person'} image={bicycle} />
        </div>
    );
}