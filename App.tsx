import React, { useState, useMemo } from 'react';
import { ALBUM_DATA } from './constants';
import { AlbumImage } from './types';
import { PhotoCard } from './components/PhotoCard';
import { Modal } from './components/Modal';
import { BookOpen, Camera, Sparkles, Filter } from 'lucide-react';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<AlbumImage | null>(null);
  const [activeTag, setActiveTag] = useState<string>('ALL');

  // Updated tags as requested: Emotion, Daily Life, Outfit
  const tags = ['ALL', '감정', '일상', '의상'];

  const filteredData = useMemo(() => {
    if (activeTag === 'ALL') return ALBUM_DATA;
    return ALBUM_DATA.filter(img => img.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header - Chalkboard Style */}
      <header className="bg-chalkboard text-white sticky top-0 z-40 shadow-lg border-b-4 border-school-blue">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-white p-2 rounded-full text-chalkboard">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="font-jua text-2xl md:text-3xl tracking-wide">사나와의 기억</h1>
              <p className="font-gamja text-gray-400 text-sm">소중한 47개의 기억 조각들</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:flex text-sm font-gamja text-gray-300 items-center gap-2">
                <Camera size={16} />
                <span>Total: {ALBUM_DATA.length} Photos</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-8">
        
        {/* Intro Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto px-4">
          <div className="inline-block p-1 bg-school-pink/20 rounded-full mb-4">
            <Sparkles className="text-school-pink w-6 h-6 m-2" />
          </div>
          <h2 className="font-jua text-3xl text-gray-800 mb-4">반짝이는 순간들</h2>
          <p className="font-gamja text-xl text-gray-600 leading-relaxed">
            함께 웃고 떠들던 교실, 땀 흘리던 운동장, 그리고 우리들의 이야기.<br/>
            사진을 클릭하면 그때 그 시절의 이야기를 볼 수 있어.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 px-4">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`
                px-4 py-2 rounded-full font-jua text-lg transition-all transform hover:scale-105
                ${activeTag === tag 
                  ? 'bg-school-blue text-white shadow-md rotate-[-2deg]' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-school-blue hover:text-school-blue'}
              `}
            >
              {tag === 'ALL' ? '전체 보기' : `#${tag}`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-jua text-2xl text-gray-400">아직 등록된 사진이 없어요!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredData.map((image) => (
              <PhotoCard 
                key={image.id} 
                image={image} 
                onClick={setSelectedImage} 
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-white border-t border-gray-200 text-center">
        <p className="font-gamja text-lg text-gray-500">
          © {new Date().getFullYear()} School Days Album. Made with memory.
        </p>
      </footer>

      {/* Modal */}
      <Modal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
};

export default App;