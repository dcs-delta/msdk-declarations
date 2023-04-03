declare namespace AI {

	export namespace Task {

		export type OrbitPatternKey = "RACE_TRACK" | "CIRCLE";
		export type OrbitPatternValue = "Race-Track" | "Circle";

		export const OrbitPattern: Record<OrbitPatternKey, OrbitPatternValue>;


		export type DesignationKey = "NO" | "WP" | "IR_POINTER" | "LASER" | "AUTO";
		export type DesignationValue = "No" | "WP" | "IR-Pointer" | "Laser" | "Auto";

		export const Designation: Record<DesignationKey, DesignationValue>;


		export type TurnMethodKey = "FLY_OVER_POINT" | "FIN_POINT";
		export type TurnMethodValue = "Fly Over Point" | "Fin Point";

		export const TurnMethod: Record<TurnMethodKey, TurnMethodValue>;


		export type VehicleFormationKey = "VEE" | "ECHELON_RIGHT" | "OFF_ROAD" | "RANK" | "ECHELON_LEFT" | "ON_ROAD" | "CONE" | "DIAMOND";
		export type VehicleFormationValue = "Vee" | "EchelonR" | "Off Road" | "Rank" | "EchelonL" | "On Road" | "Cone" | "Diamond";

		export const VehicleFormation: Record<VehicleFormationKey, VehicleFormationValue>;


		export type AltitudeTypeKey = "RADIO" | "BARO";
		export type AltitudeTypeValue = AltitudeTypeKey;

		export const AltitudeType: Record<AltitudeTypeKey, AltitudeTypeValue>;


		export type WaypointTypeKey = "TAKEOFF" | "TAKEOFF_PARKING" | "TURNING_POINT" | "TAKEOFF_PARKING_HOT" | "LAND";
		export type WaypointTypeValue = "TakeOff" | "TakeOffParking" | "Turning Point" | "TakeOffParkingHot" | "Land";

		export const WaypointType: Record<WaypointTypeKey, WaypointTypeValue>;


		export type WeaponExpendKey = "QUARTER" | "TWO" | "ONE" | "FOUR" | "HALF" | "ALL";
		export type WeaponExpendValue = "Quarter" | "Two" | "One" | "Four" | "Half" | "All";

		export const WeaponExpend: Record<WeaponExpendKey, WeaponExpendValue>;

	}


	export namespace Option {

		export namespace Air {

			export type idKey =
				"ROE" | "REACTION_ON_THREAT" | "RADAR_USING" | "FLARE_USING" | "Formation" |
				"RTB_ON_BINGO" | "SILENCE" | "RTB_ON_OUT_OF_AMMO" | "ECM_USING" | "PROHIBIT_AA" |
				"PROHIBIT_JETT" | "PROHIBIT_AB" | "PROHIBIT_AG" | "MISSILE_ATTACK" | "PROHIBIT_WP_PASS_REPORT" |
				"OPTION_RADIO_USAGE_CONTACT" | "OPTION_RADIO_USAGE_ENGAGE" | "OPTION_RADIO_USAGE_KILL" | "JETT_TANKS_IF_EMPTY" | "FORCED_ATTACK";

			export type idValue =
				 0 |  1 |  3 |  4 |  5 |
				 6 |  7 | 10 | 13 | 14 |
				15 | 16 | 17 | 18 | 19 |
				21 | 22 | 23 | 25 | 26;

			export const id: Record<idKey, idValue>;


			export namespace val {

				export type ROEKey = "WEAPON_FREE" | "OPEN_FIRE_WEAPON_FREE" | "OPEN_FIRE" | "RETURN_FIRE" | "WEAPON_HOLD";
				export type ROEValue = 0 | 1 | 2 | 3 | 4;

				export const ROE: Record<ROEKey, ROEValue>;


				export type REACTION_ON_THREATKey = "NO_REACION" | "PASSIVE_DEFENCE" | "EVADE_FIRE" | "BYPASS_AND_ESCAPE" | "ALLOW_ABORT_MISSION";
				export type REACTION_ON_THREATValue = 0 | 1 | 2 | 3 | 4;

				export const REACTION_ON_THREAT: Record<REACTION_ON_THREATKey, REACTION_ON_THREATValue>;


				export type RADAR_USINGKey = "NEVER" | "FOR_ATTACK_ONLY" | "FOR_SEARCH_IF_REQUIRED" | "FOR_CONTINUOUS_SEARCH";
				export type RADAR_USINGValue = 0 | 1 | 2 | 3;

				export const RADAR_USING: Record<RADAR_USINGKey, RADAR_USINGValue>;


				export type FLARE_USINGKey = "NEVER" | "AGAINST_FIRED_MISSILE" | "WHEN_FLYING_IN_SAM_WEZ" | "WHEN_FLYING_NEAR_ENEMIES";
				export type FLARE_USINGValue = 0 | 1 | 2 | 3;

				export const FLARE_USING: Record<FLARE_USINGKey, FLARE_USINGValue>;


				export type ECM_USINGKey = "NEVER_USE" | "USE_IF_ONLY_LOCK_BY_RADAR" | "USE_IF_DETECTED_LOCK_BY_RADAR" | "ALWAYS_USE";
				export type ECM_USINGValue = 0 | 1 | 2 | 3;

				export const ECM_USING: Record<ECM_USINGKey, ECM_USINGValue>;


				export type MISSILE_ATTACKKey = "MAX_RANGE" | "NEZ_RANGE" | "HALF_WAY_RMAX_NEZ" | "TARGET_THREAT_EST" | "RANDOM_RANGE";
				export type MISSILE_ATTACKValue = 0 | 1 | 2 | 3 | 4;

				export const MISSILE_ATTACK: Record<MISSILE_ATTACKKey, MISSILE_ATTACKValue>;

			}

			export type Key = idValue;
			export type Value = val.ROEValue | val.REACTION_ON_THREATValue | val.RADAR_USINGValue | val.FLARE_USINGValue | val.ECM_USINGValue | val.MISSILE_ATTACKValue;

		}


		export namespace Ground {

			export type idKey =
				"ROE" | "FORMATION" | "DISPERSE_ON_ATTACK" | "ALARM_STATE" | "ENGAGE_AIR_WEAPONS" |
				"AC_ENGAGEMENT_RANGE_RESTRICTION";

			export type idValue =
				0 | 5 | 8 | 9 | 20 |
				24;

			export const id: Record<idKey, idValue>;


			export namespace val {

				export type ROEKey = "OPEN_FIRE" | "RETURN_FIRE" | "WEAPON_HOLD";
				export type ROEValue = 2 | 3 | 4;

				export const ROE: Record<ROEKey, ROEValue>;


				export type ALARM_STATEKey = "AUTO" | "GREEN" | "RED";
				export type ALARM_STATEValue = 0 | 1 | 2;

				export const ALARM_STATE: Record<ALARM_STATEKey, ALARM_STATEValue>;

			}

			export type Key = idValue;
			export type Value = val.ROEValue | val.ALARM_STATEValue;

		}


		export namespace Naval {

			export type idKey = "ROE";
			export type idValue = 0;

			export const id: Record<idKey, idValue>;


			export namespace val {

				export type ROEKey = AI.Option.Ground.val.ROEKey;
				export type ROEValue = AI.Option.Ground.val.ROEValue;

				export const ROE: Record<ROEKey, ROEValue>;

			}

			export type Key = idValue;
			export type Value = val.ROEValue;

		}

	}

}
