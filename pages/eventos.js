import Link from "next/link";

const eventos = [
  {
    titulo: "Festival de Arte Callejero",
    descripcion:
      "Música, grafiti en vivo y batallas de freestyle en el corazón de Chapinero.",
    barrio: "Chapinero",
    fecha: "Sábado 8 de junio",
    tipo: "Gratis",
    imagen: "/eventos/arte-callejero.jpg",
  },
  {
    titulo: "Cine al Parque",
    descripcion:
      "Proyección de películas locales bajo las estrellas en el Parque Simón Bolívar.",
    barrio: "Teusaquillo",
    fecha: "Viernes 14 de junio",
    tipo: "Gratis",
    imagen: "/eventos/cine-parque.jpg",
  },
  {
    titulo: "Rave en la Montaña",
    descripcion:
      "Una fiesta electrónica secreta en los cerros orientales. ¡Solo para valientes!",
    barrio: "Usaquén",
    fecha: "Sábado 22 de junio",
    tipo: "Pago",
    imagen: "/eventos/rave.jpg",
  },
];

export default function EventosPage() {
  return (
    <main className='min-h-screen bg-[#e4e2dd] text-[#2b2b2b] px-6 py-16'>
      <div className='mb-10'>
        <Link
          href='/'
          className='inline-block px-4 py-2 bg-[#2b2b2b] text-white text-sm rounded-full hover:bg-[#444] transition'
        >
          ← Volver al inicio
        </Link>
      </div>

      <h1 className='text-4xl font-bold mb-4 text-center'>
        Eventos callejeros y urbanos
      </h1>
      <p className='text-center text-gray-700 mb-12 max-w-xl mx-auto'>
        Bogotá siempre tiene un parche. Aquí te dejamos los mejores eventos para
        que no te quedes en casa.
      </p>

      <div className='grid md:grid-cols-3 gap-8'>
        {eventos.map((evento, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden'
          >
            {evento.imagen && (
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className='w-full h-48 object-cover'
              />
            )}
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-1'>{evento.titulo}</h3>
              <p className='text-sm text-gray-600 mb-2'>{evento.descripcion}</p>
              <div className='flex items-center justify-between text-sm text-[#2b2b2b] mt-4'>
                <span className='font-medium'>{evento.barrio}</span>
                <span>{evento.fecha}</span>
              </div>
              <span
                className={`inline-block mt-4 px-3 py-1 text-xs font-bold rounded-full ${
                  evento.tipo === "Gratis"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {evento.tipo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
