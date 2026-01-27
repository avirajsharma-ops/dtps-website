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
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {title && (
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '10px',
            fontFamily: 'Epilogue, sans-serif',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{
              fontSize: '17px',
              color: '#666',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        position: 'relative'
      }}>
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
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                background: '#fff',
                position: 'relative'
              }}>
            

                {/* Single Image Display */}
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '400px',
                  width: '100%'
                }}>
                  <img
                    src={transformation.afterImage || '/img/placeholder.jpg'}
                    alt={`${transformation.clientName} Result`}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Info Footer */}
                <div style={{
                  background: '#16a085',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#fff',
                      fontFamily: 'Epilogue, sans-serif'
                    }}>
                      {transformation.clientName}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#fff',
                      fontFamily: 'Epilogue, sans-serif'
                    }}>
                      Lost {transformation.weightLost} weight
                    </p>
                  </div>
                  <div style={{
                    background: '#ff850b',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    fontFamily: 'Epilogue, sans-serif'
                  }}>
                    In {transformation.daysToAchieve}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px',
          position: 'relative'
        }}>
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
