import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface CubeProps {
  index: number;
  xPos: number;
  yPos: number;
  letter: string;
  cubeSize: number;
};

const Cube: FC<CubeProps> = ({ index, xPos, yPos, letter, cubeSize }) => {
  const cubeStyle = {
    '--cube-x': `${xPos}px`,
    '--cube-y': `${yPos}px`,
    '--cube-size': `${cubeSize}px`,
    '--animation-delay': `${index * 0.1}s`
  } as React.CSSProperties; // Type assertion for custom properties

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
      <div className="shadow"></div>
    </div>
  );
};

interface RollingCubeAnimationProps {
  desiredCubeProps?: { x: number, y: number, letter: string, cubeSize: number, fontSize: number }[];
};

const RollingCubeAnimation: FC<RollingCubeAnimationProps> = ({ desiredCubeProps }) => {
  const positionsToUse = desiredCubeProps || null
  const checkName = desiredCubeProps?.map(cube => cube.letter).join('');

  return (
    <div className={`cubes-container ${checkName === 'DYLAN' ? 'first-name' : ''}`}>
      {positionsToUse !== null ? positionsToUse.map((props, index) => (
        <Cube key={index} index={index} xPos={props.x} yPos={props.y} letter={props.letter} cubeSize={props.cubeSize} />
      )) : null}
    </div>
  );
};

export default RollingCubeAnimation;
