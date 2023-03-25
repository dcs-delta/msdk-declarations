declare module env {

	export module mission {

		export module triggers {

			export interface zone {
				radius?: number;
				zoneId: number;
				color: MSE.ColorRGBA;
				properties: MSE.KeyValuePair[];
				hidden: boolean;
				x: number;
				y: number;
				name: string;
				type: number;
				verticies?: MSE.Vertex[];
			}

			export let zones: zone[];

		}

	}

}
