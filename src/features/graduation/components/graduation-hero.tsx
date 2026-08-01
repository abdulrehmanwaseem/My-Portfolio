import Image from "next/image";
import Link from "next/link";

import { GraduationCountdown } from "@/features/graduation/components/graduation-countdown";
import { GRADUATION_EVENT } from "@/features/graduation/data/graduation";
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";

export function GraduationHero() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle className="font-mono text-sm tracking-wider">
          🎓 CLASS OF 2026
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-after flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        <Image
          className="h-40 w-40 shrink-0 rounded-lg object-cover ring-1 ring-border"
          src="/images/graduation/me-graduate-640.webp"
          alt="Truong Nguyen Anh Khoa graduation portrait"
          width={640}
          height={640}
          sizes="160px"
          priority
        />

        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">Tôi sắp tốt nghiệp!</p>
          <p className="text-sm text-muted-foreground">I&apos;m graduating!</p>

          <GraduationCountdown className="mt-2" />

          <p className="mt-2 text-sm">
            10:00 · Thứ Năm, 06.08.2026
            <br />
            <span className="text-muted-foreground">
              {GRADUATION_EVENT.venueVi}
            </span>
          </p>

          <Link
            className="mt-3 inline-flex w-fit items-center gap-1 border border-edge px-3 py-1.5 font-mono text-sm hover:bg-accent"
            href="/invitation"
          >
            Xem thư mời / See invitation →
          </Link>
        </div>
      </div>
    </Panel>
  );
}
