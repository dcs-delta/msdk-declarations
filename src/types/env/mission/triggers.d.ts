declare module env {

	export module mission {

		export module triggers {

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


			export interface zone {
				radius?: number;
				zoneId: number;
				color: ColorRGBA;
				properties: KeyValuePair[];
				hidden: boolean;
				x: number;
				y: number;
				name: string;
				type: number;
				verticies?: Vertex[];
			}

			export let zones: zone[];

		}

	}

}
