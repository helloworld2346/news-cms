// frontend/src/features/about/hooks/useRegiment271Data.ts
import { useQuery } from "@tanstack/react-query";
import {
  getRegiment271Facts,
  getRegiment271Milestones,
  getRegiment271Battles,
  getRegiment271Political,
} from "@/features/about/services/regiment271Service";

export const useRegiment271Facts = () =>
  useQuery({
    queryKey: ["about", "r271", "facts"],
    queryFn: getRegiment271Facts,
  });
export const useRegiment271Milestones = () =>
  useQuery({
    queryKey: ["about", "r271", "milestones"],
    queryFn: getRegiment271Milestones,
  });
export const useRegiment271Battles = () =>
  useQuery({
    queryKey: ["about", "r271", "battles"],
    queryFn: getRegiment271Battles,
  });
export const useRegiment271Political = () =>
  useQuery({
    queryKey: ["about", "r271", "political"],
    queryFn: getRegiment271Political,
  });
