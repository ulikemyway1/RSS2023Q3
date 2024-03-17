import Levels from './levelsSrc';

type LevelDescr = {
    name: string;
    difficulty: string;
    levelID: string;
    dataURL: Levels;
};

const levelDescr: { [key: string]: LevelDescr } = {
    level1: {
        name: 'Level 1',
        difficulty: 'A1',
        levelID: 'Level-1',
        dataURL: Levels['Level-1'],
    },
    level2: {
        name: 'Level 2',
        difficulty: 'A1-B1',
        levelID: 'Level-2',
        dataURL: Levels['Level-2'],
    },
    level3: {
        name: 'Level 3',
        difficulty: 'B1-B2',
        levelID: 'Level-3',
        dataURL: Levels['Level-3'],
    },
    level4: {
        name: 'Level 4',
        difficulty: 'B2',
        levelID: 'Level-4',
        dataURL: Levels['Level-4'],
    },
    level5: {
        name: 'Level 5',
        difficulty: 'C1',
        levelID: 'Level-5',
        dataURL: Levels['Level-5'],
    },
    level6: {
        name: 'Level 6',
        difficulty: 'C2',
        levelID: 'Level-6',
        dataURL: Levels['Level-6'],
    },
};

export default levelDescr;
