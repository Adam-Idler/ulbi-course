import type { FC } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '', short = false }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
