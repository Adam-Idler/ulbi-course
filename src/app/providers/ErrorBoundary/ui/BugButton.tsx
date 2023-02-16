import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const { t } = useTranslation('');
  const [error, setError] = useState(false);

  const onClickHandler = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onClickHandler}
    >
      {t('throw error')}
    </Button>
  );
};
