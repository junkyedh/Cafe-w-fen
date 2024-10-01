import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TextAreaProps } from "@/types/TextArea.type"; 
import TextArea from "../components/ui/TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea, 
  argTypes: {
    onInput: { action: "input" },
    onChange: { action: "change" },
    onFocus: { action: "focus" },
  },
} as Meta<typeof TextArea>; 

const Template: StoryFn<TextAreaProps> = (args) =><TextArea {...args} ></TextArea>;

export const Default = Template.bind({});
Default.args = {
  title: "Description",
  placeHolder: "Enter description...",
  name: "description",
  id: "description",
  cols: 30,
  rows: 5,
  resize: "both",
  borderRadius: "md",
  maxLength: 200,
  isValid: true,
  isInvalid: false,
  hint: "This is a sample hint",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisable: true,
  placeHolder: "This field is disabled",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  isInvalid: true,
  errorMessage: "This field is required.",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  isReadOnly: true,
  placeHolder: "This field is read-only",
};
