import { type FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAD_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable */}
        Привет, красавчик. Ты авторизовался.
      </Modal>
    </div>
  );
};
