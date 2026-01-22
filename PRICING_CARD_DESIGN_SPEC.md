# Pricing Card - Design Specifications

## Card Layout

```
┌─────────────────────────────────────────┐
│ 10 DAYS TRIAL                    Trial   │  ← Label + Badge
├─────────────────────────────────────────┤
│ Plan                                    │  ← Plan text
│ ₹299 ₹999                               │  ← Price + Original (strikethrough)
│                                         │
│ What you'll get:                        │  ← Section title
│ ✓ Chat support                          │  ← Feature items
│ ✓ Dietitian Consultation (02)           │
│ ✓ Customized Meal Plan                  │
│ ✓ Progress Tracking                     │
│ ✓ Diet Recipe eBook (10+)               │
│                                         │
│           [ BUY NOW ]                   │  ← CTA Button (bottom)
└─────────────────────────────────────────┘
```

## Typography & Spacing

### Label (Top Left)
- **Font Size:** 13px
- **Font Weight:** 700 (bold)
- **Text Transform:** UPPERCASE
- **Letter Spacing:** 0.5px
- **Color:** #1f2937 (dark gray)
- **Example:** "10 DAYS TRIAL"

### Badge (Top Right)
- **Font Size:** 10px
- **Font Weight:** 700 (bold)
- **Text Transform:** UPPERCASE
- **Letter Spacing:** 0.3px
- **Padding:** 6px 12px
- **Border Radius:** 6px
- **Example:** "Trial" (gray) or "Saving" (orange)

### Plan Text
- **Font Size:** 12px
- **Font Weight:** 500
- **Color:** #9ca3af (light gray)
- **Letter Spacing:** 0.3px
- **Margin:** 12px bottom, 8px margin
- **Text:** "Plan"

### Price
- **Font Size:** 32px
- **Font Weight:** 800 (extra bold)
- **Color:** #014e4e (primary teal)
- **Line Height:** 1
- **Example:** "₹2,499"

### Original Price (Strikethrough)
- **Font Size:** 15px
- **Font Weight:** 500
- **Color:** #d1d5db (light gray)
- **Text Decoration:** line-through
- **Margin:** 8px left spacing
- **Example:** "₹3,000"

### "What you'll get:" Title
- **Font Size:** 12px
- **Font Weight:** 600 (semi-bold)
- **Color:** #6b7280 (medium gray)
- **Letter Spacing:** 0.3px
- **Margin:** 18px top, 14px bottom

### Feature Items
- **Font Size:** 13px
- **Font Weight:** 400 (normal)
- **Color:** #6b7280 (medium gray)
- **Line Height:** 1.5
- **Padding:** 10px vertical
- **Border Bottom:** 1px solid #f3f4f6 (very light)
- **Gap with Icon:** 10px

### Checkmark Icon
- **Glyph:** "✓"
- **Font Size:** 16px
- **Font Weight:** 700 (bold)
- **Color:** var(--accent) - #FF850B (orange)
- **Display:** Flex shrink: 0

## Colors

### Primary Colors
- **Card Background:** white (#ffffff)
- **Primary Text:** #1f2937 (dark gray)
- **Secondary Text:** #6b7280 (medium gray)
- **Light Text:** #9ca3af (light gray)
- **Dividers:** #f3f4f6 (very light)
- **Borders:** #e5e7eb (light gray)
- **Accent:** #FF850B (orange)
- **Primary (Price):** #014e4e (teal)

### Badge Colors
**Gray Badge (Trial/Default)**
- Background: #f3f4f6
- Text: #6b7280

**Orange Badge (Special)**
- Background: #FF850B
- Text: white

**Green Badge (Best Value)**
- Background: #d1fae5
- Text: #059669

**Blue Badge (Premium)**
- Background: #dbeafe
- Text: #0284c7

**Red Badge (Limited)**
- Background: #fee2e2
- Text: #dc2626

**Purple Badge (Exclusive)**
- Background: #f3e8ff
- Text: #9333ea

## Spacing & Layout

### Card Padding
- **Horizontal:** 24px
- **Vertical:** 28px
- **Reduced from:** 30px

### Header Spacing
- **Margin Bottom:** 12px
- **Gap between Label & Badge:** 12px

### Price Section
- **Margin (Plan to Price):** 8px
- **Margin (Price to Original):** 2px
- **Horizontal Gap:** 8px

### Features Section
- **Margin Top:** 18px
- **Margin Bottom:** 24px
- **Item Padding:** 10px vertical
- **Item Gap:** 10px (with icon)
- **Flex:** 1 (grows to push button down)

### Button
- **Width:** 100%
- **Margin Top:** auto (pushes to bottom due to flex)

## Border Radius

- **Card:** 16px
- **Badge:** 6px
- **Popular Badge:** 6px
- **Button:** varies by Button component

## Shadows

### Default Card
```
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
```

### Hover State
```
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
```

### Popular Card
```
box-shadow: 0 8px 24px rgba(255, 133, 11, 0.15);
```

## Responsive Behavior

### Desktop (4 columns)
```css
grid-template-columns: repeat(4, 1fr);
gap: 24px;
```

### Tablet (2 columns)
```css
grid-template-columns: repeat(2, 1fr);
gap: 20px;
```

### Mobile (1 column)
```css
grid-template-columns: 1fr;
gap: 16px;
```

## States

### Default State
- Border: 1px solid #e5e7eb
- Shadow: subtle
- Transform: none

### Hover State
- Border: 1px solid #d1d5db (darker)
- Shadow: enhanced
- Transform: translateY(-4px)
- Cursor: pointer

### Popular/Featured State
- Border: 1px solid var(--accent) - orange
- Shadow: orange tinted shadow
- Z-index: 10
- No transform scale (stays normal size)
- Premium badge at top

---

**Implemented:** ✅  
**Version:** 1.0  
**Last Updated:** January 22, 2026
