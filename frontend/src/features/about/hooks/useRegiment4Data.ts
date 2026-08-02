import { useQuery } from "@tanstack/react-query";
import {
  getRegiment4Facts,
  getRegiment4Milestones,
  getRegiment4Battles,
  getRegiment4Political,
} from "@/features/about/services/regiment4Service";

export const useRegiment4Facts = () =>
  useQuery({ queryKey: ["about", "r4", "facts"], queryFn: getRegiment4Facts });
export const useRegiment4Milestones = () =>
  useQuery({
    queryKey: ["about", "r4", "milestones"],
    queryFn: getRegiment4Milestones,
  });
export const useRegiment4Battles = () =>
  useQuery({
    queryKey: ["about", "r4", "battles"],
    queryFn: getRegiment4Battles,
  });
export const useRegiment4Political = () =>
  useQuery({
    queryKey: ["about", "r4", "political"],
    queryFn: getRegiment4Political,
  });
