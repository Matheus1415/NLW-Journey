import { FormEvent } from "react";

export interface IsComformTripModalProps {
    setIsComfirmTripModalOpen: (prop:boolean) => void,
    removeEmailsFromInvide: (emailToRemove: string) => void, 
    emailsToInvide: string[], 
    addNewEmailToInvite:(event:FormEvent<HTMLFormElement>) => void,
    CreateTripPage: () => void,
}