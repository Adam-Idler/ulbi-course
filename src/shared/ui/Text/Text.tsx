import type { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = ({
  className = '',
  title = '',
  text = '',
  theme = TextTheme.PRIMARY
}) => {
  return (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
      {Boolean(title) && <p className={cls.title}>{title}</p>}
      {Boolean(text) && <p className={cls.text}>{text}</p>}
    </div>
  );
};
