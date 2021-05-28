import React, { FC } from 'react';
import { ContactsType, ProfileType } from '../../../types/types';
import styles from '../profile.module.scss';

type PropsType = {
  isOwner: boolean;
  profile: ProfileType;
  upEditMode: () => void;
};
type ContactType = {
  contactItem: string;
  contactValue: string;
};

const Contacts: FC<ContactType> = ({ contactItem, contactValue }) => {
  return (
    <div>
      {contactItem}: <a href={contactValue}>{contactValue}</a>
    </div>
  );
};

export const ProfileInfoCurrentMode: FC<PropsType> = ({
  isOwner,
  profile,
  upEditMode,
}) => {
  return (
    <div className={styles.contactPage}>
      <div>
        About me:
        <span>{profile.aboutMe}</span>
      </div>
      <div>
        Looking for a job:
        <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
      </div>
      <div>
        My skills:
        <span>{profile.lookingForAJobDescription}</span>
      </div>
      <div>
        Contacts:
        <span>
          {Object.keys(profile.contacts).map((keys) => (
            <Contacts
              key={keys}
              contactItem={keys}
              contactValue={profile.contacts[keys as keyof ContactsType]}
            />
          ))}
        </span>
      </div>
      {isOwner && <button onClick={upEditMode}>Edit</button>}
    </div>
  );
};
