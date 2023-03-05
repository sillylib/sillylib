import { createElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello, Heading',
  level: 1,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Hello, Heading',
  level: 2,
};
