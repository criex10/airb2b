import styles from './page.module.css';
import Image from "next/image";
import logo from '../images/airbnb-logo.png';
import hero from '../images/experiences.png';

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

function Carousel() {
    return (
        <div className={styles.carousel}>
            <ul>
                <li>Swimming placeholder</li>
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
