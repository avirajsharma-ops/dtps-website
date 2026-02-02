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
    <section className="py-10 md:py-[60px] px-4 md:px-5 max-w-[1200px] mx-auto">
      {title && (
        <div className="text-center mb-8 md:mb-[50px]">
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-2.5 font-[Epilogue,sans-serif] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-[17px] text-[#666] leading-relaxed max-w-full md:max-w-[680px] mx-auto">
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
              <div className="rounded-2xl overflow-hidden   relative">
            

                {/* Single Image Display */}
                <div className="relative overflow-hidden h-[350px] md:h-[420px] w-full rounded-2xl">
                  <img
                    src={transformation.afterImage || '/img/placeholder.jpg'}
                    alt={`${transformation.clientName} Result`}
                    className="w-full h-full object-cover object-top"
                  />
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
