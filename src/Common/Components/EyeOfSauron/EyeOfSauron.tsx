import React, { useEffect, useRef } from 'react';
import './EyeOfSauron.scss';

interface Particle {
  x: number;
  y: number;
  xStep: number;
  yStep: number;
  minTravelDistance: number;
  maxTravelDistance: number;
};

interface Position {
  x: number;
  y: number;
};

interface ColorRange {
  startColor: number;
  endColor: number;
};

interface DistanceRange {
  startDistance: number;
  endDistance: number;
};

const EyeOfSauron: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  
  // Animation configuration
  const config = {
    canvasSize: 850,
    numberOfParticles: 150,
    particleAnimationSteps: 300,
    pupilRadius: { x: 20, y: 144 },
    outerEyeRadius: { x: 400, y: 220 },
    trackingSpeed: 0.1,
    maxPupilOffset: 200,
  };

  const stateRef = useRef({
    particles: [] as Particle[],
    mousePosition: { x: config?.canvasSize / 2, y: config?.canvasSize / 2 },
    pupilPosition: { x: 0, y: 0 },
  });

  const centerCoordinate = (value: number): number => value + config?.canvasSize / 2;

  const interpolateColorComponent = (colorRange: ColorRange, distanceRange: DistanceRange, currentValue: number): number => {
    const slope = Math.abs((colorRange?.startColor - colorRange?.endColor) / (distanceRange?.endDistance - distanceRange?.startDistance));
    const interpolatedValue = currentValue - distanceRange?.startDistance;
    const resultColor = colorRange?.startColor > colorRange?.endColor 
      ? colorRange?.startColor - interpolatedValue * slope 
      : colorRange?.startColor + interpolatedValue * slope;
    return Math.round(resultColor);
  };

  const getParticleColorComponent = (travelPercent: number): number => {
    if (travelPercent < 2) return interpolateColorComponent(
      { startColor: 255, endColor: 200 }, 
      { startDistance: 0, endDistance: 2 }, 
      travelPercent
    );
    else if (travelPercent < 5) return interpolateColorComponent(
      { startColor: 200, endColor: 100 }, 
      { startDistance: 2, endDistance: 5 }, 
      travelPercent
    );
    else if (travelPercent < 10) return interpolateColorComponent(
      { startColor: 100, endColor: 20 }, 
      { startDistance: 5, endDistance: 10 }, 
      travelPercent
    );
    else if (travelPercent < 15) return interpolateColorComponent(
      { startColor: 20, endColor: 0 }, 
      { startDistance: 10, endDistance: 15 }, 
      travelPercent
    );
    else if (travelPercent < 20) return interpolateColorComponent(
      { startColor: 0, endColor: 0 }, 
      { startDistance: 15, endDistance: 20 }, 
      travelPercent
    );
    else if (travelPercent < 25) return interpolateColorComponent(
      { startColor: 0, endColor: 0 }, 
      { startDistance: 20, endDistance: 25 }, 
      travelPercent
    );
    else if (travelPercent < 30) return interpolateColorComponent(
      { startColor: 0, endColor: 10 }, 
      { startDistance: 25, endDistance: 30 }, 
      travelPercent
    );
    else if (travelPercent < 35) return interpolateColorComponent(
      { startColor: 10, endColor: 20 }, 
      { startDistance: 30, endDistance: 35 }, 
      travelPercent
    );
    else if (travelPercent < 40) return interpolateColorComponent(
      { startColor: 20, endColor: 30 }, 
      { startDistance: 35, endDistance: 40 }, 
      travelPercent
    );
    else if (travelPercent < 45) return interpolateColorComponent(
      { startColor: 30, endColor: 40 }, 
      { startDistance: 40, endDistance: 45 }, 
      travelPercent
    );
    else if (travelPercent < 50) return interpolateColorComponent(
      { startColor: 40, endColor: 50 }, 
      { startDistance: 45, endDistance: 50 }, 
      travelPercent
    );
    else if (travelPercent < 55) return interpolateColorComponent(
      { startColor: 50, endColor: 60 }, 
      { startDistance: 50, endDistance: 55 }, 
      travelPercent
    );
    else if (travelPercent < 60) return interpolateColorComponent(
      { startColor: 60, endColor: 70 }, 
      { startDistance: 55, endDistance: 60 }, 
      travelPercent
    );
    else if (travelPercent < 65) return interpolateColorComponent(
      { startColor: 70, endColor: 80 }, 
      { startDistance: 60, endDistance: 65 }, 
      travelPercent
    );
    else if (travelPercent < 70) return interpolateColorComponent(
      { startColor: 80, endColor: 90 }, 
      { startDistance: 65, endDistance: 70 }, 
      travelPercent
    );
    else if (travelPercent < 75) return interpolateColorComponent(
      { startColor: 90, endColor: 100 }, 
      { startDistance: 70, endDistance: 75 }, 
      travelPercent
    );
    else if (travelPercent < 80) return interpolateColorComponent(
      { startColor: 100, endColor: 110 }, 
      { startDistance: 75, endDistance: 80 }, 
      travelPercent
    );
    else if (travelPercent < 85) return interpolateColorComponent(
      { startColor: 110, endColor: 120 }, 
      { startDistance: 80, endDistance: 85 }, 
      travelPercent
    );
    else if (travelPercent < 90) return interpolateColorComponent(
      { startColor: 120, endColor: 130 }, 
      { startDistance: 85, endDistance: 90 }, 
      travelPercent
    );
    else if (travelPercent < 95) return interpolateColorComponent(
      { startColor: 130, endColor: 140 }, 
      { startDistance: 90, endDistance: 95 }, 
      travelPercent
    );
    else return interpolateColorComponent(
      { startColor: 140, endColor: 150 }, 
      { startDistance: 95, endDistance: 100 }, 
      travelPercent
    );
  };

  const calculateDistance = (x: number, y: number): number => Math.sqrt(x * x + y * y);

  const removeExpiredParticle = (currentRadius: number, maxRadius: number, particleIndex: number): void => {
    if (currentRadius > maxRadius) {
      stateRef?.current?.particles?.splice(particleIndex, 1);
    }
  };

  const drawParticlePixel = (x: number, y: number, greenColorComponent: number, opacity: number): void => {
    if (!contextRef?.current) return;
    contextRef.current.fillStyle = `rgba(255,${greenColorComponent},0,${opacity})`;
    contextRef?.current?.fillRect(centerCoordinate(x), centerCoordinate(y), 1, 1);
  };

  const updateParticleStyle = (particle: Particle, particleIndex: number): void => {
    const currentRadius = calculateDistance(particle?.x, particle?.y);
    const travelPercent = (currentRadius - particle?.minTravelDistance) / (particle?.maxTravelDistance - particle?.minTravelDistance) * 100;
    const greenColorComponent = getParticleColorComponent(travelPercent);
    
    // Stop drawing particles when they're close to expiring to prevent artifacts
    if (travelPercent < 90) {
        const opacity = travelPercent > 85 ? 0.001 : 1;
        drawParticlePixel(particle.x, particle.y, greenColorComponent, opacity);
    }

    removeExpiredParticle(currentRadius, particle?.maxTravelDistance, particleIndex);
  };

  const animateParticle = (particleIndex: number): void => {
    const particle = stateRef?.current?.particles[particleIndex];
    particle.x += particle?.xStep;
    particle.y += particle?.yStep;
    updateParticleStyle(particle, particleIndex);
  };

  const drawPupil = (): void => {
    if (!contextRef?.current) return;
    
    const pupilCenterX = centerCoordinate(stateRef?.current?.pupilPosition?.x);
    const pupilCenterY = centerCoordinate(stateRef?.current?.pupilPosition?.y);

    contextRef.current.fillStyle = 'rgba(0, 0, 0, 1)';
    contextRef?.current?.beginPath();

    const pupilWidth = config?.pupilRadius.x;
    const pupilHeight = config?.pupilRadius.y;

    const topPointY = pupilCenterY - pupilHeight;
    const bottomPointY = pupilCenterY + pupilHeight;
    const startWidenY = pupilCenterY - (pupilHeight * 0.35);
    const endWidenY = pupilCenterY + (pupilHeight * 0.35);
    const controlPointWidthOffset = pupilWidth * 0.3;
    const controlPointHeightOffset = pupilHeight * 0.05;

    contextRef?.current?.moveTo(pupilCenterX, topPointY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX - controlPointWidthOffset, topPointY + controlPointHeightOffset,
      pupilCenterX - pupilWidth, startWidenY,
      pupilCenterX - pupilWidth, startWidenY
    );

    contextRef?.current?.lineTo(pupilCenterX - pupilWidth, endWidenY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX - pupilWidth, endWidenY + controlPointHeightOffset,
      pupilCenterX - controlPointWidthOffset, bottomPointY - controlPointHeightOffset,
      pupilCenterX, bottomPointY
    );

    contextRef?.current?.bezierCurveTo(
      pupilCenterX + controlPointWidthOffset, bottomPointY - controlPointHeightOffset,
      pupilCenterX + pupilWidth, endWidenY + controlPointHeightOffset,
      pupilCenterX + pupilWidth, endWidenY
    );

    contextRef?.current?.lineTo(pupilCenterX + pupilWidth, startWidenY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX + pupilWidth, startWidenY - controlPointHeightOffset,
      pupilCenterX + controlPointWidthOffset, topPointY + controlPointHeightOffset,
      pupilCenterX, topPointY
    );

    contextRef?.current.closePath();
    contextRef?.current.fill();
  };

  const updatePupilPosition = (): void => {
    const canvasCenter = config?.canvasSize / 2;
    const mouseOffsetX = stateRef?.current?.mousePosition?.x - canvasCenter;
    const mouseOffsetY = stateRef?.current?.mousePosition?.y - canvasCenter;
    
    const distanceFromCenter = Math.min(
      calculateDistance(mouseOffsetX, mouseOffsetY), 
      config?.maxPupilOffset
    );
    
    const mouseAngle = Math.atan2(mouseOffsetY, mouseOffsetX);
    stateRef.current.pupilPosition.x = Math.cos(mouseAngle) * distanceFromCenter * config?.trackingSpeed;
    stateRef.current.pupilPosition.y = Math.sin(mouseAngle) * distanceFromCenter * config?.trackingSpeed;
  };

  const generateRandomOffset = (baseValue: number): number => Math.random() * baseValue * 4 - (baseValue * 4) / 2;

  const getParticleTravelDistances = (startPosition: Position, endPosition: Position) => ({
    maxTravelDistance: calculateDistance(endPosition?.x, endPosition?.y),
    minTravelDistance: calculateDistance(startPosition?.x, startPosition?.y)
  });

  const calculateParticleMovementStep = (startPosition: Position, endPosition: Position) => ({
    x: (endPosition?.x - startPosition?.x) / config?.particleAnimationSteps,
    y: (endPosition?.y - startPosition?.y) / config?.particleAnimationSteps
  });

  const getParticleStartPosition = (radiusType: 'pupilRadius' | 'outerEyeRadius', angle: number, noiseAmount: number): Position => ({
    x: config[radiusType].x * Math.cos(angle) + generateRandomOffset(noiseAmount) + stateRef?.current?.pupilPosition?.x,
    y: config[radiusType].y * Math.sin(angle) + generateRandomOffset(noiseAmount) + stateRef?.current?.pupilPosition?.y
  });

  const createParticle = (): void => {
    const randomAngle = Math.random() * 2 * Math.PI;
    const startPosition = getParticleStartPosition('pupilRadius', randomAngle, 5);
    const endPosition = getParticleStartPosition('outerEyeRadius', randomAngle, 25);
    const travelDistances = getParticleTravelDistances(startPosition, endPosition);
    const movementStep = calculateParticleMovementStep(startPosition, endPosition);

    stateRef.current.particles.push({
      x: startPosition?.x,
      y: startPosition?.y,
      xStep: movementStep?.x,
      yStep: movementStep?.y,
      minTravelDistance: travelDistances?.minTravelDistance,
      maxTravelDistance: travelDistances?.maxTravelDistance
    });
  };

  const clearCanvas = (alpha: number): void => {
    if (!contextRef?.current) return;
    contextRef.current.fillStyle = `rgba(0,0,0,${alpha})`;
    contextRef?.current?.fillRect(0, 0, config?.canvasSize, config?.canvasSize);
  };

  const updateAnimationFrame = (): void => {
    clearCanvas(0.032);
    
    updatePupilPosition();
    
    for (let i = 0; i < config?.numberOfParticles; i++) {
      createParticle();
    }
    
    for (let particleIndex = 0; particleIndex < stateRef?.current?.particles?.length; particleIndex++) {
      animateParticle(particleIndex);
    }
    
    drawPupil();
  };

  const startAnimationLoop = (): void => {
    updateAnimationFrame();
    animationFrameRef.current = requestAnimationFrame(startAnimationLoop);
  };

  const trackMouse = (event: MouseEvent): void => {
    if (!canvasRef?.current) return;
    const canvasRect = canvasRef?.current?.getBoundingClientRect();
    stateRef.current.mousePosition.x = event?.clientX - canvasRect?.left;
    stateRef.current.mousePosition.y = event?.clientY - canvasRect?.top;
  };

  const initializeAnimation = (): void => {
    clearCanvas(1);
    for (let i = 0; i < config?.numberOfParticles; i++) {
      createParticle();
    }
    startAnimationLoop();
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    canvas.width = config?.canvasSize;
    canvas.height = config?.canvasSize;
    contextRef.current = canvas?.getContext('2d');

    window.addEventListener('mousemove', trackMouse);
    initializeAnimation();

    return () => {
      window.removeEventListener('mousemove', trackMouse);
      if (animationFrameRef?.current) {
        cancelAnimationFrame(animationFrameRef?.current);
      }
    };
  });

  return (
    <div>
      <canvas 
        ref={canvasRef}
        id="eyeOfSauron"
      />
    </div>
  );
};

export default EyeOfSauron;