import { type InputHTMLAttributes, memo, useState } from 'react';
import { classNames } from 'shared/lib';
import { type Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value?: string) => void
}

export const Input = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  readOnly,
  ...forwardingProps
}: InputProps) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const mods: Mods = {
    [cls.readonly]: readOnly
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly === true) return;
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelectHandler = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLInputElement;
    setCaretPosition(target.selectionStart ?? 0);
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {Boolean(placeholder) && (
        <div className={cls.placeholder}>
          {`${placeholder}>\u00A0`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelectHandler}
          className={cls.input}
          {...forwardingProps}
        />

        {(readOnly === false) && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>

    </div>
  );
});
