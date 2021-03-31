export interface WidgetMeaningItem {
    [key: string]: String
}

export interface WidgetInfoItem {
    id: Number;
    icon: String;
    title: String;
    description: String;
}

export interface DateTime {
    [key: string]: Number
}

export interface NewDateTime {
    [key: string]: null | number[]
}

export interface State {
    demo: {
        countdown: DateTime
    }
}

export interface demoVisible {
    [key: string]: boolean
}