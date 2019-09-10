export declare class ColModel {
    private static created;
    constructor(init?: Partial<ColModel>);
    private _minWidth;
    minWidth: number;
    private _width;
    width: number;
    name: string;
    label: string;
    orderDirection: string;
    showColMenuModal: boolean;
    calculateMinWithOfColumnByLabel: (label: string) => number;
    private getWidthOfWord;
}
//# sourceMappingURL=colModel.d.ts.map