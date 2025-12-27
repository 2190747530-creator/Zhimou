
export enum ModuleType {
  SHOOTING = 'SHOOTING',
  CAMERA_SIM = 'CAMERA_SIM',
  AI_RETOUCH = 'AI_RETOUCH',
  SOCIAL_LAYOUT = 'SOCIAL_LAYOUT',
  MEMORY_CAPSULE = 'MEMORY_CAPSULE',
  RECOMMENDATION = 'RECOMMENDATION',
  MEMBERSHIP = 'MEMBERSHIP'
}

export interface PointHistory {
  id: string;
  activity: string;
  points: number;
  date: string;
}

export interface UserProfile {
  name: string;
  level: '旅拍新手' | '进阶玩家' | '质感大师';
  points: number;
  avatar: string;
  isVip: boolean;
}

export interface Message {
  role: 'user' | 'ai';
  content: string;
}
