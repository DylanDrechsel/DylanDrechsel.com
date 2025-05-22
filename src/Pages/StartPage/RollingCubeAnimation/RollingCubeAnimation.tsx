import { type FC } from 'react';
import './RollingCubeAnimation.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RollingCubeProps {};

const RollingCubeAnimation: FC<RollingCubeProps>= () => {
  return (
    // The 'scene' container acts as the perspective and animation wrapper
    <div className="scene">
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

export default RollingCubeAnimation;
