declare module world {

	export type eventName =
		"S_EVENT_INVALID"           | "S_EVENT_SHOT"                   | "S_EVENT_HIT"                     | "S_EVENT_TAKEOFF"                      | "S_EVENT_LAND"             |
		"S_EVENT_CRASH"             | "S_EVENT_EJECTION"               | "S_EVENT_REFUELING"               | "S_EVENT_DEAD"                         | "S_EVENT_PILOT_DEAD"       |
		"S_EVENT_BASE_CAPTURED"     | "S_EVENT_MISSION_START"          | "S_EVENT_MISSION_END"             | "S_EVENT_TOOK_CONTROL"                 | "S_EVENT_REFUELING_STOP"   |
		"S_EVENT_BIRTH"             | "S_EVENT_HUMAN_FAILURE"          | "S_EVENT_DETAILED_FAILURE"        | "S_EVENT_ENGINE_STARTUP"               | "S_EVENT_ENGINE_SHUTDOWN"  |
		"S_EVENT_PLAYER_ENTER_UNIT" | "S_EVENT_PLAYER_LEAVE_UNIT"      | "S_EVENT_PLAYER_COMMENT"          | "S_EVENT_SHOOTING_START"               | "S_EVENT_SHOOTING_END"     |
		"S_EVENT_MARK_ADDED"        | "S_EVENT_MARK_CHANGE"            | "S_EVENT_MARK_REMOVED"            | "S_EVENT_KILL"                         | "S_EVENT_SCORE"            |
		"S_EVENT_UNIT_LOST"         | "S_EVENT_LANDING_AFTER_EJECTION" | "S_EVENT_PARATROOPER_LENDING"     | "S_EVENT_DISCARD_CHAIR_AFTER_EJECTION" | "S_EVENT_WEAPON_ADD"       |
		"S_EVENT_TRIGGER_ZONE"      | "S_EVENT_LANDING_QUALITY_MARK"   | "S_EVENT_BDA"                     | "S_EVENT_AI_ABORT_MISSION"             | "S_EVENT_DAYNIGHT"         |
		"S_EVENT_FLIGHT_TIME"       | "S_EVENT_PLAYER_SELF_KILL_PILOT" | "S_EVENT_PLAYER_CAPTURE_AIRFIELD" | "S_EVENT_EMERGENCY_LANDING"            | "S_EVENT_UNIT_CREATE_TASK" |
		"S_EVENT_UNIT_DELETE_TASK"  | "S_EVENT_MAX";

	export type eventId =
		 0 |  1 |  2 |  3 |  4 |
		 5 |  6 |  7 |  8 |  9 |
		10 | 11 | 12 | 13 | 14 |
		15 | 16 | 17 | 18 | 19 |
		20 | 21 | 22 | 23 | 24 |
		25 | 26 | 27 | 28 | 29 |
		30 | 31 | 32 | 33 | 34 |
		35 | 36 | 37 | 38 | 39 |
		40 | 41 | 42 | 43 | 44 |
		45 | 46;

	export const event: Record<eventName, eventId>;




	export type BirthPlaceName =
		/* unknown */                | "wsBirthPlace_Air"    /* |  unknown */             | "wsBirthPlace_Ship" | "wsBirthPlace_RunWay"       |
		"wsBirthPlace_Park"       /* |  unknown */           /* |  unknown */          /* |  unknown */         | "wsBirthPlace_Heliport_Hot" |
		"wsBirthPlace_Heliport_Cold" | "wsBirthPlace_Ship_Cold" | "wsBirthPlace_Ship_Hot";

	export type BirthPlaceId =
		      1 |       3 |  4 |
		 5 |                 9 |
		10 | 11 | 12;

	export const BirthPlace: Record<BirthPlaceName, BirthPlaceId>;




	export type VolumeTypeName = "SEGMENT" | "BOX" | "SPHERE" | "PYRAMID";
	export type VolumeTypeId = 0 | 1 | 2 | 3;

	export const VolumeType: Record<VolumeTypeName, VolumeTypeId>;

}
