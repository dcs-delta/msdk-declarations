declare type AttackUnitTaskID = "AttackUnit";

declare interface AttackUnitParams extends ITaskParams {
	unitId: UnitID;
	weaponType?: Weapon.flagId;
	expend?: AI.Task.WeaponExpendValue;
	direction?: number;
	attackQtyLimit?: boolean;
	attackQty?: number;
	groupAttack?: boolean;
}

declare class AttackUnit implements ITask {
	id: AttackUnitTaskID;
	params: AttackUnitParams;
}
