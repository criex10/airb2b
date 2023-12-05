import styles from './page.module.css';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";


export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Hero />
            <Carousel />
        </main>
    );
}
