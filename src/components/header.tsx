import styles from "@/app/page.module.css";
import Image from "next/image";
import logo from "@/images/airbnb-logo.png";

export default function Header() {
    return (
        <nav className={styles.nav}>
            <Image
                src={logo}
                alt={'Airbnb logo'} />
        </nav>
    );
}