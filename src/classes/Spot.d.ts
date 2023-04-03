declare class Spot {

	public destroy(): void;
	public getCategory(): _Object.CategoryId;


	/**
	 * Gets the target point of the spot.
	 *
	 * @returns The target point.
	 */
	public getPoint(): Vec3;


	/**
	 * Sets the target point of the spot.
	 *
	 * @param point The target point.
	 */
	public setPoint(point: Vec3): void;


	/**
	 * Gets the laser code number.
	 *
	 * @returns The laser code number.
	 */
	public getCode(): number;


	/**
	 * Sets the laser code number.
	 *
	 * @param code The laser code number to set.
	 */
	public setCode(code: number): void;




	/**
	 * Creates an IR instance of the Spot class originating from the specified source object.
	 *
	 * @param source The source object.
	 * @param localRef The point in the object reference frame where the IR beam is radiated from, if any. Otherwise null.
	 * @param point The target point.
	 */
	public static createInfraRed(source: IObject, localRef: Vec3 | null, point: Vec3): Spot;


	/**
	 * Creates a laser designating instance of the Spot class originating from the specified source object.
	 *
	 * @param source The source object.
	 * @param localRef The point in the object reference frame where the laser ray is radiated from, if any. Otherwise null.
	 * @param point The target point.
	 * @param code Optional laser code to set.
	 */
	public static createLaser(source: IObject, localRef: Vec3 | null, point: Vec3, code?: number): Spot;

}
