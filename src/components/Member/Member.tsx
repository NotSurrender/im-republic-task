import { FC } from 'react';
import { MemberProps } from './interfaces';
import './Member.css';

export const Member: FC<MemberProps> = (props) => {
  return (
    <figure className="member">
      <div className="member-avatar-wrapper">
        <img 
          width="100%" 
          src={props.avatar} 
          alt={props.firstName + ' ' + props.lastName + ' avatar'}
        />
      </div>

      <figcaption className="member-caption">
        {props.firstName} {props.lastName}
      </figcaption>
      
      <div className="member-description-list">
        <div className="member-description-item">
          <b className="member-description-item-title">Job title:</b>
          <span>{props.jobTitle}</span>
        </div>

        <div className="member-description-item">
          <b className="member-description-item-title">City:</b>
          <span>{props.city}</span>
        </div>
      </div>
    </figure>
  );
};