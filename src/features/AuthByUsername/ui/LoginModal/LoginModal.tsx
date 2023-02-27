import { type FC, Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Loader, Modal } from 'shared/ui';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
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
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
