import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star onClick={props.onClick} selected={props.value >= 1} value={1}/>
            <Star onClick={props.onClick} selected={props.value >= 2} value={2}/>
            <Star onClick={props.onClick} selected={props.value >= 3} value={3}/>
            <Star onClick={props.onClick} selected={props.value >= 4} value={4}/>
            <Star onClick={props.onClick} selected={props.value >= 5} value={5}/>
        </div>
    );

}

type StarPropsType = {
    selected: boolean;
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    const onClickRatingHandler = () => {
        props.onClick(props.value)
    }
    return <span onClick={onClickRatingHandler}> {props.selected ? <b>star </b> : 'star '} </span>

}