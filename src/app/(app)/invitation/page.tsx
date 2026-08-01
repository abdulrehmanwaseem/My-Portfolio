import type { Metadata } from "next";

import { SITE_INFO } from "@/config/site";
import { InvitationExperience } from "@/features/graduation/components/invitation-experience";
import { InvitationLetter } from "@/features/graduation/components/invitation-letter";

export const metadata: Metadata = {
  title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
  description:
    "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
  alternates: { canonical: `${SITE_INFO.url}/invitation` },
  openGraph: {
    title: "Graduation Invitation / Thư Mời Tốt Nghiệp",
    description:
      "You're invited to Khoa's graduation — 10:00, 6 Aug 2026, Van Lang University.",
    url: `${SITE_INFO.url}/invitation`,
  },
};

export default function InvitationPage() {
  return (
    <>
      <InvitationExperience />
      <InvitationLetter />
    </>
  );
}
