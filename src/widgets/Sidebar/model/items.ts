import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from '../../assets/icons/about-20-20.svg';
import MainIcon from '../../assets/icons/main-20-20.svg';
import ProfileIcon from '../../assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon
  }
];
