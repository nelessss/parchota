import { useState } from "react";

export default function ProfileCard() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Martina Alex",
    email: "martina@parchota.com",
    phone: "123-456-7890",
    location: "Bogotá, Colombia",
    avatar: "/avatar.jpg",
  });

  const [avatarFile, setAvatarFile] = useState(null);

  const toggleEdit = () => setEditing(!editing);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, avatar: imageUrl });
    }
  };

  return (
    <section className='max-w-md mx-auto mt-12 bg-white dark:bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-2xl'>
      {/* Header con fondo y foto */}
      <div className='relative bg-gradient-to-r from-yellow-400 to-yellow-500 p-6'>
        <div className='relative w-24 h-24 rounded-full border-4 border-white overflow-hidden mx-auto'>
          <img
            src={profile.avatar}
            alt='Avatar'
            className='w-full h-full object-cover'
          />
          {editing && (
            <input
              type='file'
              accept='image/*'
              onChange={handleAvatarChange}
              className='absolute inset-0 opacity-0 cursor-pointer'
            />
          )}
        </div>
        <h2 className='text-center text-xl font-bold mt-4'>{profile.name}</h2>
        <p className='text-center text-sm text-black'>@usuario</p>
      </div>

      {/* Tarjeta de datos - no editable */}
      <div className='bg-[#f9f9f9] dark:bg-[#2b2b2b] px-6 py-4 text-center'>
        <div className='grid grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300'>
          <div>
            <p className='font-bold text-lg'>Estudiante</p>
            <p>Rol</p>
          </div>
          <div>
            <p className='font-bold text-lg'>54</p>
            <p>Planes</p>
          </div>
          <div>
            <p className='font-bold text-lg'>9</p>
            <p>Favoritos</p>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className='p-6 space-y-4'>
        {editing ? (
          <>
            <input
              type='text'
              name='name'
              value={profile.name}
              onChange={handleChange}
              className='w-full p-2 rounded-md border dark:bg-[#333] dark:text-white'
              placeholder='Nombre'
            />
            <input
              type='email'
              name='email'
              value={profile.email}
              onChange={handleChange}
              className='w-full p-2 rounded-md border dark:bg-[#333] dark:text-white'
              placeholder='Correo'
            />
            <input
              type='tel'
              name='phone'
              value={profile.phone}
              onChange={handleChange}
              className='w-full p-2 rounded-md border dark:bg-[#333] dark:text-white'
              placeholder='Teléfono'
            />
            <input
              type='text'
              name='location'
              value={profile.location}
              onChange={handleChange}
              className='w-full p-2 rounded-md border dark:bg-[#333] dark:text-white'
              placeholder='Ubicación'
            />
            <button
              onClick={toggleEdit}
              className='w-full bg-yellow-400 text-black font-bold py-2 rounded-md hover:bg-yellow-300'
            >
              Guardar cambios
            </button>
          </>
        ) : (
          <>
            <div className='flex justify-between text-sm text-gray-600 dark:text-gray-300'>
              <span>Correo:</span>
              <span>{profile.email}</span>
            </div>
            <div className='flex justify-between text-sm text-gray-600 dark:text-gray-300'>
              <span>Teléfono:</span>
              <span>{profile.phone}</span>
            </div>
            <div className='flex justify-between text-sm text-gray-600 dark:text-gray-300'>
              <span>Ubicación:</span>
              <span>{profile.location}</span>
            </div>
            <button
              onClick={toggleEdit}
              className='w-full bg-yellow-400 text-black font-bold py-2 rounded-md hover:bg-yellow-300 mt-4'
            >
              Editar perfil
            </button>
          </>
        )}
      </div>
    </section>
  );
}
