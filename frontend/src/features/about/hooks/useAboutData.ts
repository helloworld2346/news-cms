import { useQuery } from "@tanstack/react-query";
import {
  getHistoryMilestones,
  getBattleHonors,
  getAwards,
  getModernPillars,
} from "@/features/about/services/aboutService";

export const useHistoryMilestones = () =>
  useQuery({
    queryKey: ["about", "milestones"],
    queryFn: getHistoryMilestones,
  });
export const useBattleHonors = () =>
  useQuery({ queryKey: ["about", "battles"], queryFn: getBattleHonors });
export const useAwards = () =>
  useQuery({ queryKey: ["about", "awards"], queryFn: getAwards });
export const useModernPillars = () =>
  useQuery({ queryKey: ["about", "pillars"], queryFn: getModernPillars });
