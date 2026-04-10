import Link from "next/link"
import { Mail, Phone, MapPin, ThumbsUp } from "lucide-react"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    {
      href: "https://www.instagram.com/alex_saqib",
      icon: BsInstagram,
    },
    {
      href: "https://www.tiktok.com/@saqib_alex",
      icon: BsTiktok,
    },
    {
      href: "https://web.facebook.com/alexsaqibathletic",
      icon: FaFacebook,
    },
  ]

  return (
    <footer className="bg-secondary-bg border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black uppercase tracking-tighter leading-none">
                Alex <span className="text-orange">Saqib</span>
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium fitness coaching and personalized programs designed to
              transform your body and mindset. Join the elite community today.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 group rounded-full border border-white/10 flex items-center justify-center text-foreground bg-white/20 backdrop-blur-sm hover:bg-orange hover:border-orange transition-all duration-300"
                  >
                    <Icon className="size-5 " />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-8 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  About Club
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/transformation"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-8 text-foreground">
              Programs
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/programs#bodybuilding"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Bodybuilding
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#weight-loss"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#powerlifting"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Powerlifting
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#personal-training"
                  className="text-muted-foreground hover:text-orange transition-colors text-sm uppercase tracking-widest"
                >
                  Personal Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-8 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-orange shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Fitness Ave, Muscle Beach
                  <br />
                  California, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-orange shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-orange shrink-0" />
                <span className="text-muted-foreground text-sm">
                  hello@alexsaqib.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            (c) {currentYear} Alex Saqib Elite Fitness. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
