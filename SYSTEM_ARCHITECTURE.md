# 🏗️ SYSTEM ARCHITECTURE & FLOW DIAGRAMS

## 1️⃣ Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER/CUSTOMER JOURNEY                      │
└─────────────────────────────────────────────────────────────────┘

    [Pricing Page]
         │
         │ Click "Buy"
         ↓
    [Checkout Page] ← Store in sessionStorage
         │
         │ Fill Form
         │ ✅ Name, Email, Phone, City
         │ ✅ Accept Terms
         ↓
    [Place Order Button]
         │
         │ Validate Form
         │ Check Terms
         ↓
    [API: POST /orders (create)]
         │
         │ Generate Order ID (ORD-xxxx)
         │ Create Order in MongoDB
         │ Call Razorpay API
         ↓
    [Razorpay Modal]
         │
         │ User enters card details
         │ Verifies payment
         ↓
    [API: POST /orders (verify)]
         │
         │ Verify with Razorpay
         │ Update Order Status
         │ Create Payment Record
         ↓
    [Success Page]
         │
         │ Fetch order details from API
         │ Display Confirmation
         │ Show Order Number
         ↓
    [Confirmation Email - Optional]
```

---

## 2️⃣ Admin Dashboard Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    ADMIN/MANAGEMENT VIEW                        │
└─────────────────────────────────────────────────────────────────┘

    [Admin Dashboard]
         │
         ├─→ [Orders Section]
         │   │
         │   ├─→ [List All Orders]
         │   │   ├─ Filter by Status
         │   │   ├─ View Statistics
         │   │   ├─ Search Orders
         │   │   └─ Sort by Date
         │   │
         │   ├─→ [Order Details Modal]
         │   │   ├─ Customer Info
         │   │   ├─ Products List
         │   │   ├─ Total Amount
         │   │   └─ Payment Status
         │   │
         │   └─→ [Actions]
         │       ├─ View Details
         │       ├─ Download Order
         │       └─ Delete Order
         │
         └─→ [Payments Section]
             │
             ├─→ [List All Payments]
             │   ├─ View Statistics
             │   ├─ Revenue Analytics
             │   ├─ Success Rate
             │   └─ Filter by Status
             │
             ├─→ [Payment Analytics]
             │   ├─ Total Revenue
             │   ├─ Average Payment
             │   ├─ Completed Value
             │   └─ Failed Value
             │
             └─→ [Actions]
                 ├─ View Details
                 └─ Download Receipt
```

---

## 3️⃣ Database Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                      MONGODB DATABASE                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐              ┌──────────────────────┐     │
│  │   ORDERS        │              │     PAYMENTS         │     │
│  │   Collection    │              │     Collection       │     │
│  ├─────────────────┤              ├──────────────────────┤     │
│  │ orderId (PK)    │─────────┐    │ razorpayPaymentId    │     │
│  │ customerName    │         │    │ (PK - unique)        │     │
│  │ customerEmail   │         │    │                      │     │
│  │ customerPhone   │         ├──→ │ orderId (FK)         │     │
│  │ address         │         │    │ razorpayOrderId      │     │
│  │ city            │         │    │ amount               │     │
│  │ products []     │         │    │ currency             │     │
│  │ subtotal        │         │    │ status               │     │
│  │ total           │         │    │ customerName         │     │
│  │ paymentStatus   │         │    │ customerEmail        │     │
│  │ paymentMethod   │         │    │ customerPhone        │     │
│  │ razorpayOrderId │         │    │ responseData (JSON)  │     │
│  │ razorpayPaymentId         │    │ createdAt            │     │
│  │ createdAt       │         │    │ updatedAt            │     │
│  │ updatedAt       │         │    │                      │     │
│  └─────────────────┘         │    └──────────────────────┘     │
│                              │                                  │
│                         One-to-One Link                         │
│                  (via orderId & razorpayPaymentId)              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 4️⃣ API Call Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    API CALL SEQUENCE                            │
└─────────────────────────────────────────────────────────────────┘

STEP 1: Create Order
═══════════════════════════════════════════════════════════════════
Client                          Server                  Razorpay
  │                               │                         │
  │──→ POST /api/orders ────────→ │                         │
  │    {action: 'create',         │                         │
  │     customer data,            │                         │
  │     products,                 │                         │
  │     total}                    │                         │
  │                               │──→ Create Order API ───→│
  │                               │    amount × 100 (paise) │
  │                               │                         │
  │                               │←─ Return order_id ──────│
  │                               │                         │
  │                               │ Save to MongoDB         │
  │                               │                         │
  │←─ Return razorpayOrderId ────│                         │
  │    + razorpayKey             │                         │
  │                               │                         │


STEP 2: Payment Processing
═══════════════════════════════════════════════════════════════════
Client                      Razorpay Modal                  
  │                              │                         
  │──→ Open Modal ──────────────→│                         
  │                              │                         
  │                         [User enters card]             
  │                         [Verifies payment]             
  │                              │                         
  │←──── Payment ID ────────────│                         
  │      Order ID                │                         
  │      Status: authorized      │                         


STEP 3: Verify Payment
═══════════════════════════════════════════════════════════════════
Client                         Server                 Razorpay
  │                              │                        │
  │──→ POST /api/orders ────────→│                        │
  │    {action: 'verify',        │                        │
  │     razorpayPaymentId,       │                        │
  │     razorpayOrderId,         │                        │
  │     orderId}                 │                        │
  │                              │──→ Fetch Payment ─────→│
  │                              │    Details             │
  │                              │                        │
  │                              │←─ Payment Status ──────│
  │                              │   {captured, failed}   │
  │                              │                        │
  │                              │ If captured:           │
  │                              │ - Update Order Status  │
  │                              │ - Create Payment Record│
  │                              │ - Save to MongoDB      │
  │                              │                        │
  │←── Success + orderId ────────│                        │


STEP 4: Redirect to Success
═══════════════════════════════════════════════════════════════════
Browser: /checkout/success?orderId=ORD-1234567890
  ↓
Fetch /api/orders?orderId=ORD-1234567890
  ↓
Display Order Details
```

---

## 5️⃣ File Dependencies

```
┌──────────────────────────────────────────────────────────────────┐
│                    DEPENDENCY GRAPH                              │
└──────────────────────────────────────────────────────────────────┘

/app/checkout/page.tsx
  ├─→ /components/ui/Button
  ├─→ /components/Navbar
  ├─→ Razorpay Script
  └─→ /api/orders (POST - create)
     └─→ /api/orders (POST - verify)
        └─→ /models/Order
        └─→ /models/Payment

/app/checkout/success/page.tsx
  ├─→ /components/Navbar
  ├─→ /components/ui/Button
  └─→ /api/orders (GET)
     └─→ /models/Order

/app/admin/orders/page.tsx
  ├─→ /components/ui/Button
  ├─→ lucide-react icons
  └─→ /api/orders (GET, DELETE)
     └─→ /models/Order
     └─→ /models/Payment

/app/admin/payments/page.tsx
  ├─→ /components/ui/Button
  ├─→ lucide-react icons
  └─→ /api/payments (GET)
     └─→ /models/Payment

/app/api/orders/route.ts
  ├─→ mongoose (connectDB, Order, Payment)
  ├─→ razorpay (orders.create, payments.fetch)
  └─→ next (request/response)

/app/api/payments/route.ts
  ├─→ mongoose (connectDB, Payment)
  └─→ next (request/response)

/models/Order.ts
  └─→ mongoose (Schema, model)

/models/Payment.ts
  └─→ mongoose (Schema, model)
```

---

## 6️⃣ Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                    COMPLETE DATA FLOW                            │
└──────────────────────────────────────────────────────────────────┘

User fills checkout form
    │
    ├─ formData = {
    │   firstName, lastName, city,
    │   phone, email,
    │   checkoutProducts (from sessionStorage)
    │ }
    │
    ↓
Submit to /api/orders
    │
    ├─ Generate: orderId (ORD-timestamp)
    │ 
    ├─ Create MongoDB Order:
    │  │ _id: ObjectId
    │  │ orderId: "ORD-xxx"
    │  │ customerName: "John Doe"
    │  │ customerEmail: "john@example.com"
    │  │ customerPhone: "9876543210"
    │  │ products: [{id, name, price, qty}]
    │  │ total: 5000
    │  │ paymentStatus: "pending"
    │  │ razorpayOrderId: "order_xxx"
    │  └ createdAt: "2024-01-17"
    │
    ├─ Call Razorpay API
    │  │ amount: 5000 * 100 (paise)
    │  │ currency: "INR"
    │  │ receipt: "ORD-xxx"
    │  └ notes: {customer info}
    │
    ↓
Return to Client
    │
    ├─ razorpayOrderId
    ├─ razorpayKey
    └─ order (saved)
    
    ↓
Open Razorpay Modal
    │
    └─ User completes payment
    
    ↓
Verify Payment
    │
    ├─ Extract:
    │  │ razorpayPaymentId
    │  │ razorpayOrderId
    │  └ orderId
    │
    ├─ Call Razorpay.payments.fetch()
    │  └ Get payment status
    │
    ├─ If status === "captured":
    │  │
    │  ├─ Update Order in MongoDB:
    │  │  │ paymentStatus: "completed"
    │  │  │ razorpayPaymentId: "pay_xxx"
    │  │  └ updatedAt: new Date
    │  │
    │  └─ Create Payment Record:
    │     │ orderId: "ORD-xxx"
    │     │ razorpayPaymentId: "pay_xxx"
    │     │ amount: 5000
    │     │ status: "completed"
    │     │ responseData: {full razorpay response}
    │     └ createdAt: "2024-01-17"
    │
    └─ If status !== "captured":
       └─ Update Order: paymentStatus: "failed"
    
    ↓
Return to Client
    │
    ├─ Redirect to /checkout/success?orderId=ORD-xxx
    │
    ↓
Success Page Loads
    │
    ├─ Fetch /api/orders?orderId=ORD-xxx
    │  │
    │  └─ MongoDB returns Order with all data
    │
    ├─ Display:
    │  │ Order Confirmation ✓
    │  │ Order Number
    │  │ Customer Info
    │  │ Products
    │  │ Total Amount
    │  │ Payment Status
    │  └ Next Steps
    │
    ↓
Customer sees confirmation
```

---

## 7️⃣ Payment Status Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                 PAYMENT STATUS PROGRESSION                       │
└──────────────────────────────────────────────────────────────────┘

Order Created
    │
    ├─ paymentStatus: "pending"
    │  (Waiting for customer to pay)
    │
    ↓
Customer Initiates Payment
    │
    ├─ Opens Razorpay Modal
    ├─ Enters Card Details
    ├─ Completes Payment
    │
    ↓
Razorpay Processes
    │
    ├─ Verifies with Bank
    ├─ Returns Status:
    │  │ ├─ "authorized" → Payment being processed
    │  │ ├─ "captured" → Payment successful ✓
    │  │ └─ "failed" → Payment failed ✗
    │
    ↓
Backend Verification
    │
    ├─ Call /api/orders (verify)
    ├─ Fetch from Razorpay
    ├─ Check status
    │
    ↓
If Captured (Success):
│
├─ Update Order:
│  └─ paymentStatus: "completed" ✓
│
├─ Create Payment Record:
│  └─ status: "completed"
│
└─ Redirect to Success Page
   └─ Show confirmation

If Failed:
│
├─ Update Order:
│  └─ paymentStatus: "failed" ✗
│
└─ Show Error Message
   └─ Allow retry

If Pending (Timeout):
│
└─ Keep paymentStatus: "pending"
   └─ For manual review
```

---

## 8️⃣ Admin Dashboard Data Flow

```
┌──────────────────────────────────────────────────────────────────┐
│              ADMIN DASHBOARD DATA LOADING                        │
└──────────────────────────────────────────────────────────────────┘

Orders Page Loads
    │
    ├─ Component: /app/admin/orders/page.tsx
    ├─ State: [orders, loading, filterStatus]
    │
    ↓
useEffect Hook Runs
    │
    ├─ Call: GET /api/orders
    │  │
    │  └─ MongoDB Query: Order.find().sort({createdAt: -1})
    │
    ↓
API Returns All Orders
    │
    ├─ Format: [{order1}, {order2}, {order3}, ...]
    ├─ Store in State: setOrders(data.orders)
    ├─ Calculate Stats:
    │  │ total: length
    │  │ completed: count(status='completed')
    │  │ pending: count(status='pending')
    │  └ failed: count(status='failed')
    │
    ↓
Render UI
    │
    ├─ Statistics Cards (4 cards)
    │  │ ├─ Total Orders
    │  │ ├─ Completed Orders
    │  │ ├─ Pending Orders
    │  │ └─ Failed Orders
    │
    ├─ Filter Dropdown
    │  └─ Filter by: All, Completed, Pending, Failed
    │
    ├─ Orders Table
    │  │ ├─ Order ID | Customer | Email
    │  │ ├─ Amount | Status | Date
    │  │ ├─ Actions (View, Download, Delete)
    │  │
    │  └─ Filtered by filterStatus
    │
    └─ Modal (onClick View)
       ├─ Show order details
       ├─ Display products
       ├─ Show total
       └─ Download button


Payments Page Loads
    │
    ├─ Component: /app/admin/payments/page.tsx
    ├─ State: [payments, loading, totalAmount]
    │
    ↓
useEffect Hook Runs
    │
    ├─ Call: GET /api/payments
    │  │
    │  └─ MongoDB Query: Payment.find()
    │     Calculations:
    │     - Count: total payments
    │     - Filter: completed, failed
    │     - Sum: total amount
    │     - Calculate: success rate %
    │
    ↓
API Returns All Payments
    │
    ├─ Format: [{payment1}, {payment2}, ...]
    ├─ totalAmount: sum of amounts
    ├─ Store in State
    ├─ Calculate Analytics:
    │  │ totalPayments: count
    │  │ completedPayments: count(status='completed')
    │  │ failedPayments: count(status='failed')
    │  │ successRate: (completed/total) * 100
    │  │ totalAmount: sum
    │  └ avgPayment: total/count
    │
    ↓
Render UI
    │
    ├─ Statistics Cards (5 cards)
    │  │ ├─ Total Payments
    │  │ ├─ Completed
    │  │ ├─ Failed
    │  │ ├─ Success Rate %
    │  │ └─ Total Revenue ₹
    │
    ├─ Revenue Overview
    │  │ ├─ Average Payment
    │  │ ├─ Completed Value
    │  │ └─ Failed Value
    │
    ├─ Payments Table
    │  │ ├─ Payment ID | Order ID
    │  │ ├─ Customer | Amount
    │  │ ├─ Status | Date
    │  │ └─ Actions (View, Download)
    │
    └─ Modal (onClick View)
       ├─ Show payment details
       ├─ Display amount
       ├─ Show status
       └─ Download receipt
```

---

## 9️⃣ Error Handling Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                  ERROR HANDLING FLOWS                            │
└──────────────────────────────────────────────────────────────────┘

Checkout Form Validation Errors:
    ├─ Empty fields → Show "Field required"
    ├─ Invalid email → Show "Invalid email format"
    ├─ Terms not checked → Show "Accept terms"
    └─ Handle with try/catch

Payment Modal Errors:
    ├─ Modal won't open → Check Razorpay key
    ├─ Payment failed → Show error message
    ├─ Network error → Show retry button
    └─ Timeout → Allow manual retry

API Errors:
    ├─ MongoDB connection → Return 500 error
    ├─ Razorpay API error → Return error details
    ├─ Validation error → Return 400 error
    └─ Handle with catch block

Success Page Errors:
    ├─ Order not found → Show "Order not found"
    ├─ API call fails → Show "Failed to load"
    ├─ No orderId in URL → Show error
    └─ Redirect to home

Admin Dashboard Errors:
    ├─ No orders/payments → Show "No data found"
    ├─ API fails → Show "Failed to load"
    ├─ Delete fails → Show "Error deleting"
    └─ Handle with alerts
```

---

## 🔟 Integration Points

```
┌──────────────────────────────────────────────────────────────────┐
│          HOW TO CONNECT WITH EXISTING SYSTEM                     │
└──────────────────────────────────────────────────────────────────┘

1. Pricing Pages → Checkout
   ├─ Add Buy buttons to pricing cards
   ├─ Store product data in sessionStorage
   ├─ Redirect to /checkout
   └─ Checkout loads from sessionStorage

2. Authentication → Admin
   ├─ Verify admin login before /admin routes
   ├─ Use NextAuth or custom middleware
   ├─ Protect /admin/orders and /admin/payments
   └─ Redirect unauthenticated users

3. Email Notifications → Orders
   ├─ Send confirmation email after success
   ├─ Send receipt after payment
   ├─ Send shipping notification
   └─ Use SendGrid or NodeMailer

4. Inventory → Orders
   ├─ Check stock before creating order
   ├─ Reduce inventory after payment success
   ├─ Handle out-of-stock cases
   └─ Update product availability

5. Customer Portal → Orders
   ├─ Create /customer/orders page
   ├─ Allow customers to view their orders
   ├─ Show order status and tracking
   └─ Link from /checkout/success
```

---

This architecture provides a complete, scalable system for processing payments through Razorpay! 🎉
