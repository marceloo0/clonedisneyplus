import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonCircleIcon } from '../components/Buttons';

import { RiShieldStarLine } from 'react-icons/ri'

export default {
  title: 'Buttons/ButtonCircleIcon',
  component: ButtonCircleIcon,
} as ComponentMeta<typeof ButtonCircleIcon>;
 
const Template: ComponentStory<typeof ButtonCircleIcon> = (args) => <ButtonCircleIcon {...args} />;


export const WithIcon = Template.bind({});
WithIcon.args = {
  backgroundColor: '#ffffff',
  size: 'medium',
  icon: <RiShieldStarLine size={36}/>,
  color: '#333'
};

