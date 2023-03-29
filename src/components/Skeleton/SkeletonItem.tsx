import { FC } from 'react';
import './SkeletonItem.css';

export const SkeletonItem: FC = () => {
  return (
    <div className="skeleton-item">
      <div className="skeleton-item-image"></div>

      <div className="skeleton-item-caption"></div>

      <div className="skeleton-item-description-list">
        <div className="skeleton-item-description-item"></div>
        <div className="skeleton-item-description-item"></div>
      </div>
    </div>
  );
};