// frontend/src/features/about/hooks/useRegiment5Data.ts
import { useQuery } from "@tanstack/react-query";
import {
  getRegiment5Facts,
  getRegiment5Milestones,
  getRegiment5Battles,
  getRegiment5Political,
} from "@/features/about/services/regiment5Service";

export const useRegiment5Facts = () =>
  useQuery({ queryKey: ["about", "r5", "facts"], queryFn: getRegiment5Facts });
export const useRegiment5Milestones = () =>
  useQuery({
    queryKey: ["about", "r5", "milestones"],
    queryFn: getRegiment5Milestones,
  });
export const useRegiment5Battles = () =>
  useQuery({
    queryKey: ["about", "r5", "battles"],
    queryFn: getRegiment5Battles,
  });
export const useRegiment5Political = () =>
  useQuery({
    queryKey: ["about", "r5", "political"],
    queryFn: getRegiment5Political,
  });
