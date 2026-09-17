"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Images,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

/* ================================================================
   PROJECT MEDIA

   Add images only for projects that have visual material.

   Example:

   public/
   └── images/
       └── projects/
           ├── arise/
           │   ├── 01.jpg
           │   ├── 02.jpg
           │   ├── 03.jpg
           │   └── 04.jpg
           │
           └── valley/
               ├── 01.jpg
               └── 02.jpg

   Projects not listed here automatically use the typography-based
   project panel.
================================================================ */

const projectMedia: Record<
  string,
  {
    src: string;
    alt: string;
  }[]
> = {
  ARISE: [
    {
      src: "/images/projects/arise/01.jpg",
      alt: "ARISE application",
    },
    {
      src: "/images/projects/arise/02.jpg",
      alt: "ARISE navigation interface",
    },
    {
      src: "/images/projects/arise/03.jpg",
      alt: "ARISE augmented reality navigation",
    },
    {
      src: "/images/projects/arise/04.jpg",
      alt: "ARISE system interface",
    },
  ],

  "The Valley Digital": [
    {
      src: "/images/projects/valley/01.jpg",
      alt: "The Valley Digital homepage",
    },
    {
      src: "/images/projects/valley/02.jpg",
      alt: "The Valley Digital article page",
    },
  ],

  "IoT Hand-Gesture Robotic Arm": [
    {
      src: "/images/projects/robotic-arm/01.jpg",
      alt: "IoT hand-gesture controlled robotic arm",
    },
    {
      src: "/images/projects/robotic-arm/02.jpg",
      alt: "Robotic arm control interface",
    },
  ],
};

/* ================================================================
   MAIN SECTION
================================================================ */

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:px-10
          lg:px-16
          lg:py-24
        "
      >
        {/* ========================================================
            SECTION HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        >
          <p
            className="
              text-[10px]
              font-bold
              tracking-[0.08em]
              text-primary-bright
              uppercase
              sm:text-xs
            "
          >
            Project Experiences
          </p>

          <motion.div
            className="
              mt-2
              h-[7px]
              w-[78%]
              max-w-[620px]
              origin-left
              bg-accent
              sm:mt-2.5
            "
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
          />

          <h2
            className="
              mt-2
              text-3xl
              font-black
              tracking-[-0.045em]
              text-foreground
              sm:text-4xl
              lg:text-[2.75rem]
            "
          >
            Projects with{" "}
            <span className="text-accent">purpose.</span>
          </h2>
        </motion.div>

        {/* ========================================================
            PROJECT LIST
        ======================================================== */}

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PROJECT CARD
================================================================ */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const images = projectMedia[project.title] ?? [];

  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  /* ==============================================================
     GALLERY FUNCTIONS
  ============================================================== */

  function openViewer() {
    if (images.length === 0) return;

    setCurrentImage(0);
    setViewerOpen(true);
  }

  function closeViewer() {
    setViewerOpen(false);
  }

  function nextImage() {
    setCurrentImage((current) =>
      current >= images.length - 1 ? 0 : current + 1
    );
  }

  function previousImage() {
    setCurrentImage((current) =>
      current <= 0 ? images.length - 1 : current - 1
    );
  }

  /* ==============================================================
     KEYBOARD CONTROLS
  ============================================================== */

  useEffect(() => {
    if (!viewerOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [viewerOpen]);

  return (
    <>
      {/* ==========================================================
          PROJECT CARD
      ========================================================== */}

      <motion.article
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease,
        }}
        whileHover={{
          y: -2,
        }}
        className="
          group
          overflow-hidden
          rounded-[5px]
          border
          border-border
          bg-surface
          transition-shadow
          duration-500
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
          dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)]
        "
      >
        <div className="grid min-h-[260px] lg:grid-cols-2">
          {/* ======================================================
              PROJECT VISUAL
          ====================================================== */}

          {images.length > 0 ? (
            <button
              type="button"
              onClick={openViewer}
              aria-label={`Open ${project.title} project gallery`}
              className="
                group/image
                relative
                min-h-[230px]
                overflow-hidden
                border-b
                border-border
                bg-background-secondary
                text-left
                outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-inset
                lg:min-h-[300px]
                lg:border-r
                lg:border-b-0
              "
            >
              {/* Main image */}

              <img
                src={images[0].src}
                alt={images[0].alt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover/image:scale-[1.035]
                "
              />

              {/* Hover overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/0
                  transition-colors
                  duration-500
                  group-hover/image:bg-black/25
                "
              />

              {/* View gallery */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  flex
                  translate-y-2
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-black/35
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  tracking-wide
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover/image:translate-y-0
                  group-hover/image:opacity-100
                "
              >
                <Images
                  size={13}
                  strokeWidth={1.8}
                />

                VIEW GALLERY
              </div>

              {/* Image count */}

              {images.length > 1 && (
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    px-2.5
                    py-1
                    text-[9px]
                    font-semibold
                    tracking-wide
                    text-white
                    backdrop-blur-md
                  "
                >
                  {images.length} IMAGES
                </div>
              )}

              {/* Technical corner markers */}

              <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/30" />

              <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/30" />

              <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/30" />

              <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/30" />
            </button>
          ) : (
            /* ====================================================
               NO IMAGE — TYPOGRAPHIC PROJECT PANEL
            ==================================================== */

            <div
              className="
                relative
                flex
                min-h-[230px]
                items-end
                overflow-hidden
                border-b
                border-border
                bg-background-secondary
                p-6
                lg:min-h-[300px]
                lg:border-r
                lg:border-b-0
              "
            >
              {/* Technical grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-30
                  [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              {/* Subtle blue atmosphere */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_25%_30%,rgba(37,99,235,0.08),transparent_45%)]
                "
              />

              {/* Large background number */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-4
                  select-none
                  text-[6rem]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-foreground/[0.035]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Project identity */}

              <motion.div
                className="relative z-10"
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.15,
                  ease,
                }}
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.16em]
                    text-accent
                    uppercase
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                    mt-2
                    max-w-[320px]
                    text-2xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-foreground
                    sm:text-3xl
                  "
                >
                  {project.title}
                </h3>

                <div className="mt-3 h-[3px] w-16 bg-accent" />
              </motion.div>

              {/* Technical corner markers */}

              <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-foreground/20" />

              <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-foreground/20" />

              <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-foreground/20" />

              <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-foreground/20" />
            </div>
          )}

          {/* ======================================================
              PROJECT INFORMATION
          ====================================================== */}

          <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-5">
            <div>
              {/* Metadata */}

              <div className="flex items-center justify-between gap-4">
                <span
                  className="
                    text-[8px]
                    font-bold
                    tracking-wide
                    text-accent
                    uppercase
                    sm:text-[9px]
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    text-[8px]
                    font-bold
                    tracking-wide
                    text-accent
                    uppercase
                    sm:text-[9px]
                  "
                >
                  {project.year}
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  mt-4
                  max-w-[430px]
                  text-xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-[1.15rem]
                  lg:text-[1.25rem]
                "
              >
                {project.title}

                <br />

                <span>{project.subtitle}</span>
              </h3>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-[460px]
                  text-[10px]
                  font-medium
                  leading-[1.45]
                  text-muted
                  sm:text-[11px]
                "
              >
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies
                  .slice(0, 4)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-primary/70
                        px-2
                        py-0.5
                        text-[7px]
                        font-semibold
                        tracking-wide
                        text-foreground
                        uppercase
                        sm:text-[8px]
                      "
                    >
                      {technology}
                    </span>
                  ))}
              </div>
            </div>

            {/* ====================================================
                OPTIONAL PROJECT STUDY
            ==================================================== */}

            {project.showStudy && (
              <div className="mt-5">
                <a
                  href={project.studyHref}
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-1
                    text-[10px]
                    font-medium
                    text-primary-bright
                    transition-colors
                    hover:text-foreground
                    sm:text-[11px]
                  "
                >
                  View project study

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5
                    "
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.article>

      {/* ==========================================================
          FULLSCREEN PROJECT GALLERY
      ========================================================== */}

      <AnimatePresence>
        {viewerOpen && images.length > 0 && (
          <motion.div
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-xl
              sm:p-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeViewer();
              }
            }}
          >
            {/* ====================================================
                VIEWER
            ==================================================== */}

            <motion.div
              className="
                relative
                flex
                h-full
                max-h-[850px]
                w-full
                max-w-6xl
                flex-col
                items-center
                justify-center
              "
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              {/* ==================================================
                  PROJECT TITLE
              ================================================== */}

              <div className="absolute left-0 top-0 z-20">
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.15em]
                    text-yellow-300
                    uppercase
                  "
                >
                  {project.title}
                </p>

                <p className="mt-1 text-xs font-medium text-white/60">
                  {currentImage + 1} / {images.length}
                </p>
              </div>

              {/* ==================================================
                  CLOSE
              ================================================== */}

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close project gallery"
                className="
                  absolute
                  right-0
                  top-0
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                "
              >
                <X
                  size={19}
                  strokeWidth={1.8}
                />
              </button>

              {/* ==================================================
                  MAIN IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-0
                  w-full
                  flex-1
                  items-center
                  justify-center
                  px-10
                  py-16
                  sm:px-16
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentImage].src}
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className="
                      max-h-full
                      max-w-full
                      rounded-sm
                      object-contain
                      shadow-2xl
                    "
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.25,
                      ease,
                    }}
                  />
                </AnimatePresence>

                {/* Previous */}

                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous project image"
                    className="
                      absolute
                      left-0
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition
                      hover:bg-white/20
                    "
                  >
                    <ArrowLeft
                      size={19}
                      strokeWidth={1.8}
                    />
                  </button>
                )}

                {/* Next */}

                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next project image"
                    className="
                      absolute
                      right-0
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition
                      hover:bg-white/20
                    "
                  >
                    <ArrowRight
                      size={19}
                      strokeWidth={1.8}
                    />
                  </button>
                )}
              </div>

              {/* ==================================================
                  THUMBNAILS
              ================================================== */}

              {images.length > 1 && (
                <div
                  className="
                    flex
                    max-w-full
                    gap-2
                    overflow-x-auto
                    pb-2
                  "
                >
                  {images.map((image, imageIndex) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setCurrentImage(imageIndex)}
                      aria-label={`View project image ${
                        imageIndex + 1
                      }`}
                      className={`
                        relative
                        h-14
                        w-20
                        shrink-0
                        overflow-hidden
                        rounded-sm
                        border
                        transition-all
                        duration-300

                        ${
                          imageIndex === currentImage
                            ? "border-yellow-300 opacity-100"
                            : "border-white/15 opacity-50 hover:opacity-90"
                        }
                      `}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}