# Cybersecurity Portfolio Website

A premium, professional, and modern personal cybersecurity portfolio website built for showcasing your expertise as a Security Engineer, SOC Analyst, Penetration Tester, and Bug Bounty Hunter.

## Features

### Design & Theme
- Dark enterprise cybersecurity theme with neon blue and cyber green accents
- Glassmorphism UI components with backdrop blur effects
- Terminal-style sections for authentic tech aesthetics
- Animated background with cyber particle effects
- Fully responsive design (Mobile + Tablet + Desktop)
- Clean typography using Inter and JetBrains Mono fonts

### Pages & Sections

1. **Hero Landing Page**
   - Professional introduction with title and tagline
   - Animated stats showcase
   - CTA buttons for projects, resume download, and recruiter demo
   - Cyber-themed background animation

2. **About Me**
   - Professional journey and summary
   - Core interests in cybersecurity
   - Downloadable resume functionality

3. **Skills Dashboard**
   - Categorized skills with animated progress bars:
     - Blue Team (SOC, SIEM, Incident Response)
     - Red Team (Pentesting, OWASP)
     - AI & Automation
     - Cloud & Security Tools
   - Visual proficiency indicators

4. **Featured Projects**
   - Filterable project showcase by category
   - Detailed project cards with:
     - Problem statements
     - Tools and technologies
     - Security concepts
     - GitHub and live demo links
   - Pre-loaded projects:
     - CyberShield X (AI SOC Platform)
     - Website Vulnerability Scanner
     - Bug Bounty Automation Toolkit
     - Phishing Detection System
     - Cloud Misconfiguration Scanner

5. **AI Security Showcase**
   - AI-powered threat detection explanation
   - Live terminal demo showing threat analysis
   - Automated mitigation steps
   - Performance metrics and capabilities

6. **Reports & Write-ups**
   - Professional security assessment samples
   - Pentest reports with CVSS scoring
   - Bug bounty submissions
   - Downloadable PDF reports

7. **Certifications & Learning**
   - Current, in-progress, and planned certifications
   - Learning platform achievements
   - Credential verification links
   - TryHackMe, Hack The Box, CTF stats

8. **Contact Form**
   - Secure contact form with validation
   - Rate limiting protection
   - Social media links
   - Recruiter information section

### Technical Stack

- **Frontend**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI components
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Features**: API Routes, Server Components, Client Components
- **Fonts**: Inter + JetBrains Mono (Google Fonts)

### Database Schema

The application uses Supabase with the following tables:

- `projects` - Portfolio projects with details
- `skills` - Technical skills with proficiency levels
- `certifications` - Professional certifications
- `contact_submissions` - Contact form submissions
- `activity_logs` - User activity tracking

All tables include Row Level Security (RLS) policies for data protection.

### Security Features

- Input validation and sanitization
- Rate limiting on contact form (5 requests per minute)
- OWASP Top 10 awareness
- Environment variable protection
- SQL injection prevention
- XSS protection
- Secure headers

### Pre-loaded Sample Data

The database comes pre-populated with:
- 5 featured cybersecurity projects
- 18 categorized skills across 4 domains
- 6 certifications (3 obtained, 1 in progress, 2 planned)

## Getting Started

The development server will start automatically. Visit the application in your browser to see the portfolio.

## Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Change name, title, and tagline
   - Update statistics

2. **About Section** (`components/sections/About.tsx`):
   - Modify professional journey text
   - Update core interests

3. **Contact Section** (`components/sections/Contact.tsx`):
   - Update email, LinkedIn, and GitHub links
   - Modify location and availability

### Add Your Projects

Add projects directly to the Supabase database or use the Supabase dashboard:

```sql
INSERT INTO projects (title, description, problem_statement, tools, security_concepts, github_url, category, featured)
VALUES (
  'Your Project Title',
  'Short description',
  'Problem being solved',
  '["Tool1", "Tool2"]'::jsonb,
  '["Concept1", "Concept2"]'::jsonb,
  'https://github.com/yourusername/repo',
  'Category',
  true
);
```

### Update Skills

Modify skills in the Supabase `skills` table:

```sql
INSERT INTO skills (name, category, proficiency, icon, order_index)
VALUES ('Skill Name', 'Blue Team', 85, 'Shield', 1);
```

### Add Certifications

Add certifications to the `certifications` table:

```sql
INSERT INTO certifications (name, issuer, date_obtained, credential_id, status)
VALUES (
  'Certification Name',
  'Issuing Organization',
  '2024-01-15',
  'CERT-ID-123',
  'obtained'
);
```

## Deployment

This project is ready for deployment on:
- Netlify (configured with `netlify.toml`)
- Vercel
- Any platform supporting Next.js

## Environment Variables

The following environment variables are already configured in your `.env` file:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## SEO Optimization

The site includes:
- Proper meta tags for SEO
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Optimized performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio template. Feel free to customize it for your own use.

## Support

For issues or questions, refer to the Next.js and Supabase documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
