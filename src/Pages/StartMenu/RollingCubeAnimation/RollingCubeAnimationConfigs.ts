export type CubeConfig = {
    // pixelatedFadeOptions ? : {
    //     enabled ? : boolean;
    //     color ? : string;
    //     pixelSize ? : number;
    //     transitionDuration ? : number;
    //     trigger ? : 'always' | 'hover' | 'click';
    //     initialDelay ? : number;
    //     showDuration ? : number;
    //     hideDuration ? : number;
    // };
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

export const firstNameCubeConfigs: CubeConfig[] = [{
        animationOptions: {
            xStart: -600,
            yStart: -1000,
            xEnd: -600,
            yEnd: 0,
            animationDelay: 0
        },
        letter: 'D',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'first-name'
    },
    {
        animationOptions: {
            xStart: -300,
            yStart: -1000,
            xEnd: -300,
            yEnd: 25,
            animationDelay: 0.2
        },
        letter: 'Y',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'first-name'
    },
    {
        animationOptions: {
            xStart: 0,
            yStart: -1000,
            xEnd: 0,
            yEnd: 50,
            animationDelay: 0.4
        },
        letter: 'L',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'first-name'
    },
    {
        animationOptions: {
            xStart: 300,
            yStart: -1000,
            xEnd: 300,
            yEnd: 25,
            animationDelay: 0.2
        },
        letter: 'A',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'first-name'
    },
    {
        animationOptions: {
            xStart: 600,
            yStart: -1000,
            xEnd: 600,
            yEnd: 0,
            animationDelay: 0
        },
        letter: 'N',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'first-name'
    },
];

export const lastNameCubeConfigs: CubeConfig[] = [{
        animationOptions: {
            xStart: -1625,
            yStart: -1000,
            xEnd: -625,
            yEnd: 250,
            animationDelay: 1.6
        },
        letter: 'D',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: -1450,
            yStart: -1000,
            xEnd: -450,
            yEnd: 200,
            animationDelay: 1.4
        },
        letter: 'R',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: -1275,
            yStart: -1000,
            xEnd: -275,
            yEnd: 150,
            animationDelay: 1.2
        },
        letter: 'E',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: -1100,
            yStart: -1000,
            xEnd: -100,
            yEnd: 100,
            animationDelay: 1.0
        },
        letter: 'C',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: 1100,
            yStart: -1000,
            xEnd: 100,
            yEnd: 100,
            animationDelay: 1.0
        },
        letter: 'H',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: 1275,
            yStart: -1000,
            xEnd: 275,
            yEnd: 150,
            animationDelay: 1.2
        },
        letter: 'S',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: 1450,
            yStart: -1000,
            xEnd: 450,
            yEnd: 200,
            animationDelay: 1.4
        },
        letter: 'E',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
    {
        animationOptions: {
            xStart: 1625,
            yStart: -1000,
            xEnd: 625,
            yEnd: 250,
            animationDelay: 1.6
        },
        letter: 'L',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: ['#ff5722', '#03a9f4'],
        animationGroupClassName: 'last-name'
    },
];