import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title of the text',
  text: 'Text of the text under the title'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title of the text without text'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text of the text under the title without title'
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  title: 'Title of the text',
  text: 'Text of the text under the title'
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title of the text without text'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text of the text under the title without title'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title of the text',
  text: 'Text of the text under the title',
  theme: TextTheme.ERROR
};
