export interface IUsePositionReturn extends IPosition {}

export interface IPosition {
  position: DOMRect | null
  x: number
  y: number
}
