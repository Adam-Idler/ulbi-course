import { useTranslation } from 'react-i18next';

function MainPage (): JSX.Element {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;
