import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={className}
      label={t('Валюта')}
      value={value}
      onChange={onChangeHandler}
      options={options}
      readonly={readonly}
    />
  );
});
