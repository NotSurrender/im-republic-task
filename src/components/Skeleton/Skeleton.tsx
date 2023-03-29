import { FC } from 'react';
import { SkeletonItem } from './SkeletonItem';
import { SkeletonProps } from './interfaces';
import './Skeleton.css';

export const Skeleton: FC<SkeletonProps> = ({ className, size = 15 }) => {
  return (
    <ul className={`skeleton ${className}`}>
      { [...new Array(size)].map((_, index) => {
        return (
          <li key={index}>
            <SkeletonItem/>
          </li>
        );
      })}
    </ul>
  );
};