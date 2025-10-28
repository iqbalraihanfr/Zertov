import { IoLogoVercel } from "react-icons/io5"
import {
  SiGit,
  SiSass,
  SiReact,
  SiNotion,
  SiMongodb,
  SiFirebase,
  SiMarkdown,
  SiPrettier,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGoogleanalytics,
  SiFigma,
  SiAdobecreativecloud,
} from "react-icons/si"
import type { IconType } from "react-icons"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { brandColors, colors } from "@/lib/utils/colors"

type TechIconsProps = {
  tags?: string
  className?: string
  iconWrapperClassName?: string
  iconClassName?: string
}

export function TechIcons({
  tags = "",
  className,
  iconWrapperClassName,
  iconClassName,
}: TechIconsProps): React.JSX.Element {
  const techsArray = tags
    ? tags
        .split(",")
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean)
    : []

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {techsArray.map((tech) => {
        const techItem = techList[tech]
        if (!techItem) return null

        const { name, Icon } = techItem

        return (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <li>
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border text-lg transition duration-300",
                    colors.border.primary,
                    colors.background.card,
                    "hover:-translate-y-1 hover:border-[#0006AA]/50 hover:bg-[#0006AA]/5",
                    iconWrapperClassName,
                  )}
                  style={{ color: brandColors.zaffre }}
                >
                  <Icon className={cn("shrink-0", iconClassName)} aria-hidden />
                </div>
              </li>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              className="rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg"
              style={{ backgroundColor: brandColors.zaffre, color: "#ffffff" }}
            >
              {name}
            </TooltipContent>
          </Tooltip>
        )
      })}
    </ul>
  )
}

type TechList = Record<
  string,
  {
    name: string
    Icon: IconType
  }
>

const techList: TechList = {
  react: {
    name: "React",
    Icon: SiReact,
  },
  nextjs: {
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  scss: {
    name: "SCSS",
    Icon: SiSass,
  },
  javascript: {
    name: "JavaScript",
    Icon: SiJavascript,
  },
  typescript: {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  nodejs: {
    name: "Node.js",
    Icon: SiNodedotjs,
  },
  firebase: {
    name: "Firebase",
    Icon: SiFirebase,
  },
  mongodb: {
    name: "MongoDB",
    Icon: SiMongodb,
  },
  swr: {
    name: "SWR",
    Icon: IoLogoVercel,
  },
  mdx: {
    name: "MDX",
    Icon: SiMarkdown,
  },
  prettier: {
    name: "Prettier",
    Icon: SiPrettier,
  },
  analytics: {
    name: "Google Analytics",
    Icon: SiGoogleanalytics,
  },
  git: {
    name: "Git",
    Icon: SiGit,
  },
  notion: {
    name: "Notion API",
    Icon: SiNotion,
  },
  design: {
    name: "Design Systems",
    Icon: SiFigma,
  },
  branding: {
    name: "Branding",
    Icon: SiAdobecreativecloud,
  },
}

export const TECH_ICON_MAP = techList
