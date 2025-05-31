// RollingCubeAnimation.tsx
import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface ShadowProps {
  index: number;
  xPos: number;
  yPos: number;
  shadowSize: number;
  animationDelay: number;
}

const Shadow: FC<ShadowProps> = ({ xPos, yPos, shadowSize, animationDelay }) => {
  const shadowStyle = {
    '--shadow-x': `${xPos}px`,
    '--shadow-y': `${yPos}px`,
    '--shadow-size': `${shadowSize}px`,
    '--animation-delay': `${animationDelay}s`
  } as React.CSSProperties;

  return (
    <div className="shadow-wrapper" style={shadowStyle}>
      <div className="shadow"></div>
    </div>
  );
};

interface CubeProps {
  index: number;
  letter: string;
  cubeSize: number;
  fontSize: number;
  cubeColors: string[];
  animationOptions: {
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number,
    animationDelay: number
  };
}

const Cube: FC<CubeProps> = ({ letter, cubeSize, fontSize, cubeColors, animationOptions }) => {
  const cubeStyle = {
    '--cube-xEnd': `${animationOptions.xEnd}px`,
    '--cube-yEnd': `${animationOptions.yEnd}px`,
    '--cube-xStart': `${animationOptions.xStart}px`,
    '--cube-yStart': `${animationOptions.yStart}px`,
    '--cube-size': `${cubeSize}px`,
    '--font-size': `${fontSize}rem`,
    '--animation-delay': `${animationOptions.animationDelay}s`,
    '--first-color': `${cubeColors[0]}`,
    '--second-color': `${cubeColors[1]}`
  } as React.CSSProperties;

  return (
    <div className="cube-wrapper" style={cubeStyle}>
      <div className="cube">
        <div className="face front">{letter}</div>
        <div className="face back">{letter}</div>
        <div className="face right">{letter}</div>
        <div className="face left">{letter}</div>
        <div className="face top">{letter}</div>
        <div className="face bottom">{letter}</div>
      </div>
    </div>
  );
};

interface RollingCubeAnimationProps {
  desiredCubeProps?: {
    letter: string,
    cubeSize: number,
    fontSize: number,
    cubeColors: string[],
    animationOptions: {
      xStart: number,
      yStart: number,
      xEnd: number,
      yEnd: number,
      animationDelay: number
    };
  }[];
}

const RollingCubeAnimation: FC<RollingCubeAnimationProps> = ({ desiredCubeProps }) => {
  const positionsToUse = desiredCubeProps || [];
  const checkName = desiredCubeProps?.map(cube => cube.letter).join('');

  return (
    <div className={`animation-group ${checkName === 'DYLAN' ? 'first-name' : checkName === 'DRECHSEL' ? 'last-name' : ''}`}>
      {positionsToUse.map((props, index) => (
        <Cube 
          key={`cube-${index}`}
          index={index}
          animationOptions={props.animationOptions}
          letter={props.letter} 
          cubeSize={props.cubeSize} 
          fontSize={props.fontSize}
          cubeColors={props.cubeColors} 
        />
      ))}
      
      {positionsToUse.map((props, index) => (
        <Shadow 
          key={`shadow-${index}`}
          index={index} 
          xPos={props.animationOptions.xEnd} 
          yPos={props.animationOptions.yEnd} 
          shadowSize={props.cubeSize}
          animationDelay={props.animationOptions.animationDelay}
        />
      ))}
    </div>
  );
};

export default RollingCubeAnimation;