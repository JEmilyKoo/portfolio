'use client'

import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export interface Project {
  title: string
  period: string
  role: string
  description: string
  metrics?: {
    label: string
    value: string
  }[]
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string[]
  video?: string
  troubleshooting?: {
    title: string
    content: string
  }[]
  team: string
}

export default function ProjectCard({
  title,
  period,
  role,
  description,
  metrics,
  technologies,
  githubUrl,
  demoUrl,
  image,
  team,
  troubleshooting,
}: Project) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!image || !isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % image.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [image, isAutoPlaying])

  const handlePrevImage = () => {
    if (!image) return
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length)
  }

  const handleNextImage = () => {
    if (!image) return
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev + 1) % image.length)
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
    setIsAutoPlaying(false)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!image) return
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length)
  }

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!image) return
    setCurrentImageIndex((prev) => (prev + 1) % image.length)
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-surface  rounded-2xl overflow-hidden shadow-custom border border-border  hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-text  mb-2">{title}</h3>
              <div className="flex items-center gap-4 text-subText flex-col ">
                <div className="flex items-center gap-4 text-subText">
                  <span>{period}</span>
                  <span>|</span>
                  <span>{team}</span>
                </div>
                <span className="text-left text-sm whitespace-pre-wrap">
                  {role}
                </span>
                <span></span>
              </div>
            </div>

            <p className="text-text ">{description}</p>

            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-background  rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-primary ">
                      {metric.value}
                    </div>
                    <div className="text-sm text-subText ">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background  text-primary  rounded-lg hover:bg-primary/10  transition-colors duration-200">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90  transition-colors duration-200">
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          <div
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background cursor-pointer"
            onClick={handleImageClick}>
            {image && image.length > 0 ? (
              <>
                {' '}
                {image && (
                  <div>
                    <Image
                      src={image[0]}
                      fill
                      className="object-cover opacity-10"
                      alt={`${title} - 이미지 배경 ${currentImageIndex + 1}`}
                    />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={image[currentImageIndex]}
                    alt={`${title} - 이미지 ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {image.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrevImage()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="이전 이미지">
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNextImage()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="다음 이미지">
                      <FaChevronRight />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {image.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(index)
                            setIsAutoPlaying(false)
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? 'bg-white'
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`이미지 ${index + 1}로 이동`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <div className="p-2 absolute top-2 bg-white rounded-full opacity-80 right-2 flex items-center gap-2">
                  <FaSearchPlus className="text-primary text-xl" />
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-subText ">
                이미지 없음
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <div className="w-3/4 flex flex-wrap gap-2 justify-center items-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-primary/10  text-primary  rounded-full border border-primary/20 ">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {troubleshooting && troubleshooting.length > 0 && (
          <div className="p-6 mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-text">트러블 슈팅</h4>
            {troubleshooting.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-4">
                <h5 className="font-medium text-primary mb-2">{item.title}</h5>
                <div className="text-sm text-subText whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.article>

      <AnimatePresence>
        {isModalOpen && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={handleModalClose}>
            <div className="relative w-[80vw] h-[80vh]">
              <button
                onClick={handleModalClose}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="닫기">
                <FaTimes size={24} />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={image[currentImageIndex]}
                  alt={`${title} - 이미지 ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
              </div>
              {image.length > 1 && (
                <>
                  <button
                    onClick={handleModalPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="이전 이미지">
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleModalNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="다음 이미지">
                    <FaChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {image.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`이미지 ${index + 1}로 이동`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
