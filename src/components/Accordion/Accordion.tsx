import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: string[]
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: any
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    const onClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map(i => <li>{i}</li>)}
    </ul>
}

export default Accordion;