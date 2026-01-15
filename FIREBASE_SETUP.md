# Firebase Setup Guide for Portfolio

This guide explains how to set up your Firebase project to work with this portfolio application.

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** (or "Create a project").
3. Name your project (e.g., `cyber-portfolio`).
4. You can disable Google Analytics for this project as it's not strictly necessary.
5. Click **"Create project"**.

## 2. Register Your App

1. Once your project is ready, you'll be on the Project Overview page.
2. Click the **Web** icon (looks like `</>`) to register a new app.
3. App nickname: `portfolio-web`.
4. Click **"Register app"**.
5. You will see your `firebaseConfig` object. Keep this page open or copy the values.

## 3. Configure Environment Variables

Create or update your `.env` (or `.env.local`) file in the root of your project with the keys from the previous step:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 4. Set Up Firestore Database

1. In the Firebase Console left menu, click **"Build"** -> **"Firestore Database"**.
2. Click **"Create database"**.
3. Choose a location (e.g., `nam5 (us-central)` or whatever is closest to you).
4. **Security Rules**: Start in **Test mode** (allows read/write for 30 days) to get started quickly.
   *   *Note: For production, you should configure rules to allow public read but restrict write access.*

### Recommended Security Rules (Production)

Go to the **Rules** tab in Firestore and replace the contents with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // PUBLIC: Allow anyone to read projects, skills, and certifications
    match /projects/{document} {
      allow read: if true;
      allow write: if false; // Only admin (via Console) should write
    }
    match /skills/{document} {
      allow read: if true;
      allow write: if false;
    }
    match /certifications/{document} {
      allow read: if true;
      allow write: if false;
    }
    
    // CONTACT FORM: Allow anyone to create a message, but not read/edit
    match /contact_submissions/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## 5. Add Data (Collections)

You need to manually create 3 collections in your Firestore Database using the Console (or create a seed script).

### Collection: `projects`
Add documents with these fields:
*   `title` (string)
*   `description` (string)
*   `problem_statement` (string)
*   `tools` (array of strings)
*   `security_concepts` (array of strings)
*   `github_url` (string, optional)
*   `live_url` (string, optional)
*   `category` (string) - e.g., "Web Security", "Network Security"
*   `featured` (boolean)
*   `order_index` (number)
*   `created_at` (string)

### Collection: `skills`
Add documents with these fields:
*   `name` (string)
*   `category` (string) - e.g., "Blue Team", "Red Team"
*   `proficiency` (number) - 0 to 100
*   `icon` (string, optional) - Name of a Lucide icon
*   `order_index` (number)

### Collection: `certifications`
Add documents with these fields:
*   `name` (string)
*   `issuer` (string)
*   `status` (string) - "obtained", "in_progress", or "planned"
*   `date_obtained` (string, optional)
*   `credential_id` (string, optional)
*   `credential_url` (string, optional)
*   `created_at` (string)

## 6. Verify

1. Run your local server: `npm run dev`
2. Visit the pages. If you added data in Firebase, it should appear on your site.
3. Submit the contact form. Check the `contact_submissions` collection in Firebase to see the new entry.
