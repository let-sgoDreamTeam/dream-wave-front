import React from 'react';
import styles from "./calculator.module.scss";
import { motion } from "framer-motion";

const dummy = [
    {
        sleepTime: '9',
        cycle: '6'
    },
    {
        sleepTime: '7.5',
        cycle: '5'
    },
    {
        sleepTime: '6',
        cycle: '4'
    },
    {
        sleepTime: '4.5',
        cycle: '3'
    },
]

const CalcResult = ({result}:any) => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <section className={styles.calcResultSection}>
                <h1 className={`title-h1`}>
                    {result.title}
                </h1>
                <ul className={styles.resultList}>
                    {
                        result.value.map((time: string, index:number) => (
                            <li key={index}>
                                <div className={styles.inner}>
                                    {
                                        index < 2 && <span className={styles.label}>추천</span>
                                    }
                                    <time>{time}</time>
                                    <div className={styles.textWrap}>
                                        <p>{dummy[index].sleepTime}시간의 수면</p>
                                        <p>{dummy[index].cycle}번의 수면 주기</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <p className={styles.notice}>잠드는데 평균 15분 정도의 시간이 걸린다는 점을
                    참고하여 수면 계획을 세우세요!</p>
            </section>
        </motion.div>
    );
};

export default CalcResult;
