import React, {useState} from 'react';
import styles from "../calculator.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    slot: string;
    hour: string;
    minute: string;
}

const tabButton = [
    '이 시간에 일어날래요',
    '이 시간에 잘래요'
]

const CalcInput = ({setResult, tabIndex, setTabIndex}: any) => {
    const [selectSlot, setSelectSlot] = useState('am');

    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            slot: 'am',
            hour: '09',
            minute: '00',
        }
    });

    const formattedTime = (time: number): string => time < 10 ? `0${time}` : `${time}`;
    const convertTo12HourFormat = (hour:number): number => {
        if (hour === 0) {
            return 12;
        } else if (hour <= 12) {
            return hour;
        } else {
            return (hour - 12);
        }
    }

    // 자는 시간 기준 사이클 계산
    const calculateSleepCycle = (slot: string, hour: number, minute: number) => {

        const ONE_CYCLE_MINUTE = 90;
        const MINUTE = 60;
        const cycles = [6, 5, 4, 3];

        if (slot === 'pm' && hour !== 12) {
            hour += 12;
        }

        if (slot === 'am') {
            if (hour === 12) {
                hour = 0;
            }
        }

        const setKoreanAmPm = (hour: number) => {
            if (hour >= 12) {
                return '오후'
            } else {
                return '오전'
            }
        }

        const basedOnSleepTime = () => {
            return cycles.map((cycle) => {
                let totalMinutes = ( hour * MINUTE ) + minute + ( ONE_CYCLE_MINUTE * cycle );

                // 24시간 이상일 경우 0시로 초기화
                if (totalMinutes >= 1440) {
                    totalMinutes -= 24 * 60;
                }

                const hourValue = Math.floor( totalMinutes / MINUTE );
                const minuteValue = totalMinutes % MINUTE;

                return `${setKoreanAmPm(hourValue)} ${formattedTime(convertTo12HourFormat(hourValue))}:${formattedTime(minuteValue)}`
            })
        }

        const basedOnWakeUpTime = () => {
            return cycles.map((cycle) => {
                let totalMinutes = (hour * MINUTE) + minute - (ONE_CYCLE_MINUTE * cycle);

                // 음수인 경우 전날로 넘어감
                if (totalMinutes < 0) {
                    totalMinutes += 24 * 60;
                }

                const hourValue = Math.floor(totalMinutes / MINUTE);
                const minuteValue = totalMinutes % MINUTE;

                return `${setKoreanAmPm(hourValue)} ${formattedTime(convertTo12HourFormat(hourValue))}:${formattedTime(minuteValue)}`

            });
        }


        setResult(
            (tabIndex === 1) ?
                {
                    title: '이 시간에 일어나면 좋아요',
                    value: basedOnSleepTime(),
                }
            :
                {
                    title: '이 시간에 잠들면 좋아요',
                    value:  basedOnWakeUpTime(),
                }
        )

    }



    const onSubmit: SubmitHandler<Inputs> = ({slot, hour, minute}:any) => {
        calculateSleepCycle(slot, Number(hour), Number(minute));
    };


    const setCurrenTime = () => {
        let currentAmPm = null;
        ( hours < 12 ) ? currentAmPm = 'am' : currentAmPm = 'pm';
        setValue("slot", currentAmPm);
        setValue("hour", `${convertTo12HourFormat(hours)}`);
        setValue("minute", `${formattedTime(Math.ceil(minutes / 5) * 5)}`);

        setSelectSlot(currentAmPm);
    }

    return (
        <section className={styles.calcInputSection}>
            <h1 className={`title-h1`}>수면 리듬 계산기</h1>
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
                                onChange={() => {
                                    setValue("slot", 'am');
                                    setSelectSlot('am');
                                }}
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
                                onChange={() =>
                                    {
                                        setValue("slot", 'pm');
                                        setSelectSlot('pm');
                                    }
                                }
                            />
                            <label htmlFor="slot-pm">오후</label>
                        </li>
                    </ul>
                    <div className={styles.timeSelectBox}>
                        <select
                            {...register("hour")}
                            name="hours"
                            id="hours"
                            onChange={(e) => {
                                const selectedHour = e.target.value;
                                setValue("hour", selectedHour);
                            }}
                        >
                            {
                                Array.from({ length: 12 }, (_, index) => {
                                    const hourValue = index + 1;
                                    const formattedHour = hourValue < 10 ? `0${hourValue}` : hourValue;
                                    return (
                                        <option key={index} value={formattedHour}>
                                            {formattedHour}시
                                        </option>
                                    );
                                })
                            }
                        </select>
                        <select
                            {...register("minute")}
                            name="minutes"
                            id="minutes"
                            onChange={(e) => {
                                const selectedMinute = e.target.value;
                                setValue("minute", selectedMinute);
                            }}
                        >
                            {
                                Array.from({ length: 12 }, (_, index) => {
                                    const minuteValue = index * 5;
                                    const formattedMinute = minuteValue < 10 ? `0${minuteValue}` : minuteValue;
                                    return (
                                        <option key={index} value={formattedMinute}>
                                            {formattedMinute}분
                                        </option>
                                    )
                                })
                            }
                        </select>
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
    );
};

export default CalcInput;
