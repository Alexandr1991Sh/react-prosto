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

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff]  = useState(false);

    return (
        <div className={'wrapper'}>
            {/*<OnOff/>*/}
            <UnControlledOnOf onOff={onOff} setOnOff={setOnOff}/>


            {/*<UnControlledAccordion titleValue={'Menu'} />*/}
            {/*<UnControlledAccordion titleValue={'Users'} />*/}
            {/*<UnControlledRating/>*/}

            <Rating value={ratingValue}  onClick={setRatingValue}/>

            {/*<PageTitle title={'This is app component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            <Accordion titleValue={'Users'} collapsed={collapsed} onClick={setCollapsed} items={['Alex', 'Dima', 'Viktor']}/>
            {/*Article 2*/}
            {/*<UnControlledRating value={0}/>*/}
            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}


            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>;
}

export default App;
