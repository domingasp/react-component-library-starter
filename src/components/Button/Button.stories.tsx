import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function Template({
  children,
  onClick,
}: ButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello',
};
