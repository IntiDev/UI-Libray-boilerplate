import React from 'react';

import Button  from './Button';

export default {
  title: 'Buton',
  component: Button
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  size: 'large'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
  size: 'small'
};

