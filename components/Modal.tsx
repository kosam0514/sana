import React, { useEffect } from 'react';
import { X, Download, Share2 } from 'lucide-react';
import { AlbumImage } from '../types';

interface ModalProps {
  image: AlbumImage | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [image]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
      <div 
        className="relative w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] notebook-lines"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/3 bg-gray-100 flex items-center justify-center p-2 md:p-0">
          <img 
            src={image.url} 
            alt={image.title} 
            className="max-h-[50vh] md:max-h-full w-auto object-contain shadow-md rounded-sm"
          />
        </div>

        {/* Info Section (Notebook Style) */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col relative bg-[#fdfbf7]">
           {/* Decorative tape */}
           <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-32 h-8 bg-school-pink/60 rotate-2 z-10 opacity-80"></div>

          <div className="mt-4 md:mt-8 flex-grow overflow-y-auto">
            <h2 className="font-jua text-3xl md:text-4xl text-gray-800 mb-4">{image.title}</h2>
            
            <div className="flex gap-2 mb-6 flex-wrap">
              {image.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-jua">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="font-hand text-3xl md:text-4xl text-gray-600 leading-relaxed min-h-[100px]">
              {image.description}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-dashed border-gray-300 flex justify-between items-center shrink-0">
             <div className="font-gamja text-gray-400 text-lg">
                No. {String(image.id).padStart(3, '0')}
             </div>
             <div className="flex gap-3">
               <button 
                  onClick={() => window.open(image.url, '_blank')}
                  className="p-2 text-gray-500 hover:text-school-blue transition-colors flex flex-col items-center gap-1 group"
                  title="원본 보기"
               >
                 <Download size={24} className="group-hover:scale-110 transition-transform"/>
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};