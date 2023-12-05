import styles from './page.module.css';
import Image, {StaticImageData} from "next/image";
import logo from '../images/airbnb-logo.png';
import hero from '../images/experiences.png';
import package1Image from '../images/package-1.png'
import star from '../images/star.svg'

function Header() {
    return (
        <nav className={styles.nav}>
            <Image
                src={logo}
                alt={'Airbnb logo'} />
        </nav>
    );
}

function Hero() {
    return (
        <div className={styles.hero}>
            <Image src={hero}
                   alt={'Examples of online experiences we offer'} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

function Card() {
    let title: string = 'Life lessons with Katie Zaferes';
    let rating: number = 5;
    let numRatings: number = 6;
    let country: string = 'USA';
    let priceInUsd: string = '136';
    let units: string = 'person';
    let inventoryStatus: string = 'SOLD OUT';
    let packageImage: StaticImageData = package1Image;

    return (
        <div className={styles.card}>
            <div className={styles.card_inventoryStatus}>{inventoryStatus}</div>
            <Image src={packageImage}
                   alt={'Package image'}
                   className={styles.card_packageImage} />

            <span className={styles.rating}>
                <Image src={star} alt={'Star'} className={styles.rating_star}/>
                <span className={styles.rating_number}> {rating.toFixed(1)} </span>
                {
                    `(${numRatings}) 
                    \u2022
                    ${country}`
                }
            </span>
            <p className={styles.card_title}>{title}</p>
            <p className={styles.card_price}><b>From ${priceInUsd}</b> / {units}</p>
        </div>
    )
}

function Carousel() {
    return (
        <div className={styles.carousel}>
            <ul>
                <li><Card /></li>
                <li>Wedding placeholder</li>
                <li>Biking placeholder</li>
            </ul>
        </div>
    )
}
export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Hero />
            <Carousel />
        </main>
    );
}
