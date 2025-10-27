import type { CSSProperties } from "react"
import Image from "next/image"

type TeamMember = {
  name: string
  role: string
  photo: string
  desktop: {
    top: string
    left: string
    width: number
    z: number
    patternClass?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Andra Ariloka",
    role: "Content Writer",
    photo: "/team/andra2.png",
    desktop: { top: "6%", left: "20%", width: 230, z: 30, patternClass: "-rotate-6" },
  },
  {
    name: "Zhera",
    role: "Creative Strategist",
    photo: "/team/zhera2.png",
    desktop: { top: "0%", left: "50%", width: 240, z: 40, patternClass: "rotate-3" },
  },
  {
    name: "Iqbal",
    role: "Web Developer",
    photo: "/team/iqbal.png",
    desktop: { top: "6%", left: "80%", width: 230, z: 30, patternClass: "rotate-12" },
  },
  {
    name: "Rizal",
    role: "Graphic Designer",
    photo: "/team/rizal.png",
    desktop: { top: "60%", left: "32%", width: 235, z: 35, patternClass: "-rotate-12" },
  },
  {
    name: "Jiersa Hilal",
    role: "Video Editor",
    photo: "/team/jiersa.png",
    desktop: { top: "65%", left: "64%", width: 255, z: 50, patternClass: "rotate-[45deg]" },
  },
]

const PATTERN_IMAGE = "/images/zrtv-pattern.png"

function TeamMemberCard({ member, variant }: { member: TeamMember; variant: "stacked" | "floating" }) {
  const baseStyle: CSSProperties =
    variant === "floating"
      ? {
          top: member.desktop.top,
          left: member.desktop.left,
          width: member.desktop.width,
          zIndex: member.desktop.z,
        }
      : {
          width: member.desktop.width,
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
          className="relative z-10 mx-auto w-full max-w-[230px] object-contain transition duration-500 ease-out filter grayscale group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:saturate-110"
          priority={variant === "floating"}
        />

        <Image
          src="/team/penutup.svg"
          alt=""
          width={320}
          height={220}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-120px] left-1/2 z-25 w-[140%] max-w-[360px] -translate-x-1/2"
        />

        <Image
          src={PATTERN_IMAGE}
          alt=""
          width={180}
          height={180}
          aria-hidden="true"
          className={`absolute bottom-[-60px] left-1/2 z-20 w-32 -translate-x-1/2 opacity-80 transition duration-500 group-hover:scale-[1.05] group-hover:opacity-100 ${member.desktop.patternClass ?? ""}`}
        />

        <Image
          src={PATTERN_IMAGE}
          alt=""
          width={220}
          height={220}
          aria-hidden="true"
          className={`absolute bottom-[-100px] left-1/2 z-30 w-36 -translate-x-1/2 opacity-60 transition duration-500 group-hover:scale-[1.05] group-hover:opacity-90 ${member.desktop.patternClass ?? ""}`}
        />
      </div>
      <div className="relative z-40 mt-16 space-y-2">
        <div className="text-[0.65rem] uppercase tracking-[0.48em] text-lime-500/80">Zertov Crew</div>
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
            <div className="relative mx-auto h-[560px] w-full max-w-5xl">
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
