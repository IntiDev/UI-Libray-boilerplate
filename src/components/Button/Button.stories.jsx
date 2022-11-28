import Button from "./Button.js";

export default {
  title: "Button",
  component: Button,
  args: {
    label: "Demo Button"
  }
};

const Template = args => <Button {...args} />;

const Standard = Template.bind({});

const Disabled = Template.bind({});
Disabled.args = {disabled: true, label: "Disabled Button"};

export {Standard, Disabled};
