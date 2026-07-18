import { useQuery } from "@tanstack/react-query";
import {
  getFeaturedSide,
  getLatestNews,
} from "@/features/home/services/newsService";
import { getDocuments } from "@/features/home/services/documentService";
import { getNotifications } from "@/features/home/services/notificationService";
import { getQuickAccess } from "@/features/home/services/quickAccessService";
import { getLibraryStats } from "@/features/home/services/libraryStatsService";

export const useFeaturedNews = () =>
  useQuery({ queryKey: ["home", "featured"], queryFn: getFeaturedSide });
export const useLatestNews = () =>
  useQuery({ queryKey: ["home", "latest"], queryFn: getLatestNews });
export const useDocuments = () =>
  useQuery({ queryKey: ["home", "documents"], queryFn: getDocuments });
export const useNotifications = () =>
  useQuery({ queryKey: ["home", "notifications"], queryFn: getNotifications });
export const useQuickAccess = () =>
  useQuery({ queryKey: ["home", "quick-access"], queryFn: getQuickAccess });
export const useLibraryStats = () =>
  useQuery({ queryKey: ["home", "library-stats"], queryFn: getLibraryStats });
