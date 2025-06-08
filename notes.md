-----> Project Notes <-----
-----> Animation Notes <-----
    - CSS 3D transformations are hierarchical. When I apply a transform to a parent element, its children inherit and are affected by that parents transformations before their own transformations are applied.
    - I can use this formula for tracking the progress of all animations... (See StaticAnimation for implementation example)
        FORMULA --> (current_progress - segment_start) / (segment_end - segment_start)
    - The forwards keyword (or fill mode) in a CSS animation ensures that the animated properties of a selector retain their final calculated values after the animation completes.

-----> useRef Notes <-----
    - The value inside useRef stays the same between the components renders
    - Changing the value doesn't make the component re-render
    - It has a .current property

-----> Scss Notes <-----
    -----> Sass watch command --> sass --watch ./_grid.scss:_compiledCssFile/_grid.css <-----
    - Mixin --> is a way to group CSS declarations that you want to reuse throughout the stylesheet. It helps write more concise and organized code, especially for repetitive patterns.
    - map.get() --> function retrieves the value associated with a specified key in a map.
        example --> $min: map.get($map: $grid-breakpoints ,$key: $lg); --> $min: 1200px
    - @content --> is a special Sass directive used within mixins. When you @include a mixin, any CSS declarations you put inside the @include block will be inserted at the @content point within the mixin's definition.
    - @include --> is a directive used to insert the styles defined by a @mixin into the current rule set. Its how you 'call' a mixin.

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

-----> My Responsive Grid <-----
    My Changes:
        - Added 3 more spacing options (12px, 36px, 64px)
        - Added 1 more breakpoint (xxl: 1600px)