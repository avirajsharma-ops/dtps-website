# Quick Reference: Pricing Category System

## 🎯 The 4 Categories

| Icon | Category | Use For | Page |
|------|----------|---------|------|
| ⚖️ | **weight-loss** | Weight loss plans | `/weight-loss` |
| 🏥 | **pcod** | PCOD/PCOS plans | `/pcod` |
| 💍 | **new-wedding-plan** | Pre-wedding plans | `/plans/wedding` |
| 🏋️ | **therapeutic-diet-plans** | Therapeutic plans | `/plans/therapeutic` |

---

## 🚀 Quick Start

### In Admin Panel:
1. Go to **Pricing Plans**
2. Click **"Add Plan"**
3. Fill form → **SELECT CATEGORY** → Save

### API Usage:
```javascript
// Fetch plans by category
const plans = await getPricingByCategory('weight-loss');
```

### API Endpoint:
```
GET /api/pricing?category=weight-loss
GET /api/pricing?category=pcod
GET /api/pricing?category=new-wedding-plan
GET /api/pricing?category=therapeutic-diet-plans
```

---

## 🔄 Migrate Existing Data

```bash
node scripts/migrate-pricing-category.js
```

Auto-maps pages to categories and updates database.

---

## 📝 Category Selection Guide

**Choose this category when:**

- **weight-loss** → General weight loss, lifestyle coaching, basic diet plans
- **pcod** → PCOD/PCOS specific treatment, hormonal management
- **new-wedding-plan** → Pre-wedding, bridal packages, occasion-specific
- **therapeutic-diet-plans** → Medical conditions, diabetes, kidney, thyroid

---

## ❌ Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Plans not showing | Check category matches page's category |
| Missing category field | Run migration script |
| API returns empty | Confirm category exists, plan is active |
| Wrong page display | Edit plan and correct category |

---

## 📊 Quick Data Check

### Check what's in database:
```bash
# MongoDB
db.pricings.find().select({planName: 1, category: 1})
```

### Check which page each category goes to:
```
weight-loss → /weight-loss/page.tsx
pcod → /pcod/page.tsx
new-wedding-plan → /plans/wedding/page.tsx
therapeutic-diet-plans → /plans/therapeutic/page.tsx
```

---

## 🎓 Learn More

- Full guide: `/PRICING_CATEGORY_GUIDE.md`
- Implementation: `/PRICING_CATEGORY_IMPLEMENTATION.md`
- Model: `/models/Pricing.ts`
- API: `/app/api/pricing/route.ts`

---

## 💾 Remember

✅ Category is **REQUIRED** when creating plans  
✅ Category determines where plan appears  
✅ Use correct category for correct page  
✅ Only active plans show on frontend  
✅ Run migration for existing data  

---

Created: January 25, 2026 | Status: Ready to Use
