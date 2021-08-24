import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Cards';

export default {
  title: 'Cards/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E542761D42FD2D8C9B697E45AD3E4032C832885889C12039ED886A80E27D940A/scale?width=400&aspectRatio=1.78&format=jpeg',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F554F067FBFBEE482DA2DD8DEF61A272E26ECE3043410338246C284EB8FBFA4E/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
  size: 'large',
};
