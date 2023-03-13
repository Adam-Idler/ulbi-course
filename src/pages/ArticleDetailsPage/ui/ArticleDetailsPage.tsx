import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  return (
    <div
      className={classNames(cls.articleDetailsPage, {}, [className])}
    >
      ArticleDetailsPage
    </div>
  );
});

export default memo(ArticleDetailsPage);
