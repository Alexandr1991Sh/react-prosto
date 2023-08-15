import React from "react";
import {accordionReducer, initialState} from "../accordionReducer";

test('collapsed should be false', () => {
    const state: initialState = {
        collapsed: false
    }

  const newState = accordionReducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})

test('collapsed should be true', () => {
    const state: initialState = {
        collapsed: true
    }

    const newState = accordionReducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})