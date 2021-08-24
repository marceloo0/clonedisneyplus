import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sliders } from '../components/DashContainer';

export default {
  title: 'Sliders',
  component: Sliders,
} as ComponentMeta<typeof Sliders>;

const Template: ComponentStory<typeof Sliders> = (args) => <Sliders {...args} />;

export const ColorBlack = Template.bind({});
ColorBlack.args = {
};

