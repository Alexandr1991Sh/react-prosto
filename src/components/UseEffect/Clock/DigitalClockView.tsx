import React from "react";
import {ClockViewPropsType} from "./Clock-UseEffect";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({time}) => {
    return <div style={{color: 'blue'}}>time: {time}</div>
}