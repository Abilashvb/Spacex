export interface ILaunch {
    name?: string;
    id?: string;
    details?: string;
    rocket?: string;
    links?: ILink;
    failures?: IFailure[];
    success?: boolean;
    [key: string]: any;
}

export interface ILink {
    article?: string;
    patch?: { large?: string, small?: string };
    [key: string]: any;
}

export interface IFailure {
    altitude?: any;
    reason?: string;
    time: number;
    [key: string]: any;
}