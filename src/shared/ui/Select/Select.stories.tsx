import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Укажите значение',
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '1234', content: 'Второй пункт' },
    { value: '12345', content: 'Третий пункт' }
  ]
};
