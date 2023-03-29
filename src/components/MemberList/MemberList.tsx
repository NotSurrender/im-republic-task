import { FC } from 'react';
import { Member } from '../Member';
import { MemberListProps } from './interfaces';
import './MemberList.css';

export const MemberList: FC<MemberListProps> = ({ data, className }) => {
  return (
    <ul className={`${className} member-list`}>
      { data.map((member) => {
        return (
          <li key={member.id}>
            <Member {...member} />
          </li>
        );
      })}
    </ul>
  );
}