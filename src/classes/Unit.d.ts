declare type UnitID = number;


/**
 * Represents units such as aircraft, surface vehicles, and ground structures.
 */
declare class Unit implements IObject, IIdentifiableEntity<UnitID>, ICoalitionObject, IAnimatable {

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
	public getID(): UnitID;

	/* ICoalitionObject */
	public getCoalition(): coalition.sideId;
	public getCountry(): country.countryId;

	/* IAnimatable */
	public getDrawArgumentValue(arg: number): number;




	/**
	 * Gets a boolean value indicating whether or not the unit is activated.
	 */
	public isActive(): boolean;


	/**
	 * Gets the name of the player if the unit is controlled by a player, otherwise returns null.
	 */
	public getPlayerName(): string | null;


	/**
	 * Gets the index number of the unit within its group as defined by {@link coalition.addGroup} or the mission editor.
	 */
	public getNumber(): number;


	/**
	 * Gets the unique object identifier associated with the unit.
	 */
	public getObjectID(): number;


	/**
	 * Gets the controller of the unit.
	 */
	public getController(): Controller;


	/**
	 * Gets the group that the unit belongs to.
	 */
	public getGroup(): Group;


	/**
	 * Gets the callsign of the unit.
	 */
	public getCallsign(): string;


	/**
	 * Gets the current HP of the unit. If the value is less than 1, the unit is considered dead.
	 */
	public getLife(): number;


	/**
	 * Gets the maximum HP of the unit.
	 */
	public getLife0(): number;


	/**
	 * Gets the percentage of fuel remaining for the unit.
	 *
	 * @remarks
	 * Surface vehicles always have max fuel.
	 *
	 * @returns A floating point number between 0 (for 0%) and 1 (for 100%). If the unit has external fuel tanks, this number may be beyond 100%.
	 */
	public getFuel(): number;


	/**
	 * Gets the ammunication table of ammunication available to the unit.
	 *
	 * @deprecated Not yet implemented.
	 */
	public getAmmo(): any;


	/**
	 * Gets the sensor table of the sensors available to the unit.
	 *
	 * @deprecated Not yet implemented.
	 */
	public getSensors(): any;


	/**
	 * Gets a boolean indicating whether or not the unit has the specified sensors available.
	 *
	 * @param type Optionally filter by sensor type.
	 * @param subtype Optionally filter even further by sensor subtype.
	 */
	public hasSensors(type?: Unit.SensorTypeId, subtype?: Unit.OpticTypeId | Unit.RadarTypeId): boolean;


	/**
	 * Gets a tuple containing a boolean indicating whether or not any of the radars of the unit are operational and the object the radar is most interested in.
	 */
	// TODO: determine proper typing for interest object
	public getRadar(): [operational: boolean, interest: any];


	/**
	 * Gets an array of friendly cargo units sorted by distance relative to the unit.
	 *
	 * @remarks Returns null for all units except those with a unit type of {@link MSE.UnitCategory.Helicopter}.
	 *
	 * @returns The array of cargo units, or null if cargo units are not appropriate to the type of unit.
	 */
	public getNearestCargos(): Unit[] | null;


	/**
	 * Turns the unit's radar emitters on or off depending on the specified value.
	 *
	 * @param value Whether or not the radar emitters should be on.
	 */
	public enableEmission(value: boolean): void;


	/**
	 * Gets the number of infantry units that can be embarked onto the unit.
	 *
	 * @remarks Returns null for all units except those with a unit type of {@link MSE.UnitCategory.Airplane} or {@link MSE.UnitCategory.Helicopter}.
	 *
	 * @returns The number of infantry units, or null if infantry units are not appropriate to the type of unit.
	 */
	public getDescentCapacity(): number;




	/**
	 * Gets the unit with the specified unique name.
	 *
	 * @param name The name of the unit to retrieve.
	 */
	public static getByName(this: void, name: string): Unit;


	/**
	 * Gets the descriptor table of the unit with the specified unique name.
	 *
	 * @param name The name of the unit to retrieve the descriptor table of.
	 *
	 * @deprecated Not yet implemented.
	 */
	// TODO: use proper type instead of any
	public static getDescByName(this: void, name: string): any;

}
