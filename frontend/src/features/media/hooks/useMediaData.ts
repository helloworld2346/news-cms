import { useQuery } from "@tanstack/react-query";
import {
  getMediaVideos,
  getMediaImages,
} from "@/features/media/services/mediaService";

export const useMediaVideos = () =>
  useQuery({ queryKey: ["media", "videos"], queryFn: getMediaVideos });
export const useMediaImages = () =>
  useQuery({ queryKey: ["media", "images"], queryFn: getMediaImages });
