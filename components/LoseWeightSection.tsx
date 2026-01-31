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
      <section className="bg-white py-12 md:py-[100px] md:pb-[50px]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-5xl font-bold text-black leading-[1.3] mb-6 md:mb-10 font-[Epilogue,sans-serif] max-w-full md:max-w-[67%] mx-auto">
            Lose <span className="text-[#ff850b]">5–7 Kilos</span> in just 30 Days & Still Eat the Food You Love!
          </h2>
          <p className="text-center text-base md:text-xl font-medium leading-relaxed text-[#1E1E1E] max-w-full md:max-w-[75%] mx-auto font-[Epilogue,sans-serif]">
            Loading transformations...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 md:py-[100px] md:pb-[50px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-2xl md:text-5xl font-bold text-black leading-[1.3] mb-6 md:mb-10 font-[Epilogue,sans-serif] max-w-full md:max-w-[67%] mx-auto">
          Lose <span className="text-[#ff850b]">5–7 Kilos</span> in just 30 Days & Still Eat the Food You Love!
        </h2>

        {/* Success Stories Grid with Swiper */}
        <div className="max-w-full md:max-w-[75%] mx-auto mb-6 md:mb-10 relative">
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
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-white">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-0 h-[280px] md:h-[400px]">
                      <div className="relative overflow-hidden">
                        <Image
                          src={transformation.beforeImage}
                          alt={`${transformation.clientName} Before`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden">
                        <Image
                          src={transformation.afterImage}
                          alt={`${transformation.clientName} After`}
                          fill
                          className="object-cover"
                        />
                      </div>
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
              ))
            ) : (
              <>
                <SwiperSlide>
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-white">
                    <div className="grid grid-cols-2 gap-0 h-[400px]">
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Sharadha-min-1.webp"
                        alt="Transformation 1"
                        width={250}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Sharadha-min-1.webp"
                        alt="Transformation 1"
                        width={250}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#16a085] p-5 flex justify-between items-center">
                      <div>
                        <h3 className="m-0 mb-1 text-xl font-bold text-white font-[Epilogue,sans-serif]">Shivani</h3>
                        <p className="m-0 text-base font-medium text-white font-[Epilogue,sans-serif]">Lost 8 kgs weight</p>
                      </div>
                      <div className="bg-[#ff850b] text-white py-2 px-4 rounded-[20px] text-sm font-semibold whitespace-nowrap font-[Epilogue,sans-serif]">In 90 Days</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-white">
                    <div className="grid grid-cols-2 gap-0 h-[400px]">
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Akansha-Shukala-min-1.webp"
                        alt="Transformation 2"
                        width={250}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Akansha-Shukala-min-1.webp"
                        alt="Transformation 2"
                        width={250}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#16a085] p-5 flex justify-between items-center">
                      <div>
                        <h3 className="m-0 mb-1 text-xl font-bold text-white font-[Epilogue,sans-serif]">Garima</h3>
                        <p className="m-0 text-base font-medium text-white font-[Epilogue,sans-serif]">Lost 8 kgs weight</p>
                      </div>
                      <div className="bg-[#ff850b] text-white py-2 px-4 rounded-[20px] text-sm font-semibold whitespace-nowrap font-[Epilogue,sans-serif]">In 30 Days</div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>

          {/* Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6 relative">
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

        <p className="text-center text-sm md:text-xl font-medium leading-relaxed text-[#1E1E1E] max-w-full md:max-w-[75%] mx-auto font-[Epilogue,sans-serif]">
          Forget diets. They were never built for people like you. At DTPS, we don&apos;t tell you to drink hot water and hate your meals. We take the food already on your plate and make it work for your body, rather than against it.
        </p>
      </div>
    </section>
  );
}
