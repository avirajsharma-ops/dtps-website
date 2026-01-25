# Pricing Category Implementation Guide

## Overview
This document provides comprehensive information about the new category-based pricing system implementation.

## What Changed

### 1. **Database Schema Updates**
- Added `category` field to the Pricing model
- Category enum values: `'weight-loss'`, `'pcod'`, `'new-wedding-plan'`, `'therapeutic-diet-plans'`
- File: `/models/Pricing.ts`

### 2. **Admin Panel Changes**
- Added Category dropdown in the pricing plan form
- Category is now a required field
- Dropdown options:
  - Weight Loss
  - PCOD
  - New Wedding Plan
  - Therapeutic Diet Plans
- File: `/app/admin/pricing/page.tsx`

### 3. **API Updates**
- GET `/api/pricing` now supports `category` query parameter
- Example: `/api/pricing?category=weight-loss`
- File: `/app/api/pricing/route.ts`

### 4. **Frontend API Utility**
- Added new function: `getPricingByCategory(category)`
- Updated `Pricing` interface to include category field
- File: `/lib/api.ts`

### 5. **Updated Pages**
The following pages now fetch plans by category instead of page:

| Page | File | Category |
|------|------|----------|
| Weight Loss | `/app/weight-loss/page.tsx` | `weight-loss` |
| PCOD | `/app/pcod/page.tsx` | `pcod` |
| Therapeutic | `/app/plans/therapeutic/page.tsx` | `therapeutic-diet-plans` |
| Wedding | `/app/plans/wedding/page.tsx` | `new-wedding-plan` |

## Category Mapping Reference

```
Page → Category Mapping:
- weight-loss page → weight-loss category
- pcod page → pcod category
- therapeutic page → therapeutic-diet-plans category
- wedding page → new-wedding-plan category
```

## How to Use

### In Admin Panel:

1. Navigate to the Pricing section
2. Click "Add Plan" or "Edit" an existing plan
3. Select the appropriate **Category** from the dropdown
4. Fill in other required fields
5. Save the plan

**Important**: The category determines which page/section the plan will appear on. Choose carefully!

### Adding a New Plan:

1. Go to Admin → Pricing Plans
2. Click "Add Plan"
3. Fill in:
   - Plan Name (e.g., "01 Month", "03 Months")
   - Price & Original Price
   - Duration & Duration Label
   - Badge (optional, e.g., "Popular", "Saving")
   - Features (add each feature separately)
   - **Category** (required - select from dropdown)
   - Mark as Popular (optional)
4. Click "Create"

### Category Selection Guide:

- **Weight Loss**: For general weight loss programs and diet plans
- **PCOD**: For PCOD/PCOS specific treatment plans
- **Therapeutic Diet Plans**: For therapeutic and health-focused plans
- **New Wedding Plan**: For pre-wedding diet plans

## Migration Guide for Existing Data

If you have existing pricing plans without categories:

### Option 1: Auto-Migration (Recommended)
Run the migration script to automatically set categories based on the page field:

```bash
node scripts/migrate-pricing-category.js
```

This script:
- Reads the existing `page` field
- Maps it to the corresponding `category`
- Updates all records that don't have a category

### Option 2: Manual Update
Edit each plan in the admin panel and select the appropriate category.

## Database Query Examples

### Get all Weight Loss plans:
```javascript
const plans = await getPricingByCategory('weight-loss');
```

### Get active PCOD plans:
```javascript
const response = await fetch('/api/pricing?category=pcod&active=true');
const data = await response.json();
```

### Get Therapeutic Diet Plans:
```javascript
const plans = await getPricingByCategory('therapeutic-diet-plans');
```

## Troubleshooting

### Plans not showing on a page?
1. Check that the plan's category matches the page's expected category
2. Ensure the plan has `isActive: true`
3. Verify the API endpoint includes the correct category parameter

### Category field missing in old plans?
1. Run the migration script: `node scripts/migrate-pricing-category.js`
2. Or manually edit each plan and assign a category

### API returning empty results?
1. Confirm plans exist in the database for that category
2. Check that plans have `isActive: true`
3. Verify the category spelling matches exactly

## API Reference

### GET /api/pricing
Query parameters:
- `category`: Filter by category (optional)
- `page`: Filter by page (optional)
- `active`: true/false to filter active plans (optional)

Examples:
```
/api/pricing?category=weight-loss
/api/pricing?category=pcod&active=true
/api/pricing?category=new-wedding-plan
/api/pricing?category=therapeutic-diet-plans
```

## Testing Checklist

- [ ] New plans can be created with category
- [ ] Category dropdown shows all 4 options
- [ ] Existing plans can be edited to assign category
- [ ] Migration script runs successfully
- [ ] Weight Loss page shows only weight-loss category plans
- [ ] PCOD page shows only pcod category plans
- [ ] Therapeutic page shows therapeutic-diet-plans category
- [ ] Wedding page shows new-wedding-plan category
- [ ] API filtering works correctly
- [ ] Active/inactive plans are properly filtered

## Files Modified

1. `/models/Pricing.ts` - Added category field
2. `/app/admin/pricing/page.tsx` - Added category dropdown UI
3. `/app/api/pricing/route.ts` - Added category query parameter support
4. `/lib/api.ts` - Added getPricingByCategory() function and updated interface
5. `/app/weight-loss/page.tsx` - Updated to use getPricingByCategory()
6. `/app/plans/therapeutic/page.tsx` - Updated to use getPricingByCategory()
7. `/app/plans/wedding/page.tsx` - Updated to use getPricingByCategory()

## Files Created

1. `/scripts/migrate-pricing-category.js` - Migration script for existing data

## Future Enhancements

- Add category filtering to the admin panel list view
- Create bulk edit functionality for categories
- Add category-based reports and analytics
- Implement category permissions for admins
