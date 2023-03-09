import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'adminovich',
    name: 'root',
    city: 'Moscow',
    currency: Currency.USD,
    avatar
  }
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
