import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonWithIcon } from '../components/Buttons';

import { RiShieldStarLine } from 'react-icons/ri'

export default {
  title: 'Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
} as ComponentMeta<typeof ButtonWithIcon>;
 
const Template: ComponentStory<typeof ButtonWithIcon> = (args) => <ButtonWithIcon {...args}>Home</ButtonWithIcon>;


export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <RiShieldStarLine />,
  color: '#000',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
};

