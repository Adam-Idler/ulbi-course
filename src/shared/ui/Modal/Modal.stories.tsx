import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  isOpen: true,
  children: 'Пример текста для модального окна'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Пример текста для модального окна'
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
];
