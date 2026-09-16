import { FaWhatsapp } from 'react-icons/fa';

export const FloatButtonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/5492517456688" // Enlace para iniciar chat de WhatsApp
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-20" // Estilos para el botón
    >
      <FaWhatsapp size={36} className='text-white' />
    </a>
  );
};