import Link from "next/link";

export default function PlanesPage() {
  return (
    <main className='min-h-screen bg-[#e4e2dd] text-[#2b2b2b] px-6 py-16'>
      {/* Botón de volver */}
      <div className='mb-10'>
        <Link
          href='/'
          className='inline-block px-4 py-2 bg-[#2b2b2b] text-white text-sm rounded-full hover:bg-[#444] transition'
        >
          ← Volver al inicio
        </Link>
      </div>

      {/* Título */}
      <h1 className='text-4xl font-bold mb-4 text-center'>
        Planes para parchar
      </h1>
      <p className='text-center text-gray-700 mb-12 max-w-2xl mx-auto'>
        Encuentra los mejores planes en Bogotá. Gratuitos, pagos, culturales,
        alternativos, ¡lo que sea!
      </p>

      {/* Grid de planes */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {/* Card de plan */}
        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition'>
          <h3 className='text-xl font-semibold mb-2'>Tarde de museos gratis</h3>
          <p className='text-sm text-gray-600'>
            Miércoles en el Museo Nacional. Entrada libre desde las 3pm.
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition'>
          <h3 className='text-xl font-semibold mb-2'>
            Picnic en el Parque El Virrey
          </h3>
          <p className='text-sm text-gray-600'>
            Lleva tus snacks y disfruta con amigxs o en solitario. Sano y
            fresco.
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition'>
          <h3 className='text-xl font-semibold mb-2'>
            Noche de rap en Galerías
          </h3>
          <p className='text-sm text-gray-600'>
            Freestyles, DJs y vibras reales en eventos subterráneos.
          </p>
        </div>

        {/* Agrega más cards aquí si quieres */}
      </div>
    </main>
  );
}
