# EmailJS Setup Guide for ZIVAH Medical Hub

## ⚠️ Troubleshooting 400 Error

You're getting a 400 error, which means there's a configuration issue. Follow these steps:

## Step 1: Check Your Template Settings

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on template `template_dqzklwv`
3. Verify the **Settings** tab:

### Required Settings:
```
Service: service_9ly15oq
Template Name: (any name you want)
```

## Step 2: Configure Email Template Fields

Click the **Content** tab and set these fields:

### Email Fields:
```
To Email:    {{user_email}}     ← CRITICAL! Must be exactly this
From Name:   ZIVAH Medical Hub
From Email:  zivahmedicalhub@gmail.com
Subject:     Welcome to ZIVAH Medical Hub
Reply To:    zivahmedicalhub@gmail.com
```

### BCC Email (Optional):
```
zivahmedicalhub@gmail.com    ← If you want to receive a copy
```

## Step 3: Template Content (HTML)

Use this exact HTML in the **Content** section:

```html
<div style="font-family: system-ui, Arial, sans-serif; color: #056080; max-width: 600px; margin: 0 auto; background: #FEFEFE; padding: 20px; border-radius: 8px;">

  <!-- Welcome Title -->
  <h2 style="text-align: center; color: #056080; margin: 0;">
    Welcome to ZIVAH Medical Hub
  </h2>

  <!-- Subtitle -->
  <p style="text-align: center; font-size: 14px; margin-top: 5px; color: #6FC18B;">
    Your trusted companion for reliable healthcare services.
  </p>

  <!-- Body -->
  <div style="font-size: 14px; color: #056080; margin-top: 20px; line-height: 1.6;">
    <p>Dear {{user_name}},</p>

    <p>
      Thank you for joining <strong>ZIVAH Medical Hub</strong>.  
      We are committed to providing you with seamless access to trusted medical services, 
      accurate information, and a supportive care experience.
    </p>

    <p>
      As a member of our community, you will receive updates, health tips,  
      personalised assistance, and priority support whenever you need it.
    </p>

    <p>
      If you have any questions or require assistance, please feel free to contact our support team.  
      We are here to help you with care and professionalism.
    </p>

    <p>Warm regards,<br>
    <strong>ZIVAH Medical Hub Team</strong></p>
  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #6FC18B;">
    &copy; 2024 ZIVAH Medical Hub. All rights reserved.
    <br>
    <span style="color: #056080;">We Care You</span>
  </div>

</div>
```

## Step 4: Test Your Template

1. Click **Test it** button in EmailJS dashboard
2. Fill in test values:
   - `user_name`: Test User
   - `user_email`: your-test-email@gmail.com
3. Click **Send Test**
4. Check if you receive the email

## Step 5: Verify Service Connection

1. Go to: https://dashboard.emailjs.com/admin
2. Click on **Email Services**
3. Verify `service_9ly15oq` is connected to Gmail
4. Make sure the status shows as **Connected** (green)

## Common Issues:

### Issue 1: "To Email" is wrong
❌ Wrong: `zivahmedicalhub@gmail.com` (static email)
✅ Correct: `{{user_email}}` (dynamic variable)

### Issue 2: Variable names don't match
The code sends: `user_name` and `user_email`
Template must use: `{{user_name}}` and `{{user_email}}`

### Issue 3: Service not authorized
- Gmail might need re-authorization
- Check if you need to allow "Less secure apps" or use App Password

## Your Current Configuration:

```javascript
Service ID:  service_9ly15oq
Template ID: template_dqzklwv
Public Key:  jGnqprOvcwd-CZAW4
```

## Parameters Being Sent:

```javascript
{
    to_email: 'zivahmedicalhub@gmail.com',  // Not used in template
    user_name: 'Name from form',             // Used as {{user_name}}
    user_email: 'Email from form',           // Used as {{user_email}} in "To Email"
    message: 'New subscription request...'   // Optional
}
```

## After Making Changes:

1. Save the template in EmailJS
2. Refresh your website: http://localhost:5173/
3. Try submitting the form again
4. Check browser console (F12) for any new errors

---

Need more help? Check the EmailJS documentation: https://www.emailjs.com/docs/
