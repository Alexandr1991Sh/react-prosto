import React, {useReducer, useState} from "react";
import {accordionChangeAC, accordionReducer} from "../../Reducer/accordionReducer";


type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    // const [collapsed, setCollapsed] = useState(false)  // useState
    const [state, dispatchCollapsed] = useReducer( accordionReducer,{collapsed: true}) // useReducer

    const collapsedFunc = () => {
        // setCollapsed(!collapsed )   // useState
        dispatchCollapsed(accordionChangeAC() )  //  useReducer
    }


        return <div>
            <AccordionTitle collapsedFunc={collapsedFunc} title={props.titleValue}/>
             {/*useState*/}
            {/*{ !collapsed && <AccordionBody/>}*/}
            { !state.collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType = {
    title: string
    collapsedFunc: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickTitleHandler = () => {
        props.collapsedFunc()
    }

    return <h3 style={{cursor: 'pointer'}} onClick={onClickTitleHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

