export declare class ColModel {
    private static created;
    constructor(init?: Partial<ColModel>);
    private _minWidth;
    minWidth: number;
    name: string;
    label: string;
    width: number;
    order: string;
    showColMenuModal: boolean;
    calculateMinWithOfColumnByLabel: (label: string) => number;
    private getWidthOfWord;
}
//# sourceMappingURL=ColModel.d.ts.map