import { Calendar, MapPin, Plus, Settings2 } from "lucide-react"

 export const TripDetailsPage = () => 
 {
    return(
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-zinc-400" />
                    <span className="text-lg text-zinc-100">Ceara, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-zinc-400" />
                        <span className="text-lg text-zinc-100">17 a 23 de Agosto</span>
                    </div>
                    <div className='w-px h-6 bg-zinc-800' />
                    <button className="bg-zinc-800 text-zinc-400 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">
                        Alterar Local/Data <Settings2 size={24} className="text-zinc-400" />
                    </button>
                </div>

            </div>
            <main className="flex gap-16">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividade</h2>
                        <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                            <Plus size={24} className="text-lime-950" />
                            Cadastrar Atividade
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sabado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="w-80">

                </div>
            </main>
        </div>  
    )
 }