import React from "react";
import s from "./AnalogClockView.module.css";
import {ClockViewPropsType} from "./Clock-UseEffect";

export const AnalogClockView: React.FC<ClockViewPropsType> = () => {
    const date = new Date()
    return (
        <div className={s.clock}>
            <div
                className={s.hour_hand}
                style={{transform: `rotateZ(${date.getHours() * 30}deg)`}}
            />
            <div
                className={s.min_hand}
                style={{transform: `rotateZ(${date.getMinutes() * 6}deg)`}}
            />
            <div
                className={s.sec_hand}
                style={{transform: `rotateZ(${date.getSeconds() * 6}deg)`}}
            />
            <span className={s.twelve}>12</span>
            <span className={s.one}>1</span>
            <span className={s.two}>2</span>
            <span className={s.three}>3</span>
            <span className={s.four}>4</span>
            <span className={s.five}>5</span>
            <span className={s.six}>5</span>
            <span className={s.seven}>5</span>
            <span className={s.eight}>5</span>
            <span className={s.nine}>5</span>
            <span className={s.ten}>5</span>
            <span className={s.eleven}>5</span>
        </div>
    );
}
