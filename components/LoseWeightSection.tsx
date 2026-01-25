"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Transformation {
  _id: string;
  clientName: string;
  beforeImage: string;
  afterImage: string;
  weightLost: string;
  daysToAchieve: string;
  testimonial?: string;
  page: string;
  isActive: boolean;
}

export default function LoseWeightSection() {
  const [transformations, setTransformations] = useState<Transformation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        const response = await fetch('/api/transformations?active=true');
        const data = await response.json();
        if (data.success && data.transformations) {
          setTransformations(data.transformations);
        }
      } catch (error) {
        console.error('Error fetching transformations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransformations();
  }, []);

  if (loading) {
    return (
      <section style={{ background: '#fff', padding: '100px 0 50px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.3,
            marginBottom: '10px',
            fontFamily: 'Epilogue, sans-serif',
            maxWidth: '67%',
            margin: '0 auto 40px'
          }}>
            Lose <span style={{ color: '#ff850b' }}>5–7 Kilos</span> in just 30 Days<br />
            & Still Eat the Food You Love!
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#1E1E1E',
            maxWidth: '75%',
            margin: '0 auto',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Loading transformations...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: '#fff', padding: '100px 0 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '48px',
          fontWeight: 700,
          color: '#000000',
          lineHeight: 1.3,
          marginBottom: '10px',
          fontFamily: 'Epilogue, sans-serif',
          maxWidth: '67%',
          margin: '0 auto 40px'
        }}>
          Lose <span style={{ color: '#ff850b' }}>5–7 Kilos</span> in just 30 Days<br />
          & Still Eat the Food You Love!
        </h2>

        {/* Success Stories Grid with Swiper */}
        <div style={{
          maxWidth: '75%',
          margin: '0 auto 40px',
          position: 'relative'
        }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {transformations.length > 0 ? (
              transformations.map((transformation) => (
                <SwiperSlide key={transformation._id}>
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    background: '#fff'
                  }}>
                    {/* Before/After Images */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 0,
                      height: '400px'
                    }}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image
                          src={transformation.beforeImage}
                          alt={`${transformation.clientName} Before`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image
                          src={transformation.afterImage}
                          alt={`${transformation.clientName} After`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
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
              ))
            ) : (
              <>
                <SwiperSlide>
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    background: '#fff'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 0,
                      height: '400px'
                    }}>
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Sharadha-min-1.webp"
                        alt="Transformation 1"
                        width={250}
                        height={400}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Sharadha-min-1.webp"
                        alt="Transformation 1"
                        width={250}
                        height={400}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
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
                        }}>Shivani</h3>
                        <p style={{
                          margin: 0,
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#fff',
                          fontFamily: 'Epilogue, sans-serif'
                        }}>Lost 8 kgs weight</p>
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
                      }}>In 90 Days</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    background: '#fff'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 0,
                      height: '400px'
                    }}>
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Akansha-Shukala-min-1.webp"
                        alt="Transformation 2"
                        width={250}
                        height={400}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Akansha-Shukala-min-1.webp"
                        alt="Transformation 2"
                        width={250}
                        height={400}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
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
                        }}>Garima</h3>
                        <p style={{
                          margin: 0,
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#fff',
                          fontFamily: 'Epilogue, sans-serif'
                        }}>Lost 8 kgs weight</p>
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
                      }}>In 30 Days</div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
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
              }
              .swiper-pagination-custom .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: #d0d0d0;
                opacity: 1;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
              }
              .swiper-pagination-custom .swiper-pagination-bullet-active {
                background: #ff850b;
                width: 12px;
                height: 12px;
              }
            `}</style>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#1E1E1E',
          maxWidth: '75%',
          margin: '0 auto',
          fontFamily: 'Epilogue, sans-serif'
        }}>
          Forget diets. They were never built for people like you.<br />
          At DTPS, we don't tell you to drink hot water and hate your meals. We take the food already on your plate and make it work for your body, rather than against it.
        </p>
      </div>
    </section>
  );
}
