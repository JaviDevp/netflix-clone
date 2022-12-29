import React from "react";

const evento = {
  idEvento:1,
  nombre: "Boda de Yascara",
  descripcion: "Boda que se realiza en Bolivia",
  ubicacionDelEvento: "Salon de evento Ingenieria de software 1",
  fechaDelEvento: "19/09/2022",
  horaDelEvento: "21:00",
  tipoDeEvento: "publico v solo invitados",
  qr: "url de la imagen del qr???",
  album: {
      idAlbum: 1,
      nombreAlbun:"BodaA",
      fechaCreacion: "10/10/2022",
      fotos:[{"nombre":"fotoA","precio": 20, "url":"asdas"},{"nombre":"fotoA","precio": 20, "url":"asdas"}]
    },
}

function Evento() {
  return (
    <div className="border flex flex-col px-2 py-2">
      <div className="flex items-center justify-between space-x-4">
        <h1 className="text-[#454545] font-semibold text-2xl">{evento.nombre}</h1>
        <div className="flex items-center justify-end space-x-5 py-2 text-[#424242] font-normal">
          <p className="">{evento.fechaDelEvento}</p>
          <span className="text-black">{'|'}</span>
          <p className="">{evento.horaDelEvento}</p>
        </div>
      </div>

      <div>
        <p className="text-[#999999] font-normal text-base">{evento.descripcion}</p>
      </div>
      <a className="font-normal text-blue-400 text-sm" target="_blank" rel="noopener noreferrer" href={evento.ubicacionDelEvento}>Ver Ubicación</a>
    </div>
    
  );
}

export default Evento;

{/* <div className="cursor-pointer w-80 p-0 flex flex-col" onClick={() => console.log('onclick pa')}>
      <div className="relative">
        <img className="hover:opacity-90 -z-10 opacity-80" src="https://www.trecebits.com/wp-content/uploads/2019/11/boda.jpg" alt="" />
        <p className="absolute px-2 py-1 w-full bottom-0 bg-black/60"><span className="opacity-70">{evento.ubicacionDelEvento}</span></p>
      </div>

      <div className="px-3 py-2 bg-white space-y-2">
        <div className="flex space-x-5 text-[#424242] font-normal">
          <p className="">{evento.fechaDelEvento}</p>
          <span className="text-black">{'|'}</span>
          <p className="">{evento.horaDelEvento}</p>
        </div>

        <h1 className="text-[#454545] font-semibold text-2xl">{evento.nombre}</h1>
        <p className="text-[#999999] font-normal text-base">{evento.descripcion}</p>        
        <p>tipo: <span>{evento.tipoDeEvento}</span></p>
      </div>
    </div> */}