import React from 'react';
import {motion} from "framer-motion";
import style from './music.module.scss'

const Music = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className={`bg-gradient`}>
                <div className={'section-wrap'}>
                    <section className={style.musicSection}>
                        <h1 className={`title-h1`}>잠드는게 어렵나요?<br />음악 추천해 드릴게요</h1>

                    </section>
                </div>
            </main>
        </motion.div>
    );
};

export default Music;
