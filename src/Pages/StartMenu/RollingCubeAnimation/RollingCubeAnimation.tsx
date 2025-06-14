import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface ShadowProps {
  index: number;
  xPos: number;
  yPos: number;
  shadowSize: number;
  animationDelay: number;
  floatingAnimationOptions: {
    xOffset: number;
    yOffset: number;
    xRotate: number;
  };
};

const Shadow: FC<ShadowProps> = ({ xPos, yPos, shadowSize, animationDelay, floatingAnimationOptions }) => {
  const shadowStyle = {
    '--shadow-x': `${xPos}px`,
    '--shadow-y': `${yPos}px`,
    '--shadow-size': `${shadowSize}px`,
    '--animation-delay': `${animationDelay}s`,
    '--shadow-x-offset': `${floatingAnimationOptions.xOffset}px`,
    '--shadow-y-offset': `${Math.abs(floatingAnimationOptions.yOffset)}%`,
    '--shadow-x-rotate': `${floatingAnimationOptions.xRotate}deg`
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
  floatingAnimationOptions: {
    xOffset: number;
    yOffset: number;
    xRotate: number;
  };
};

const Cube: FC <CubeProps> = ({
    letter,
    cubeSize,
    fontSize,
    cubeColors,
    animationOptions,
    floatingAnimationOptions
  }) => {
    const cubeStyle = {
      '--cube-xEnd': `${animationOptions.xEnd}px`,
      '--cube-yEnd': `${animationOptions.yEnd}px`,
      '--cube-xStart': `${animationOptions.xStart}px`,
      '--cube-yStart': `${animationOptions.yStart}px`,
      '--cube-size': `${cubeSize}px`,
      '--font-size': `${fontSize}rem`,
      '--animation-delay': `${animationOptions.animationDelay}s`,
      '--first-color': `${cubeColors[0]}`,
      '--second-color': `${cubeColors[1]}`,
      '--third-color': `${cubeColors[2]}`,
      '--floating-x-offset': `${floatingAnimationOptions.xOffset}px`,
      '--floating-y-offset': `${Math.abs(floatingAnimationOptions.yOffset)}px`,
      '--floating-x-rotate': `${floatingAnimationOptions.xRotate}deg`
    } as React.CSSProperties;

  return (
    <div className="cube-wrapper" style={cubeStyle}>
      <div className="cube">
        <div className="face front"><span>{letter}</span></div>
        <div className="face back" >{letter}</div>
        <div className="face right">{letter}</div>
        <div className="face left">{letter}</div>
        <div className="face top">{letter}</div>
        <div className="face bottom">{letter}</div>
      </div>
    </div>
  );
};

interface RollingCubeAnimationProps {
  cubeConfigs: {
    letter: string,
    cubeSize: number,
    fontSize: number,
    animationGroupClassName?: string | null,
    cubeColors: string[],
    animationOptions: {
      xStart: number,
      yStart: number,
      xEnd: number,
      yEnd: number,
      animationDelay: number
    };
    floatingAnimationOptions: {
      xOffset: number;
      yOffset: number;
      xRotate: number;
    };
  }[];
};

const RollingCubeAnimation: FC<RollingCubeAnimationProps> = ({ cubeConfigs }) => {
  const animationData = cubeConfigs || [];

  return (
    <div className={`animation-group ${animationData[0].animationGroupClassName}`}>
      {animationData.map((props, index) => (
        <Cube
          key={`cube-${index}`}
          index={index}
          animationOptions={props.animationOptions}
          letter={props.letter}
          cubeSize={props.cubeSize}
          fontSize={props.fontSize}
          cubeColors={props.cubeColors}
          floatingAnimationOptions={props.floatingAnimationOptions}
        />
      ))}

      {animationData.map((props, index) => (
        <Shadow
          key={`shadow-${index}`}
          index={index}
          xPos={props.animationOptions.xEnd}
          yPos={props.animationOptions.yEnd}
          shadowSize={props.cubeSize}
          animationDelay={props.animationOptions.animationDelay}
          floatingAnimationOptions={props.floatingAnimationOptions}
        />
      ))}
    </div>
  );
};

export default RollingCubeAnimation;