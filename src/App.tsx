import { FormEvent, useState } from 'react';
import { MapPin, Calendar, ArrowRight, UserPlus, Settings2, X, AtSign, Plus } from 'lucide-react';

function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
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
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin size={24} className="text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 text-white outline-none" />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <Calendar size={24} className="text-zinc-400 w-min" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 text-white outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputOpen ? (
              <button onClick={() => setIsGuestsInputOpen(false)} className="bg-zinc-800 text-zinc-400 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">
                Alterar Local/Data <Settings2 size={24} className="text-zinc-400" />
              </button>
            ) : (
              <button onClick={() => setIsGuestsInputOpen(true)} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                <ArrowRight size={24} className="text-lime-950" />
                Continuar
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button onClick={() => setIsGuestsModalOpen(true)} className="flex items-center gap-2 flex-1">
                <UserPlus size={24} className="text-zinc-400" />
                <span className='text-zinc-400 flex-1 text-left'>Quem estará na viagem?</span>
              </button>

              <div className='w-px h-6 bg-zinc-800' />

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                <ArrowRight size={24} className="text-lime-950" />
                Confirmar viagem
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

        {isGuestsModalOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>

                <div className='flex items-center justify-between'>

                  <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
                  <button onClick={() => setIsGuestsModalOpen(false)}><X size={25} className='text-zinc-400' /></button>
                </div>

                <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>

              </div>
              <div className='flex flex-wrap gap-2'>

                  {
                    emailsToInvide.map(email => (
                      <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                        <span className='text-zinc-300'>{email}</span>
                        <button onClick={() => removeEmailsFromInvide(email)}><X size={15} className='text-zinc-400' /></button>
                      </div>
                    ))
                  }
              </div>

              <div className='w-full h-px bg-zinc-800' />

              <form onSubmit={addNewEmailToInvite} action="" className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                <AtSign size={25} className='text-zinc-400'/>
                <input 
                  type="email" 
                  name='email'
                  placeholder="Digite o email do convidado!" 
                  className="bg-transparent text-lg placeholder-zinc-400 text-white outline-none flex-1" />
                <button type='submit' className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                  Convidar
                  <Plus size={25} className='text-lime-950'/>
                </button>
              </form>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
