import { FaWhatsapp } from 'react-icons/fa';

export const FloatButtonWhatsapp = () => {

  const numero = "5492517456688"

  const mensaje= "Hola! me contacto desde la web, quisiera realizar una consulta sobre sus servicios de agrimensura."

  const link= `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

  return (
    <a
      href={ link } // Enlace para iniciar chat de WhatsApp
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-20" // Estilos para el botón
    >
      <FaWhatsapp size={36} className='text-white' />
    </a>
  );
};