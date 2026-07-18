import { useQuery } from "@tanstack/react-query";
import {
  getFeaturedMain,
  getFeaturedSide,
  getLatestNews,
} from "@/features/home/services/newsService";
import { getDocuments } from "@/features/home/services/documentService";
import { getNotifications } from "@/features/home/services/notificationService";
import { getSchedule } from "@/features/home/services/scheduleService";
import { getQuickAccess } from "@/features/home/services/quickAccessService";
import { getLibraryStats } from "@/features/home/services/libraryStatsService";
import { getVideos } from "@/features/home/services/videoService";
import { getGalleryCount } from "@/features/home/services/galleryService";

export const useFeaturedMain = () =>
  useQuery({ queryKey: ["home", "featured-main"], queryFn: getFeaturedMain });
export const useFeaturedSide = () =>
  useQuery({ queryKey: ["home", "featured-side"], queryFn: getFeaturedSide });
export const useLatestNews = () =>
  useQuery({ queryKey: ["home", "latest"], queryFn: getLatestNews });
export const useDocuments = () =>
  useQuery({ queryKey: ["home", "documents"], queryFn: getDocuments });
export const useNotifications = () =>
  useQuery({ queryKey: ["home", "notifications"], queryFn: getNotifications });
export const useSchedule = () =>
  useQuery({ queryKey: ["home", "schedule"], queryFn: getSchedule });
export const useQuickAccess = () =>
  useQuery({ queryKey: ["home", "quick-access"], queryFn: getQuickAccess });
export const useLibraryStats = () =>
  useQuery({ queryKey: ["home", "library-stats"], queryFn: getLibraryStats });
export const useVideos = () =>
  useQuery({ queryKey: ["home", "videos"], queryFn: getVideos });
export const useGalleryCount = () =>
  useQuery({ queryKey: ["home", "gallery-count"], queryFn: getGalleryCount });
