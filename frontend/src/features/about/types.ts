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

// ===== Trung đoàn 4 =====  
export interface RegimentFact {  
  label: string;  
  value: string;  
}  
  
export interface RegimentMilestone {  
  year: string;  
  title: string;  
  desc: string;  
}  
  
export interface RegimentBattle {  
  name: string;  
  desc: string;  
}  
  
export interface RegimentPoliticalBlock {  
  title: string;  
  points: string[];  
}