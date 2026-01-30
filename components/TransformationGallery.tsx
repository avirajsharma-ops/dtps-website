'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Transformation {
  _id: string;
  clientName: string;
  beforeImage?: string;
  afterImage?: string;
  weightLost: string;
  daysToAchieve: string;
  testimonial?: string;
  page: string;
  featured: boolean;
  isActive: boolean;
}

interface TransformationGalleryProps {
  page: 'weight-loss' | 'pcod' | 'therapeutic' | 'wedding';
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

const fallbackData = [
  { 
    clientName: 'Success Story 1', 
    weightLost: '8 kgs', 
    daysToAchieve: '30 Days',
    afterImage: '/img/placeholder.jpg'
  },
  { 
    clientName: 'Success Story 2', 
    weightLost: '5 kgs', 
    daysToAchieve: '27 Days',
    afterImage: '/img/placeholder.jpg'
  },
  { 
    clientName: 'Success Story 3', 
    weightLost: '8 kgs', 
    daysToAchieve: '90 Days',
    afterImage: '/img/placeholder.jpg'
  },
];

export default function TransformationGallery({ 
  page, 
  title = 'Success Stories',
  subtitle = 'Real Results from Real People',
  maxItems = 6
}: TransformationGalleryProps) {
  const [transformations, setTransformations] = useState<Transformation[]>(fallbackData as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        // First try to fetch page-specific transformations
        const response = await fetch(`/api/transformations?page=${page}&active=true`);
        if (response.ok) {
          const data = await response.json();
          if (data.transformations && data.transformations.length > 0) {
            setTransformations(data.transformations.slice(0, maxItems));
            return;
          }
        }
        
        // If no page-specific data, fetch all active transformations
        const allResponse = await fetch('/api/transformations?active=true');
        if (allResponse.ok) {
          const allData = await allResponse.json();
          if (allData.transformations && allData.transformations.length > 0) {
            setTransformations(allData.transformations.slice(0, maxItems));
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching transformations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransformations();
  }, [page, maxItems]);

  return (
    <section className="py-[60px] px-5 max-w-[1200px] mx-auto">
      {title && (
        <div className="text-center mb-[50px]">
          <h2 className="text-5xl font-bold text-black mb-2.5 font-[Epilogue,sans-serif] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[17px] text-[#666] leading-relaxed max-w-[680px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="max-w-full mx-auto relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {transformations.map((transformation) => (
            <SwiperSlide key={transformation._id || transformation.clientName}>
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-white relative">
            

                {/* Single Image Display */}
                <div className="relative overflow-hidden h-[400px] w-full">
                  <img
                    src={transformation.afterImage || '/img/placeholder.jpg'}
                    alt={`${transformation.clientName} Result`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Footer */}
                <div className="bg-[#16a085] p-5 flex justify-between items-center">
                  <div>
                    <h3 className="m-0 mb-1 text-xl font-bold text-white font-[Epilogue,sans-serif]">
                      {transformation.clientName}
                    </h3>
                    <p className="m-0 text-base font-medium text-white font-[Epilogue,sans-serif]">
                      Lost {transformation.weightLost} weight
                    </p>
                  </div>
                  <div className="bg-[#ff850b] text-white py-2 px-4 rounded-[20px] text-sm font-semibold whitespace-nowrap font-[Epilogue,sans-serif]">
                    In {transformation.daysToAchieve}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center gap-2 mt-6 relative">
          <style>{`
            .swiper-pagination-custom {
              display: flex !important;
              justify-content: center;
              gap: 8px;
              margin-top: 24px;
              position: relative;
              width: 100%;
            }
            .swiper-pagination-custom .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #d0d0d0 !important;
              opacity: 1 !important;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 !important;
              flex-shrink: 0;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
              background: #ff850b !important;
              width: 12px;
              height: 12px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
