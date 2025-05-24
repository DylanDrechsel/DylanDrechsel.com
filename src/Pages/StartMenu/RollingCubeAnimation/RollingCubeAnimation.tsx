import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface CubeProps {
  index: number;
  xPos: number;
  yPos: number;
};

const Cube: FC<CubeProps> = ({ index, xPos, yPos }) => {
  const cubeStyle = {
    '--cube-x': `${xPos}px`,
    '--cube-y': `${yPos}px`,
    '--animation-delay': `${index * 0.1}s`
  } as React.CSSProperties; // Type assertion for custom properties

  return (
    <div className="cube-wrapper" style={cubeStyle}>
      <div className="cube">
        <div className="face front">D</div>
        <div className="face back">D</div>
        <div className="face right">D</div>
        <div className="face left">D</div>
        <div className="face top">D</div>
        <div className="face bottom">D</div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

interface RollingCubeAnimationProps {
  cubePositions?: { x: number, y: number }[];
};

const RollingCubeAnimation: FC<RollingCubeAnimationProps> = ({ cubePositions }) => {
  // Default positions if none are provided
  const defaultCubePositions = [
    { x: -250, y: 0 },
    { x: -125, y: 0 },
    { x: 0, y: 0 },
    { x: 125, y: 0 },
    { x: 250, y: 0 },
  ];

  const positionsToUse = cubePositions || defaultCubePositions;

  return (
    <div className="cubes-container">
      {positionsToUse.map((pos, index) => (
        <Cube key={index} index={index} xPos={pos.x} yPos={pos.y} />
      ))}
    </div>
  );
};

export default RollingCubeAnimation;
