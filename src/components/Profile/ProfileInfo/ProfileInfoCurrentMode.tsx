import React, {FC} from "react";
import {ContactsType, ProfileType} from "../../../types/types";

type  PropsType = {
    isOwner: boolean
    profile: ProfileType
    upEditMode: () => void
}
type  ContactType = {
    contactItem: string
    contactValue: string
}

export const ProfileInfoCurrentMode: FC<PropsType> = ({isOwner, profile, upEditMode}) => {
    return (
        <dl>
            <dt>About me:</dt>
            <dd>{profile.aboutMe}</dd>
            <dt>Looking for a job:</dt>
            <dd>{profile.lookingForAJob ? 'yes' : 'no'}</dd>
            <dt>My skills:</dt>
            <dd>{profile.lookingForAJobDescription}</dd>
            <dt>Contacts:</dt>
            <dd>
                {Object
                    .keys(profile.contacts)
                    .map(keys => <Contacts key={keys}
                                           contactItem={keys}
                                           contactValue={profile.contacts[keys as keyof ContactsType]}/>)
                }</dd>

            {isOwner && <button onClick={upEditMode}>EDIT</button>}
        </dl>
    )
}

const Contacts: FC<ContactType> = ({contactItem, contactValue}) => {
    return (
        <div>
            {contactItem}: {contactValue}
        </div>
    )
}