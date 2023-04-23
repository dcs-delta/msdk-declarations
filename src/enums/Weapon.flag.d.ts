declare namespace Weapon {

	export type flagName =
		/** LGB */
		"LGB" |
		/** TvGB */
		"TvGB" |
		/** SNSGB */
		"SNSGB" |
		/** HEBomb */
		"HEBomb" |
		/** Penetrator */
		"Penetrator" |
		/** NapalmBomb */
		"NapalmBomb" |
		/** FAEBomb */
		"FAEBomb" |
		/** ClusterBomb */
		"ClusterBomb" |
		/** Dispencer */
		"Dispencer" |
		/** CandleBomb */
		"CandleBomb" |
		/** ParachuteBomb */
		"ParachuteBomb" |
		/** GuidedBomb (LGB + TvGB + SNSGB) */
		"GuidedBomb" |
		/** AnyUnguidedBomb (HeBomb + Penetrator + NapalmBomb + FAEBomb + ClusterBomb + Dispencer + CandleBomb + ParachuteBomb) */
		"AnyUnguidedBomb" |
		/** AnyBomb (GuidedBomb + AnyUnguidedBomb) */
		"AnyBomb" |
		/** LightRocket  */
		"LightRocket" |
		/** MarkerRocket  */
		"MarkerRocket" |
		/** CandleRocket */
		"CandleRocket" |
		/** HeavyRocket */
		"HeavyRocket" |
		/** AnyRocket (LightRocket + MarkerRocket + CandleRocket + HeavyRocket) */
		"AnyRocket" |
		/** AntiRadarMissile  */
		"AntiRadarMissile" |
		/** AntiShipMissile */
		"AntiShipMissile" |
		/** AntiTankMissile */
		"AntiTankMissile" |
		/** FireAndForgetASM */
		"FireAndForgetASM" |
		/** LaserASM */
		"LaserASM" |
		/** TeleASM */
		"TeleASM" |
		/** CruiseMissile */
		"CruiseMissile" |
		/** AntiRadarMissile2 */
		"AntiRadarMissile2" |
		/** Decoys */
		"Decoys" |
		/** GuidedASM (LaserASM + TeleASM) */
		"GuidedASM" |
		/** TacticalASM (GuidedASM + FireAndForgetASM) */
		"TacticalASM" |
		/** AnyASM (AntiRadarMissile + AntiShipMissile + AntiTankMissile + FireAndForgetASM + GuidedASM + CruiseMissile) */
		"AnyASM" |
		/** SRAAM */
		"SRAAM" |
		/** MRAAM  */
		"MRAAM" |
		/** LRAAM */
		"LRAAM" |
		/** IR_AAM */
		"IR_AAM" |
		/** SAR_AAM */
		"SAR_AAM" |
		/** AR_AAM */
		"AR_AAM" |
		/** AnyAAM (IR_AAM + SAR_AAM + AR_AAM + SRAAM + MRAAM + LRAAM) */
		"AnyAAM" |
		/** AnyMissile (ASM + AnyAAM) */
		"AnyMissile" |
		/** AnyAutonomousMissile (IR_AAM + AntiRadarMissile + AntiShipMissile + FireAndForgetASM + CruiseMissile) */
		"AnyAutonomousMissile" |
		/** GUN_POD */
		"GUN_POD" |
		/** BuiltInCannon */
		"BuiltInCannon" |
		/** Cannons (GUN_POD + BuiltInCannon) */
		"Cannons" |
		/** SmokeShell */
		"SmokeShell" |
		/** Illumination Shell */
		"Illumination Shell" |
		/** MarkerShell */
		"MarkerShell" |
		/** SubmunitionDispenserShell */
		"SubmunitionDispenserShell" |
		/** GuidedShell */
		"GuidedShell" |
		/** ConventionalShell */
		"ConventionalShell" |
		/** AnyShell */
		"AnyShell" |
		/** Torpedo */
		"Torpedo";

	export type flagId =
		/** LGB */
		0x0000000002 |
		/** TvGB */
		0x0000000004 |
		/** SNSGB */
		0x0000000008 |
		/** HEBomb */
		0x0000000010 |
		/** Penetrator */
		0x0000000020 |
		/** NapalmBomb */
		0x0000000040 |
		/** FAEBomb */
		0x0000000080 |
		/** ClusterBomb */
		0x0000000100 |
		/** Dispencer */
		0x0000000200 |
		/** CandleBomb */
		0x0000000400 |
		/** ParachuteBomb */
		0x0080000000 |
		/** GuidedBomb (LGB + TvGB + SNSGB) */
		0x000000000E |
		/** AnyUnguidedBomb (HeBomb + Penetrator + NapalmBomb + FAEBomb + ClusterBomb + Dispencer + CandleBomb + ParachuteBomb) */
		0x00800007F0 |
		/** AnyBomb (GuidedBomb + AnyUnguidedBomb) */
		0x00800007FE |
		/** LightRocket  */
		0x0000000800 |
		/** MarkerRocket  */
		0x0000001000 |
		/** CandleRocket */
		0x0000002000 |
		/** HeavyRocket */
		0x0000004000 |
		/** AnyRocket (LightRocket + MarkerRocket + CandleRocket + HeavyRocket) */
		0x0000007800 |
		/** AntiRadarMissile  */
		0x0000008000 |
		/** AntiShipMissile */
		0x0000010000 |
		/** AntiTankMissile */
		0x0000020000 |
		/** FireAndForgetASM */
		0x0000040000 |
		/** LaserASM */
		0x0000080000 |
		/** TeleASM */
		0x0000100000 |
		/** CruiseMissile */
		0x0000200000 |
		/** AntiRadarMissile2 */
		0x0040000000 |
		/** Decoys */
		0x0200000000 |
		/** GuidedASM (LaserASM + TeleASM) */
		0x0000180000 |
		/** TacticalASM (GuidedASM + FireAndForgetASM) */
		0x00001C0000 |
		/** AnyASM (AntiRadarMissile + AntiShipMissile + AntiTankMissile + FireAndForgetASM + GuidedASM + CruiseMissile) */
		0x00003F8000 |
		/** SRAAM */
		0x0000400000 |
		/** MRAAM  */
		0x0000800000 |
		/** LRAAM */
		0x0001000000 |
		/** IR_AAM */
		0x0002000000 |
		/** SAR_AAM */
		0x0004000000 |
		/** AR_AAM */
		0x0008000000 |
		/** AnyAAM (IR_AAM + SAR_AAM + AR_AAM + SRAAM + MRAAM + LRAAM) */
		0x000FC00000 |
		/** AnyMissile (ASM + AnyAAM)    */
		0x000FFF8000 |
		/** AnyAutonomousMissile (IR_AAM + AntiRadarMissile + AntiShipMissile + FireAndForgetASM + CruiseMissile) */
		0x0002258000 |
		/** GUN_POD */
		0x0010000000 |
		/** BuiltInCannon */
		0x0020000000 |
		/** Cannons (GUN_POD + BuiltInCannon) */
		0x0030000000 |
		/** SmokeShell */
		0x0400000000 |
		/** Illumination Shell */
		0x0800000000 |
		/** MarkerShell */
		0x0C00000000 |
		/** SubmunitionDispenserShell */
		0x1000000000 |
		/** GuidedShell */
		0x2000000000 |
		/** ConventionalShell */
		0x3030000000 |
		/** AnyShell */
		0x3C30000000 |
		/** Torpedo */
		0x0100000000 |
		/* Type is flaggable, we have no option but to make any number match. The list above is simply for completeness sake. */
		number;

	export const flag: Record<flagName, flagId>;

}
