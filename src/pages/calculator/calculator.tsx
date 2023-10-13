import React, {useEffect, useState} from 'react';
import styles from './calculator.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion";

type Inputs = {
    slot: string;
}

const tabButton = [
    '이 시간에 일어날래요',
    '이 시간에 잘래요'
]

const Calculator = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [selectSlot, setSelectSlot] = useState('pm');
    const [selectHour, setSelectHour] = useState(9);
    const [selectMinute, setSelectMinute] = useState(0);

    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const test = today.toLocaleTimeString("ko-KR", { hour: '2-digit', minute: '2-digit' }).replace(/(\d+):(\d+)/, '오전 $1시 $2분');
    console.log(test)

    const amPm = hours < 12 ? "am" : "pm"

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const setCurrenTime = () => {
        setSelectHour(hours);
        setSelectMinute(minutes);
        setSelectSlot(amPm);

        console.log(hours, minutes, amPm)
    }


    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
    }

    useEffect(() => {
        setScreenSize();
    }, []);

    window.addEventListener('resize', () => setScreenSize());

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className={`bg-gradient`}>
                <div className={'section-wrap'}>
                    <section className={styles.calcSection}>
                        <h1 className={`title-h1 ${styles.title}`}>수면 리듬 계산기</h1>
                        <form className={styles.calcBox} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.tabWrap}>
                                {
                                    tabButton.map((item, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`${tabIndex === index && styles.active}`}
                                            onClick={() =>  setTabIndex(index)}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>
                            <div className={styles.slotWrap}>
                                <ul className={`${styles.toggle} ${styles[selectSlot]}`}>
                                    <li>
                                        <input
                                            {...register("slot")}
                                            type="radio"
                                            name="slot"
                                            id="slot-am"
                                            value="am"
                                            onChange={() => setSelectSlot('am')}
                                        />
                                        <label htmlFor="slot-am">오전</label>
                                    </li>
                                    <li>
                                        <input
                                            {...register("slot")}
                                            type="radio"
                                            name="slot"
                                            id="slot-pm"
                                            value="pm"
                                            onChange={() => setSelectSlot('pm')}
                                        />
                                        <label htmlFor="slot-pm">오후</label>
                                    </li>
                                </ul>
                                <div className={styles.timeSelectBox}>
                                    <button type="button">
                                        <span>{selectHour}시</span>
                                    </button>
                                    <button type="button">
                                        <span>{selectMinute}분</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.buttonWrap}>
                                {
                                    !!tabIndex &&
                                    <button
                                        type="button" className={`btn-line`} onClick={() => setCurrenTime()}>현재 시간</button>
                                }
                                <button type="submit" className={`btn-fill`}>계산하기</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </motion.div>

    );
};

export default Calculator;
