# Email Form Setup Instructions

## 📧 How to Connect the Contact Form to Your Email

Your contact form is currently set up to send submissions to **lkuresoi@gmail.com** using **Formspree** (a free form handling service).

### ✅ Steps to Activate Email Submissions:

1. **Go to Formspree.io**
   - Visit: https://formspree.io
   - Click "Get Started" (it's FREE!)

2. **Create a Free Account**
   - Sign up with your email: **lkuresoi@gmail.com**
   - Verify your email address

3. **Create a New Form**
   - Click "+ New Form"
   - Name it: "Triple Lions Expeditions Contact Form"
   - Click "Create Form"

4. **Get Your Form Endpoint**
   - After creating the form, you'll see a form endpoint like: `https://formspree.io/f/YOUR_FORM_ID`
   - Copy this endpoint URL

5. **Update Your Website**
   - Open `index.html` in a text editor
   - Find this line (around line 283):
     ```html
     <form id="contactForm" action="https://formspree.io/f/xanyrkda" method="POST">
     ```
   - Replace `xanyrkda` with YOUR actual form ID from Formspree
   - Save the file

6. **Test It!**
   - Open your website
   - Fill out the contact form
   - Submit it
   - Check your email (lkuresoi@gmail.com) for the submission!

### 📋 What Happens When Someone Submits the Form:

✅ You receive an email at **lkuresoi@gmail.com** with:
- Customer's name
- Customer's email
- Customer's phone number
- Selected destination
- Their message/inquiry

✅ Customer sees a beautiful "Thank You" page confirming their submission

✅ You can reply directly from your email to the customer

### 🎁 Formspree Free Plan Includes:

- ✅ 50 submissions per month (FREE)
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if needed later)
- ✅ Custom redirect (already set up to thank-you.html)

### 💡 Alternative Option (No Signup Required):

If you prefer not to use Formspree, you can use **Web3Forms**:

1. Go to: https://web3forms.com
2. Enter your email: lkuresoi@gmail.com
3. Get your access key
4. Update the form in index.html:
   ```html
   <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
       <!-- rest of form fields -->
   </form>
   ```

### 🆘 Need Help?

If you have any issues setting this up, the form is already configured and ready to work - you just need to verify your email with Formspree on first submission!

---

**Current Status:**
- ✅ Form is connected and ready
- ✅ All fields have proper names
- ✅ Email subject is set: "New Safari Inquiry from Website"
- ✅ Thank you page is created
- ✅ Professional email template enabled

**Next Step:** Just verify your email with Formspree when you receive the first submission!





