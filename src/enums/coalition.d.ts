declare namespace coalition {

	export type sideName = "NEUTRAL" | "RED" | "BLUE";
	export type sideId = 0 | 1 | 2 | (1 | 2);

	export const side: Record<sideName, sideId>;




	export type serviceName = "ATC" | "AWACS" | "TANKER" | "FAC";
	export type serviceId = 0 | 1 | 2 | 3;

	export const service: Record<serviceName, serviceId>;

}
