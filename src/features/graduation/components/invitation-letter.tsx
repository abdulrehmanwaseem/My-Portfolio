import Image from "next/image";

import { GRADUATION_EVENT } from "@/features/graduation/data/graduation";

import { InvitationActions } from "./invitation-actions";

export function InvitationLetter() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-16 text-center">
      <Image
        className="h-48 w-48 rounded-full object-cover ring-1 ring-border"
        src="/images/graduation/me-graduate-640.webp"
        alt="Truong Nguyen Anh Khoa graduation portrait"
        width={640}
        height={640}
        sizes="192px"
      />

      <h1 className="text-3xl font-semibold">
        Thư Mời Tốt Nghiệp
        <span className="block text-base font-normal text-muted-foreground">
          Graduation Invitation
        </span>
      </h1>

      <div className="flex flex-col gap-1 border-y border-edge py-4 font-mono text-sm">
        <p>📅 10:00, Thứ Năm, 06.08.2026 / Thursday, 6 Aug 2026</p>
        <p>📍 {GRADUATION_EVENT.venueVi}</p>
        <p className="text-muted-foreground">{GRADUATION_EVENT.address}</p>
      </div>

      <InvitationActions />
    </section>
  );
}
