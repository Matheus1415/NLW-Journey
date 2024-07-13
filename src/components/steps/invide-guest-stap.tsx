import { ArrowRight, UserPlus } from "lucide-react"
import { InvideGuestStapProps } from "../../interface/InvideGuestStapProps"

export const InvideGuestStap: React.FC<InvideGuestStapProps> = ({emailsToInvide, setIsComfirmTripModalOpen, setIsGuestsModalOpen}) =>
{
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <button onClick={() => setIsGuestsModalOpen(true)} className="flex items-center gap-2 flex-1">
          <UserPlus size={24} className="text-zinc-400" />
          {emailsToInvide.length > 0 ? (
            <span className='text-zinc-100 flex-1 text-left'>
              {emailsToInvide.length} pessoa(s) convidada(s)
            </span>
          ):(
            <span className='text-zinc-400 flex-1 text-left'>Quem estará na viagem?</span>
          )}
        </button>

        <div className='w-px h-6 bg-zinc-800' />

        <button onClick={() => setIsComfirmTripModalOpen(true)} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
          <ArrowRight size={24} className="text-lime-950" />
          Confirmar viagem
        </button>
      </div>
    )
}