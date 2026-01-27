# Quick Reference Card

## UUID Order System

### What It Does
✅ Every order gets a unique ID: `550e8400-e29b-41d4-a716-446655440000`
✅ Auto-generated when plan is purchased
✅ Stored in MongoDB with all order details
✅ Displayed in admin panel

### Files Involved
- `models/Order.ts` - Contains UUID generation
- `app/api/orders/route.ts` - API endpoints
- `app/admin/orders/page.tsx` - Order list
- `app/admin/orders/[id]/page.tsx` - Order details
- `package.json` - Contains `uuid` package

### Test It
```bash
# 1. Start server
npm run dev

# 2. Create order (in terminal)
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "customerName": "Test",
    "customerEmail": "test@test.com",
    "customerPhone": "+91-9000000000",
    "address": "Test",
    "city": "Test",
    "products": [{"id":"1","name":"Plan","price":100,"quantity":1}],
    "subtotal": 100,
    "total": 100
  }'

# 3. Response will show: "orderId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# 4. View in admin panel
# Go to http://localhost:3000/admin/orders (login required)
# You'll see the UUID in the Order ID column
```

---

## ImageKit Images

### What It Does
✅ All images compressed automatically
✅ WebP format on modern browsers (smaller file size)
✅ Images delivered from global CDN (faster loading)
✅ Automatic quality optimization

### Files Involved
- `next.config.js` - Whitelist ImageKit domain
- `lib/imagekit.ts` - Helper functions
- All page components - Use Next.js Image component

### Use ImageKit Images
```typescript
import Image from 'next/image';
import { getOptimizedUrl } from '@/lib/imagekit';

// Transform any ImageKit URL
const url = getOptimizedUrl(imageUrl, {
  width: 300,
  height: 300,
  quality: 80
});

<Image src={url} alt="desc" width={300} height={300} />
```

### Verify Images Load
1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter "Images"
4. Reload page
5. Look for URLs like: `https://ik.imagekit.io/your_id/tr:w-300,h-300.../image.jpg`
6. Should be much smaller than original file size

---

## Admin Panel Features

### Orders Page
- **URL**: `/admin/orders`
- **View**: All orders in table (UUID, name, email, amount, status, date)
- **Stats**: Total, Completed, Pending, Failed counts
- **Filter**: By payment status
- **Actions**: View details (eye icon), Download (download icon), Delete (trash icon)

### Order Details
- **URL**: `/admin/orders/{UUID}`
- **Shows**: Full order info, customer details, products, payment info
- **Actions**: Download, Copy UUID, View Razorpay references

---

## Environment Setup

### Required in `.env.local`
```
# Database
MONGODB_URI=mongodb+srv://user:pass@...

# ImageKit
IMAGEKIT_PUBLIC_KEY=xxxxxx
IMAGEKIT_PRIVATE_KEY=xxxxxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/

# Razorpay
RAZORPAY_KEY_ID=xxxxxx
RAZORPAY_KEY_SECRET=xxxxxx

# Auth
NEXTAUTH_SECRET=xxxxxx
NEXTAUTH_URL=http://localhost:3000

# Admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=xxxxxx
```

---

## Order Flow

```
User selects plan
    ↓
Sends POST to /api/orders
    ↓
Order created in MongoDB with UUID
    ↓
Razorpay payment initiated
    ↓
User completes payment
    ↓
Payment verified
    ↓
Order status updated to "completed"
    ↓
Admin sees order in /admin/orders panel
```

---

## Troubleshooting

### Orders not showing in admin?
- Check MongoDB is connected: `MONGODB_URI` in `.env.local`
- Verify admin login is working
- Check console for API errors (F12 → Console)

### Images not loading?
- Verify `ik.imagekit.io` is in `next.config.js`
- Check ImageKit credentials in `.env.local`
- Inspect Network tab (F12 → Network → Images)

### UUID not generating?
- Verify `uuid` installed: `npm list uuid`
- Check `models/Order.ts` has uuid import
- Reinstall if needed: `npm install uuid @types/uuid`

---

## Dependencies Added

```json
{
  "uuid": "^9.0.0",
  "@types/uuid": "^9.x.x"
}
```

Install: `npm install uuid @types/uuid --save`

---

## Key Takeaways

1️⃣ **UUID Orders**
   - Every order gets automatic UUID
   - Visible in admin panel
   - Stored in MongoDB with all details

2️⃣ **ImageKit Optimization**
   - All images compressed
   - WebP format (smaller)
   - Global CDN (faster)

3️⃣ **Admin Management**
   - View all orders with UUID
   - Filter by status
   - Download/delete orders

4️⃣ **Image Display**
   - All pages support ImageKit
   - Automatic optimization
   - Next.js Image component used

---

## Files to Check

✅ `models/Order.ts` - Has UUID default
✅ `app/api/orders/route.ts` - Has UUID support
✅ `app/admin/orders/page.tsx` - Shows UUIDs
✅ `next.config.js` - Has ik.imagekit.io domain
✅ `lib/imagekit.ts` - Has optimization functions
✅ `package.json` - Has uuid dependency

---

**Setup Complete! Ready to Use. 🚀**
