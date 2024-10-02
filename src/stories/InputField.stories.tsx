import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/ui/InputField"; 
import { InputFieldProps } from "../types/InputField.type"; 

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "Components/InputField",
  argTypes: {
    onChange: { action: "change" },
    onFocus: { action: "focus" },
    onBlur: { action: "blur" },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Input Label",
    placeholder: "Enter text...",
    name: "inputField",
    type: "text",
    size: "medium",
    disabled: false,
    readOnly: false,
    required: false,
    error: "",
    isValid: true,
  } as InputFieldProps,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    placeholder: "This field is disabled",
  } as InputFieldProps,
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    placeholder: "This field is read-only",
  } as InputFieldProps,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    isValid: false,
    error: "This field is required.",
  } as InputFieldProps,
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  } as InputFieldProps,
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: "small",
  } as InputFieldProps,
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: "large",
  } as InputFieldProps,
};
