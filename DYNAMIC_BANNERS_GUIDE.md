# Dynamic Marquee & Banner System with ImageKit Integration

## Overview
Complete system for managing dynamic marquee ribbons (scrolling text) and responsive hero banners (desktop/mobile) with automatic image optimization via ImageKit.

## Key Features

### ✨ **ImageKit Integration**
- Automatic image upload to ImageKit CDN
- Automatic image compression (80% quality)
- Auto format selection (WebP, AVIF, JPEG)
- Separate optimization for desktop and mobile
- Responsive image serving with lazy loading

### 📱 **Responsive Design**
- Separate desktop and mobile banner images
- Automatic device detection
- Responsive image URLs with proper dimensions
- Optimized file sizes for each device

### 🎨 **Admin Features**
- Drag-and-drop file upload
- Real-time image preview
- Desktop/mobile banner management
- Activate/deactivate banners
- Banner ordering
- Optional clickable links

## System Architecture

### Models
- **SiteBanner** - Stores banner data with desktop/mobile variants

### API Routes
- **`/api/site-banners`** - CRUD operations for banners
- **`/api/banner-upload`** - File upload to ImageKit with compression

### Components
- **DynamicMarquee** - Auto-scrolling ribbon with icon + title
- **DynamicHeroBanner** - Responsive banner with device detection

### Admin Panel
- **`/admin/banners`** - Complete management interface

## Configuration

### Required Environment Variables
```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

## Usage Guide

### 1. Create a Marquee (Top Ribbon)

**Admin Panel Steps:**
1. Navigate to `http://localhost:3000/admin/banners`
2. Click "+ Add Banner"
3. Select "Marquee (Top Ribbon)"
4. Fill in:
   - **Title**: "Republic day sale is live"
   - **Icon**: "🎉"
5. Click "Create Banner"

**Appears on:** Home page, all pages with Hero component

### 2. Create a Hero Banner

**Admin Panel Steps:**
1. Click "+ Add Banner"
2. Select "Hero Banner"
3. Fill in details:
   - **Title**: Your banner title
   - **Icon**: Emoji (optional)

#### Upload Desktop Image
1. Click file input under "Desktop Banner Image"
2. Select image (will auto-compress to 80% quality)
3. Wait for upload confirmation
4. Preview appears automatically

#### Upload Mobile Image (Optional)
1. Click file input under "Mobile Banner Image"
2. Select image optimized for mobile
3. Wait for upload confirmation
4. System will display mobile version on small screens

#### Optional Settings
- **Link**: Where users go when they click (e.g., `/weight-loss`)
- **Active**: Toggle to enable/disable banner
- **Order**: Display sequence (0 = first)

**Examples:**
```
Desktop: 1920x400px banner for desktop screens
Mobile: 600x300px banner for mobile screens
Link: /weight-loss (optional redirect)
```

### 3. Manage Banners

**Edit Banner:**
1. Find banner in list
2. Click "Edit"
3. Update fields
4. Upload new images if needed
5. Click "Update"

**Delete Banner:**
1. Find banner
2. Click "Delete"
3. Confirm deletion

## Image Upload Details

### Compression Specifications
- **Quality**: 80% (good balance of size vs quality)
- **Format**: Auto (WebP for modern browsers, JPEG fallback)
- **Mobile Optimization**: Smaller dimensions, lighter files
- **Desktop Optimization**: Full quality for large screens

### Upload Process
```
1. Select image file
2. Automatic compression
3. Upload to ImageKit CDN
4. Generate optimized URL
5. Store URL in database
6. Display with lazy loading
```

### File Organization in ImageKit
```
/dtps/banners/
  ├── banner-desktop-[timestamp]-[filename]
  ├── banner-mobile-[timestamp]-[filename]
```

## Component Integration

### Hero (Home Page)
```tsx
import DynamicMarquee from './DynamicMarquee';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <DynamicMarquee />  // Marquee at top
      {/* Rest of hero */}
    </section>
  );
}
```

### Weight-Loss Page
```tsx
import DynamicHeroBanner from '@/components/DynamicHeroBanner';

<div style={{ margin: '20px 0' }}>
  <DynamicHeroBanner />
</div>
```

### Add to Other Pages
Simply import and use in any page:
```tsx
import DynamicHeroBanner from '@/components/DynamicHeroBanner';

// In JSX
<DynamicHeroBanner />
```

## Database Schema

### SiteBanner
```typescript
{
  type: 'marquee' | 'hero-banner',
  title: string,
  icon: string,                    // emoji
  desktopImage?: string,           // ImageKit URL
  mobileImage?: string,            // ImageKit URL
  link?: string,                   // optional redirect
  isActive: boolean,               // enable/disable
  order: number,                   // display order
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Get Banners
```bash
GET /api/site-banners                          # Get all
GET /api/site-banners?type=marquee            # Get marquees only
GET /api/site-banners?type=hero-banner        # Get hero banners only
GET /api/site-banners?active=true             # Get active only
```

### Create Banner
```bash
POST /api/site-banners
{
  "type": "hero-banner",
  "title": "Sale Banner",
  "icon": "🎉",
  "desktopImage": "https://ik.imagekit.io/...",
  "mobileImage": "https://ik.imagekit.io/...",
  "link": "/weight-loss",
  "isActive": true,
  "order": 0
}
```

### Update Banner
```bash
PUT /api/site-banners
{
  "id": "banner_id",
  "title": "Updated Title",
  "isActive": true
  // ... other fields
}
```

### Delete Banner
```bash
DELETE /api/site-banners?id=banner_id
```

### Upload Image
```bash
POST /api/banner-upload
FormData: {
  file: File,
  deviceType: "desktop" | "mobile"
}

Response:
{
  "success": true,
  "url": "https://ik.imagekit.io/original",
  "optimizedUrl": "https://ik.imagekit.io/tr:q-80,f-auto/.../image",
  "fileId": "file_id",
  "size": 12345
}
```

## Performance Features

### Image Optimization
✅ Automatic compression to 80% quality  
✅ Auto format selection (WebP/AVIF/JPEG)  
✅ Responsive image sizing per device  
✅ Lazy loading on frontend  
✅ CDN delivery via ImageKit  

### Marquee Animation
✅ CSS-based scrolling (smooth)  
✅ Seamless infinite loop  
✅ No JavaScript performance impact  
✅ Hardware accelerated  

### Banner Loading
✅ Lazy load images  
✅ Device-specific image serving  
✅ Responsive dimensions  
✅ Cached at CDN level  

## Troubleshooting

### Images Not Uploading
1. Check ImageKit credentials in `.env.local`
2. Verify file is image format
3. Check file size (should be < 50MB)
4. Try different browser

### Banner Not Showing
1. Check if banner is marked as active
2. Verify correct type (marquee vs hero-banner)
3. Clear browser cache
4. Check browser console for errors

### Image Quality Issues
1. Upload higher quality source image
2. Increase quality setting (currently 80%)
3. Use PNG/WebP instead of JPEG

## Future Enhancements

- [ ] Image crop/resize editor
- [ ] Schedule banners by date
- [ ] A/B testing for banners
- [ ] Click tracking analytics
- [ ] Drag-drop reordering
- [ ] Bulk upload
- [ ] Image optimization presets

## Files Modified/Created

### Created
- `/models/SiteBanner.ts` - Banner data model
- `/app/api/site-banners/route.ts` - Banner CRUD API
- `/app/api/banner-upload/route.ts` - ImageKit upload API
- `/components/DynamicMarquee.tsx` - Marquee component
- `/components/DynamicHeroBanner.tsx` - Banner component
- `/app/admin/banners/page.tsx` - Admin management UI

### Modified
- `/components/Hero.tsx` - Added DynamicMarquee
- `/app/weight-loss/page.tsx` - Added DynamicHeroBanner

