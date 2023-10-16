import React, {useEffect} from 'react';
import symbol from "../../assets/images/symbol.png"
import textLogo from "../../assets/images/text_logo.png"
import styles from "./landing.module.scss"
import { motion } from 'framer-motion';
import {useNavigate} from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate()
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
    }

    useEffect(() => {
        setScreenSize();

        return () => {
            window.removeEventListener('resize', setScreenSize);
        };
    }, []);

    window.addEventListener('resize', () => setScreenSize());

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <section className={styles.landingWrap} onClick={() => navigate('/calculator')}>
                <div className={styles.halfBg} aria-hidden={true}>
                    <div className={styles.symbolArea}>
                        <div className={styles.symbol}>
                            <img src={symbol} alt="Dream,Wave"/>
                        </div>
                    </div>
                    <div className={styles.titleArea}>
                        <h1 className={styles.title}>
                            <img src={textLogo} alt=""/>
                            <p className={styles.text}>온전한 나의 수면 주기를 위하여</p>
                        </h1>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Landing;
