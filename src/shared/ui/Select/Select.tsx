import { type ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib';
import { type Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
  const mods: Mods = {

  };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => (
    options?.map(({ value, content }) => (
      <option
        key={value}
        className={cls.option}
        value={value}
      >
        {content}
      </option>
    ))
  ), [options]);

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {!!label && (
        <span className={classNames(cls.label, { [cls.readonly]: readonly }, [])}>
          {`${label}>`}
        </span>
      )}

      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
