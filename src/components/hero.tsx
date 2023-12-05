import styles from "@/app/page.module.css";
import Image from "next/image";
import hero from "@/images/experiences.png";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Image src={hero}
                   alt={'Examples of online experiences we offer'} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}