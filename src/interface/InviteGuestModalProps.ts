import { FormEvent } from "react";

export interface InviteGuestModalProps {
    setIsGuestsModalOpen: (prop:boolean) => void,
    removeEmailsFromInvide: (emailToRemove: string) => void, 
    emailsToInvide: string[], 
    addNewEmailToInvite:(event:FormEvent<HTMLFormElement>) => void,
}