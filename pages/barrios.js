import Link from "next/link";

const barrios = [
  {
    nombre: "Chapinero",
    descripcion:
      "Arte, cafés escondidos, librerías y planes nocturnos. Chapinero nunca duerme.",
    imagen: "/barrios/chapinero.jpg",
  },
  {
    nombre: "La Candelaria",
    descripcion:
      "Historia, cultura, teatro callejero y grafitis en cada rincón.",
    imagen: "/barrios/candelaria.jpg",
  },
  {
    nombre: "Teusaquillo",
    descripcion:
      "Parques, bicis, ferias locales y un ambiente chill para parchados.",
    imagen: "/barrios/teusaquillo.jpg",
  },
  {
    nombre: "Usaquén",
    descripcion:
      "Mercadillos, música en vivo y parches con estilo en el norte.",
    imagen: "/barrios/usaquen.jpg",
  },
];

export default function BarriosPage() {
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

      <h1 className='text-4xl font-bold mb-4 text-center'>Explora Barrios</h1>
      <p className='text-center text-gray-700 mb-12 max-w-xl mx-auto'>
        Cada barrio tiene su parche. Descubre qué te ofrece cada zona de Bogotá
        para salir con tu combo.
      </p>

      <div className='grid md:grid-cols-2 gap-8'>
        {barrios.map((barrio, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden'
          >
            <img
              src={barrio.imagen}
              alt={barrio.nombre}
              className='w-full h-56 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>{barrio.nombre}</h3>
              <p className='text-sm text-gray-600'>{barrio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
