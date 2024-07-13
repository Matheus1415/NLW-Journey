import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"
import { DestinationAndDateStapProps } from "../../interface/DestinationAndDateStapProps"

export const DestinationAndDateStap: React.FC<DestinationAndDateStapProps> = ({isGuestsInputOpen,setIsGuestsInputOpen}) => 
{
    return(
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
    )
}