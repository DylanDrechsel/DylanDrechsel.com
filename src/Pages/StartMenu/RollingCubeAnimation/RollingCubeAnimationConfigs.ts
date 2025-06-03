import { COLORS } from '../../../Common/scss/_colors'

export type CubeConfig = {
    animationOptions: {
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
        animationDelay: number;
    };
    floatingAnimationOptions: {
        xOffset: number;
        yOffset: number;
    };
    letter: string;
    cubeSize: number;
    fontSize: number;
    cubeColors: string[];
    animationGroupClassName ? : string | null;
};

const getRandomNumberExcludingMiddle = (min: number, max: number): number => {
    const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.random() < 0.5 ? randomInt(-max, -min) : randomInt(min, max);
};

export const firstNameCubeConfigs: CubeConfig[] = [{
        animationOptions: {
            xStart: -600,
            yStart: -1000,
            xEnd: -600,
            yEnd: 0,
            animationDelay: 0
        },
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'D',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'Y',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'L',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'A',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'N',
        cubeSize: 200,
        fontSize: 8,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'D',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'R',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'E',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'C',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'H',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'S',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'E',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
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
        floatingAnimationOptions: {
            xOffset: getRandomNumberExcludingMiddle(3, 10),
            yOffset: getRandomNumberExcludingMiddle(3, 15),
        },
        letter: 'L',
        cubeSize: 100,
        fontSize: 4,
        cubeColors: [COLORS.giantsOrange, COLORS.vividCerulean, COLORS.neutralDarkest],
        animationGroupClassName: 'last-name'
    },
];