import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'adminovich',
        name: 'root',
        city: 'Moscow',
        currency: Currency.USD
      }
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'adminovich',
        name: 'root',
        city: 'Moscow',
        currency: Currency.USD
      }
    }
  })
];
