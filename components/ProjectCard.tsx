'use client';

import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string[];
  video?: string;
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
  video,
}: Project) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!image || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [image, isAutoPlaying]);

  const handlePrevImage = () => {
    if (!image) return;
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  };

  const handleNextImage = () => {
    if (!image) return;
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-custom border border-border dark:border-neutral-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-text dark:text-white mb-2">{title}</h3>
            <div className="flex items-center gap-4 text-subText dark:text-gray-400">
              <span>{period}</span>
              <span>•</span>
              <span>{role}</span>
            </div>
          </div>

          <p className="text-text dark:text-gray-200">{description}</p>

          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-background dark:bg-neutral-900 rounded-xl p-4 text-center"
                >
                  <div className="text-lg font-bold text-primary dark:text-blue-400">
                    {metric.value}
                  </div>
                  <div className="text-sm text-subText dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-primary/10 dark:bg-blue-400/10 text-primary dark:text-blue-400 rounded-full border border-primary/20 dark:border-blue-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background dark:bg-neutral-900 text-primary dark:text-blue-400 rounded-lg hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors duration-200"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-blue-400 text-white rounded-lg hover:bg-primary/90 dark:hover:bg-blue-400/90 transition-colors duration-200"
              >
                <FaExternalLinkAlt />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background dark:bg-neutral-900">
          {video && (
            <video
              src={video}
              controls
              className="w-full h-full object-cover"
              poster={image?.[0]}
            />
          )}
          {image && image.length > 0 ? (
            <>
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
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="이전 이미지"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="다음 이미지"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {image.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsAutoPlaying(false);
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
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-subText dark:text-gray-400">
              이미지 없음
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
} 