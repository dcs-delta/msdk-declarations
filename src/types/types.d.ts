/**
 * Types as used by the Mission Scripting Environment.
 */
declare namespace MSE {

	/**
	 * Three dimensional location.
	 */
	export interface Vec3 {

		/**
		 * Latitudal value (x in 2D) in engine units.
		 */
		x: number;

		/**
		 * Altitude in meters.
		 */
		y: number;

		/**
		 * Longitudal value (y in 2D) in engine units.
		 */
		z: number;

	}


	/**
	 * Position table containing a location vector and orientation vectors x, y, and z.
	 */
	export interface Position3 {

		p: Vec3;
		x: Vec3;
		y: Vec3;
		z: Vec3;

	}


	/**
	 * Smoke color enumeration.
	 */
	export enum SmokeColor {
		Green    = 0,
		Red      = 1,
		White    = 2,
		Orange   = 3,
		Blue     = 4
	}


	/**
	 * Smoke color enumeration for use in {@link trigger.action.ctfColorTag}.
	 */
	export enum CtfSmokeColor {
		Disabled = 0,
		Green    = (SmokeColor.Green + 1),
		Red      = (SmokeColor.Red + 1),
		White    = (SmokeColor.White + 1),
		Orange   = (SmokeColor.Orange + 1),
		Blue     = (SmokeColor.Blue + 1)
	}


	/**
	 * Flare color enumeration.
	 */
	export enum FlareColor {
		Green = 0,
		Red = 1,
		White = 2,
		Yellow = 3
	}


	/**
	 * Smoke effect presets.
	 */
	export enum SmokeEffectPreset {
		SmallSmokeAndFire = 1,
		MediumSmokeAndFire = 2,
		LargeSmokeAndFire = 3,
		HugeSmokeAndFire = 4,
		SmallSmoke = 5,
		MediumSmoke = 6,
		LargeSmoke = 7,
		HugeSmoke = 8
	}


	/**
	 * RGBA color format.
	 */
	export type ColorRGBA = [number, number, number, number];


	/**
	 * Key/value pair format.
	 */
	export interface KeyValuePair {
		key: string;
		value: string;
	}


	/**
	 * Defines a simple vertex.
	 */
	export interface Vertex {
		x: number;
		y: number;
	}


	/**
	 * Object category.
	 */
	export enum ObjectCategory {
		Unit = 1,
		Weapon = 2,
		Static = 3,
		Base = 4,
		Scenery = 5,
		Cargo = 6
	}


	/**
	 * Coalition side.
	 */
	export enum CoalitionSide {
		Neutral = 0,
		Red = 1,
		Blue = 2,
		Contested = (Red | Blue)
	}


	/**
	 * Coalition service.
	 */
	export enum CoalitionService {
		ATC = 0,
		AWACS = 1,
		Tanker = 2,
		FAC = 3
	}


	/**
	 * Unit category.
	 */
	export enum UnitCategory {
		Airplane = 0,
		Helicopter = 1,
		Ground = 2,
		Ship = 3,
		Structure = 4
	}


	/**
	 * Group category.
	 */
	export enum GroupCategory {
		Airplane = 0,
		Helicopter = 1,
		Ground = 2,
		Ship = 3,
		Train = 4
	}


	/**
	 * Unit refueling system.
	 */
	export enum UnitRefuelingSystem {
		Boom = 0,
		Drogue = 1
	}


	/**
	 * Unit sensor type.
	 */
	export enum UnitSensorType {
		Optical = 0,
		Radar = 1,
		IRST = 2,
		RWR = 3
	}


	/**
	 * Optical sensor type.
	 */
	export enum UnitOpticType {
		TV = 0,
		LowLevelTV = 1,
		IR = 2
	}


	/**
	 * Radar type.
	 */
	export enum UnitRadarType {
		AirRadar = 0,
		SurfaceRadar = 1
	}


	/**
	 * Parking type.
	 */
	export enum AirbaseParkingType {
		RunwaySpawn = 16,
		Helicopter = 40,
		HardenedAirShelter = 68,
		Airplane = 72,
		Open = 104
	}


	/**
	 * Parking spot data.
	 */
	export interface AirbaseParkingSpot {
		/**
		 * Parking identifier.
		 */
		Term_Index: number;

		/**
		 * World position.
		 */
		vTerminalPos: Vec3,

		TO_AC: boolean;

		Term_Index_0: number;

		/**
		 * Type of parking.
		 */
		Term_Type: AirbaseParkingType,

		/**
		 * Distance to active runway in meters.
		 */
		fDistToRW: number;
	}


	/**
	 * Airbase runway data.
	 */
	export interface AirbaseRunway {
		/**
		 * Bearing in radians. Always negative for some reason, convert to absolute prior to use.
		 */
		course: number;

		Name: any | null; // TODO: determine whether or not this should be a string or a number

		/**
		 * World position of the center of the runway.
		 */
		position: Vec3;

		/**
		 * Length of the runway in meters.
		 */
		length: number;

		/**
		 * Width of the runway in meters.
		 */
		width: number;
	}


	/**
	 * Airbase tech object data.
	 */
	export interface AirbaseTechObject {
		pos: Vec3;
	}

}
