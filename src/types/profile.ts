import {IconNameKeys} from "@/components/AppIcon/AppIcon";

interface ExternalLink {
    url: string;
    icon: keyof typeof IconNameKeys;
    label: string;
}

export interface ProfileInfo {
    name: string;
    role: string;
    photoUrl: string;
    emailAddress: string;
    phoneNumber: string;
    externalLinks: ExternalLink[];
    emailEndpoint: string;
}