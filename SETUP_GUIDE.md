# Setup Guide: UUID Orders & ImageKit Integration

## 1. Order System with UUID ✅

### What's Been Implemented:

#### Dependencies Added:
- `uuid@^9.0.0` - For generating unique order IDs
- `@types/uuid` - TypeScript type definitions

#### Order Model (`models/Order.ts`):
```typescript
orderId: {
  type: String,
  required: true,
  unique: true,
  default: () => uuidv4(),  // Auto-generates UUID
}
```

**Features:**
- Every new order gets a unique UUID automatically
- UUID is 36 characters (standard v4 format)
- Example: `550e8400-e29b-41d4-a716-446655440000`

#### Order API (`app/api/orders/route.ts`):

**POST - Create Order:**
```json
{
  "action": "create",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+91-9876543210",
  "address": "123 Main St",
  "city": "New York",
  "products": [
    {
      "id": "plan-1",
      "name": "Weight Loss - 1 Month",
      "price": 2499,
      "quantity": 1
    }
  ],
  "subtotal": 2499,
  "total": 2499
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "orderId": "550e8400-e29b-41d4-a716-446655440000",
    "paymentStatus": "pending",
    "razorpayOrderId": "order_ABC123XYZ",
    ...
  },
  "razorpayOrderId": "order_ABC123XYZ",
  "razorpayKey": "rzp_live_xxxxx"
}
```

**GET - Fetch Orders:**
- `/api/orders` - Get all orders (admin)
- `/api/orders?orderId=550e8400-e29b-41d4-a716-446655440000` - Get specific order

**DELETE - Remove Order:**
```json
{
  "orderId": "550e8400-e29b-41d4-a716-446655440000"
}
```

### Admin Orders Page (`app/admin/orders/page.tsx`):

**Features:**
✅ Lists all orders with UUID orderId
✅ Displays order details:
  - Customer name & email
  - Amount (₹)
  - Payment status (pending/completed/failed)
  - Order date
  - Products purchased

**Actions Available:**
- **View** - Click eye icon to see full order details in modal
- **Download** - Download order as .txt file
- **Delete** - Remove order from system

**Filters:**
- All Orders
- Completed Orders
- Pending Orders
- Failed Orders

**Stats Dashboard:**
- Total Orders count
- Completed orders count
- Pending orders count
- Failed orders count

### Order Detail Page (`app/admin/orders/[id]/page.tsx`):
- Full order information
- Customer details
- Product list with prices
- Payment information
- Razorpay reference IDs

---

## 2. ImageKit Integration ✅

### Configuration:

**Environment Variables (required):**
```env
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/
```

**Next.js Config (`next.config.js`):**
```javascript
images: {
  domains: [
    'ik.imagekit.io',           // ImageKit CDN
    'staging.dtpoonamsagar.com',
    'dtpoonamsagar.com',
    'img.youtube.com',
    'randomuser.me',
    'placehold.co'
  ],
}
```

### ImageKit Helper Functions (`lib/imagekit.ts`):

#### `getOptimizedUrl(url, options)`
Transforms ImageKit URLs with compression and optimization.

**Parameters:**
- `url` - Original ImageKit URL
- `options.width` - Image width in pixels
- `options.height` - Image height in pixels
- `options.quality` - Quality (1-100, default: 80)
- `options.format` - Format (auto|webp|jpg|png, default: auto)
- `options.blur` - Blur radius

**Example:**
```typescript
import { getOptimizedUrl } from '@/lib/imagekit';

const optimizedUrl = getOptimizedUrl(
  'https://ik.imagekit.io/your_id/images/photo.jpg',
  {
    width: 300,
    height: 300,
    quality: 85,
    format: 'webp'
  }
);

// Returns: https://ik.imagekit.io/your_id/tr:w-300,h-300,q-85,f-webp/images/photo.jpg
```

#### `uploadImage(file, fileName, folder, options)`
Upload image to ImageKit with automatic compression.

**Parameters:**
- `file` - Base64 string or Buffer
- `fileName` - Name for the file
- `folder` - ImageKit folder path
- `tags` - Optional tags
- `useUniqueFileName` - Auto-rename to prevent duplicates

**Example:**
```typescript
import { uploadImage, IMAGEKIT_FOLDERS } from '@/lib/imagekit';

const result = await uploadImage(
  base64String,
  'testimonial-image.jpg',
  IMAGEKIT_FOLDERS.TESTIMONIALS,
  { tags: ['testimonial', 'client'] }
);

// Returns: { success: true, url: "...", fileId: "..." }
```

#### `deleteFile(fileId)`
Remove image from ImageKit.

```typescript
import { deleteFile } from '@/lib/imagekit';

const result = await deleteFile('file_id_here');
```

#### `getAuthenticationParameters()`
Get authentication tokens for client-side uploads.

---

## 3. Image Usage on Pages

### Home Page (`app/page.tsx`):
```typescript
import { getOptimizedUrl } from '@/lib/imagekit';

// Testimonials with optimized ImageKit images
const optimizedImage = getOptimizedUrl(
  item.image || '/assets/img/testimonial-1.jpg',
  {
    width: 180,
    height: 180,
    quality: 80,
    format: 'auto',
  }
);

<Image 
  src={optimizedImage}
  alt="Testimonial"
  width={180}
  height={180}
/>
```

### Weight Loss Page (`app/weight-loss/page.tsx`):
- TransformationGallery component displays success stories
- Uses Next.js Image component for optimization
- Supports both local images and ImageKit URLs

### All Pages:
- Use Next.js `<Image>` component (not `<img>`)
- ImageKit URLs go through getOptimizedUrl()
- Automatic format negotiation (webp for modern browsers)
- Responsive image sizing with srcset

---

## 4. Folder Structure in ImageKit

```
DTPS-Ecommerce/
├── testimonials/          (Testimonial images)
├── recognition/           (Awards & recognition images)
├── pricing/               (Pricing plan images)
├── success-stories/       (Success story images)
├── transformations/       (Before-after transformations)
├── blogs/                 (Blog post images)
└── admin/                 (Admin panel images)
```

---

## 5. Testing the Setup

### Test Order Creation:
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "customerPhone": "+91-9000000000",
    "address": "Test Address",
    "city": "Test City",
    "products": [{"id": "1", "name": "Test Plan", "price": 100, "quantity": 1}],
    "subtotal": 100,
    "total": 100
  }'
```

### View Admin Orders:
1. Navigate to `/admin/orders` (requires login)
2. See all orders with UUID orderId
3. Click eye icon to view details
4. Download order or delete it

### Test ImageKit Images:
1. Check that all images load without 404 errors
2. Use browser DevTools to verify images are from `ik.imagekit.io`
3. Check Image Network tab for optimized formats (webp)

---

## 6. Environment Variables Checklist

Add to `.env.local`:
```
# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_public_key_here
IMAGEKIT_PRIVATE_KEY=your_private_key_here
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/

# Database
MONGODB_URI=your_mongodb_connection_string

# Razorpay Payment
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# NextAuth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_password
```

---

## 7. How to Use

### Creating an Order (from frontend):
```typescript
const createOrder = async (planData) => {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'create',
      ...planData
    })
  });
  
  const data = await response.json();
  // data.orderId will be UUID like: 550e8400-e29b-41d4-a716-446655440000
  // Use data.razorpayOrderId for payment
};
```

### Admin Viewing Orders:
1. Login to `/admin`
2. Go to "Orders" in sidebar
3. See all orders listed with:
   - UUID Order ID
   - Customer name & email
   - Total amount in ₹
   - Payment status with color coding
   - Date created

### Displaying ImageKit Images:
```typescript
import Image from 'next/image';
import { getOptimizedUrl } from '@/lib/imagekit';

// Any ImageKit URL automatically optimized
const url = getOptimizedUrl(imageUrl, { width: 300, height: 300 });

<Image
  src={url}
  alt="description"
  width={300}
  height={300}
  priority={false}
/>
```

---

## 8. Troubleshooting

### Orders not appearing in admin:
- Check MongoDB connection
- Verify order was created (check `/api/orders` endpoint)
- Check browser console for API errors

### ImageKit images not loading:
- Verify `ik.imagekit.io` is in `next.config.js` domains
- Check ImageKit credentials in `.env.local`
- Ensure images exist in ImageKit dashboard

### UUID not generating:
- Verify `uuid` package is installed: `npm list uuid`
- Check Node modules are up to date: `npm install`

---

## Summary

✅ **Order System:**
- UUID automatically generated for every order
- Admin page shows all orders with full details
- Orders stored in MongoDB with timestamps
- Payment integration with Razorpay

✅ **ImageKit Integration:**
- All images optimized with compression
- Automatic format selection (webp/jpg/png)
- Configured domains in Next.js
- Ready for all pages

**Next Steps:**
1. Ensure `.env.local` has all required keys
2. Run `npm install` to ensure all packages installed
3. Test order creation via admin panel
4. Verify images display on all pages
