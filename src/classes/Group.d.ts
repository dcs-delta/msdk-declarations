declare type GroupID = number;


/**
 * Represents a group of {@link Unit units}.
 */
declare class Group implements IObject, IIdentifiableEntity<GroupID>, ICoalitionEntity {

	/* IObject */
	public isExist(): boolean;
	public destroy(): void;
	public getCategory(): _Object.CategoryId;
	public getTypeName(): string;
	public getDesc(): any;
	public hasAttribute(attribute: string): boolean;
	public getName(): string;
	public getPoint(): Vec3;
	public getPosition(): Position3;
	public getVelocity(): Vec3;
	public inAir(): boolean;

	/* IIdentifiableEntity */
	public getID(): GroupID;

	/* ICoalitionEntity */
	public getCoalition(): coalition.sideId;




	/**
	 * Activates the group if it had a delated start or late activation.
	 */
	public activate(): void;


	/**
	 * Gets the unit at the specified index in the group.
	 *
	 * @param index The index of the unit to retrieve.
	 *
	 * @returns The unit if the index is valid, otherwise null.
	 */
	public getUnit(index: number): Unit | null;


	/**
	 * Gets the units of the group.
	 *
	 * @remarks For train groups, {@link Group.getUnits} will always return a single unit.
	 */
	public getUnits(): Unit[] | null;


	/**
	 * Gets the number of units in the group.
	 */
	public getSize(): number;


	/**
	 * Gets the initial number of units in the group.
	 */
	public getInitialSize(): number;


	/**
	 * Gets the controller of the group.
	 */
	public getController(): Controller;


	/**
	 * Turns the group's radar emitters on or off depending on the specified value.
	 *
	 * @param value Whether or not the radar emitters should be on.
	 */
	public enableEmission(value: boolean): void;




	/**
	 * Gets the group with the specified unique name.
	 *
	 * @param name The name of the group to retrieve.
	 */
	public static getByName(this: void, name: string): Group;

}
