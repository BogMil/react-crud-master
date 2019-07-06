import { ColModel } from '../../types/ColModel';
import { CrudModalActionType, GenerateColNamePropertiesInRowDataRetType } from './crudModal.types';
export declare function closeModal(): CrudModalActionType;
export declare function openModal(): CrudModalActionType;
export declare function generateColNamePropertiesInRowData(colModels: ColModel[]): GenerateColNamePropertiesInRowDataRetType;
export declare function onRowDataChange(name: string, value: any): CrudModalActionType;
//# sourceMappingURL=crudModal.actions.d.ts.map