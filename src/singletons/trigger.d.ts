/**
 * The trigger singleton contains a number of functions that mimic actions and conditions found within the mission editor triggers.
 * As a result these functions provide an easy way to interface with triggers setup within the mission editor.
 * Additionally a few trigger functions act as a gateway between mission editor triggers and related scripting functions.
 *
 * More info: {@link https://wiki.hoggitworld.com/view/DCS_singleton_trigger}
 */
declare namespace trigger {

	export namespace action {

		/**
		 * Configure smoke plumes for the specified aircraft.
		 * When triggering the on the same unit with a different color the plume will simply change color.
		 * As long as the smoke is enabled the toggling on/off by changing altitude is automated.
		 *
		 * @param unitName The name of the unit to configure.
		 * @param smokeColor The smoke color to set. This is also more text to try and get it long.
		 * @param altitude Optional altitude in meters the aircraft must be at or above for it to dispense smoke.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_ctfColorTag}
		 */
		export function ctfColorTag(this: void, unitName: string, smokeColor: number, altitude?: number): void;


		/**
		 * Sets the value of a user flag.
		 *
		 * @remarks
		 * Hilariously, this seems to be related to {@link trigger.misc.getUserFlag}. Entirely different namespace.
		 *
		 * @param flag The flag number or name of which you want to set the value.
		 * @param value The value to assign to the flag.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_setUserFlag}
		 */
		export function setUserFlag(this: void, flag: number | string, value: boolean | number): void;


		/**
		 * Creates an explosion at the specified location using the specified power.
		 *
		 * @param location The location at which to create the explosion.
		 * @param power The power of the explosion in kg of TNT.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_explosion}
		 */
		export function explosion(this: void, location: Vec3, power: number): void;


		/**
		 * Creates a colored smoke marker at the specified location using the specified color.
		 *
		 * @param location The location at which to create the marker.
		 * @param color The color of the smoke.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_smoke}
		 */
		export function smoke(this: void, location: Vec3, color: trigger.smokeColorId): void;


		/**
		 * Creates a big smoke effect at the specified location using the specified preset and density.
		 *
		 * @param location The location at which to create the smoke effect.
		 * @param preset The preset of the smoke effect.
		 * @param density The density of the smoke.
		 * @param name Optional unique name of the smoke effect for later use in {@link effectSmokeStop}.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_effectSmokeBig}
		 */
		export function effectSmokeBig(this: void, location: Vec3, preset: trigger.smokeEffectPresetId, density: number, name?: string): void;


		/**
		 * Stops a big smoke effect started by {@link effectSmokeBig} using the specified unique name.
		 *
		 * @param name The unique name of the smoke effect to stop.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_effectSmokeStop}
		 */
		export function effectSmokeStop(this: void, name: string): void;


		/**
		 * Creates an illumination bomb at the specified location using the specified power.
		 *
		 * @param location The location at which to create the illumination bomb.
		 * @param power The power of the illumination bomb (1-1000000).
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_illuminationBomb}
		 */
		export function illuminationBomb(this: void, location: Vec3, power: number): void;


		/**
		 * Creates a signal flare of the specified color at the specified location, launching it in the direction of the specified azimuth.
		 *
		 * @param location The location at which to create the signal flare.
		 * @param color The color of the signal flare.
		 * @param azimuth The direction the signal flare should be launched at.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_signalFlare}
		 */
		export function signalFlare(this: void, location: Vec3, color: trigger.flareColorId, azimuth: number): void;


		/**
		 * Displays the specified text to all, for the specified time in seconds.
		 *
		 * @param text The text to display.
		 * @param displayTime The time to display the text in seconds.
		 * @param clearView Whether or not to clear existing messages.
		 */
		export function outText(this: void, text: string, displayTime: number, clearView?: boolean): void;


		/**
		 * Displays the specified text to the specified coalition, for the specified time in seconds.
		 *
		 * @param coalition The coalition to display the text to.
		 * @param text The text to display.
		 * @param displayTime The time to display the text in seconds.
		 * @param clearView Whether or not to clear existing messages.
		 */
		export function outTextForCoalition(this: void, coalition: coalition.sideId, text: string, displayTime: number, clearView?: boolean): void;


		/**
		 * Displays the specified text to the specified country, for the specified time in seconds.
		 *
		 * @param country The country to display the text to.
		 * @param text The text to display.
		 * @param displayTime The time to display the text in seconds.
		 * @param clearView Whether or not to clear existing messages.
		 */
		export function outTextForCountry(this: void, country: country.countryId, text: string, displayTime: number, clearView?: boolean): void;


		/**
		 * Displays the specified text to the group with the specified group identifier, for the specified time in seconds.
		 *
		 * @param groupId The group identifier of the group to display the text to.
		 * @param text The text to display.
		 * @param displayTime The time to display the text in seconds.
		 * @param clearView Whether or not to clear existing messages.
		 */
		export function outTextForGroup(this: void, groupId: number, text: string, displayTime: number, clearView?: boolean): void;

	}




	export namespace misc {

		/**
		 * Returns the value of a user flag.
		 *
		 * @remarks
		 * Hilariously, this seems to be related to {@link trigger.action.setUserFlag}. Entirely different namespace.
		 *
		 * @param flag The flag number or name of which you want to retrieve the value.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_getUserFlag}
		 */
		export function getUserFlag(this: void, flag: number | string): number;


		/**
		 * Returns a trigger zone table of the zone with the specified name.
		 *
		 * @param name The name of the zone.
		 *
		 * More info: {@link https://wiki.hoggitworld.com/view/DCS_func_getZone}
		 */
		export function getZone(this: void, name: string): object; // TODO!: map actual zone object

	}

}
