import React, {useState} from 'react';
import { motion } from "framer-motion";
import CalcInput from "./layouts/calc-input";
import CalcResult from "./layouts/calc-result";



const Calculator = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [result, setResult] = useState({});

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
