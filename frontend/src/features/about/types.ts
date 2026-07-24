export interface HistoryMilestone {
  year: string;
  title: string;
  desc: string;
  image?: string;
}

export interface BattleHonor {
  name: string;
  desc: string;
  image?: string;
}

export interface Award {
  title: string;
  desc: string;
  image?: string;
}

export interface ModernPillar {
  title: string;
  points: string[];
}

export interface DivisionImages {
  hero: string;
  intro: string;
  battle: string;
}
