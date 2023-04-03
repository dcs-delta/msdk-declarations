declare namespace Controller {

	export type DetectionName = "VISUAL" | "OPTIC" | "RADAR" | "IRST" | "RWR" | "DLINK";
	export type DetectionId = 1 | 2 | 4 | 8 | 16 | 32 | number;

	export const Detection: Record<DetectionName, DetectionId>;


	export type DetectionTarget = {
		object: IObject,
		visible: boolean,
		type: boolean,
		distance: boolean
	};

}
