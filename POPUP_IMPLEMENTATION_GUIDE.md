# Dynamic Popup System Implementation

## Overview
A complete dynamic popup management system that allows admins to create popups with images and collect phone numbers from users across selected pages.

## Components Created

### 1. **Lead Model** (`/models/Lead.ts`)
- Stores phone numbers from popup submissions
- Fields: `phoneNumber`, `page`, `createdAt`, `updatedAt`
- Validates 10-digit phone numbers

### 2. **PopupBanner Model** (`/models/PopupBanner.ts`)
- Stores popup configurations
- Fields: `title`, `image`, `pages[]`, `isActive`
- Supports multiple page targeting

### 3. **DynamicPopup Component** (`/components/DynamicPopup.tsx`)
**Features:**
- Shows popup after 5 seconds on selected pages
- Static phone number input field
- Submits phone number to Lead database
- Session-based closing (doesn't show again until page refresh)
- Success message after submission
- Mobile responsive

**Behavior:**
- First visit: Shows popup after 5 seconds
- Close: Stores in sessionStorage, popup hidden for current session
- Refresh: Popup shows again
- Submit: Saves phone number and closes after 2 seconds
- Only shows if popup is configured for that page and active

### 4. **API Endpoint** (`/api/popups/route.ts`)
**Routes:**
- `GET /api/popups` - Get all popups (admin)
- `GET /api/popups?action=getPopup&page=weight-loss` - Get popup for specific page
- `POST /api/popups` - Create popup or save lead
- `PUT /api/popups` - Update existing popup
- `DELETE /api/popups?id=ID` - Delete popup

### 5. **Admin Management Page** (`/app/admin/popups/page.tsx`)
**Features:**
- Create new popups
- Edit existing popups
- Delete popups
- Upload popup images
- Select multiple pages for each popup
- Toggle active/inactive status
- Image preview

## How to Use

### For Admins:
1. Go to `/admin/popups`
2. Click "Create New Popup"
3. Enter popup title
4. Upload popup image
5. Select which pages to show popup on (multiple selection)
6. Set active status
7. Save

### For Users:
1. Visit any configured page (e.g., `/weight-loss`)
2. After 5 seconds, popup appears
3. Enter 10-digit phone number
4. Click "Claim"
5. Phone number is saved to Lead database
6. Popup closes with success message
7. Popup won't show again until page refresh

## Database Collections
- **leads** - User phone numbers from popups
- **popupbanners** - Popup configurations

## Features Implemented ✅
- ✅ Dynamic popup management
- ✅ Image upload support
- ✅ Multiple page selection
- ✅ 5-second delay before showing
- ✅ Session-based closing (hide until refresh)
- ✅ Phone number validation (10 digits)
- ✅ Save leads to database
- ✅ Admin CRUD operations
- ✅ Mobile responsive design
- ✅ Success message after submission

## Integration
The component is already added to weight-loss page. To add to other pages:

```tsx
import DynamicPopup from '@/components/DynamicPopup';

// In your page component
<DynamicPopup page="page-name" />
```

Replace `page-name` with the actual page identifier used in admin popup configuration.

## Notes
- Phone numbers are stored in Lead database with associated page
- Popups must be created and activated in admin first
- Images are optimized using ImageKit
- Session storage is used to prevent repeated popups during same session
- Popup styling is responsive for all screen sizes
