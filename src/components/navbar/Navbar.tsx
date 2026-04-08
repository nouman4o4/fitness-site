"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Apply", href: "/apply" },
  { name: "Transformation", href: "/transformation" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-xs border-border py-3"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="w-full max-w-350 mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-orange transition-colors">
              Alex <span className="text-accent">Saqib</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground leading-none mt-1">
              Elite Fitness
            </span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium uppercase tracking-widest transition-colors hover:text-orange relative group",
                    pathname === link.href ? "text-orange" : "text-foreground",
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full",
                      pathname === link.href && "w-full",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <Button
                className="border-accent cursor-pointer bg-background text-foreground rounded
               hover:bg-accent font-bold uppercase tracking-wider px-8 transition-transform hover:scale-105 active:scale-95"
              >
                Book a session
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-background border-border p-0 w-full sm:w-[350px]"
                >
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border flex items-center justify-between">
                      <span className="text-xl font-black uppercase tracking-tighter">
                        Alex <span className="text-primary">Saqib</span>
                      </span>
                    </div>
                    <div className="flex-1 overflow-y-auto py-8 px-6">
                      <ul className="space-y-6">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={cn(
                                "text-2xl font-bold uppercase tracking-widest flex items-center justify-between group",
                                pathname === link.href
                                  ? "text-orange"
                                  : "text-foreground",
                              )}
                            >
                              {link.name}
                              <ChevronRight
                                className={cn(
                                  "h-5 w-5 transition-transform group-hover:translate-x-1",
                                  pathname === link.href
                                    ? "text-orange"
                                    : "text-muted-foreground",
                                )}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 border-t border-border">
                      <Button className="w-full hover:bg-orange/90 text-black font-bold uppercase py-8 text-lg rounded-none">
                        Book a session
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
