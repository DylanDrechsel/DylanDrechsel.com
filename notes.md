-----> Project Notes <-----
-----> Animation Notes <-----
    - I can use this formula for tracking the progress of all animations... (See StaticAnimation for implementation example)
        FORMULA --> (current_progress - segment_start) / (segment_end - segment_start)
    - The forwards keyword (or fill mode) in a CSS animation ensures that the animated properties of a selector retain their final calculated values after the animation completes

-----> useRef Notes <-----
    - The value inside useRef stays the same between the components renders
    - Changing the value doesn't make the component re-render
    - It has a .current property

-----> NPM Packages <-----
Vite React --> Completed!
React Router --> Completed!
Redux --> Completed!
Scss --> Completed!
TypeScript --> Completed!
TailwindCss --> Completed! (Maybe replace with React Bootstrap but just want the Grid and Responsive Layout functionality from it)
Zod --> Completed!
dotenv -->

Phaser
ThreeJs
ParticlesJs

Axios
React Hooks --> 
react-hook-form --> 
react-helmet-async --> 
react-lazy-load-image-component -->
@tanstack/react-query --> 
react-scan --> 

-----> Misc Notes <-----
<--------------------------------------------------------------------
Cube Type for Pixelated Fade Animation --> (Currently not being used)
export type CubeConfig = {
    pixelatedFadeOptions ? : {
        enabled ? : boolean;
        color ? : string;
        pixelSize ? : number;
        transitionDuration ? : number;
        trigger ? : 'always' | 'hover' | 'click';
        initialDelay ? : number;
        showDuration ? : number;
        hideDuration ? : number;
    };
    animationOptions: {
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
        animationDelay: number;
    };
    letter: string;
    cubeSize: number;
    fontSize: number;
    cubeColors: string[];
    animationGroupClassName ? : string | null;
};
-------------------------------------------------------------------->  