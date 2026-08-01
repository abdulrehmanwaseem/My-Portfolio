import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const GRADUATION_EVENT = {
  startISO: "2026-08-06T10:00:00+07:00",
  endISO: "2026-08-06T12:00:00+07:00",
  timeZone: "Asia/Ho_Chi_Minh",
  titleVi: "Lễ Tốt Nghiệp của Khoa",
  titleEn: "Khoa's Graduation Ceremony",
  venueVi: "Trường Đại học Văn Lang (Cơ sở chính)",
  venueEn: "Van Lang University (Main Campus)",
  address: "69/68 Đ. Đặng Thuỳ Trâm, An Nhơn, Hồ Chí Minh 70000, Việt Nam",
} as const;

export const GRADUATION_TARGET_MS = dayjs(GRADUATION_EVENT.startISO).valueOf();

export function getMapsUrl(): string {
  const q = encodeURIComponent(GRADUATION_EVENT.address);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function formatIcsDate(iso: string): string {
  return dayjs(iso).utc().format("YYYYMMDDTHHmmss") + "Z";
}

export function getGoogleCalendarUrl(): string {
  const dates = `${formatIcsDate(GRADUATION_EVENT.startISO)}/${formatIcsDate(GRADUATION_EVENT.endISO)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: GRADUATION_EVENT.titleEn,
    dates,
    details: GRADUATION_EVENT.titleVi,
    location: GRADUATION_EVENT.address,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcs(): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//nhkhoa.site//graduation//EN",
    "BEGIN:VEVENT",
    `UID:graduation-2026@nhkhoa.site`,
    `DTSTAMP:${formatIcsDate(GRADUATION_EVENT.startISO)}`,
    `DTSTART:${formatIcsDate(GRADUATION_EVENT.startISO)}`,
    `DTEND:${formatIcsDate(GRADUATION_EVENT.endISO)}`,
    `SUMMARY:${GRADUATION_EVENT.titleEn}`,
    `LOCATION:${GRADUATION_EVENT.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
