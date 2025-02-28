"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function TeamPage() {
  const [isOpen, setIsOpen] = useState(false)

  const teamMembers = [
    {
      name: "John Doe",
      position: "Architect",
      image: "/img/img-7.png",
      email: "john@aarambhurban.com",
      phone:"+91 9909010621"
    },
    {
      name: "Jane Smith",
      position: "Urban Planner",
      image: "/img/img-8.jpg",
      email: "jane@aarambhurban.com",
      phone:"+91 9624001504"
    },
    {
      name: "Michael Johnson",
      position: "Urban Planner",
      image: "/img/img-9.png",
      email: "michael@aarambhurban.com",
      phone:"+91 9099439689"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        {/* Team Hero Section - Updated to match portfolio style */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
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
                Our <span className="text-primary">Team</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Meet the talented professionals behind Aarambh Urban's exceptional architectural designs and urban
                planning solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                  <a href="#team-members">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Meet Our Experts
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <section id="team-members" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Our Experts
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6">
                A team of dedicated professionals committed to excellence in architecture and design
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="transition-all duration-300"
                >
                  <Card className="overflow-hidden shadow-md hover:shadow-xl">
                    <div className="relative h-[42vh] md:h-[52vh] lg:h-[52vh]">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.position}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span>{member.email}</span>
                        </a>
                        <a
                          href={`https://wa.me/${member.phone.replace(/\s+/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 bg-gray-50">
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

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                  We're always looking for talented individuals to join our team. If you're passionate about architecture
                  and urban planning, we'd love to hear from you.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
