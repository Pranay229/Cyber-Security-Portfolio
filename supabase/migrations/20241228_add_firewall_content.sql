/*
  # Add Comprehensive Firewall Content to Portfolio
  
  This migration adds:
  1. Firewall-related skills (4 skills)
  2. Firewall-focused projects (3 projects)
  3. Firewall certifications (2 certifications)
  
  Date: December 28, 2024
*/

-- ============================================
-- PART 1: ADD FIREWALL SKILLS
-- ============================================

-- Skill 1: Firewall Management & Configuration
INSERT INTO skills (name, category, proficiency, icon, order_index)
VALUES (
  'Firewall Management',
  'Blue Team',
  90,
  'Shield',
  10
);

-- Skill 2: Network Segmentation
INSERT INTO skills (name, category, proficiency, icon, order_index)
VALUES (
  'Network Segmentation',
  'Blue Team',
  88,
  'Network',
  11
);

-- Skill 3: IDS/IPS Configuration
INSERT INTO skills (name, category, proficiency, icon, order_index)
VALUES (
  'IDS/IPS Systems',
  'Blue Team',
  85,
  'AlertTriangle',
  12
);

-- Skill 4: Packet Filtering & Analysis
INSERT INTO skills (name, category, proficiency, icon, order_index)
VALUES (
  'Packet Analysis',
  'Blue Team',
  87,
  'Filter',
  13
);

-- ============================================
-- PART 2: ADD FIREWALL PROJECTS
-- ============================================

-- Project 1: Enterprise Firewall Rule Optimization System
INSERT INTO projects (
  title,
  description,
  problem_statement,
  tools,
  security_concepts,
  github_url,
  category,
  featured,
  order_index
)
VALUES (
  'Enterprise Firewall Rule Optimization System',
  'Automated system for analyzing and optimizing firewall rules across enterprise networks, reducing rule conflicts and improving security posture.',
  'Enterprise networks often accumulate thousands of firewall rules over time, leading to rule shadowing, conflicts, and performance degradation. Manual auditing is time-consuming and error-prone, creating security gaps and compliance issues.',
  '["Python", "Palo Alto Networks", "Ansible", "PostgreSQL", "Grafana", "Docker"]'::jsonb,
  '["Defense in Depth", "Zero Trust Architecture", "Rule Optimization", "Security Automation", "Compliance Auditing"]'::jsonb,
  'https://github.com/yourusername/firewall-optimizer',
  'SOC',
  true,
  5
);

-- Project 2: Network Segmentation & Micro-Segmentation Implementation
INSERT INTO projects (
  title,
  description,
  problem_statement,
  tools,
  security_concepts,
  github_url,
  category,
  featured,
  order_index
)
VALUES (
  'Network Segmentation & Micro-Segmentation Implementation',
  'Comprehensive network segmentation strategy implementation with VLAN design, firewall policy enforcement, and micro-segmentation for critical assets.',
  'Flat network architectures allow lateral movement after initial compromise. Organizations need proper network segmentation to contain breaches, protect critical assets, and meet compliance requirements like PCI-DSS and HIPAA.',
  '["Cisco ASA", "pfSense", "Wireshark", "VLAN", "Python", "Terraform", "GNS3"]'::jsonb,
  '["Network Isolation", "Least Privilege", "DMZ Architecture", "East-West Traffic Control", "Zero Trust Segmentation"]'::jsonb,
  'https://github.com/yourusername/network-segmentation',
  'SOC',
  true,
  6
);

-- Project 3: Automated Firewall Log Analysis & Threat Detection
INSERT INTO projects (
  title,
  description,
  problem_statement,
  tools,
  security_concepts,
  github_url,
  category,
  featured,
  order_index
)
VALUES (
  'AI-Powered Firewall Log Analysis & Threat Detection',
  'Machine learning system for real-time firewall log analysis, detecting anomalous traffic patterns, port scans, and potential C2 communications with 95% accuracy.',
  'Traditional firewall logs generate millions of events daily, making manual analysis impossible. Security teams need automated threat detection to identify sophisticated attacks hidden in normal traffic patterns.',
  '["Python", "Scikit-learn", "ELK Stack", "Splunk", "FortiGate", "Kafka", "TensorFlow"]'::jsonb,
  '["SIEM Integration", "Anomaly Detection", "Threat Intelligence", "Machine Learning", "Behavioral Analysis", "IOC Detection"]'::jsonb,
  'https://github.com/yourusername/firewall-ml-detection',
  'AI Security',
  true,
  7
);

-- ============================================
-- PART 3: ADD FIREWALL CERTIFICATIONS
-- ============================================

-- Certification 1: Palo Alto Networks Certified Network Security Administrator (PCNSA)
INSERT INTO certifications (
  name,
  issuer,
  date_obtained,
  credential_id,
  credential_url,
  status
)
VALUES (
  'Palo Alto Networks Certified Network Security Administrator (PCNSA)',
  'Palo Alto Networks',
  '2024-06-15',
  'PCNSA-2024-123456',
  'https://www.paloaltonetworks.com/services/education/certification',
  'obtained'
);

-- Certification 2: Fortinet Network Security Expert (NSE 4)
INSERT INTO certifications (
  name,
  issuer,
  date_obtained,
  credential_id,
  credential_url,
  status
)
VALUES (
  'Fortinet Network Security Expert Level 4 (NSE 4)',
  'Fortinet',
  '2024-03-20',
  'NSE4-FWF-2024-789012',
  'https://training.fortinet.com/local/staticpage/view.php?page=certifications',
  'obtained'
);

-- Certification 3: Cisco Certified Network Associate Security (CCNA Security) - In Progress
INSERT INTO certifications (
  name,
  issuer,
  status
)
VALUES (
  'Cisco Certified Network Associate Security (CCNA Security)',
  'Cisco',
  'in_progress'
);

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Verify skills were added
-- SELECT * FROM skills WHERE name LIKE '%Firewall%' OR name LIKE '%Network%' OR name LIKE '%IDS%' OR name LIKE '%Packet%';

-- Verify projects were added
-- SELECT title, category, featured FROM projects WHERE title LIKE '%Firewall%' OR title LIKE '%Network Segmentation%';

-- Verify certifications were added
-- SELECT name, issuer, status FROM certifications WHERE name LIKE '%Palo Alto%' OR name LIKE '%Fortinet%' OR name LIKE '%CCNA%';
