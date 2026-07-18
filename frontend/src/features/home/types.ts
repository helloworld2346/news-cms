export interface FeaturedMain {
  title: string;
  desc: string;
  date: string;
}
export interface FeaturedSide {
  title: string;
  date: string;
  dept: string;
  desc: string;
}
export interface LatestNewsItem {
  title: string;
  date: string;
  dept: string;
  thumbnail: string;
}
export interface DocumentItem {
  name: string;
  type: string; // PDF | DOC | XLS | PPT
  size: string;
  date: string;
  dept: string;
  color: string; // text màu, vd "text-red-600"
  bg: string; // nền badge tĩnh, vd "bg-red-50"
}
export interface NotificationItem {
  title: string;
  date: string;
  dept: string;
}
export interface ScheduleItem {
  time: string; // "08:00"
  title: string;
  dept: string;
}
export interface ScheduleDate {
  weekday: string; // "Thứ sáu"
  day: string; // "16"
  month: string; // "05/2026"
}
export interface VideoItem {
  title: string;
}
// icon map ở component theo `key`
export interface QuickAccessItem {
  key: string;
  label: string;
  bg: string;
  text: string;
}
export interface LibraryStatItem {
  key: string;
  label: string;
  count: number;
  color: string;
}
