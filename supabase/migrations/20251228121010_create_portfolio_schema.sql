/*
  # Cybersecurity Portfolio Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Short description
      - `problem_statement` (text) - Problem being solved
      - `tools` (jsonb) - Array of tools/technologies used
      - `security_concepts` (jsonb) - Array of security concepts
      - `github_url` (text) - GitHub repository link
      - `live_url` (text) - Live demo link
      - `screenshots` (jsonb) - Array of screenshot URLs
      - `featured` (boolean) - Featured project flag
      - `category` (text) - Project category
      - `created_at` (timestamptz)
      - `order_index` (integer) - Display order

    - `skills`
      - `id` (uuid, primary key)
      - `name` (text) - Skill name
      - `category` (text) - Blue Team, Red Team, AI, Cloud
      - `proficiency` (integer) - Percentage 0-100
      - `icon` (text) - Icon name or identifier
      - `created_at` (timestamptz)
      - `order_index` (integer)

    - `certifications`
      - `id` (uuid, primary key)
      - `name` (text) - Certification name
      - `issuer` (text) - Issuing organization
      - `date_obtained` (date) - Date obtained
      - `credential_id` (text) - Credential ID
      - `credential_url` (text) - Verification URL
      - `status` (text) - obtained, in_progress, planned
      - `badge_url` (text) - Badge image URL
      - `created_at` (timestamptz)

    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `source` (text) - Form source/page
      - `ip_address` (text) - Sender IP
      - `user_agent` (text) - Browser user agent
      - `status` (text) - new, read, responded
      - `created_at` (timestamptz)

    - `activity_logs`
      - `id` (uuid, primary key)
      - `action` (text) - Action performed
      - `page` (text) - Page visited
      - `user_id` (uuid) - User ID if authenticated
      - `ip_address` (text) - Visitor IP
      - `user_agent` (text) - Browser info
      - `metadata` (jsonb) - Additional data
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for projects, skills, and certifications
    - Authenticated write access for portfolio owner
    - Contact submissions insertable by anyone, readable by owner
    - Activity logs insertable by anyone, readable by owner
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  problem_statement text NOT NULL,
  tools jsonb DEFAULT '[]'::jsonb,
  security_concepts jsonb DEFAULT '[]'::jsonb,
  github_url text,
  live_url text,
  screenshots jsonb DEFAULT '[]'::jsonb,
  featured boolean DEFAULT false,
  category text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  proficiency integer NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
  icon text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create certifications table
CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  issuer text NOT NULL,
  date_obtained date,
  credential_id text,
  credential_url text,
  status text DEFAULT 'obtained' CHECK (status IN ('obtained', 'in_progress', 'planned')),
  badge_url text,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  source text DEFAULT 'contact_form',
  ip_address text,
  user_agent text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at timestamptz DEFAULT now()
);

-- Create activity_logs table
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,
  page text,
  user_id uuid,
  ip_address text,
  user_agent text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Projects policies: Public read, authenticated write
CREATE POLICY "Anyone can view published projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Skills policies: Public read, authenticated write
CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert skills"
  ON skills FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update skills"
  ON skills FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete skills"
  ON skills FOR DELETE
  TO authenticated
  USING (true);

-- Certifications policies: Public read, authenticated write
CREATE POLICY "Anyone can view certifications"
  ON certifications FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert certifications"
  ON certifications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update certifications"
  ON certifications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete certifications"
  ON certifications FOR DELETE
  TO authenticated
  USING (true);

-- Contact submissions policies: Anyone can submit, only authenticated can read
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Activity logs policies: Anyone can log, only authenticated can read
CREATE POLICY "Anyone can create activity logs"
  ON activity_logs FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view activity logs"
  ON activity_logs FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_skills_order ON skills(order_index);
CREATE INDEX IF NOT EXISTS idx_certifications_status ON certifications(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(created_at DESC);
