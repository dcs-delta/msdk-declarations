/**
 * Tracks mission time and schedules methods.
 */
declare module timer {

	/**
	 * Returns the time in seconds since simulation start.
	 *
	 * @remarks
	 * Mission pauses do not affect the mission time returned by this method.
	 */
	export function getTime(this: void): number;


	/**
	 * Returns the mission time.
	 */
	export function getAbsTime(this: void): number;


	/**
	 * Returns the mission time at mission start.
	 */
	export function getTime0(this: void): number;




	/**
	 * Callback signature.
	 *
	 * @param context The context given by the invocation of {@link timer.scheduleFunction}.
	 * @param time The time at which the callback began running, practically the current simulation time.
	 *
	 * @returns Return a new simulation time (e.g. `time + 5` to run it again in 5 seconds) to reschedule the current callback, or null to unschedule.
	 */
	export type TimerCallback = (context: any, time: number) => number | null;


	/**
	 * Schedules the specified callback to run at the specified time.
	 *
	 * @param context The context to pass to the callback.
	 * @param callback The callback to schedule.
	 * @param time The simulation time at which to run the callback. E.g. `timer.getTime() + 5` to run it 5 seconds from now.
	 *
	 * @returns The scheduler identifier of the specified callback.
	 */
	export function scheduleFunction(this: void, context: any, callback: TimerCallback, time: number): void;


	/**
	 * Removes (unschedules) a scheduled callback from the scheduler using the specified identifier.
	 *
	 * @param identifier The identifier as returned by {@link timer.scheduleFunction}.
	 */
	export function removeFunction(this: void, identifier: number): void;


	/**
	 * Cancels the current scheduled run of the callback with the specified scheduler identifier, and reschedules it to run at the specified time instead.
	 *
	 * @param identifier The identifier as returned by {@link timer.scheduleFunction}.
	 * @param time The simulation time at which to run the callback.
	 */
	export function setFunctionTime(this: void, identifier: number, time: number): void;

}
