import { type CSSProperties, useMemo, memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = memo(({ className, src, size = 100, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
});
