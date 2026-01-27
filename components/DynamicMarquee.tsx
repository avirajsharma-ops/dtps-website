'use client';

import { useEffect, useState } from 'react';

interface BannerItem {
  _id: string;
  type: string;
  title: string;
  icon: string;
  image?: string;
  link?: string;
  isActive: boolean;
}

export default function DynamicMarquee() {
  const [marqueeItems, setMarqueeItems] = useState<BannerItem[]>([]);

  useEffect(() => {
    const fetchMarqueeData = async () => {
      try {
        const res = await fetch('/api/site-banners?type=marquee&active=true');
        if (!res.ok) throw new Error('Failed to fetch marquee data');
        const data = await res.json();
        setMarqueeItems(data.banners || []);
      } catch (error) {
        console.error('Error fetching marquee data:', error);
        setMarqueeItems([]);
      }
    };

    fetchMarqueeData();
  }, []);

  // Use only the first marquee item (one slot)
  const displayItem = marqueeItems.length > 0 ? marqueeItems[0] : null;

  // Don't show marquee if no items exist
  if (!displayItem) {
    return null;
  }

  return (
    <div style={{
      background: '#f0f0f0',
      padding: '12px 20px',
      overflow: 'hidden',
      position: 'relative',
      width: '100%'
    }}>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-container {
          display: flex;
          gap: 60px;
          animation: scroll-left 45s linear infinite;
          white-space: nowrap;
        }
        
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #333;
          flex-shrink: 0;
        }
        
        .marquee-icon {
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .marquee-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 4px;
        }
      `}</style>
      
      <div className="marquee-container">
        <div className="marquee-item">
          <div className="marquee-icon">
            {displayItem.icon && displayItem.icon.startsWith('http') ? (
              <img src={displayItem.icon} alt={displayItem.title} loading="lazy" />
            ) : (
              <span>{displayItem.icon}</span>
            )}
          </div>
          <span>{displayItem.title}</span>
          <div className="marquee-icon">
            {displayItem.icon && displayItem.icon.startsWith('http') ? (
              <img src={displayItem.icon} alt={displayItem.title} loading="lazy" />
            ) : (
              <span>{displayItem.icon}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
