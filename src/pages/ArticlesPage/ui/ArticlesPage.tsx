import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div
      className={classNames(cls.articlesPage, {}, [className])}
    >
      ArticlePage
    </div>
  );
};

export default memo(ArticlesPage);
