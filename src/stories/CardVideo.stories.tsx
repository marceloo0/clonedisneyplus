import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardVideo } from '../components/Cards';

export default {
  title: 'Cards/CardVideo',
  component: CardVideo,
} as ComponentMeta<typeof CardVideo>;

const Template: ComponentStory<typeof CardVideo> = (args) => <CardVideo {...args} />;

export const Video = Template.bind({});
Video.args = {
  backgroundImage: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png',
  backgroundVideo: 'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4',
};
