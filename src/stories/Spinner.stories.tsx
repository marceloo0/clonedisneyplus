import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from '../components';

import { ImSpinner9 } from 'react-icons/im'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;
 
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args}>Home</Spinner>;


export const Spin = Template.bind({});
Spin.args = {
  speed: '0.65s',
  name: './assets/spinner.svg',
  size: 'medium',
};

