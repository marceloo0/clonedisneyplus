import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonSpinner } from '../components/Buttons';

import { ImSpinner9 } from 'react-icons/im'

export default {
  title: 'Buttons/ButtonSpinner',
  component: ButtonSpinner,
} as ComponentMeta<typeof ButtonSpinner>;
 
const Template: ComponentStory<typeof ButtonSpinner> = (args) => <ButtonSpinner {...args} />;


export const Spinner = Template.bind({});
Spinner.args = {
  backgroundColor: '#0072D2',
  size: 'large',
  icon: <ImSpinner9 size={24} />,
  color: '#FFFFFF'
};

