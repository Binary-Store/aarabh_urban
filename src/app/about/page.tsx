"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

export default function AboutPage() {
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: "John Doe",
      position: "Principal Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John is a seasoned architect with over 15 years of experience in designing sustainable and innovative spaces.",
    },
    {
      name: "Jane Smith",
      position: "Urban Planner",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jane specializes in creating urban environments that foster community and connectivity.",
    },
    {
      name: "Michael Johnson",
      position: "Interior Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael brings spaces to life with his keen eye for detail and passion for creating functional yet beautiful interiors.",
    },
  ]

  const achievements = [
    { number: "15+", label: "Years of Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Design Awards" },
  ]

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
        {/* About Hero Section - Updated to match portfolio style */}
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

          <div className="container mx-auto px-4 relative z-10 pt-40 pb-20">
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
                About <span className="text-primary">Aarambh Urban</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Learn more about our journey, our team, and our vision for creating exceptional architectural designs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                  <a href="#our-story">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Discover Our Story
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Content Section */}
        <section id="our-story" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                  Our Story
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary"></span>
                </h2>
                <p className="text-lg mb-4 text-gray-600">
                  Aarambh Urban was founded with a vision to create architectural designs that not only meet functional
                  requirements but also inspire and elevate the human experience.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  Our journey began with a small team of passionate architects and has grown into a dynamic firm
                  specializing in exceptional architectural designs and urban planning solutions.
                </p>
                <p className="text-lg text-gray-600">
                  With a talented multidisciplinary team, we create inspiring spaces that prioritize sustainability and
                  cultural context. Our commitment to client satisfaction and design excellence sets us apart in
                  transforming spaces and shaping vibrant communities.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/img/logo_svg.svg"
                    alt="Aarambh Urban Office"
                    width={512}
                        height={512}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.number}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section ref={valuesRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Our Values
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                These core principles guide our approach to every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We constantly push the boundaries of design, embracing new technologies and methodologies to create
                    forward-thinking architectural solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                  <p className="text-gray-600">
                    We are committed to environmentally responsible design practices that minimize ecological impact and
                    promote resource efficiency.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
                  <p className="text-gray-600">
                    We prioritize understanding our clients' needs and aspirations, ensuring that our designs align with
                    their vision and exceed their expectations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
                  <p className="text-base md:text-lg text-gray-300">
                    Contact us today to schedule a consultation and discover how our expertise can bring your vision to
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
    </div>
  )
}

