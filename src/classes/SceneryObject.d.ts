/**
 * Represents map objects.
 */
declare class SceneryObject implements IObject, IMortalEntity {

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

	/* IMortalEntity */
	public getLife(): number;




	/**
	 * Gets the descriptor table of the scenery object with the specified unique name.
	 *
	 * @param name The name of the scenery object to retrieve the descriptor table of.
	 *
	 * @deprecated Not yet implemented.
	 */
	// TODO: use proper type instead of any
	public static getDescByName(this: void, name: string): any;

}
