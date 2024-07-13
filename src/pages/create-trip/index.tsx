import { FormEvent, useState } from 'react';
import { ArrowRight, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {InviteGuestModal} from '../../components/invite-get-modal/invite-get-modal';
import { IsComformTripModal } from '../../components/comform-trip-modal/comform-trip-modal';
import { DestinationAndDateStap } from '../../components/steps/defination-and-data-stap';
import { InvideGuestStap } from '../../components/steps/invide-guest-stap';

function CreateTripPage() {

  const navigate = useNavigate(); 
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isComfirmTripModalOpen, setIsComfirmTripModalOpen] = useState(false);
  const [emailsToInvide, setEmailsToInvide] = useState([]);

  function addNewEmailToInvite(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    if(!email){
      return
    }
    if(emailsToInvide.includes(email)){
      return
    }
    setEmailsToInvide([
      ...emailsToInvide,
      email,
    ])
    event.currentTarget.reset();
  }

  function CreateTripPage()
  {
    navigate('/detalhes');
  }

  function removeEmailsFromInvide(emailToRemove: string)
  {
    const newEmailList = emailsToInvide.filter(invited => invited !== emailToRemove)
    setEmailsToInvide(newEmailList);
  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center ">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          <DestinationAndDateStap
            isGuestsInputOpen={isGuestsInputOpen}
            setIsGuestsInputOpen={setIsGuestsInputOpen}
          />
          {isGuestsInputOpen && (
            <InvideGuestStap 
              emailsToInvide={emailsToInvide}
              setIsComfirmTripModalOpen={setIsComfirmTripModalOpen}
              setIsGuestsModalOpen={setIsGuestsModalOpen}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

        {isGuestsModalOpen && (
          <InviteGuestModal 
            addNewEmailToInvite={addNewEmailToInvite} 
            emailsToInvide={emailsToInvide}
            removeEmailsFromInvide={removeEmailsFromInvide}
            setIsGuestsModalOpen={setIsGuestsModalOpen}
          />
        )}

        {isComfirmTripModalOpen &&(
          <IsComformTripModal 
            CreateTripPage={CreateTripPage}
            addNewEmailToInvite={addNewEmailToInvite}
            emailsToInvide={emailsToInvide}
            removeEmailsFromInvide={removeEmailsFromInvide}
            setIsComfirmTripModalOpen={setIsComfirmTripModalOpen}
        />
        )}

      </div>
    </div>
  );
}

export default CreateTripPage;
