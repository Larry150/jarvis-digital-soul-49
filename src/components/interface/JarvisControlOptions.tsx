
import React from 'react';
import { Brain, Mic, Tv } from 'lucide-react';
import { ControlOption } from '@/components/ControlPanel';

interface ControlOptionsProps {
  activeMode: 'normal' | 'voice' | 'face' | 'hacker' | 'satellite';
  hackerModeActive: boolean;
}

export const useControlOptions = ({ activeMode, hackerModeActive }: ControlOptionsProps) => {
  const controlOptions: ControlOption[] = [
    {
      id: 'normal',
      label: 'Normal Mode',
      icon: <Brain />,
      active: activeMode === 'normal' && !hackerModeActive
    },
    {
      id: 'voice',
      label: 'Voice Mode',
      icon: <Mic />,
      active: activeMode === 'voice' && !hackerModeActive
    },
    {
      id: 'face',
      label: 'Face Mode',
      icon: <Tv />,
      active: activeMode === 'face' && !hackerModeActive
    }
    // Satellite and Hacker modes removed - can only be activated via voice commands
  ];
  
  return controlOptions;
};
