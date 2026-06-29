# Google Analytics Setup Guide — Bosphorus & Co.

Complete guide to setting up and configuring Google Analytics 4 (GA4) for tracking website performance and user behavior.

---

## 📊 Table of Contents

1. [Create GA4 Property](#create-ga4-property)
2. [Get Measurement ID](#get-measurement-id)
3. [Configure Analytics Hook](#configure-analytics-hook)
4. [Track Custom Events](#track-custom-events)
5. [View Reports](#view-reports)
6. [Advanced Setup](#advanced-setup)

---

## 🔧 Create GA4 Property

### Step 1: Go to Google Analytics

1. Visit https://analytics.google.com
2. Sign in with your Google account (create one if needed)
3. Click **"Start measuring"** or **"Create property"**

### Step 2: Set Up Property

1. **Property name:** `Bosphorus & Co.`
2. **Reporting timezone:** `Turkey (UTC+3)`
3. **Currency:** `Turkish Lira (₺)`
4. Click **"Next"**

### Step 3: Business Details

1. **Industry category:** Select "Travel & Hospitality" or "Restaurants"
2. **Business size:** Select appropriate size
3. **What do you want to do?** Select "Get reports to understand user behavior"
4. Click **"Create"**

### Step 4: Accept Terms

1. Review and accept the Google Analytics Terms of Service
2. Click **"I accept"**

---

## 🔑 Get Measurement ID

### Find Your GA4 Measurement ID

1. In Google Analytics, go to **Admin** (bottom left)
2. Under **Property**, click **"Data Streams"**
3. Click on your web stream
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## ⚙️ Configure Analytics Hook

### Step 1: Update Measurement ID

Edit `client/src/hooks/useGoogleAnalytics.ts`:

```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your ID
```

And in `client/src/lib/analytics.ts`:

```typescript
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {  // Replace with your ID
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
```

### Step 2: Verify Installation

1. Build the project: `pnpm run build`
2. Open the site in your browser
3. Open **DevTools** (F12) → **Console**
4. Type: `window.gtag` and press Enter
5. You should see the gtag function

### Step 3: Test with Google Analytics Debugger

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcicymiddhjolkhdfm) Chrome extension
2. Enable the extension
3. Open your site
4. Open DevTools → **Analytics** tab
5. You should see tracking events

---

## 📍 Track Custom Events

### Pre-configured Events

The following events are already set up in the code:

| Event | Trigger | Location |
|-------|---------|----------|
| `reservation_click` | User clicks reserve button | Navbar, Hero |
| `reservation_submit` | User submits reservation form | ReservationSection |
| `menu_explore` | User clicks "Explore Menu" | Hero section |
| `gallery_view` | Gallery section comes into view | GallerySection |
| `coffee_view` | Coffee section comes into view | CoffeeSection |
| `contact_click` | User clicks contact info | LocationSection |
| `scroll_depth` | User scrolls to certain depth | Custom hook |

### Add New Custom Events

1. Open `client/src/lib/analytics.ts`
2. Add a new tracking function:

```typescript
export const trackYourEvent = () => {
  trackEvent('your_event_name', {
    event_category: 'engagement',
    event_label: 'your_label',
    event_value: 100, // optional
  });
};
```

3. Import and use in your component:

```typescript
import { trackYourEvent } from '@/lib/analytics';

// In your component
const handleClick = () => {
  trackYourEvent();
  // ... rest of logic
};
```

### Event Parameters

Common parameters to include:

```typescript
{
  event_category: 'engagement' | 'conversion' | 'error',
  event_label: 'descriptive_label',
  event_value: 100,  // numeric value (optional)
  currency: 'TRY',   // for e-commerce (optional)
  value: 99.99,      // for revenue tracking (optional)
}
```

---

## 📈 View Reports

### Real-Time Report

1. In Google Analytics, click **"Real-time"** (left sidebar)
2. You should see live user activity
3. Perform actions on your site (click buttons, scroll, etc.)
4. Watch events appear in real-time

### Engagement Report

1. Click **"Reports"** → **"Engagement"**
2. View:
   - Page views
   - Users
   - Session duration
   - Bounce rate
   - Events

### Conversion Report

1. Click **"Reports"** → **"Conversions"**
2. View reservation form submissions and other key actions

### Custom Report

1. Click **"Reports"** → **"Create new report"**
2. Select **"Exploration"**
3. Configure dimensions and metrics:
   - **Dimensions:** Page title, Event name, Country
   - **Metrics:** Users, Sessions, Event count

---

## 🎯 Set Up Conversion Goals

### Create Conversion Event

1. Go to **Admin** → **Events**
2. Click **"Create event"**
3. Configure:
   - **Event name:** `reservation_submit`
   - **Matching conditions:** Event equals `form_submit` AND Event label equals `reservation`
4. Click **"Create"**

### View Conversions

1. Go to **Reports** → **Conversions**
2. See conversion rate and count

---

## 🔐 Privacy & Compliance

### GDPR Compliance

1. Add cookie consent banner (optional but recommended)
2. Update privacy policy to mention Google Analytics
3. Allow users to opt-out of tracking

### Anonymize IP

Already configured in `useGoogleAnalytics.ts`:

```typescript
gtag('config', GA_MEASUREMENT_ID, {
  anonymize_ip: true,  // Anonymizes user IP
});
```

---

## 📱 Mobile & Cross-Device Tracking

GA4 automatically tracks:
- Mobile vs Desktop
- Device type
- Operating system
- Browser
- Screen resolution

View in **Reports** → **User** → **Device**

---

## 🚀 Advanced Setup

### Link to Google Search Console

1. Go to **Admin** → **Data Display** → **Search Console**
2. Click **"Link Search Console"**
3. Select your Search Console property
4. View organic search performance

### Set Up Google Ads Linking

1. Go to **Admin** → **Google Ads links**
2. Click **"Link"**
3. Select your Google Ads account
4. View ad performance data

### Create Custom Segments

1. Go to **Reports** → **Segments**
2. Click **"Create segment"**
3. Define conditions (e.g., "Users who made a reservation")
4. Apply to reports

---

## 📊 Key Metrics to Monitor

| Metric | What It Means | Target |
|--------|---------------|--------|
| **Users** | Unique visitors | Growing trend |
| **Sessions** | Visit sessions | Growing trend |
| **Bounce Rate** | % of single-page sessions | < 50% |
| **Avg. Session Duration** | Average time on site | > 2 minutes |
| **Conversion Rate** | % of reservations | > 2% |
| **Page Views** | Total page views | Growing trend |

---

## 🐛 Troubleshooting

### Events Not Showing

1. Check Measurement ID is correct
2. Verify `useGoogleAnalytics` hook is called in App.tsx
3. Check browser console for errors
4. Use Google Analytics Debugger extension
5. Wait 24-48 hours for data to appear

### Tracking Not Working

```bash
# Check if gtag is loaded
window.gtag  # Should return a function

# Manually fire an event
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'test_label'
});
```

### Data Not Appearing

- GA4 can take 24-48 hours to show data
- Check that events are firing in Real-time report first
- Verify event names match exactly (case-sensitive)
- Check for typos in Measurement ID

---

## 📚 Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9322688)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/10089681)

---

## 🎓 Best Practices

1. **Track meaningful events** — Focus on business goals (reservations, menu views)
2. **Use consistent naming** — Use snake_case for event names
3. **Add context** — Include event_category and event_label
4. **Monitor regularly** — Check reports weekly
5. **Respect privacy** — Anonymize IPs and allow opt-out
6. **Test thoroughly** — Use GA Debugger before going live
7. **Document events** — Keep a list of all tracked events

---

**Last Updated:** June 2024
**Version:** 1.0.0
