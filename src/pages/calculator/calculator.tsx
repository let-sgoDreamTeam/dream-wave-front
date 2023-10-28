import React, {useState} from 'react';
// import styles from './calculator.module.scss'
// import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion";
import CalcInput from "./calc-input";
import CalcResult from "./calc-result";



const Calculator = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [result, setResult] = useState({});

    // console.log(result);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className={`bg-gradient`}>
                <div className={'section-wrap'}>
                    <CalcInput setResult={setResult} tabIndex={tabIndex} setTabIndex={setTabIndex}/>
                    {
                        !!Object.keys(result).length && <CalcResult result={result}/>
                    }

                </div>
            </main>
        </motion.div>

    );
};

export default Calculator;
