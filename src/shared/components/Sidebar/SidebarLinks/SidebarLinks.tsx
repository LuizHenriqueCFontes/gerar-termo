import styles from "./SidebarLinks.module.css";
import {BookOpen, X } from "lucide-react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

interface SidebarLinks {
    onClick?: () => void
}

export default function SidebarLinks(props: SidebarLinks) {

    const isDesktop = useMediaQuery("(min-width: 1024px)");  


    return(
        <nav className={styles.navContainer}>

            <div>
                <div className={styles.logoContainer}>
                    <div className={`${styles.titleLogoContainer}`}>
                        <div className={styles.logoIconContainer}>
                            <BookOpen className={styles.logoIcon}/>
                        </div>
                        <h1 className={styles.logoTitle}>Biblioteca</h1>
                    </div>

                    {!isDesktop && 
                        <button className={styles.btnIcon} onClick={props.onClick}>
                            <X className={styles.icon}/>
                        </button>
                    }
                </div>
                
                <hr className={`${styles.divider}`}/>

                <ul className={styles.listContainer}>
                    
                
                </ul>
            </div>
        </nav>
    );
}