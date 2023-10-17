import React from 'react';
import styles from "./calculator.module.scss";

const CalcResult = () => {
    return (
        <section className={styles.calcResultSection}>
            <h1 className={`title-h1`}>이 시간에 잠들면 좋아요</h1>
            <ul className={styles.resultList}>
                <li>
                    <div className={styles.inner}>
                        <span className={styles.label}>추천</span>
                        <time>오후 10:45</time>
                        <div className={styles.textWrap}>
                            <p>9시간의 수면</p>
                            <p>6번의 수면 주기</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.inner}>
                        <span className={styles.label}>추천</span>
                        <time>오후 10:45</time>
                        <div className={styles.textWrap}>
                            <p>9시간의 수면</p>
                            <p>6번의 수면 주기</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.inner}>
                        <time>오후 10:45</time>
                        <div className={styles.textWrap}>
                            <p>9시간의 수면</p>
                            <p>6번의 수면 주기</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.inner}>
                        <time>오후 10:45</time>
                        <div className={styles.textWrap}>
                            <p>9시간의 수면</p>
                            <p>6번의 수면 주기</p>
                        </div>
                    </div>
                </li>
            </ul>
            <p className={styles.notice}>잠드는데 평균 15분 정도의 시간이 걸린다는 점을
                참고하여 수면 계획을 세우세요!</p>
        </section>
    );
};

export default CalcResult;
