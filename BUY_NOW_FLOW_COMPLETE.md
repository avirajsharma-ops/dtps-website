# ✅ BUY NOW → CHECKOUT → RAZORPAY FLOW

## How It Works Now

When users click **"BUY NOW"** or **"Get Started"** buttons on your pricing pages, they will automatically:

1. ✅ Store the product details in `sessionStorage`
2. ✅ Redirect to `/checkout` page
3. ✅ See order summary with their selected plan
4. ✅ Fill billing details
5. ✅ Click "Place Order"
6. ✅ Razorpay payment modal opens
7. ✅ Complete payment
8. ✅ Redirect to success page with order confirmation

---

## Updated Pages

### 1️⃣ Weight Loss Page (`/weight-loss`)
✅ **BUY NOW button** → Stores product → Redirects to `/checkout`

**Plans Available:**
- 10 Days Trial - ₹299
- 1 Month - ₹2,499
- 3 Months - ₹5,999
- 6 Months - ₹11,999

---

### 2️⃣ PCOD Page (`/pcod`)
✅ **Get Started button** → Stores product → Redirects to `/checkout`

**Plans Available:**
- 1 Month - ₹4,500
- 3 Months - ₹12,000

---

### 3️⃣ Wedding Page (`/plans/wedding`)
✅ **BUY NOW button** → Stores product → Redirects to `/checkout`

**Plans Available:**
- 10 Days Trial - ₹399
- 1 Month - ₹4,999
- 3 Months - ₹7,999
- 6 Months - ₹11,000

---

### 4️⃣ Therapeutic Page (`/plans/therapeutic`)
✅ **Get Started Today button** (Hero) → Redirects to `/checkout`
✅ **Book Your Consultation button** (CTA Section) → Redirects to `/checkout`

**Plans Available:**
- 1 Month - ₹4,500
- 3 Months - ₹13,000
- 6 Months - ₹24,000
- 1 Year - ₹48,000

---

## How to Test

### Step 1: Test Weight Loss Page
```
1. Go to http://localhost:3000/weight-loss
2. Scroll to pricing section
3. Click "BUY NOW" on any plan
4. You should be redirected to /checkout
5. Order summary should show the selected plan
```

### Step 2: Test Checkout
```
1. Fill in the form:
   - First Name: John
   - Last Name: Doe
   - City: Mumbai
   - Phone: 9876543210
   - Email: john@example.com
2. Check "Accept Terms & Conditions"
3. Click "Place Order"
4. Razorpay modal should open
```

### Step 3: Test Razorpay Payment
```
1. Use test card: 4111 1111 1111 1111
2. Expiry: 12/25 (or any future date)
3. CVV: 123 (any 3 digits)
4. OTP: 123456
5. Click "Pay"
6. You should be redirected to success page
```

### Step 4: Check Orders in Admin
```
1. Go to http://localhost:3000/admin/orders
2. You should see your order
3. Click eye icon to view details
4. Go to http://localhost:3000/admin/payments
5. You should see payment record
```

---

## What Gets Stored in sessionStorage

When "BUY NOW" is clicked, this JSON is stored:

```javascript
{
  checkoutProducts: [
    {
      id: "weight-loss-10-days-trial",
      name: "Weight Loss Plan - 10 DAYS TRIAL",
      price: 299,
      quantity: 1
    }
  ]
}
```

The checkout page automatically reads this and displays the order summary.

---

## Database Records Created

When payment is successful:

### Order Record:
```javascript
{
  orderId: "ORD-1234567890",
  customerName: "John Doe",
  customerEmail: "john@example.com",
  customerPhone: "9876543210",
  city: "Mumbai",
  address: "123 Main St",
  products: [{
    id: "weight-loss-10-days-trial",
    name: "Weight Loss Plan - 10 DAYS TRIAL",
    price: 299,
    quantity: 1
  }],
  total: 299,
  paymentStatus: "completed",
  razorpayOrderId: "order_...",
  razorpayPaymentId: "pay_...",
  createdAt: new Date()
}
```

### Payment Record:
```javascript
{
  orderId: "ORD-1234567890",
  razorpayPaymentId: "pay_...",
  razorpayOrderId: "order_...",
  amount: 299,
  currency: "INR",
  status: "completed",
  customerName: "John Doe",
  customerEmail: "john@example.com",
  responseData: {...}, // Full Razorpay response
  createdAt: new Date()
}
```

---

## Code Implementation Details

### Weight Loss Page Implementation
```jsx
<Button 
  onClick={() => {
    const price = plan.price.replace('₹', '').replace(',', '');
    const product = {
      id: `weight-loss-${plan.label.toLowerCase().replace(/\s+/g, '-')}`,
      name: `Weight Loss Plan - ${plan.label}`,
      price: parseInt(price),
      quantity: 1
    };
    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
    window.location.href = '/checkout';
  }}
  variant="primary" 
  className="wl-pricing-btn"
>
  BUY NOW
</Button>
```

### PCOD Page Implementation
```jsx
<a 
  onClick={() => {
    const product = {
      id: `pcod-${plan.duration.toLowerCase().replace(/\s+/g, '-')}`,
      name: `PCOD Management Plan - ${plan.duration}`,
      price: parseInt(plan.price),
      quantity: 1
    };
    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
    window.location.href = '/checkout';
  }}
  className="pcod-plan-cta"
  style={{ cursor: 'pointer' }}
>
  Get Started
</a>
```

---

## Checkout Page Flow

```jsx
// 1. Read from sessionStorage
const products = JSON.parse(sessionStorage.getItem('checkoutProducts'));

// 2. Display order summary
products.map(p => (
  <div>
    <span>{p.name}</span>
    <span>₹{p.price}</span>
  </div>
))

// 3. Handle Place Order
const handlePlaceOrder = async () => {
  // 1. Validate form
  // 2. Create order via API: POST /api/orders (action: 'create')
  // 3. Open Razorpay modal
  // 4. User pays
  // 5. Verify payment via API: POST /api/orders (action: 'verify')
  // 6. Redirect to /checkout/success?orderId=ORD-xxx
}
```

---

## File Changes Made

### Updated Files:
1. ✅ `/app/weight-loss/page.tsx` - BUY NOW button connected
2. ✅ `/app/pcod/page.tsx` - Get Started button connected
3. ✅ `/app/plans/wedding/page.tsx` - BUY NOW button connected
4. ✅ `/app/plans/therapeutic/page.tsx` - Get Started buttons connected

### Existing Files (Already Created):
- `/app/checkout/page.tsx` - Checkout form & Razorpay
- `/app/checkout/success/page.tsx` - Success confirmation
- `/app/api/orders/route.ts` - Order & payment APIs
- `/models/Order.ts` - Order database schema
- `/models/Payment.ts` - Payment database schema

---

## Environment Setup Required

Make sure your `.env.local` has:

```
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
MONGODB_URI=mongodb+srv://...
```

---

## Quick Troubleshooting

### Issue: Clicking BUY NOW doesn't go to checkout
**Solution**: Check browser console for errors, verify `/checkout` page exists

### Issue: Checkout doesn't show product
**Solution**: Clear browser cache, check sessionStorage in console:
```javascript
console.log(sessionStorage.getItem('checkoutProducts'))
```

### Issue: Razorpay modal doesn't open
**Solution**: Verify RAZORPAY_KEY_ID in .env.local, check browser console

### Issue: Payment verified but order not created
**Solution**: Check MongoDB connection, verify MONGODB_URI is correct

---

## Complete User Journey

```
Website Home Page
       ↓
User clicks on Plan (Weight Loss / PCOD / Wedding / Therapeutic)
       ↓
User sees pricing plans
       ↓
User clicks "BUY NOW" / "Get Started"
       ↓
[sessionStorage stores product]
[Redirects to /checkout]
       ↓
Checkout Page
├─ Shows order summary
├─ User fills billing form
└─ Accepts Terms & Conditions
       ↓
User clicks "Place Order"
       ↓
[Order created in MongoDB]
[Razorpay order created]
       ↓
Razorpay Payment Modal Opens
       ↓
User enters payment details
       ↓
[Payment processed]
       ↓
[Payment verified]
[Order status updated: completed]
[Payment record created]
       ↓
Redirects to /checkout/success?orderId=ORD-xxx
       ↓
Success Page
├─ Shows "Payment Successful!"
├─ Displays order number
├─ Shows order details
└─ Next steps info
       ↓
Admin Dashboard
├─ New order visible at /admin/orders
├─ Can view order details
└─ New payment visible at /admin/payments
       ↓
Email (Optional - implement later)
├─ Order confirmation email sent
└─ Payment receipt sent
```

---

## What's Ready

✅ All buy buttons connected
✅ Checkout page fully functional
✅ Razorpay integration complete
✅ Order & payment tracking
✅ Admin dashboard working
✅ Database schemas ready
✅ APIs ready for production
✅ Success page showing confirmation

---

## Next Steps (Optional)

1. **Email Notifications** - Send order confirmation emails
2. **Customer Portal** - Let customers track their orders
3. **Inventory Tracking** - Link orders to product stock
4. **Refund Processing** - Handle refunds via Razorpay API
5. **Analytics** - Track sales metrics and trends

---

**Everything is connected and ready to take payments!** 🎉

Test it out and start making sales! 💰
