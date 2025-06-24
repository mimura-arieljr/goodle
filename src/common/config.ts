// Common Style Configurations

type BackgroundColors = {
    MULTIPLE_CHOICE_BG_COLOR: string,
    MULTIPLE_CHOICE_SELECTED_BG_COLOR: string
    MULTIPLE_CHOICE_CORRECT_BG_COLOR: string,
    MULTIPLE_CHOICE_INCORRECT_BG_COLOR: string
};

type BorderColors = {
    CORRECT_BORDER_COLOR: string,
    INCORRECT_BORDER_COLOR: string
};

type ApplicationConfig = {
    DELAY_BEFORE_NEXT_QUESTION: number,
};


type Configuration = {
    ApplicationConfig: ApplicationConfig;
    BackgroundColors: BackgroundColors;
    BorderColors: BorderColors;
}

export const Configuration: Configuration  = {
    ApplicationConfig: {
        DELAY_BEFORE_NEXT_QUESTION: 3000,
    },
    BackgroundColors: {
        MULTIPLE_CHOICE_BG_COLOR: "bg-white",
        MULTIPLE_CHOICE_SELECTED_BG_COLOR: "bg-orange-300",
        MULTIPLE_CHOICE_CORRECT_BG_COLOR: "bg-green-300",
        MULTIPLE_CHOICE_INCORRECT_BG_COLOR: "bg-red-200",
    },
    BorderColors: {
        CORRECT_BORDER_COLOR: "border-green-700",
        INCORRECT_BORDER_COLOR: "border-red-900",
    },
};