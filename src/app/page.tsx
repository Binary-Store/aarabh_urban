"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const portfolioItems = [
    {
      id: 1,
      title: "Prashthan Bungalows",
      image: "/img/portfolio-1.jpg",
      link: "/portfolio",
    },
    {
      id: 2,
      title: "Prashthan Bungalows",
      image: "/img/portfolio-2.jpg",
      link: "/portfolio",
    },
    {
      id: 3,
      title: "Prashthan Bungalows",
      image: "/img/portfolio-3.jpg",
      link: "/portfolio",
    },
    {
      id: 4,
      title: "Prashthan Bungalows",
      image: "/img/portfolio-4.jpg",
      link: "/portfolio",
    },
  ]

  const services = [
    {
      icon: "/img/ic_1.png",
      title: "Architectural Planning",
      description:
        "At Aarambh, we bring dreams to life with innovative architectural designs that unite creativity, functionality, and inspiration.",
    },
    {
      icon: "/img/ic_2.png",
      title: "Urban Planning",
      description: "Creating urban environments that inspire community, connectivity, and a better quality of life.",
    },
    {
      icon: "/img/ic_3.png",
      title: "Interior Designing",
      description:
        "Curating stunning interiors that balance aesthetics, comfort, and practicality with meticulous attention to detail.",
    },
    {
      icon: "/img/ic_4.png",
      title: "Landscaping",
      description:
        "Bringing nature to your doorstep with exceptional landscaping designs that harmonize beauty, functionality, and environmental sustainability.",
    },
    {
      icon: "/img/ic_5.png",
      title: "Project Planning and Development",
      description:
        "Driving successful projects from Concept to Completion through strategic planning, meticulous coordination, and efficient development.",
    },
    {
      icon: "/img/ic_6.png",
      title: "Renovation and Restoration",
      description: "Preserving the past and enhancing the future through expert renovation and restoration services.",
    },
    {
      icon: "/img/ic_7.png",
      title: "Furnishing",
      description: "Creating a seamless fusion of design and comfort with exceptional furnishings for every space.",
    },
    {
      icon: "/img/ic_8.png",
      title: "Construction management",
      description:
        "Ensuring successful project execution through expert construction management, coordination, and quality control.",
    },
  ]

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
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              <span className="text-primary">Aarambh</span>
              <span className="text-white">Urban</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div style={{ opacity, scale, y }} className="absolute inset-0 bg-black/50 z-10"></motion.div>
          <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/img/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            className="container mx-auto px-4 sm:px-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {/* Architecture & Urban Planning */}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {/* Creating inspiring spaces that prioritize sustainability and cultural context */}
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {/* <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <ChevronDown className="h-10 w-10 text-white animate-bounce" />
          </motion.div>
        </section>

        {/* About Section Preview */}
        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} custom={0}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                      Architecture & Urban Planning
                      <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary"></span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      "Aarambh is a dynamic firm specializing in exceptional architectural designs and urban planning
                      solutions. With a talented multidisciplinary team, we create inspiring spaces that prioritize
                      sustainability and cultural context."
                    </p>
                    <div className="mt-8">
                      <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                        <Link href="/about">
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex items-center"
                          >
                            Learn More About Us
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div className="flex justify-center" variants={fadeIn} custom={1}>
                    <motion.div
                      // className="relative w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-full p-4"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Image
                        src="/img/logo_svg.svg"
                        alt="Aarambh Urban Logo"
                        width={256}
                        height={256}
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                We offer a comprehensive range of architectural and design services to bring your vision to life
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
                  variants={fadeIn}
                  custom={index}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Image
                        src={service.icon || "/placeholder.svg?height=64&width=64"}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-primary font-medium flex items-center justify-center hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/services">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Why Choose Us
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                We're committed to excellence in every aspect of our work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-50 rounded-xl p-6 border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled architects, designers, and planners with extensive experience in
                  creating exceptional spaces.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-6 border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Designs</h3>
                <p className="text-gray-600">
                  We push the boundaries of design to create unique, forward-thinking solutions that stand out and
                  inspire.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-6 border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Client-Focused Approach</h3>
                <p className="text-gray-600">
                  We prioritize understanding your needs and aspirations to deliver results that exceed your
                  expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section Preview */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Latest Work
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">Explore our recent architectural projects</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {portfolioItems.map((item, index) => (
                <motion.div key={item.id} variants={fadeIn} custom={index}>
                  <Card className="overflow-hidden border-0 shadow-lg group">
                    <CardContent className="p-0 relative">
                      <motion.div
                        className="relative h-72 md:h-96"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                          <div className="mt-4">
                            <Link
                              href={item.link}
                              className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                            >
                              View Project
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/portfolio">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
                  <p className="text-base md:text-lg text-gray-300">
                    Contact us today to schedule a consultation and discover how our services can bring your vision to
                    life.
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
                        Get in Touch
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

