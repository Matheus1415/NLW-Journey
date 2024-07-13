import { Plus, User, X } from "lucide-react"
import { IsComformTripModalProps } from "../../interface/IsComformTripModalProps"

export const IsComformTripModal: React.FC<IsComformTripModalProps> = ({setIsComfirmTripModalOpen,removeEmailsFromInvide, addNewEmailToInvite, CreateTripPage, emailsToInvide  }) =>
{
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>

                <div className='flex items-center justify-between'>

                  <h2 className='text-lg font-semibold'>Comfirma criação de Viagem</h2>
                  <button onClick={() => setIsComfirmTripModalOpen(false)}><X size={25} className='text-zinc-400' /></button>
                </div>
                <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis</span>, Brasil nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024 </span>preencha seus dados abaixo:</p>
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

                <form onSubmit={addNewEmailToInvite} action="" className='w-full p-2.5 rounded-lg flex items-center gap-2 flex-col'>
                    <div className='w-full p-2.5 bg-zinc-950 rounded-lg flex items-center gap-2'>
                    <User size={25} className='text-zinc-400'/>
                    <input
                        type="text"
                        name='name'
                        placeholder="Seu nome completo"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 w-full" />
                    </div>

                    <div className='w-full p-2.5 bg-zinc-950 rounded-lg flex items-center gap-2'>
                    <User size={25} className='text-zinc-400'/>
                    <input
                        type="email"
                        name='email'
                        placeholder="Seu e-mail pessoal"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 w-full" />
                    </div>

                    <button onClick={CreateTripPage} type='submit' className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400 w-full justify-center">
                    Confirma criação de viagem
                    <Plus size={25} className='text-lime-950'/>
                    </button>
              </form>
            </div>
        </div>    
    )
}