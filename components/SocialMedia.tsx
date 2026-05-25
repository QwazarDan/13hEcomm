import type { SVGProps } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

const IconBase = ({
  children,
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-5 h-5", className)}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </IconBase>
);

const Github = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.5-4.1-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
  </IconBase>
);

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.2 2.3 4.2 5.4v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8Z" />
  </IconBase>
);

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M24 12A12 12 0 1 0 10.1 23.9v-8.5H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.4h-2.8v8.5A12 12 0 0 0 24 12Z" />
  </IconBase>
);

const Slack = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M5.1 15.2a2.5 2.5 0 1 1-2.5 2.5v-2.5h2.5Zm1.2 0a2.5 2.5 0 0 1 5 0v6.2a2.5 2.5 0 1 1-5 0v-6.2ZM8.8 5.1a2.5 2.5 0 1 1-2.5-2.5h2.5v2.5Zm0 1.2a2.5 2.5 0 0 1 0 5H2.6a2.5 2.5 0 1 1 0-5h6.2Zm10.1 2.5a2.5 2.5 0 1 1 2.5-2.5v2.5h-2.5Zm-1.2 0a2.5 2.5 0 0 1-5 0V2.6a2.5 2.5 0 1 1 5 0v6.2Zm-2.5 10.1a2.5 2.5 0 1 1 2.5 2.5h-2.5v-2.5Zm0-1.2a2.5 2.5 0 0 1 0-5h6.2a2.5 2.5 0 1 1 0 5h-6.2Z" />
  </IconBase>
);

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName,
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName,
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
