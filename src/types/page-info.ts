export interface ListItem {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
    link?: string;
}

export interface PageSection {
    id: string;
    title: string;
    descriptions?: string[];
    listItems?: ListItem[];
    cardItems?: ListItem[];
    isPrintable?: boolean;
}
