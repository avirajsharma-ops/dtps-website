# Order System Quick Reference

## UUID Order ID Generation

Every order automatically gets a unique UUID:
```
550e8400-e29b-41d4-a716-446655440000
```

### How It Works:

1. **Order Model** (`models/Order.ts`):
   - Uses `uuid` v4 generator
   - Auto-generates on order creation
   - Stored in MongoDB as unique field

2. **Order Creation** (`app/api/orders/route.ts`):
   ```typescript
   const orderId = uuidv4(); // Creates UUID automatically
   
   const order = new Order({
     orderId,  // UUID stored here
     customerName: data.customerName,
     // ... other fields
   });
   ```

3. **Admin Display** (`app/admin/orders/page.tsx`):
   - Shows all orders in table format
   - UUID displayed in "Order ID" column
   - Each row shows:
     - Order ID (UUID)
     - Customer Name
     - Email
     - Amount (₹)
     - Payment Status
     - Creation Date
     - Actions (View, Download, Delete)

## Admin Orders Page Features

### View All Orders
```
GET /admin/orders
```
Shows table with:
- Total Orders count
- Completed count
- Pending count  
- Failed count

Filter by status: All | Completed | Pending | Failed

### View Order Details
```
Click eye icon → Modal shows:
- Order ID (UUID)
- Payment Status
- Customer details
- Total amount
- Products list
```

### Download Order
```
Click download icon → Creates file:
ORDER_CONFIRMATION
==================
Order ID: [UUID]
Date: [creation date]

CUSTOMER DETAILS
================
Name: [customer name]
Email: [email]
Phone: [phone]
City: [city]

PRODUCTS
========
[product name] x[quantity] - ₹[price]

AMOUNT
======
Total: ₹[amount]
Payment Status: [status]
```

### Delete Order
```
Click trash icon → Removes order from database
```

## Order API Endpoints

### 1. Create Order (with UUID)
```
POST /api/orders

Request:
{
  "action": "create",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+91-9000000000",
  "address": "123 Main St",
  "city": "New York",
  "products": [
    {
      "id": "plan-1",
      "name": "Weight Loss Plan",
      "price": 2499,
      "quantity": 1
    }
  ],
  "subtotal": 2499,
  "total": 2499
}

Response:
{
  "success": true,
  "order": {
    "_id": "mongodb_id",
    "orderId": "550e8400-e29b-41d4-a716-446655440000",  // <-- UUID
    "customerName": "John Doe",
    "paymentStatus": "pending",
    "razorpayOrderId": "order_ABC123",
    "createdAt": "2026-01-27T10:30:00Z"
  },
  "razorpayOrderId": "order_ABC123",
  "razorpayKey": "rzp_live_xxxxx"
}
```

### 2. Verify Payment
```
POST /api/orders

Request:
{
  "action": "verify",
  "razorpayPaymentId": "pay_ABC123",
  "razorpayOrderId": "order_ABC123",
  "orderId": "550e8400-e29b-41d4-a716-446655440000"  // <-- UUID
}

Response:
{
  "success": true,
  "message": "Payment verified successfully",
  "order": "550e8400-e29b-41d4-a716-446655440000"
}
```

### 3. Get All Orders (Admin)
```
GET /api/orders

Response:
{
  "success": true,
  "orders": [
    {
      "orderId": "550e8400-e29b-41d4-a716-446655440000",
      "customerName": "John Doe",
      "total": 2499,
      "paymentStatus": "completed",
      "createdAt": "2026-01-27T10:30:00Z"
    },
    {
      "orderId": "660e8400-e29b-41d4-a716-446655440001",
      "customerName": "Jane Smith",
      "total": 5999,
      "paymentStatus": "pending",
      "createdAt": "2026-01-26T15:45:00Z"
    }
  ]
}
```

### 4. Get Specific Order
```
GET /api/orders?orderId=550e8400-e29b-41d4-a716-446655440000

Response:
{
  "success": true,
  "order": {
    "orderId": "550e8400-e29b-41d4-a716-446655440000",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "+91-9000000000",
    "address": "123 Main St",
    "city": "New York",
    "products": [...],
    "total": 2499,
    "paymentStatus": "completed",
    "razorpayOrderId": "order_ABC123",
    "razorpayPaymentId": "pay_ABC123",
    "createdAt": "2026-01-27T10:30:00Z"
  }
}
```

### 5. Delete Order
```
DELETE /api/orders

Request:
{
  "orderId": "550e8400-e29b-41d4-a716-446655440000"
}

Response:
{
  "success": true,
  "message": "Order deleted successfully"
}
```

## Order Data Structure

```typescript
Order {
  orderId: "550e8400-e29b-41d4-a716-446655440000",    // UUID ← Auto-generated
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
  paymentStatus: "pending" | "completed" | "failed" | "cancelled",
  paymentMethod: "razorpay",
  razorpayOrderId: "order_ABC123XYZ",
  razorpayPaymentId: "pay_XYZ789ABC",
  createdAt: "2026-01-27T10:30:00Z",
  updatedAt: "2026-01-27T10:30:00Z"
}
```

## Dependencies

```json
{
  "uuid": "^9.0.0",          // UUID generation
  "mongoose": "^9.1.5",      // MongoDB ODM
  "razorpay": "^2.9.6",      // Payment processing
  "next-auth": "^4.24.13"    // Authentication
}
```

## Database Schema (Mongoose)

```typescript
OrderSchema {
  orderId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()  // Auto-generates UUID
  },
  customerName: String (required),
  customerEmail: String (required),
  customerPhone: String (required),
  address: String (required),
  city: String (required),
  products: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  subtotal: Number (required),
  total: Number (required),
  paymentStatus: Enum ('pending', 'completed', 'failed', 'cancelled'),
  paymentMethod: String (default: 'razorpay'),
  razorpayOrderId: String,
  razorpayPaymentId: String,
  timestamps: true  // Auto: createdAt, updatedAt
}
```

## Example: Complete Order Flow

### 1. User selects plan on `/weight-loss` page
```
Plan: "Weight Loss - 1 Month"
Price: ₹2,499
```

### 2. Frontend sends POST request
```javascript
const response = await fetch('/api/orders', {
  method: 'POST',
  body: JSON.stringify({
    action: 'create',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+91-9876543210',
    address: '123 Main St',
    city: 'New York',
    products: [{
      id: 'plan-1',
      name: 'Weight Loss - 1 Month',
      price: 2499,
      quantity: 1
    }],
    subtotal: 2499,
    total: 2499
  })
});
```

### 3. Backend creates order with UUID
```
orderId: 550e8400-e29b-41d4-a716-446655440000  ← AUTO-GENERATED
paymentStatus: pending
razorpayOrderId: order_ABC123XYZ
```

### 4. Frontend shows Razorpay modal
```
Payment Gateway Integration (Razorpay)
Amount: ₹2,499
Order ID: order_ABC123XYZ
```

### 5. User completes payment

### 6. Payment verified, order status updated
```
paymentStatus: completed  ← From 'pending'
razorpayPaymentId: pay_XYZ789ABC
```

### 7. Admin views in dashboard
```
Admin Orders Page → See order with UUID:
550e8400-e29b-41d4-a716-446655440000 | John Doe | ₹2,499 | completed
```

### 8. Admin can view details
```
Click eye icon → Full order information displayed
Download → Order confirmation as text file
Delete → Remove order from system
```

## Testing

### Create test order:
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
    "products": [
      {
        "id": "1",
        "name": "Test Plan",
        "price": 100,
        "quantity": 1
      }
    ],
    "subtotal": 100,
    "total": 100
  }'
```

Expected response includes:
```
"orderId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  ← UUID format
```

### View in admin:
```
Go to /admin/orders
See your test order with UUID orderId
```
