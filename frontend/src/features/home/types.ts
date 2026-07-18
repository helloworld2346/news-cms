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
}
export interface DocumentItem {
  name: string;
  type: string;
  size: string;
  color: string;
}
export interface NotificationItem {
  title: string;
  date: string;
}
export interface ScheduleItem {
  time: string;
  title: string;
  day: string;
}
export interface VideoItem {
  title: string;
}
// icon map ở component theo `key`
export interface QuickAccessItem {
  key: string;
  label: string;
  bg: string; // vd "bg-blue-50"
  text: string; // vd "text-blue-500"
}
export interface LibraryStatItem {
  key: string;
  label: string;
  count: number;
  color: string;
}
