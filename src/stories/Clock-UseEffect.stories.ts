import type {Meta, StoryObj} from '@storybook/react';
import {ClockUseEffect} from "../components/UseEffect/Clock-UseEffect";
import React from "react";

const meta: Meta<typeof ClockUseEffect> = {
    title: 'TODOLISTS/ClockUseEffect',
    component: ClockUseEffect,
    parameters: {
        layout: 'fullscreen',
    },
};



export default meta;
type Story = StoryObj<typeof ClockUseEffect>;
export const BaseAnalogExample: Story = {
}
export const BaseDigitalExample: Story = {}


