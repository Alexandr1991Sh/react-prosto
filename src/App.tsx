import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOf} from "./components/OnOff/UnControlledOnOf";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledCheckbox/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledSelect/ControlledSelect";
import {Select} from "./components/CustomSelect/Select";
import {ReactMemo} from "./ReactMemo/ReactMemo";
import {HelpsToReactMemo, UseMemo} from "./UseMemo/UseMemoOne";
import {UseCallback} from "./UseCallback/UseCallback";
import {UseState} from "./UseState/UseState";
import {UseEffect} from "./components/UseEffect/UseEffect";
import {UseEffectSetTimeout} from "./components/UseEffect/UseEffect-SetTimeout";
import {UseEffectSetInterval} from "./components/UseEffect/UseEffect-SetInterval";
import {ClockUseEffect} from "./components/UseEffect/Clock/Clock-UseEffect";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [onOff, setOnOff] = useState(false);
    const [value, setValue] = useState(null)


    const [showUnControlledOnOf, setShowUnControlledOnOf] = useState(false);
    const onClickShowUnControlledOnOf = () => {
        setShowUnControlledOnOf(!showUnControlledOnOf);
    };

    const [showUnControlledAccordion, setShowUnControlledAccordion] = useState(false);
    const onClickShowUnControlledAccordion = () => {
        setShowUnControlledAccordion(!showUnControlledAccordion);
    };

    const [showRating, setShowRating] = useState(false);
    const onClickShowRating = () => {
        setShowRating(!showRating);
    };

    const [showAccordion, setShowAccordion] = useState(false);
    const onClickShowAccordion = () => {
        setShowAccordion(!showAccordion);
    };

    const [showSelect, setShowSelect] = useState(false);
    const onClickShowSelect = () => {
        setShowSelect(!showSelect);
    };

    const [showControlledInput, setShowControlledInput] = useState(false);
    const onClickShowControlledInput = () => {
        setShowControlledInput(!showControlledInput);
    };

    const [showControlledCheckbox, setShowControlledCheckbox] = useState(false);
    const onClickShowControlledCheckbox = () => {
        setShowControlledCheckbox(!showControlledCheckbox);
    };

    const [showControlledSelect, setShowControlledSelect] = useState(false);
    const onClickShowControlledSelect = () => {
        setShowControlledSelect(!showControlledSelect);
    };

    const [showReactMemo, setShowReactMemo] = useState(false);
    const onClickShowReactMemo = () => {
        setShowReactMemo(!showReactMemo);
    };

    const [showUseMemo, setShowUseMemo] = useState(false);
    const onClickShowUseMemo = () => {
        setShowUseMemo(!showUseMemo);
    };

    const [showUseState, setShowUseState] = useState(false);
    const onClickShowUseState = () => {
        setShowUseState(!showUseState);
    };

    const [showUseEffect, setShowUseEffect] = useState(false);
    const onClickShowUseEffect = () => {
        setShowUseEffect(!showUseEffect);
    };

    const [showUseEffectSetTimeout, setShowUseEffectSetTimeout] = useState(false);
    const onClickShowUseEffectSetTimeout = () => {
        setShowUseEffectSetTimeout(!showUseEffectSetTimeout);
    };

    const [showUseEffectSetInterval, setShowUseEffectSetInterval] = useState(false);
    const onClickShowUseEffectSetInterval = () => {
        setShowUseEffectSetInterval(!showUseEffectSetInterval);
    };

    const [showClockUseEffect, setShowClockUseEffect] = useState(false);
    const onClickShowClockUseEffect= () => {
        setShowClockUseEffect(!showClockUseEffect);
    };


    return (
        <div className={'wrapper'}>

            <div>
                <button onClick={onClickShowUnControlledOnOf}>onOff</button>
                {/*<OnOff/>*/}
                {showUnControlledOnOf && <UnControlledOnOf onOff={onOff} setOnOff={setOnOff}/>}
            </div>
            {/*onOff*/}

            <div>
                <button onClick={onClickShowUnControlledAccordion}>UnControlledAccordion</button>
                {showUnControlledAccordion && <UnControlledAccordion titleValue={'Users'}/>}
            </div>
            {/*UnControlledAccordion*/}

            <div>
                <button onClick={onClickShowRating}>Rating</button>
                {showRating && <Rating value={ratingValue} onClick={setRatingValue}/>}
                {/*<UnControlledRating/>*/}
            </div>
            {/*Rating*/}

            <div>
                <button onClick={onClickShowAccordion}>Accordion</button>
                {showAccordion && <Accordion titleValue={'Users'} collapsed={collapsed} onClick={setCollapsed}
                                             items={['Alex', 'Dima', 'Viktor']}/>}
            </div>
            {/*Accordion*/}

            <div>
                <button onClick={onClickShowControlledInput}>ControlledInput</button>
                {showControlledInput && <ControlledInput/>}
            </div>
            {/*ControlledInput*/}

            <div>
                <button onClick={onClickShowControlledCheckbox}>ControlledCheckbox</button>
                {showControlledCheckbox && <ControlledCheckbox/>}
            </div>
            {/*ControlledCheckbox*/}

            <div>
                <button onClick={onClickShowControlledSelect}>ControlledSelect</button>
                {showControlledSelect && <ControlledSelect/>}
            </div>
            {/*ControlledSelect*/}

            <div>
                <button onClick={onClickShowSelect}>Select</button>
                {showSelect &&
                    <Select items={[{title: 'Ekb', value: "1"}, {title: 'Msk', value: "2"}, {title: 'Spb', value: "3"}]}
                            value={value} onChange={setValue}/>}
            </div>
            {/*Select*/}

            <div>
                <button onClick={onClickShowReactMemo}>ReactMemo</button>
                {showReactMemo && <ReactMemo/>}
            </div>
            {/*ReactMemo*/}

            <div>

                <button onClick={onClickShowUseMemo}>UseMemo UseCallback</button>
                {showUseMemo && <div>
                    <UseMemo/>
                    <HelpsToReactMemo/>
                    <UseCallback/>
                </div>}

            </div>
            {/*UseMemo UseCallback*/}

            <div>
                <button onClick={onClickShowUseState}>UseState</button>
                {showUseState && <UseState/>}
            </div>
            {/*UseState*/}

            <div>
                <button onClick={onClickShowUseEffect}>UseEffect</button>
                {showUseEffect && <UseEffect/>}
            </div>
            {/*UseEffect*/}

            <div>
                <button onClick={onClickShowUseEffectSetTimeout}>UseEffectSetTimeout</button>
                {showUseEffectSetTimeout && <UseEffectSetTimeout/>}
            </div>
            {/*UseEffectSetTimeout*/}

            <div>
                <button onClick={onClickShowUseEffectSetInterval}>UseEffectSetInterval</button>
                {showUseEffectSetInterval && <UseEffectSetInterval/>}
            </div>
            {/*UseEffectSetInterval*/}

            <div>
                <button onClick={onClickShowClockUseEffect}>ClockUseEffect</button>
                {showClockUseEffect && <ClockUseEffect/>}
            </div>
            {/*ClockUseEffect*/}

        </div>
    );
}

export default App;
