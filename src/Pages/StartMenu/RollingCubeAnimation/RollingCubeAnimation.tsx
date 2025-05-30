// RollingCubeAnimation.tsx
import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface ShadowProps {
  index: number;
  xPos: number;
  yPos: number;
  shadowSize: number;
}

const Shadow: FC<ShadowProps> = ({ index, xPos, yPos, shadowSize }) => {
  const shadowStyle = {
    '--shadow-x': `${xPos}px`,
    '--shadow-y': `${yPos}px`,
    '--shadow-size': `${shadowSize}px`,
    '--animation-delay': `${index * 0.1}s`
  } as React.CSSProperties;

  return (
    <div className="shadow-wrapper" style={shadowStyle}>
      <div className="shadow"></div>
    </div>
  );
};

interface CubeProps {
  index: number;
  xPos: number;
  yPos: number;
  letter: string;
  cubeSize: number;
  fontSize: number;
  cubeColors: string[];
}

const Cube: FC<CubeProps> = ({ index, xPos, yPos, letter, cubeSize, fontSize, cubeColors }) => {
  const cubeStyle = {
    '--cube-x': `${xPos}px`,
    '--cube-y': `${yPos}px`,
    '--cube-size': `${cubeSize}px`,
    '--font-size': `${fontSize}rem`,
    '--animation-delay': `${index * 0.1}s`,
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
    x: number,
    y: number,
    letter: string,
    cubeSize: number,
    fontSize: number,
    cubeColors: string[],
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
          xPos={props.x} 
          yPos={props.y} 
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
          xPos={props.x} 
          yPos={props.y} 
          shadowSize={props.cubeSize}
        />
      ))}
    </div>
  );
};

export default RollingCubeAnimation;