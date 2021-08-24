import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F425FB23714CE3AB43B1A158B6E3DBE9739CD68D47CBA3A9DAC197B4A1AD978D/scale?width=280&format=png',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B14033158CC6FE64C73D66A9DAC52FAB60D4B24832A24B2C5FA41BE408026AEA/scale?width=280&format=png',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BC047E692DC768BDD446D83708CBBD5686FA64EE5D5D3D3C3B0A5A788BE1548/scale?width=280&format=png',
  size: 'large',
};
