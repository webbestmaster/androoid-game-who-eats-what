/* eslint-disable import/no-default-export, init-declarations */

declare module '*.svg' {
    const content: string;

    export default content;
}

declare module '*.png' {
    const content: string;

    export default content;
}

declare module '*.md' {
    const content: string;

    export default content;
}

declare module '*.txt' {
    const content: string;

    export default content;
}

declare const IS_PRODUCTION: unknown;

declare const BUILD_DATE_H: unknown;

/*
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.mp3';
*/