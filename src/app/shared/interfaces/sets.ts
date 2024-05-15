export interface ISets {
    sets: Array<ISet>;
}

export interface ISet {
    code: string;
    name: string;
    type: string;
    releaseDate: string;
    onlineOnly: boolean;
    border?: string;
    mkm_id?: number;
    booster?: Array<string | Array<string>>;
    mkm_name?: string;
    magicCardsInfoCode?: string;
    block?: string;
}
