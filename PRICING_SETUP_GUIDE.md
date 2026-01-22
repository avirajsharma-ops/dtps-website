# Dynamic Pricing Integration - Testing Guide

## System Overview

The pricing system is now fully integrated with MongoDB. Here's how it works:

### Architecture:
1. **Admin Panel** (`/admin/pricing`) - Create, Edit, Delete pricing plans
2. **Database** (MongoDB) - Stores all pricing data with complete schema
3. **API** (`/api/pricing`) - RESTful endpoint to fetch/manage pricing
4. **Frontend Pages** - Automatically fetch and display pricing from database

### Data Flow:
```
Admin Form → MongoDB Database → API Endpoint → Frontend Pages
                                      ↓
                                 Fallback Data (if DB empty)
```

## Testing Steps

### Step 1: Add Test Pricing Plans via Admin Panel

1. Go to `http://localhost:3001/admin/pricing`
2. Click **"Add Plan"** button
3. Fill in the form with:

**Plan 1: Trial Plan**
- Plan Name: `10 Days Trial`
- Price: `299`
- Original Price: `999`
- Duration: `10 days`
- Duration Label: `trial`
- Badge: `Limited Offer`
- Badge Color: `orange`
- Features:
  - Chat support
  - Consultation (02)
  - Meal Plan
- Page: `weight-loss`
- Mark as Popular: ✓ Yes
- Active: ✓ Yes
- Click **Create**

**Plan 2: Monthly Plan**
- Plan Name: `01 Month`
- Price: `2499`
- Original Price: `3000`
- Duration: `1 month`
- Duration Label: `monthly`
- Badge: `Best Value`
- Badge Color: `green`
- Features:
  - 8 hours chat support
  - Consultation (06)
  - Meal Plan
  - Progress Tracking
- Page: `weight-loss`
- Mark as Popular: ✓ Yes
- Active: ✓ Yes
- Click **Create**

### Step 2: Verify API Response

Run this command to verify plans were saved:
```bash
curl -s "http://localhost:3001/api/pricing?page=weight-loss" | jq '.'
```

Expected response:
```json
{
  "success": true,
  "pricing": [
    {
      "_id": "...",
      "planName": "10 Days Trial",
      "price": 299,
      "originalPrice": 999,
      "duration": "10 days",
      "durationLabel": "trial",
      "features": [
        {"text": "Chat support", "included": true},
        ...
      ],
      "badge": "Limited Offer",
      "badgeColor": "orange",
      "page": "weight-loss",
      "popular": true,
      "isActive": true
    }
  ]
}
```

### Step 3: View on Frontend

1. Go to `http://localhost:3001/weight-loss`
2. Scroll to **"Our Pricing"** section
3. You should see your created plans displayed dynamically!

### Step 4: Add Plans for Other Pages

Repeat Step 1 but change:
- **Page**: `therapeutic` (for `/plans/therapeutic`)
- **Page**: `wedding` (for `/plans/wedding`)
- **Page**: `pcod` (for `/pcod` page)

Then visit those pages to see the pricing displayed:
- `http://localhost:3001/plans/therapeutic` - Shows therapeutic plans
- `http://localhost:3001/plans/wedding` - Shows wedding plans
- `http://localhost:3001/pcod` - Shows PCOD plans (if page exists)

## Frontend Implementation Details

### Weight Loss Page (`/app/weight-loss/page.tsx`)
- Fetches pricing on component mount with `getPricingByPage('weight-loss')`
- Transforms database data to display format
- Falls back to hardcoded pricing if no data in database
- Displays pricing cards with badges and features

### Therapeutic Plan Page (`/app/plans/therapeutic/page.tsx`)
- Same implementation but queries `page=therapeutic`
- Shows pricing cards in 4-column layout
- Features dynamic badge styling

### Wedding Plan Page (`/app/plans/wedding/page.tsx`)
- Queries `page=wedding`
- Shows pricing cards with timeline information
- Supports complex features display

## API Endpoints

### Get All Pricing
```
GET /api/pricing
```

### Get Pricing by Page
```
GET /api/pricing?page=weight-loss
GET /api/pricing?page=therapeutic
GET /api/pricing?page=wedding
GET /api/pricing?page=pcod
```

### Get Active Pricing Only
```
GET /api/pricing?page=weight-loss&active=true
```

### Create Pricing Plan (Protected)
```
POST /api/pricing
```
Requires authentication token

### Update Pricing Plan (Protected)
```
PUT /api/pricing
Body: { id: "...", ...updateData }
```
Requires authentication token

### Delete Pricing Plan (Protected)
```
DELETE /api/pricing?id=...
```
Requires authentication token

## Fallback Behavior

If no pricing plans exist in the database for a page, the frontend will display hardcoded fallback plans:

**Weight Loss Fallback:**
- 10 Days Trial: ₹299 → ₹999
- 01 Month: ₹2,499 → ₹3,000
- 03 Months: ₹5,999 → ₹8,000
- 06 Months: ₹11,999 → ₹16,000

This ensures the page always displays pricing, even if the database is empty.

## Troubleshooting

### Issue: Pricing not displaying on frontend
**Solution:** 
1. Check browser console for errors (F12)
2. Verify API response: `curl http://localhost:3001/api/pricing?page=weight-loss`
3. Check that plans have `page: 'weight-loss'` and `isActive: true`

### Issue: API returns empty
**Solution:** 
1. Create pricing plans via `/admin/pricing`
2. Ensure plans have matching `page` field
3. Set `isActive: true` in the form

### Issue: Fallback pricing showing
**Cause:** Normal behavior when no database plans exist
**Solution:** Add plans via admin panel to override fallback

## Files Modified

1. `/lib/api.ts` - API utility functions for fetching pricing
2. `/app/weight-loss/page.tsx` - Integrated dynamic pricing
3. `/app/plans/therapeutic/page.tsx` - Integrated dynamic pricing
4. `/app/plans/wedding/page.tsx` - Integrated dynamic pricing

## Next Steps

1. ✅ Test adding pricing plans via admin
2. ✅ Verify they display on frontend
3. ✅ Test editing/deleting plans
4. ✅ Add plans for other pages
5. ✅ Deploy to production

---

**Status:** Ready for testing! Create a pricing plan and refresh the frontend page to see it appear.
