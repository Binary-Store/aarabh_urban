"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleItems, setVisibleItems] = useState(6)
  const portfolioRef = useRef(null)
  const isInView = useInView(portfolioRef, { once: true, amount: 0.2 })

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Prashthan Bungalows",
      location: "Kamrej",
      developer: "Anjani Developers",
      image: "/img/portfolio-1.jpg",
      category: "architectural",
    },
    {
      id: 2,
      title: "Prashthan Bungalows",
      location: "Kamrej",
      developer: "Anjani Developers",
      image: "/img/portfolio-2.jpg",
      category: "architectural",
    },
    {
      id: 3,
      title: "Bhaktikunj Bungalows",
      location: "Junagadh",
      developer: "Nikunjbhai Ponkiya",
      image: "/img/portfolio-3.jpg",  
      category: "architectural",
    },
    {
      id: 4,
      title: "Bhaktikunj Bungalows",
      location: "Surat",
      developer: "Harshbhai Kakadiya",
      image: "/img/portfolio-4.jpg",
      category: "architectural",
    },
    {
      id: 5,
      title: "Modern Living Room",
      location: "Surat",
      image: "/img/Interior_2.jpg",
      category: "interior",
      hideDetails: true,
    },
    {
      id: 6,
      title: "Contemporary Kitchen",
      location: "Ahmedabad",
      image: "/img/Interior_1.jpg",
      category: "interior",
      hideDetails: true,
    },
    {
      id: 7,
      title: "Luxury Bedroom",
      location: "Mumbai",
      image: "/img/Interior_9.jpg",
      category: "interior",
      hideDetails: true,
    },
    // {
    //   id: 8,
    //   title: "Office Space",
    //   location: "Surat",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "interior",
    //   hideDetails: true,
    // },
    {
      id: 9,
      title: "Urban Park",
      location: "Vadodara",
      developer: "City Development Authority",
      image: "/placeholder.svg?height=600&width=800",
      category: "urban",
    },
    {
      id: 10,
      title: "Commercial Complex",
      location: "Surat",
      developer: "Metro Developers",
      image: "/placeholder.svg?height=600&width=800",
      category: "urban",
    },
    {
      id: 11,
      title: "Residential Apartment",
      location: "Ahmedabad",
      developer: "Iscon Group",
      image: "/placeholder.svg?height=600&width=800",
      category: "architectural",
    },
    {
      id: 12,
      title: "Dining Area",
      location: "Rajkot",
      image: "/placeholder.svg?height=600&width=800",
      category: "interior",
      hideDetails: true,
    },
    {
      id: 13,
      title: "City Planning Project",
      location: "Gandhinagar",
      developer: "Gujarat Urban Development",
      image: "/placeholder.svg?height=600&width=800",
      category: "urban",
    },
    {
      id: 14,
      title: "Modern Bathroom",
      location: "Surat",
      image: "/placeholder.svg?height=600&width=800",
      category: "interior",
      hideDetails: true,
    },
    {
      id: 15,
      title: "Villa Project",
      location: "Dumas",
      developer: "Luxury Homes",
      image: "/placeholder.svg?height=600&width=800",
      category: "architectural",
    },
    {
      id: 16,
      title: "Township Development",
      location: "Bharuch",
      developer: "Urban Spaces",
      image: "/placeholder.svg?height=600&width=800",
      category: "urban",
    },
  ]

  // Filter items based on active filter
  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  // Load more items
  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredItems.length))
  }

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItems(6)
  }, [activeFilter])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        </div>
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our <span className="text-primary">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our diverse collection of architectural, urban planning, and interior design projects
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                <Link href="#portfolio">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    View Projects
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Projects
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Browse through our completed projects across various domains of architecture and design
            </p>
          </motion.div>

          {/* Filter Tabs - Desktop */}
          <div className="hidden md:block mb-12">
            <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="architectural"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Architectural Projects
                </TabsTrigger>
                <TabsTrigger
                  value="urban"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Urban Projects
                </TabsTrigger>
                <TabsTrigger
                  value="interior"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Interior Projects
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Filter Dropdown - Mobile */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full p-3 pr-10 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Projects</option>
                <option value="architectural">Architectural Projects</option>
                <option value="urban">Urban Projects</option>
                <option value="interior">Interior Projects</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <motion.div key={item.id} variants={fadeIn} custom={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.location}</p>
                      <div className="mt-4">
                        {/* <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                          <Link href={`/portfolio/${item.id}`}>
                            <span className="flex items-center text-xs">
                              View Details
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                          </Link>
                        </Button> */}
                      </div>
                    </div>
                  </div>
                  {!item.hideDetails && (
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <div className="text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Location:</span> {item.location}
                        </p>
                        {item.developer && (
                          <p>
                            <span className="font-medium">Developer:</span> {item.developer}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button onClick={loadMore} className="rounded-full bg-primary hover:bg-primary/90">
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center"
                >
                  Load More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Featured Project
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Take a closer look at one of our most significant architectural achievements
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Featured Project"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Prashthan Bungalows</h3>
              <p className="text-lg text-gray-600 mb-6">
                A premium residential project featuring luxurious bungalows designed with a perfect blend of modern
                aesthetics and functional spaces. This project showcases our commitment to creating living spaces that
                enhance quality of life.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p>Kamrej, Surat</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Developer</h4>
                  <p>Anjani Developers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Project Area</h4>
                  <p>25,000 sq. ft.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Completion</h4>
                  <p>2022</p>
                </div>
              </div>

              {/* <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/portfolio/1">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    View Project Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
            </div>
            <motion.div
              className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
                <p className="text-base md:text-lg text-gray-300">
                  Let's collaborate to bring your vision to life. Our team of experts is ready to transform your ideas
                  into reality.
                </p>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

