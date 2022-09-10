import {
  CaseType,
  CPUFanType,
  CPUType,
  DiskType,
  GPUType,
  MotherType,
  PSUType,
  RAMType
} from './buildComponent.types'

export interface IBuild {
  Id: number
  Name: string
  Price?: number
  IsDeleted: boolean
  ImageUrl: string
  Components: {
    CPU: CPUType
    CPUFan: CPUFanType
    GPU?: GPUType
    Memory: RAMType
    MemoryQty: number
    Motherboard: MotherType
    SSD: DiskType
    HDD?: DiskType
    Case: CaseType
    PSU: PSUType
    Other: string
  }
}
