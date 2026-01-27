# Testing & Verification Guide

## System Components Checklist

### ✅ Order System with UUID

**Files:**
- `models/Order.ts` - Order schema with UUID default
- `app/api/orders/route.ts` - Order API endpoints
- `app/admin/orders/page.tsx` - Orders list view
- `app/admin/orders/[id]/page.tsx` - Order detail view
- `package.json` - Contains `uuid` package

**Dependencies Installed:**
```bash
npm list uuid
npm list @types/uuid
```

Expected output:
```
uuid@9.0.0
@types/uuid@9.x.x
```

---

## How to Test UUID Order Creation

### Step 1: Start Development Server
```bash
npm run dev
```
Server runs at `http://localhost:3000`

### Step 2: Create Test Order via API

**Option A: Using cURL**
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "customerPhone": "+91-9000000000",
    "address": "123 Test Street",
    "city": "Test City",
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
  }'
```

**Option B: Using Postman**
1. Create new POST request
2. URL: `http://localhost:3000/api/orders`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "action": "create",
  "customerName": "Test User",
  "customerEmail": "test@example.com",
  "customerPhone": "+91-9000000000",
  "address": "123 Test Street",
  "city": "Test City",
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

**Option C: Using Browser Console**
```javascript
fetch('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'create',
    customerName: 'Test User',
    customerEmail: 'test@example.com',
    customerPhone: '+91-9000000000',
    address: '123 Test Street',
    city: 'Test City',
    products: [
      {
        id: 'plan-1',
        name: 'Weight Loss - 1 Month',
        price: 2499,
        quantity: 1
      }
    ],
    subtotal: 2499,
    total: 2499
  })
})
.then(r => r.json())
.then(data => console.log(data))
```

### Step 3: Verify Response

Expected successful response:
```json
{
  "success": true,
  "order": {
    "_id": "507f1f77bcf86cd799439011",
    "orderId": "550e8400-e29b-41d4-a716-446655440000",
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "customerPhone": "+91-9000000000",
    "address": "123 Test Street",
    "city": "Test City",
    "products": [
      {
        "_id": "507f1f77bcf86cd799439012",
        "id": "plan-1",
        "name": "Weight Loss - 1 Month",
        "price": 2499,
        "quantity": 1
      }
    ],
    "subtotal": 2499,
    "total": 2499,
    "paymentStatus": "pending",
    "paymentMethod": "razorpay",
    "razorpayOrderId": "order_ABC123XYZ456",
    "createdAt": "2026-01-27T10:30:00.000Z",
    "updatedAt": "2026-01-27T10:30:00.000Z"
  },
  "razorpayOrderId": "order_ABC123XYZ456",
  "razorpayKey": "rzp_live_xxxxx"
}
```

**✅ KEY POINT:** Notice the `orderId` field - it's a UUID!

### Step 4: Check MongoDB

MongoDB should contain:
```javascript
db.orders.findOne()

Result:
{
  "_id": ObjectId("..."),
  "orderId": "550e8400-e29b-41d4-a716-446655440000",  // ← UUID
  "customerName": "Test User",
  "paymentStatus": "pending",
  ...
}
```

---

## How to View Orders in Admin Panel

### Step 1: Access Admin Panel
1. Go to `http://localhost:3000/admin`
2. Login with your admin credentials

### Step 2: Navigate to Orders
1. Click "Orders" in the sidebar menu
2. Should see a table with all orders

### Step 3: View Order List

The table shows:
```
Order ID (UUID)              | Customer      | Email              | Amount    | Status    | Date
550e8400-e29b-41d4-a7...    | Test User     | test@example.com   | ₹2,499    | pending   | 27/01/2026
660e8400-e29b-41d4-a7...    | John Doe      | john@example.com   | ₹5,999    | completed | 26/01/2026
```

### Step 4: View Individual Order Details

1. Click the **eye icon** in the Actions column
2. Modal opens showing:
   - Order ID (UUID): `550e8400-e29b-41d4-a716-446655440000`
   - Payment Status: `pending`
   - Customer Name: `Test User`
   - Total Amount: `₹2,499`
   - Email: `test@example.com`
   - Phone: `+91-9000000000`
   - Products:
     - Weight Loss - 1 Month x1 - ₹2,499

### Step 5: Download Order

1. Click the **download icon** to save order details
2. Creates file: `Order_550e8400-e29b-41d4-a716-446655440000.txt`
3. Contains all order information in text format

### Step 6: Delete Order (if needed)

1. Click the **trash icon**
2. Confirm deletion
3. Order removed from database

---

## ImageKit Image Display Testing

### Test Images on Different Pages

#### 1. Home Page (`/`)
Check if images load for:
- Service section images
- "Why Choose Us" images
- Testimonials (if enabled)
- Footer images

#### 2. Weight Loss Page (`/weight-loss`)
Check if images load for:
- Hero section
- Features section
- Awards section
- Success stories (TransformationGallery)

#### 3. Therapeutic Plans Page (`/plans/therapeutic`)
Check if images load for:
- Header image
- Transformation Gallery
- All section images

#### 4. Wedding Plans Page (`/plans/wedding`)
Check if images load for:
- Bride/Groom/Couple/Guest images
- Transformation showcases

#### 5. PCOD Page (`/pcod`)
Check if images load for:
- Feature images
- Statistics images
- Transformation Gallery

### Browser DevTools Verification

**Step 1: Open DevTools**
- Press `F12` or `Ctrl+Shift+I`

**Step 2: Go to Network Tab**
1. Click "Network" tab
2. Filter by "Images"
3. Reload page

**Step 3: Verify ImageKit Images**
```
Expected Image Sources:
✅ https://ik.imagekit.io/your_id/...
✅ Uses transformation parameters: /tr:w-300,h-300,q-80,f-auto/
✅ Format: webp (for modern browsers)
✅ Status: 200 (successfully loaded)
```

**Step 4: Check Image Size**
- Original images: reduced in size
- Example: 500KB → 50KB (via compression)
- Format: webp (smaller than jpg/png)

### Console Warnings Check

**Step 1: Open Browser Console**
- Press `Ctrl+Shift+J` or `F12` → Console

**Step 2: Look for errors**
```
❌ BAD: "Invalid src prop..." - ImageKit domain not whitelisted
❌ BAD: "Cannot find image..." - Path incorrect
✅ GOOD: No console errors about images
```

---

## Order Database Verification

### Check Orders in MongoDB Atlas

1. Go to MongoDB Atlas (atlas.mongodb.com)
2. Navigate to your database
3. Collections → Orders
4. View documents

Expected fields in each order:
```
{
  _id: ObjectId
  orderId: String (UUID format)           ← KEY FIELD
  customerName: String
  customerEmail: String
  customerPhone: String
  address: String
  city: String
  products: Array
  subtotal: Number
  total: Number
  paymentStatus: String
  paymentMethod: String
  razorpayOrderId: String
  razorpayPaymentId: String (null if pending)
  createdAt: Date
  updatedAt: Date
}
```

### MongoDB Query Examples

```javascript
// View all orders
db.orders.find()

// View specific order by UUID
db.orders.findOne({ orderId: "550e8400-e29b-41d4-a716-446655440000" })

// Count orders by status
db.orders.countDocuments({ paymentStatus: "pending" })
db.orders.countDocuments({ paymentStatus: "completed" })

// View latest 5 orders
db.orders.find().sort({ createdAt: -1 }).limit(5)

// Check all UUIDs generated
db.orders.find({}, { orderId: 1 }).limit(10)
```

---

## API Endpoint Testing

### Test All Order Endpoints

#### 1. Create Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"action":"create","customerName":"Test","customerEmail":"test@test.com","customerPhone":"+91-9000000000","address":"Test","city":"Test","products":[{"id":"1","name":"Plan","price":100,"quantity":1}],"subtotal":100,"total":100}'
```

Expected: `"orderId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`

#### 2. Get All Orders
```bash
curl -X GET http://localhost:3000/api/orders
```

Expected: Array of orders with UUID orderId

#### 3. Get Specific Order
```bash
curl -X GET "http://localhost:3000/api/orders?orderId=550e8400-e29b-41d4-a716-446655440000"
```

Expected: Single order object with UUID

#### 4. Delete Order
```bash
curl -X DELETE http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"orderId":"550e8400-e29b-41d4-a716-446655440000"}'
```

Expected: `{"success":true,"message":"Order deleted successfully"}`

---

## Troubleshooting

### Problem: Orders not showing in admin panel

**Solution 1: Check MongoDB connection**
```javascript
// In browser console on admin page
fetch('/api/orders')
  .then(r => r.json())
  .then(d => console.log(d))
```

Check if response shows `"success": true` and orders array

**Solution 2: Check database**
- Verify MongoDB URI in `.env.local`
- Check connection string is correct
- Ensure database is not empty

**Solution 3: Verify Order API**
```bash
curl http://localhost:3000/api/orders
# Should return JSON with orders array
```

### Problem: UUID not generating

**Solution: Check uuid package**
```bash
npm list uuid
npm list @types/uuid
```

If missing:
```bash
npm install uuid @types/uuid --save
npm install --save-dev @types/uuid
```

### Problem: Images not loading from ImageKit

**Solution 1: Check next.config.js**
```javascript
// Verify ik.imagekit.io is in domains
images: {
  domains: ['ik.imagekit.io', ...]
}
```

**Solution 2: Check environment variables**
```bash
# .env.local should have:
IMAGEKIT_PUBLIC_KEY=xxxxx
IMAGEKIT_PRIVATE_KEY=xxxxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/
```

**Solution 3: Test ImageKit API**
```bash
curl -X GET "https://ik.imagekit.io/your_id/test-image.jpg"
# Should return image or redirect
```

---

## Summary Checklist

- [ ] npm install completed successfully
- [ ] uuid package installed
- [ ] Order model has UUID default
- [ ] Can create order via API
- [ ] Order ID is in UUID format (550e8400-...)
- [ ] Order appears in admin panel
- [ ] Can view order details
- [ ] Can download order
- [ ] Can delete order
- [ ] Images display on all pages
- [ ] ImageKit domain whitelisted in next.config.js
- [ ] ImageKit credentials in .env.local
- [ ] Database connection working
- [ ] No console errors for images
