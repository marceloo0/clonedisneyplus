import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Button',
  backgroundColor: '#FFFFFF',
  size: 'medium',
  color: '#000',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: '#0072D2',
  size: 'large',
  title: 'Button',
  color: '#FFF',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: '#FFF',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  size: 'medium',
  outlined: true,
  title: 'Button',
};


