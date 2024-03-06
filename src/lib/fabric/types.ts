export type Steps = [number, number, number];
export type Mask = string;
export type ToMask = string;
export type EaseTrigger = number;
export type Ease = number;

export enum ModelConfigKeys {
	base,
	palette,
	presets,
	status,
	out,
	gray,
	out2
}
export type cssFabricModelKey = keyof typeof ModelConfigKeys;
export type cssFabricModelType = Record<cssFabricModelKey, any>;
