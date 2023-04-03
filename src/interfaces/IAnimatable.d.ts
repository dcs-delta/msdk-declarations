declare interface IAnimatable {

	/**
	 * Gets the value for the specified animation argument on the external model of the unit.
	 *
	 * @param arg The animation argument to get the value of.
	 *
	 * @returns The value of the animation argument, or 0 if it was invalid.
	 */
	getDrawArgumentValue(arg: number): number;

}
