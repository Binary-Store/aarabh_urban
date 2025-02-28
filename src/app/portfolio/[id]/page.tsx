"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, MapPin, User, Grid, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// This would typically come from a database or API
const getProjectData = (id: string) => {
  // Sample project data
  const projects = [
    {
      id: "1",
      title: "Prashthan Bungalows",
      location: "Kamrej, Surat",
      developer: "Anjani Developers",
      completionDate: "2022",
      area: "25,000 sq. ft.",
      description:
        "A premium residential project featuring luxurious bungalows designed with a perfect blend of modern aesthetics and functional spaces. This project showcases our commitment to creating living spaces that enhance quality of life.",
      longDescription:
        "Prashthan Bungalows is a prestigious residential development that redefines luxury living. Set in the serene locale of Kamrej, these bungalows offer a perfect retreat from the urban hustle while maintaining proximity to essential amenities. Each bungalow is meticulously designed to maximize space utilization while ensuring aesthetic appeal.\n\nThe architectural design emphasizes natural light and ventilation, creating bright and airy interiors. High ceilings, large windows, and open floor plans contribute to a sense of spaciousness. The exteriors feature a contemporary design language with clean lines and modern materials, creating a striking visual presence.\n\nSustainability was a key consideration in the design process. The bungalows incorporate energy-efficient systems, rainwater harvesting, and landscaping that requires minimal water consumption. These features not only reduce the environmental footprint but also result in long-term cost savings for the residents.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      features: [
        "Contemporary architectural design",
        "Spacious living areas",
        "Modern kitchen with premium fittings",
        "Landscaped gardens",
        "Energy-efficient systems",
        "Smart home automation",
        "Premium finishes throughout",
        "Ample parking space",
      ],
      category: "architectural",
    },
    // More projects would be defined here
  ]

  return projects.find((project) => project.id === id) || projects[0]
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Link href="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                Portfolio
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              <span className="text-white">{project.title}</span>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200">Project Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Developer</h4>
                      <p className="text-gray-600">{project.developer}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Completion Date</h4>
                      <p className="text-gray-600">{project.completionDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Grid className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Project Area</h4>
                      <p className="text-gray-600">{project.area}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                          <div className="h-2 w-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center justify-center"
                      >
                        Inquire About This Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Project Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Image Gallery */}
              <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-1 rounded-full">
                  <p className="text-sm font-medium">
                    {currentImageIndex + 1} / {project.images.length}
                  </p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4 mb-12">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                      currentImageIndex === index ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Project Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                {project.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between">
                <Button asChild variant="outline" className="mb-4 sm:mb-0">
                  <Link href="/portfolio">
                    <motion.span
                      whileHover={{ x: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Portfolio
                    </motion.span>
                  </Link>
                </Button>

                <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
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
              Related Projects
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">Explore more projects similar to {project.title}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={`Related Project ${item}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">Related Project {item}</h3>
                      <p className="text-gray-200 text-sm">Surat, Gujarat</p>
                      <div className="mt-4">
                        <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                          <Link href={`/portfolio/${item}`}>
                            <span className="flex items-center text-xs">
                              View Details
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

