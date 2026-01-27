# System Architecture & Flow Diagrams

## 1. Order Creation Flow with UUID

```
┌─────────────────────────────────────────────────────────────────┐
│                      CUSTOMER JOURNEY                            │
└─────────────────────────────────────────────────────────────────┘

    User Visits Page
           │
           ▼
    ┌──────────────────┐
    │ Weight Loss Page │
    │  /weight-loss    │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  Select Plan     │
    │  (₹2,499)        │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ POST /api/orders                     │
    │ {                                    │
    │   action: "create",                  │
    │   customerName: "John",              │
    │   customerEmail: "john@ex.com",      │
    │   products: [{...}],                 │
    │   total: 2499                        │
    │ }                                    │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Generate UUID                        │
    │ const orderId = uuidv4()             │
    │ → 550e8400-e29b-41d4-a716-...       │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Save Order to MongoDB                │
    │ {                                    │
    │   orderId: "UUID",  ← KEY FIELD      │
    │   customerName: "John",              │
    │   paymentStatus: "pending",          │
    │   ...                                │
    │ }                                    │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Return Razorpay Order ID             │
    │ Response: {                          │
    │   orderId: "UUID",                   │
    │   razorpayOrderId: "order_ABC..."    │
    │ }                                    │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ Show Razorpay    │
    │ Payment Modal    │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │ User Pays        │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Verify Payment                       │
    │ POST /api/orders                     │
    │ {                                    │
    │   action: "verify",                  │
    │   orderId: "UUID",  ← SAME UUID     │
    │   razorpayPaymentId: "pay_ABC..."    │
    │ }                                    │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Update Order in DB                   │
    │ paymentStatus: "completed"           │
    │ (Still using same UUID orderId)      │
    └────────┬─────────────────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ Payment Success  │
    │ Show confirmation│
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────────────────────────┐
    │ Admin Sees Order in Dashboard        │
    │ /admin/orders                        │
    │ UUID visible in Order ID column      │
    └──────────────────────────────────────┘
```

---

## 2. Admin Dashboard Architecture

```
┌──────────────────────────────────────────────────────────┐
│           ADMIN ORDERS DASHBOARD                         │
│              /admin/orders                               │
└──────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ STATISTICS BAR                                             │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│ │ Total: 45│  │Complete:30│  │Pending:10│  │Failed: 5 │   │
│ └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ FILTER BAR                                                 │
│ [Filter: All Orders ▼]                                    │
│  Options: All | Completed | Pending | Failed              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ ORDERS TABLE                                               │
├─────────────────────────────────────────────────────────────┤
│ Order ID (UUID)          │Name    │Email        │₹ Amount   │
├─────────────────────────────────────────────────────────────┤
│ 550e8400-e29b-41d4...   │John    │john@ex.com  │₹2,499    │
│ [View] [Download] [Del]                                    │
├─────────────────────────────────────────────────────────────┤
│ 660e8400-e29b-41d4...   │Jane    │jane@ex.com  │₹5,999    │
│ [View] [Download] [Del]                                    │
├─────────────────────────────────────────────────────────────┤
│ 770e8400-e29b-41d4...   │Test    │test@ex.com  │₹1,999    │
│ [View] [Download] [Del]                                    │
└────────────────────────────────────────────────────────────┘

              CLICK "View" (Eye Icon)
                     │
                     ▼
        ┌──────────────────────────┐
        │   ORDER DETAILS MODAL    │
        ├──────────────────────────┤
        │ UUID: 550e8400-e29b...   │
        │ Status: Completed        │
        │ Name: John Doe           │
        │ Email: john@example.com  │
        │ Phone: +91-9000000000    │
        │ Amount: ₹2,499           │
        │ Product: Weight Loss ... │
        │                          │
        │ [Download] [Close]       │
        └──────────────────────────┘
```

---

## 3. ImageKit Integration Flow

```
┌──────────────────────────────────────────────────────────┐
│             IMAGE OPTIMIZATION FLOW                      │
└──────────────────────────────────────────────────────────┘

ORIGINAL IMAGE
│
├─ Source: https://ik.imagekit.io/dtps/image.jpg (500KB)
│
└─▶ getOptimizedUrl() Function
   │
   ├─ Check URL contains "imagekit.io" ✅
   │
   ├─ Add Transformations:
   │  ├─ Width: 300px
   │  ├─ Height: 300px
   │  ├─ Quality: 80%
   │  └─ Format: auto/webp
   │
   └─▶ Transformed URL
      │
      └─ https://ik.imagekit.io/dtps/tr:w-300,h-300,q-80,f-auto/image.jpg
         │
         └─▶ OPTIMIZED IMAGE (50KB)
            │
            ├─ 90% size reduction
            ├─ WebP format (modern browsers)
            ├─ Delivered from CDN
            └─ Fast loading

┌──────────────────────────────────────────────────────────┐
│ BEFORE vs AFTER                                          │
├──────────────────────────────────────────────────────────┤
│ BEFORE:                     AFTER:                       │
│ └─ 500KB                    └─ 50KB                      │
│ └─ JPG Format              └─ WebP Format               │
│ └─ Full Resolution         └─ Sized 300x300             │
│ └─ Slow                    └─ Fast CDN                  │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Database Schema Visualization

```
┌────────────────────────────────────────────────────────┐
│              MONGODB ORDERS COLLECTION                 │
└────────────────────────────────────────────────────────┘

Document Structure:
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  
  orderId: "550e8400-e29b-41d4-a716-446655440000",  ← UUID
  ├─ Type: String
  ├─ Unique: true
  ├─ Required: true
  └─ Default: uuidv4()  ← Auto-generated!
  
  customerName: "John Doe",
  customerEmail: "john@example.com",
  customerPhone: "+91-9876543210",
  address: "123 Main Street",
  city: "New York",
  
  products: [
    {
      id: "plan-1",
      name: "Weight Loss - 1 Month",
      price: 2499,
      quantity: 1
    }
  ],
  
  subtotal: 2499,
  total: 2499,
  
  paymentStatus: "completed",  ← pending|completed|failed|cancelled
  paymentMethod: "razorpay",
  
  razorpayOrderId: "order_ABC123XYZ456",
  razorpayPaymentId: "pay_XYZ789ABC123",
  
  createdAt: ISODate("2026-01-27T10:30:00.000Z"),  ← Auto
  updatedAt: ISODate("2026-01-27T10:30:00.000Z")   ← Auto
}

INDEX: { orderId: 1 (unique) }
       ↓
Fast lookup by UUID
```

---

## 5. API Endpoints Map

```
┌────────────────────────────────────────────────────────┐
│           ORDER API ENDPOINTS                          │
└────────────────────────────────────────────────────────┘

POST /api/orders
├─ Action: "create"
├─ Creates new order with UUID
├─ Generates Razorpay payment
└─▶ Returns: { orderId: "UUID", razorpayOrderId: "..." }

POST /api/orders
├─ Action: "verify"
├─ Verifies payment with Razorpay
├─ Updates order status to "completed"
└─▶ Returns: { success: true, order: "UUID" }

GET /api/orders
├─ No parameters
├─ Fetches all orders (sorted by date DESC)
└─▶ Returns: { orders: [ {orderId: "UUID", ...}, ... ] }

GET /api/orders?orderId=UUID
├─ Gets specific order by UUID
├─ Used for order details page
└─▶ Returns: { order: {orderId: "UUID", ...} }

DELETE /api/orders
├─ Requires: { orderId: "UUID" }
├─ Removes order from database
└─▶ Returns: { success: true, message: "..." }
```

---

## 6. Admin Panel Feature Map

```
┌────────────────────────────────────────────────────────┐
│        ADMIN ORDERS PANEL FEATURES                     │
└────────────────────────────────────────────────────────┘

/admin/orders (List Page)
│
├─▶ Display Statistics
│   ├─ Total Orders: 45
│   ├─ Completed: 30
│   ├─ Pending: 10
│   └─ Failed: 5
│
├─▶ Filter Orders
│   ├─ All Orders
│   ├─ Completed
│   ├─ Pending
│   └─ Failed
│
├─▶ Order Table
│   ├─ Order ID (UUID) → Sortable
│   ├─ Customer Name → Searchable
│   ├─ Email → Searchable
│   ├─ Amount → Sortable
│   ├─ Status → Filterable
│   ├─ Date → Sortable
│   └─ Actions
│       ├─▶ View (Eye)
│       │   └─ Opens modal with full details
│       │
│       ├─▶ Download (Download)
│       │   └─ Saves .txt confirmation file
│       │
│       └─▶ Delete (Trash)
│           └─ Removes order after confirmation
│
└─▶ /admin/orders/{UUID} (Detail Page)
    ├─ Full order information
    ├─ Customer details
    ├─ Product list
    ├─ Payment information
    ├─ Copy UUID button
    └─ Download button
```

---

## 7. Page Integration Points

```
┌────────────────────────────────────────────────────────┐
│      IMAGEKIT INTEGRATION ON ALL PAGES                 │
└────────────────────────────────────────────────────────┘

Home Page (/)
├─ Service images → getOptimizedUrl()
├─ About section images → getOptimizedUrl()
└─ Footer images → getOptimizedUrl()

Weight Loss (/weight-loss)
├─ Hero section → getOptimizedUrl()
├─ Features → getOptimizedUrl()
├─ Awards → getOptimizedUrl()
└─ Success stories → TransformationGallery

Plans (Therapeutic & Wedding)
├─ Header images → getOptimizedUrl()
├─ Transformation gallery → Auto-optimized
└─ Section images → getOptimizedUrl()

PCOD (/pcod)
├─ Feature images → getOptimizedUrl()
├─ Statistics images → getOptimizedUrl()
└─ Success stories → TransformationGallery

All Pages
│
└─▶ Use Next.js Image component
   │
   └─▶ Pass through getOptimizedUrl()
      │
      └─▶ ImageKit CDN delivers
         │
         └─▶ WebP format (30-40% smaller)
            │
            └─▶ Fast loading for users
```

---

## 8. Technology Stack

```
┌────────────────────────────────────────────────────────┐
│          TECHNOLOGY ARCHITECTURE                       │
└────────────────────────────────────────────────────────┘

Frontend
├─ Next.js 14 (React framework)
├─ TypeScript (Type safety)
├─ Tailwind CSS (Styling)
└─ React Hooks (State management)

Backend
├─ Next.js API Routes (/api/orders)
├─ Node.js Runtime
└─ TypeScript

Database
├─ MongoDB (Document storage)
├─ Mongoose (ODM)
└─ Cloud: Atlas or self-hosted

UUID Generation
├─ uuid v4 (npm package)
├─ Auto-generate on order create
└─ Stored in MongoDB

Image Processing
├─ ImageKit (CDN & optimization)
├─ getOptimizedUrl() helper
└─ WebP, compression, sizing

Payments
├─ Razorpay (Payment gateway)
├─ Order ID linking
└─ Payment verification

Authentication
├─ NextAuth (Session management)
├─ Admin panel protection
└─ Role-based access

```

---

## 9. Data Flow Diagram

```
┌────────────────────────────────────────────────────────┐
│         COMPLETE DATA FLOW VISUALIZATION               │
└────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ USER BROWSER                                        │
├─────────────────────────────────────────────────────┤
│ • Visit /weight-loss                                │
│ • Select plan (₹2,499)                              │
│ • POST /api/orders (create)                         │
│ • Receive UUID: 550e8400-e29b-41d4-a716-...        │
│ • Show Razorpay modal                               │
│ • Complete payment                                  │
│ • POST /api/orders (verify)                         │
│ • Order confirmed                                   │
│                                                     │
│ View orders: /admin/orders                          │
│ See UUID orderId in table                           │
│ Click view, download, or delete                     │
└────────────────────┬────────────────────────────────┘
                     │
        ┌────────────▼─────────────┐
        │  NEXT.JS SERVER          │
        ├──────────────────────────┤
        │ • API Routes             │
        │ • UUID generation        │
        │ • Order processing       │
        │ • Razorpay integration   │
        │ • Auth verification      │
        └────────────┬─────────────┘
                     │
        ┌────────────▼─────────────┐
        │  MONGODB DATABASE        │
        ├──────────────────────────┤
        │ Collections:             │
        │ • Orders                 │
        │   └─ orderId: UUID       │
        │   └─ customerName        │
        │   └─ paymentStatus       │
        │   └─ products            │
        │   └─ createdAt/updatedAt │
        │                          │
        │ • Payments               │
        │ • Users                  │
        └──────────────────────────┘

┌────────────────────────────────────┐
│  IMAGE CDN (ImageKit)              │
├────────────────────────────────────┤
│ • Stores images                    │
│ • Applies transformations          │
│ • Delivers via CDN                 │
│ • WebP format conversion           │
│ • Quality optimization             │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  PAYMENT GATEWAY (Razorpay)        │
├────────────────────────────────────┤
│ • Creates payment order            │
│ • Processes payment                │
│ • Returns confirmation             │
│ • Linked to UUID order             │
└────────────────────────────────────┘
```

---

These diagrams show how the entire system works together!

**Key Points:**
1. ✅ UUID automatically generated for every order
2. ✅ Admin can see all orders with UUID
3. ✅ ImageKit optimizes all images on all pages
4. ✅ Complete order management available
5. ✅ Payment integration with Razorpay
