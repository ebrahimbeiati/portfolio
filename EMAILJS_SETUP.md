# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form actually send real emails.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 🔧 Step 2: Create Email Service

1. **Add Email Service:**
   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

2. **Get Service ID:**
   - Copy the Service ID (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. **Create Template:**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template:

```html
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

2. **Get Template ID:**
   - Copy the Template ID (e.g., `template_xyz789`)

## 🔑 Step 4: Get Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your Public Key (e.g., `user_def456`)

## ⚙️ Step 5: Update Your Code

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'      // Replace with your actual Public Key
);
```

**Example:**
```javascript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  formRef.current,
  'user_def456'
);
```

## 🧪 Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Check the browser console for any errors

## 🔒 Security Notes

- ✅ Public Key is safe to expose in frontend code
- ✅ EmailJS handles authentication securely
- ✅ No backend required
- ✅ Free tier includes 200 emails/month

## 🎯 Troubleshooting

**Common Issues:**

1. **"Service not found" error:**
   - Double-check your Service ID
   - Ensure your email service is properly connected

2. **"Template not found" error:**
   - Verify your Template ID
   - Check that template variables match form field names

3. **"Invalid public key" error:**
   - Confirm your Public Key is correct
   - Check your EmailJS account status

4. **Form not sending:**
   - Check browser console for errors
   - Verify all IDs are correctly replaced
   - Ensure form field names match template variables

## 📊 EmailJS Free Tier Limits

- 200 emails per month
- 2 email services
- 5 email templates
- Perfect for portfolio websites!

## 🎉 Success!

Once configured, your contact form will:
- ✅ Send real emails to your inbox
- ✅ Include all form data
- ✅ Work without any backend
- ✅ Be completely secure

Your portfolio contact form is now fully functional! 🚀 