import type { CSSProperties } from "react"
import Image from "next/image"

type TeamMember = {
  name: string
  role: string
  photo: string
  scale?: number
  desktop: {
    top: string
    left: string
    z: number
    cloudClass?: string
  }
}

const BASE_CARD_WIDTH = 260
const BASE_IMAGE_WIDTH = 220
const BASE_CLOUD_WIDTH = 260

const CLOUD_IMAGE = "/icons/awan.svg"

const teamMembers: TeamMember[] = [
  {
    name: "Andra Ariloka",
    role: "Content Writer",
    photo: "/team/andra2.png",
    desktop: { top: "6%", left: "18%", z: 30 },
  },
  {
    name: "Zhera Azkia",
    role: "Creative Strategist",
    photo: "/team/zhera2.png",
    desktop: { top: "0%", left: "50%", z: 40 },
  },
  {
    name: "Iqbal Raihan F.R.",
    role: "Web Developer",
    photo: "/team/iqbal.png",
    desktop: { top: "6%", left: "82%", z: 30 },
  },
  {
    name: "Rizal Saputra",
    role: "Graphic Designer",
    photo: "/team/rizal.png",
    desktop: { top: "60%", left: "28%", z: 35 },
  },
  {
    name: "Rafif Ramadhan",
    role: "Production Lead",
    photo: "/team/rafif.png",
    desktop: { top: "62%", left: "54%", z: 45 },
  },
  {
    name: "Jiersa Hilal",
    role: "Video Editor",
    photo: "/team/jiersa.png",
    desktop: { top: "65%", left: "78%", z: 50 },
  },
]

function TeamMemberCard({ member, variant }: { member: TeamMember; variant: "stacked" | "floating" }) {
  const scale = member.scale ?? 1
  const cardWidth = BASE_CARD_WIDTH * scale
  const imageWidth = BASE_IMAGE_WIDTH * scale
  const cloudWidth = BASE_CLOUD_WIDTH * scale
  const cloudOffset = cloudWidth * 0.32

  const baseStyle: CSSProperties =
    variant === "floating"
      ? {
          top: member.desktop.top,
          left: member.desktop.left,
          width: `${cardWidth}px`,
          maxWidth: "90vw",
          zIndex: member.desktop.z,
        }
      : {
          width: `${cardWidth}px`,
          maxWidth: "90vw",
        }

  return (
    <div
      className={`group relative mx-auto flex flex-col items-center text-center ${
        variant === "floating" ? "md:absolute md:-translate-x-1/2" : ""
      }`}
      style={baseStyle}
    >
      <div className="relative flex w-full flex-col items-center">
        <Image
          src={member.photo}
          alt={member.name}
          width={420}
          height={540}
          className="relative z-10 mx-auto object-contain transition duration-500 ease-out filter grayscale group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:saturate-110"
          style={{ width: `${imageWidth}px`, maxWidth: "100%" }}
          priority={variant === "floating"}
        />

        <Image
          src={CLOUD_IMAGE}
          alt=""
          width={360}
          height={240}
          aria-hidden="true"
          className={`pointer-events-none top-0 absolute left-1/2 z-20 -translate-x-1/2 transition duration-500 group-hover:scale-[1.05] ${member.desktop.cloudClass ?? ""}`}
          style={{ width: `${cloudWidth}px`, bottom: `-${Math.round(cloudOffset)}px` }}
        />

      </div>
      <div className="relative z-40 mt-14 space-y-2">
        <div className="text-xl font-semibold text-neutral-900">{member.name}</div>
        <div className="text-sm font-medium uppercase text-lime-600">{member.role}</div>
      </div>
    </div>
  )
}

export function OurTeam() {
  return (
    <section id="our-team" className="relative overflow-hidden bg-white text-neutral-900">
      <div className="container mx-auto mb-36 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-lime-500/50 px-4 py-2 text-xs uppercase tracking-[0.45em] text-lime-600/80">
            Our Team
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            The people behind the Zertov experience
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            A multidisciplinary squad of storytellers, designers, and technologists crafting immersive visuals and
            digital products that keep brands moving forward.
          </p>
        </div>

        <div className="mt-20 space-y-14">
          <div className="grid gap-14 md:hidden">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} variant="stacked" />
            ))}
          </div>

          <div className="relative hidden md:block">
            <div className="relative mx-auto h-[620px] w-full max-w-5xl">
              {teamMembers.map((member) => (
                <TeamMemberCard key={`${member.name}-desktop`} member={member} variant="floating" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
