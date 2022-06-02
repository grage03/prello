export interface IUsePositionReturn extends IPosition {}

export interface IPosition {
  x: number
  y: number
  position: DOMRect | null
}
