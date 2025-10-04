import React, { useState } from 'react';
import { HeartIcon } from './HeartIcon';
const bgImage = new URL('../image/z7079827350219_5a020b445e537c092edaf5aed4c4113b.jpg', import.meta.url).href;

interface CardCoverProps {
  onOpen: () => void;
}

export const CardCover: React.FC<CardCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Start the main slide animation shortly after the flap starts opening
    setTimeout(onOpen, 400); 
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Container với hiệu ứng perspective cho 3D */}
      <div style={{ perspective: '1200px' }}>
          <div className="relative w-[80vw] max-w-md aspect-[3/4] cursor-pointer" onClick={handleOpenEnvelope}>
            {/* Thân phong bì */}
            <div className="absolute inset-0 bg-rose-50 rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 text-center">
                <div className="mt-16"> {/* Thêm khoảng trống để chữ không bị nắp thư che */}
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-rose-500">
                        Gửi Em, Tình Yêu Của Anh
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-rose-700">
                        Chúc mừng kỷ niệm 2 năm chúng mình
                    </p>
                </div>
            </div>

            {/* Nắp phong bì (phần chuyển động) */}
            <div 
                className="absolute top-0 left-0 w-full h-1/2 z-10"
                style={{
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.8s ease-in-out',
                    transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
                }}
            >
                {/* Mặt trước của nắp */}
                <div className="absolute inset-0 bg-rose-200" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 90%)', backfaceVisibility: 'hidden' }}></div>
                {/* Mặt sau của nắp (màu của bên trong) */}
                <div className="absolute inset-0 bg-rose-100" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 90%)', transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}></div>
            </div>
            
            {/* Con dấu niêm phong - chỉ hiển thị khi chưa mở */}
            {!isOpening && (
                <div
                    aria-label="Mở thiệp"
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-rose-400 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
                >
                    <HeartIcon className="w-8 h-8 text-white" />
                </div>
            )}
          </div>
      </div>
    </div>
  );
};