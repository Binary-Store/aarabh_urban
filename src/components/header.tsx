"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeService, setActiveService] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Architectural Planning", href: "/services#architectural", id: "architectural" },
        { name: "Urban Planning", href: "/services#urban", id: "urban" },
        { name: "Interior Designing", href: "/services#interior", id: "interior" },
        { name: "Landscaping", href: "/services#landscaping", id: "landscaping" },
        { name: "Project Planning", href: "/services#planning", id: "planning" },
        { name: "Renovation", href: "/services#renovation", id: "renovation" },
        { name: "Furnishing", href: "/services#furnishing", id: "furnishing" },
        { name: "Construction", href: "/services#construction", id: "construction" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHoveredItem(null)
      }
    }

    // Handle hash change
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setActiveService(hash)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("hashchange", handleHashChange)

    // Handle initial load
    handleHashChange()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Check if the current path matches the nav item or its dropdown items
  const isActive = (item: any) => {
    if (pathname === item.href) return true
    if (item.dropdown) {
      if (pathname.startsWith(item.href)) {
        // If we're on the services page, check if any dropdown item is active
        const hash = window.location.hash.replace("#", "")
        return item.dropdown.some((dropItem: any) => dropItem.id === hash)
      }
    }
    return false
  }

  // Check if a specific dropdown item is active
  const isDropdownItemActive = (dropItem: any) => {
    if (pathname === "/services") {
      const hash = window.location.hash.replace("#", "")
      return dropItem.id === hash
    }
    return false
  }

  // Handle dropdown for mobile
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const handleServiceClick = (dropItem: any, e: React.MouseEvent) => {
    e.preventDefault()
    setHoveredItem(null)
    setActiveService(dropItem.id)

    if (pathname === "/services") {
      // If already on services page, just update hash and scroll
      window.history.pushState(null, "", dropItem.href)
      const sectionId = "services"
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
      // Dispatch a custom event that services.tsx can listen to
      window.dispatchEvent(new CustomEvent("serviceSelected", { detail: dropItem.id }))
    } else {
      // If on another page, navigate to services page with hash
      window.location.href = dropItem.href
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="brand-name text-2xl font-bold">
              <span className="text-primary">Aarambh</span>
              <span className={`transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-white"}`}>
                Urban
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                ref={item.name === hoveredItem ? dropdownRef : null}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${
                    isActive(item)
                      ? "text-primary font-semibold"
                      : `${scrolled ? "text-gray-800" : "text-white"} hover:text-primary`
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        hoveredItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className={`block px-4 py-2  hover:bg-gray-100 hover:text-primary transition-colors ${
                              isDropdownItemActive(dropItem) ? "text-primary font-medium text-sm" : "text-sm text-gray-800"
                            }`}
                            onClick={(e) => handleServiceClick(dropItem, e)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Button asChild size="sm" className="ml-2 rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">
                <span className="flex items-center">
                  Get in Touch
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`lg:hidden ${scrolled ? "text-gray-800" : "text-white"}`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="brand-name text-xl font-bold">
                      <span className="text-primary">Aarambh</span>
                      <span>Urban</span>
                    </span>
                  </Link>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2" />
                </div>

                <nav className="flex-1 overflow-auto py-4">
                  <div className="flex flex-col px-4 space-y-1">
                    {navItems.map((item) => (
                      <div key={item.name} className="py-1">
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                              className={`flex items-center justify-between w-full py-2 text-left ${
                                isActive(item) ? "text-primary font-semibold" : "text-gray-800"
                              }`}
                            >
                              <span className="text-lg font-medium">{item.name}</span>
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  mobileExpanded === item.name ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {mobileExpanded === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 py-2 border-l-2 border-gray-200 ml-2 space-y-2">
                                    {item.dropdown.map((dropItem) => (
                                      <Link
                                        key={dropItem.name}
                                        href={dropItem.href}
                                        className={`block py-1 text-gray-600 hover:text-primary transition-colors ${
                                          isDropdownItemActive(dropItem) ? "text-primary font-medium" : ""
                                        }`}
                                        onClick={(e) => {
                                          handleServiceClick(dropItem, e)
                                          setIsOpen(false)
                                        }}
                                      >
                                        {dropItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block py-2 text-lg font-medium transition-colors ${
                              isActive(item) ? "text-primary font-semibold" : "text-gray-800 hover:text-primary"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                <div className="p-4 border-t">
                  <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <span className="flex items-center justify-center">
                        Get in Touch
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

