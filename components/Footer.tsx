import { Shield, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg gradient-text">Pranay Kumar Mallem Cyber Security Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Driven Cybersecurity Engineer specializing in SOC operations, threat detection, and penetration testing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Pranay229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranay-kumar-mallem-912636281"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="mailto:security@example.com"
                className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Pranay Kumar Mallem. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and Supabase</p>
        </div>
      </div>
    </footer>
  );
}
