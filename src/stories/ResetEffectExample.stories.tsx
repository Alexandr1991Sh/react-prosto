import {Meta, StoryObj} from "@storybook/react";
import {ResetEffectExample} from "../components/UseEffect/ResetEffectExample/ResetEffectExample";

const meta: Meta<typeof ResetEffectExample> = {
    title: 'ResetEffectExample',
    component: ResetEffectExample,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ResetEffectExample>;

export const ResetEffectExam: Story = {}



