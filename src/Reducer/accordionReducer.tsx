import React from 'react';

export type CountIncActionType = { type: 'TOGGLE-COLLAPSED' }

type ActionsType = CountIncActionType

export type initialState={
    collapsed: boolean
}

export const accordionReducer = (state: initialState, action: ActionsType): initialState => {
 switch (action.type){
     case 'TOGGLE-COLLAPSED':{
         return {...state, collapsed: !state.collapsed}
     }
     default: return state
 }
};

export const accordionChangeAC = (): CountIncActionType => {
    return {type: 'TOGGLE-COLLAPSED'} as const
}