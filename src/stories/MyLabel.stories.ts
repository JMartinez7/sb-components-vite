import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: 'UI/Labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio'},
    color: { control: 'select' }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story =  StoryObj<typeof meta>

export const Basic: Story = {
  args:{
    label: 'Basic Label'
  }
};

export const AllCaps: Story = {
  args:{
    label: 'All caps label',
    size: 'normal',
    allCaps: true
  }
};

export const Seconday: Story = {
  args:{
    label: 'Secondary label',
    size: 'normal',
    color: 'text-secondary',
  }
};

export const CustomColor: Story = {
  args:{
    label: 'Custom color label',
    size: 'normal',
    fontColor: '#adf400',
  }
};