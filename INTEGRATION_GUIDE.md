# 🛒 Integration Guide - Buy Button to Checkout

## How to Connect Your Pricing/Plans to Checkout

This guide shows how to connect your buy buttons on pricing pages to the checkout system.

## 1️⃣ Store Products in sessionStorage

When user clicks "Buy" button, store the products in sessionStorage:

```javascript
// Example: Click handler on your buy button
const handleBuyClick = (product) => {
  // Store product details
  const checkoutProducts = [{
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  }];
  
  // Save to sessionStorage
  sessionStorage.setItem('checkoutProducts', JSON.stringify(checkoutProducts));
  
  // Redirect to checkout
  window.location.href = '/checkout';
};
```

## 2️⃣ Example: Weight Loss Plan Button

```jsx
// In your weight-loss page or pricing component
import Link from 'next/link';
import Button from '@/components/ui/Button';

const WeightLossPricing = () => {
  const handleBuyClick = () => {
    const product = {
      id: 'weight-loss-plan',
      name: 'Weight Loss Plan - 3 Months',
      price: 5999,
      quantity: 1
    };
    
    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
    window.location.href = '/checkout';
  };

  return (
    <div className="pricing-card">
      <h2>Weight Loss Plan</h2>
      <p className="price">₹5,999</p>
      <ul>
        <li>3 Month Duration</li>
        <li>Personalized Diet Plan</li>
        <li>Weekly Check-ins</li>
      </ul>
      <Button onClick={handleBuyClick} className="bg-orange-600">
        Buy Now
      </Button>
    </div>
  );
};

export default WeightLossPricing;
```

## 3️⃣ Example: Multiple Plans

```jsx
// Multiple products at once
const handleBuyMultiple = () => {
  const products = [
    {
      id: 'consultation',
      name: 'Initial Consultation',
      price: 999,
      quantity: 1
    },
    {
      id: 'weight-loss-plan',
      name: 'Weight Loss Plan - 3 Months',
      price: 5999,
      quantity: 1
    }
  ];
  
  sessionStorage.setItem('checkoutProducts', JSON.stringify(products));
  window.location.href = '/checkout';
};
```

## 4️⃣ Example: Quantity Selection

```jsx
// Allow user to select quantity
const [quantity, setQuantity] = useState(1);

const handleBuyWithQuantity = (product) => {
  const checkoutProducts = [{
    ...product,
    quantity: quantity
  }];
  
  sessionStorage.setItem('checkoutProducts', JSON.stringify(checkoutProducts));
  window.location.href = '/checkout';
};

return (
  <div className="pricing-card">
    <h2>{product.name}</h2>
    <p className="price">₹{product.price}</p>
    
    <div className="quantity-selector">
      <label>Quantity:</label>
      <input 
        type="number" 
        min="1" 
        value={quantity} 
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
    </div>
    
    <Button onClick={() => handleBuyWithQuantity(product)}>
      Buy Now
    </Button>
  </div>
);
```

## 5️⃣ All Available Plans

Here's a list of plans to use with product IDs:

### Weight Loss Plans
```javascript
{
  id: 'weight-loss-1month',
  name: 'Weight Loss Plan - 1 Month',
  price: 2999
}

{
  id: 'weight-loss-3months',
  name: 'Weight Loss Plan - 3 Months',
  price: 5999
}

{
  id: 'weight-loss-6months',
  name: 'Weight Loss Plan - 6 Months',
  price: 9999
}
```

### PCOD Management Plans
```javascript
{
  id: 'pcod-1month',
  name: 'PCOD Management - 1 Month',
  price: 2999
}

{
  id: 'pcod-3months',
  name: 'PCOD Management - 3 Months',
  price: 5999
}
```

### Therapeutic Plans
```javascript
{
  id: 'therapeutic-1month',
  name: 'Therapeutic Plan - 1 Month',
  price: 3999
}

{
  id: 'therapeutic-3months',
  name: 'Therapeutic Plan - 3 Months',
  price: 8999
}
```

### Wedding Prep Plans
```javascript
{
  id: 'wedding-plan',
  name: 'Wedding Prep Plan - 3 Months',
  price: 7999
}
```

### Add-ons & Services
```javascript
{
  id: 'consultation',
  name: 'Initial Consultation',
  price: 999
}

{
  id: 'meal-plan',
  name: 'Custom Meal Plan',
  price: 1999
}

{
  id: 'follow-up',
  name: 'Follow-up Session',
  price: 499
}
```

## 6️⃣ Checkout Flow Diagram

```
User clicks "Buy Button" on pricing page
         ↓
Store product details in sessionStorage
         ↓
Redirect to /checkout
         ↓
User fills billing form
         ↓
User accepts Terms & Conditions
         ↓
User clicks "Place Order"
         ↓
Backend creates order in MongoDB
         ↓
Backend creates Razorpay order
         ↓
Razorpay payment modal opens
         ↓
User completes payment
         ↓
Payment verified with Razorpay
         ↓
Order status updated to "completed"
         ↓
Payment record created
         ↓
Redirect to /checkout/success?orderId=ORD-1234567890
         ↓
Success page shows order confirmation
```

## 7️⃣ Complete Example Component

```jsx
'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function PricingCard({ plan }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuyClick = () => {
    const product = {
      id: plan.id,
      name: plan.name,
      price: plan.price,
      quantity: 1
    };
    
    // Store in sessionStorage
    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
    
    // Redirect to checkout
    window.location.href = '/checkout';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      <p className="text-4xl font-bold text-orange-600 mb-4">
        ₹{plan.price.toLocaleString()}
      </p>
      <p className="text-gray-600 text-sm mb-4">
        {plan.duration || 'One-time'}
      </p>
      
      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {plan.features?.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-orange-600 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Collapsible Description */}
      <div className="mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
        >
          Details
          <ChevronDown 
            className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <p className="text-gray-600 text-sm mt-2">
            {plan.description}
          </p>
        )}
      </div>

      {/* Buy Button */}
      <Button 
        onClick={handleBuyClick}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
      >
        Buy Now - ₹{plan.price}
      </Button>
    </div>
  );
}
```

## 8️⃣ Product Data Structure

Keep your products in a constants file:

```typescript
// lib/products.ts
export const PRODUCTS = {
  WEIGHT_LOSS: {
    '1month': {
      id: 'weight-loss-1month',
      name: 'Weight Loss Plan - 1 Month',
      price: 2999,
      duration: '1 Month',
      features: [
        'Personalized diet plan',
        'Weekly check-ins',
        'Meal suggestions',
        'Progress tracking'
      ],
      description: 'Get started with your weight loss journey with our 1-month plan.'
    },
    '3months': {
      id: 'weight-loss-3months',
      name: 'Weight Loss Plan - 3 Months',
      price: 5999,
      duration: '3 Months',
      features: [
        'Personalized diet plan',
        'Bi-weekly check-ins',
        'Meal suggestions',
        'Progress tracking',
        'Lifestyle coaching'
      ],
      description: 'Comprehensive 3-month weight loss program.'
    }
  },
  // ... more products
};
```

## 9️⃣ Testing the Integration

1. **Test Buy Button**:
   - Click buy button on pricing page
   - Verify you're redirected to `/checkout`
   - Check that order summary shows correct product

2. **Test Form**:
   - Fill all form fields
   - Click "Place Order"
   - Razorpay modal should open

3. **Test Payment**:
   - Use test card: 4111 1111 1111 1111
   - Complete payment
   - Should redirect to success page

4. **Verify Order**:
   - Go to `/admin/orders`
   - New order should appear
   - Payment status should be "completed"

## 🔟 Troubleshooting

### Order summary empty on checkout page
- Check if `sessionStorage.checkoutProducts` is set
- Verify product object has: id, name, price, quantity

### Redirect not working
- Check if URL is correct: `/checkout`
- Verify JavaScript is enabled
- Check browser console for errors

### Payment not processing
- Verify Razorpay keys are correct
- Check if test mode is enabled
- Verify amount is > 0

---

**Your checkout system is ready to integrate!** 🎉
