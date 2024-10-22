import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/ui/Button";
import { ButtonProps } from "../types/Button.type";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    onClick: { action: "click" },
    onFocus: { action: "focus" },
    onHover: { action: "hover" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    fullWidth: false,
    loading: false,
    icon: null,
    block: false,
    rounded: "md",
    accessibleLabel: "Default Button",
    children: "Click Me",
  } as ButtonProps,
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  } as ButtonProps,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: "Disabled Button",
  } as ButtonProps,
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <span>🌟</span>,
    children: "With Icon",
  } as ButtonProps,
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
    children: "Full Width Button",
  } as ButtonProps,
};
