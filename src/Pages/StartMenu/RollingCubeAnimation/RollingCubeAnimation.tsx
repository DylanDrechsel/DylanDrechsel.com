import React, { type FC } from 'react';
import './RollingCubeAnimation.scss';

interface CubeProps {
  index: number;
  xPos: number;
  yPos: number;
  letter: string;
};

const Cube: FC<CubeProps> = ({ index, xPos, yPos, letter }) => {
  const cubeStyle = {
    '--cube-x': `${xPos}px`,
    '--cube-y': `${yPos}px`,
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
  cubePositions?: { x: number, y: number, letter: string }[];
};

const RollingCubeAnimation: FC<RollingCubeAnimationProps> = ({ cubePositions }) => {
  // Default positions if none are provided
  const defaultCubePositions = [
    { x: -250, y: 0, letter: 'D' },
    { x: -125, y: 0, letter: 'Y' },
    { x: 0, y: 0, letter: 'L' },
    { x: 125, y: 0, letter: 'A' },
    { x: 250, y: 0, letter: 'N' },
  ];

  const positionsToUse = cubePositions || defaultCubePositions

  return (
    <div className="cubes-container">
      {positionsToUse.map((pos, index) => (
        <Cube key={index} index={index} xPos={pos.x} yPos={pos.y} letter={pos.letter} />
      ))}
    </div>
  );
};

export default RollingCubeAnimation;
