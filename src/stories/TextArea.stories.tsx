import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../components/ui/TextArea"; 
import { TextAreaProps } from "../types/TextArea.type"; 

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/TextArea",
  argTypes: {
    onInput: { action: "input" },
    onChange: { action: "change" },
    onFocus: { action: "focus" },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
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
  } as TextAreaProps,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisable: true,
    placeHolder: "This field is disabled",
  } as TextAreaProps,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    errorMessage: "This field is required.",
  } as TextAreaProps,
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    isReadOnly: true,
    placeHolder: "This field is read-only",
  } as TextAreaProps,
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    cols: 40,
    rows: 10,
    resize: "none",
    borderRadius: "lg",
  } as TextAreaProps,
};

export const WithLongHint: Story = {
  args: {
    ...Default.args,
    hint: "Please enter a detailed description of the task you need help with. This field accepts up to 200 characters.",
  } as TextAreaProps,
};

export const Resizable: Story = {
  args: {
    ...Default.args,
    resize: "both",
  } as TextAreaProps,
};
