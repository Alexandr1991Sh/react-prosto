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
import {Example1} from "./ReactMemo/ReactMemo";
import {HelpsToReactMemo, UseMemo} from "./UseMemo/UseMemoOne";
import {UseCallback} from "./UseCallback/UseCallback";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [onOff, setOnOff] = useState(false);
    const [value, setValue] = useState(null)


    const [showComponentUnControlledOnOf, setShowComponentUnControlledOnOf] = useState(false);
    const onClickShowComponentUnControlledOnOf = () => {
        setShowComponentUnControlledOnOf(!showComponentUnControlledOnOf);
    };

    return (
        <div className={'wrapper'}>
            <div>
                <button onClick={onClickShowComponentUnControlledOnOf}>onOff component</button>
                {/*<OnOff/>*/}
                {showComponentUnControlledOnOf && <UnControlledOnOf onOff={onOff} setOnOff={setOnOff}/>}
            </div>

            <div>
                <p>UnControlledAccordion</p>
                <UnControlledAccordion titleValue={'Users'}/>
            </div>

            <div>
                <p>Rating</p>
                {/*<UnControlledRating/>*/}
                <Rating value={ratingValue} onClick={setRatingValue}/>
            </div>

            <div>
                <p>Accordion</p>
                <Accordion titleValue={'Users'} collapsed={collapsed} onClick={setCollapsed}
                           items={['Alex', 'Dima', 'Viktor']}/>
            </div>


            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>


            <Select items={[{title: 'Ekb', value: "1"}, {title: 'Msk', value: "2"}, {title: 'Spb', value: "3"}]}
                    value={value} onChange={setValue}/>

            <Example1/>

            <div>
                <p>UseMemo</p>
                <UseMemo/>
                <HelpsToReactMemo/>
                <UseCallback/>
            </div>

        </div>
    );
}

export default App;
