import type { FC } from 'react';
import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className = '', isOpen, onClose }) => {
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
