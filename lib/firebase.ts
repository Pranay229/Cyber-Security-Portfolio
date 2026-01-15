
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

import { getAnalytics, isSupported } from "firebase/analytics";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initialize Analytics conditionally
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { db, analytics };

// Interface definitions (Moved from supabase.ts)
export interface Project {
    id: string;
    title: string;
    description: string;
    problem_statement: string;
    tools: string[];
    security_concepts: string[];
    github_url?: string;
    live_url?: string;
    screenshots: string[];
    featured: boolean;
    category: string;
    order_index: number;
    created_at: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    proficiency: number;
    icon?: string;
    order_index: number;
    created_at: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date_obtained?: string;
    credential_id?: string;
    credential_url?: string;
    status: 'obtained' | 'in_progress' | 'planned';
    badge_url?: string;
    created_at: string;
}

export interface ContactSubmission {
    name: string;
    email: string;
    subject: string;
    message: string;
    source?: string;
}
