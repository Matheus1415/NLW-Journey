import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <div className="flex items-center gap-2 flex-1">
            <MapPin size={24} className="text-zinc-400" />
            <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 text-white outline-none" />
          </div>

          <div className="flex items-center gap-2 w-min">
            <Calendar size={24} className="text-zinc-400 w-min" />
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 text-white outline-none" />
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            <ArrowRight size={24} className=" text-lime-950 " />
            Continuar
          </button>
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

      </div>
    </div>
  );
}

export default App;
