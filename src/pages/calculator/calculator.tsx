import React, {useEffect, useState} from 'react';
import styles from './calculator.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion";
import CalcInput from "./calc-input";
import CalcResult from "./calc-result";



const Calculator = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className={`bg-gradient`}>
                <div className={'section-wrap'}>
                    <CalcInput />
                    <CalcResult />
                </div>
            </main>
        </motion.div>

    );
};

export default Calculator;
