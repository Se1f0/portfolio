import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  modalImage: string | null;
  closeModal: () => void;
  nextModalImage: () => void;
  prevModalImage: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalImage,
  closeModal,
  nextModalImage,
  prevModalImage
}) => {
  if (!modalImage) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 cursor-pointer"
      onClick={() => closeModal()}
    >
      <div 
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={modalImage}
          alt="Project Image"
          className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[85vh]"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            prevModalImage();
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            nextModalImage();
          }}
        >
          <ChevronRight size={20} />
        </button>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
