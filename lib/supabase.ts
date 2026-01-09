import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export interface ActivityLog {
  action: string;
  page?: string;
  metadata?: Record<string, any>;
}
