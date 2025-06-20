import { useState } from "react";
import Link from "next/link";

export default function RegistroPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", edad: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Gracias por registrarte 🖤 ¡Nos vemos en el parche!");
  };

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

      <h1 className='text-4xl font-bold mb-4 text-center'>Únete al parche</h1>
      <p className='text-center text-gray-700 mb-12 max-w-xl mx-auto'>
        Regístrate para recibir planes, eventos y movidas en Bogotá directamente
        en tu bandeja. Solo lo bacano.
      </p>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto bg-white rounded-xl shadow p-8 space-y-6'
      >
        <div>
          <label className='block text-sm font-medium mb-1'>Nombre</label>
          <input
            type='text'
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b2b2b]'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Correo electrónico
          </label>
          <input
            type='email'
            name='correo'
            value={form.correo}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b2b2b]'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Edad</label>
          <input
            type='number'
            name='edad'
            value={form.edad}
            onChange={handleChange}
            required
            min='12'
            max='25'
            className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b2b2b]'
          />
        </div>

        <button
          type='submit'
          className='w-full py-3 bg-[#2b2b2b] text-white rounded-full font-semibold hover:bg-[#444] transition'
        >
          Registrarme
        </button>
      </form>
    </main>
  );
}
