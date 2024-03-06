export interface Movie{
    name: string;
    rate:number;
    time:number;
    detail:string;
    release: number;
    type: string;
}

export interface Person{
    name: string;
    birthdate: string;
    detail: string;
    rank: number;
}

export interface creator{
    pid:number;
    mid:number;
}

export interface star{
    pid:number;
    mid:number;
}