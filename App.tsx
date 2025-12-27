
import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Aperture, 
  Wand2, 
  LayoutGrid, 
  Box, 
  Compass, 
  User, 
  MessageSquare,
  Award,
  ChevronRight,
  Zap,
  Star,
  CreditCard
} from 'lucide-react';
import { ModuleType, UserProfile } from './types';
import Sidebar from './components/Sidebar';
import IPCharacter from './components/IPCharacter';
import ShootingGuide from './components/modules/ShootingGuide';
import CameraSim from './components/modules/CameraSim';
import AIRetouch from './components/modules/AIRetouch';
import SocialLayout from './components/modules/SocialLayout';
import MemoryCapsule from './components/modules/MemoryCapsule';
import Recommendation from './components/modules/Recommendation';
import Membership from './components/modules/Membership';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>(ModuleType.SHOOTING);
  const [user, setUser] = useState<UserProfile>({
    name: "旅行家",
    level: "进阶玩家",
    points: 850,
    avatar: "https://picsum.photos/id/64/100/100",
    isVip: false
  });

  const renderModule = () => {
    switch (activeModule) {
      case ModuleType.SHOOTING: return <ShootingGuide />;
      case ModuleType.CAMERA_SIM: return <CameraSim />;
      case ModuleType.AI_RETOUCH: return <AIRetouch />;
      case ModuleType.SOCIAL_LAYOUT: return <SocialLayout />;
      case ModuleType.MEMORY_CAPSULE: return <MemoryCapsule />;
      case ModuleType.RECOMMENDATION: return <Recommendation />;
      case ModuleType.MEMBERSHIP: return <Membership user={user} />;
      default: return <ShootingGuide />;
    }
  };

  const getModuleTitle = () => {
    const titles: Record<ModuleType, string> = {
      [ModuleType.SHOOTING]: "智能拍摄指导",
      [ModuleType.CAMERA_SIM]: "多品牌相机模拟",
      [ModuleType.AI_RETOUCH]: "AI 智能精修",
      [ModuleType.SOCIAL_LAYOUT]: "社交排版与文案",
      [ModuleType.MEMORY_CAPSULE]: "旅行记忆胶囊",
      [ModuleType.RECOMMENDATION]: "智能跟访与推荐",
      [ModuleType.MEMBERSHIP]: "积分会员中心"
    };
    return titles[activeModule];
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Sidebar Navigation */}
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 px-8 flex items-center justify-between glass-panel sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              智眸 · {getModuleTitle()}
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div 
              className="flex items-center bg-white/50 px-3 py-1 rounded-full border border-slate-200 shadow-sm cursor-pointer hover:bg-white transition-colors"
              onClick={() => setActiveModule(ModuleType.MEMBERSHIP)}
            >
              <Star className="w-4 h-4 text-amber-500 mr-2 fill-current" />
              <span className="text-sm font-semibold text-slate-700">{user.points} 积分</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-800 leading-none flex items-center">
                  {user.name}
                  {user.isVip && <Zap className="w-3 h-3 ml-1 text-amber-500 fill-current" />}
                </div>
                <div className="text-[10px] text-cyan-600 font-medium uppercase tracking-tighter">{user.level}</div>
              </div>
              <img src={user.avatar} className="w-10 h-10 rounded-full ring-2 ring-indigo-100 shadow-md" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="max-w-7xl mx-auto h-full">
             {renderModule()}
          </div>
        </div>

        {/* IP Character Interaction Hub (Zhimou) */}
        <IPCharacter activeModule={getModuleTitle()} />
      </main>
    </div>
  );
};

export default App;
