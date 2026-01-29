import React from 'react';
import { AlbumImage } from '../types';
import { Heart } from 'lucide-react';

interface PhotoCardProps {
  image: AlbumImage;
  onClick: (image: AlbumImage) => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ image, onClick }) => {
  return (
    <div 
      onClick={() => onClick(image)}
      className="group relative bg-white p-2 md:p-3 pb-6 md:pb-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1 cursor-pointer rounded-sm border border-gray-100"
    >
      {/* Tape decoration */}
      <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 w-12 h-3 md:w-24 md:h-6 bg-yellow-200/60 rotate-[-2deg] z-10 shadow-sm"></div>

      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-2 md:mb-3 rounded-sm">
        <img 
          src={image.url} 
          alt={image.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="text-center px-1 md:px-2">
        <h3 className="font-hand text-lg md:text-2xl text-gray-800 truncate">{image.title}</h3>
        <p className="font-gamja text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1 truncate">{image.description}</p>
      </div>

      <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 opacity-0 group-hover:opacity-100 transition-opacity text-school-pink">
        <Heart size={16} className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
      </div>
    </div>
  );
};