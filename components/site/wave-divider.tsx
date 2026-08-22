import { cn } from "@/lib/utils";

export function WaveDivider({
  className,
  fill = "fill-sand-50",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-none", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        className={cn("h-[50px] w-full md:h-[80px]", flip && "rotate-180")}
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 90 360 0 600 20C840 40 900 85 1140 55C1300 35 1380 15 1440 25V90H0V40Z"
          className={fill}
        />
      </svg>
    </div>
  );
}
