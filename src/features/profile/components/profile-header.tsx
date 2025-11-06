import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from Pakistan">
          {/* Flag of Pakistan */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -left-px h-8 sm:h-9"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 513 357.071"
          >
            <rect width="513" height="357.071" fill="#fff" />

            <rect x="122.835" width="390.165" height="357.071" fill="#01411C" />

            <path
              fill="#fff"
              fillRule="nonzero"
              d="M290.758 76.663C247.631 90.44 216.4 130.838 216.4 178.534c0 59.057 47.875 106.931 106.931 106.931 43.252 0 80.504-25.681 97.345-62.626a98.756 98.756 0 01-4.89 4.661c-40.459 35.966-102.416 32.322-138.381-8.138s-32.32-102.417 8.139-138.382a99.87 99.87 0 015.214-4.317zm71.563 21.855l45.044 50.672-66.225-14.516 62.11-27.179-34.273 58.495-6.656-67.472z"
            />

            <rect
              fill="none"
              stroke="#CCC"
              strokeWidth=".64"
              strokeMiterlimit="22.926"
              x=".32"
              y=".319"
              width="512.359"
              height="356.43"
            />
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
