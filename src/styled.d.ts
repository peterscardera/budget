import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: string;
        colors: {
            blue: string;
            lightBlue: string;
            grey: string;
            lightgrey: string;
            offWhite: string;
            black: string;
        };
    }
}
