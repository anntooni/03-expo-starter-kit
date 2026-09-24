import React from 'react';
import { View, Text, ViewProps } from 'react-native';

export type CardVariant = 'default' | 'yellow' | 'pink' | 'cyan' | 'green' | 'orange';

export interface CardProps extends ViewProps {
  titulo?: string;
  subtitulo?: string;
  variante?: CardVariant;
  children: React.ReactNode;
  className?: string;
}

const colorVariantes: Record<CardVariant, string> = {
  default: 'bg-[#FFFDF9]',
  yellow: 'bg-yellow-300',
  pink: 'bg-pink-300',
  cyan: 'bg-cyan-300',
  green: 'bg-emerald-300',
  orange: 'bg-orange-300'
};

export const Card: React.FC<CardProps> = ({
  titulo,
  subtitulo,
  variante = 'default',
  children,
  className = '',
  style,
  ...props
}) => {

  const bgClass = colorVariantes[variante] || colorVariantes.default;

  return (
    <View
      className={`border-[3px] border-black rounded-xl p-4 mb-4 shadow-[4px_4px_0px_0px_#000000] ${bgClass} ${className}`}
      style={style}
      {...props}
    >
      {titulo && (
        <View className="mb-2 pb-2 border-b-2 border-black/20">
          <Text className="text-xl font-extrabold text-black uppercase tracking-tight">
            {titulo}
          </Text>
          {subtitulo && (
            <Text className="text-xs font-semibold text-black/70 mt-0.5">
              {subtitulo}
            </Text>
          )}
        </View>
      )}
      <View>{children}</View>
    </View>
  );
};
