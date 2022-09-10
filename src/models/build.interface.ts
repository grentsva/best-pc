import {
  CaseType,
  CPUFanType,
  CPUType,
  DiskType,
  GPUType,
  MotherType,
  PSUType,
  MemoryType
} from './buildComponent.types'

export interface IBuild {
  Id: number
  Name: string
  IsDeleted: boolean
  ImageUrl: string
  Components: {
    CPU: CPUType
    CPUFan: CPUFanType
    GPU?: GPUType
    Memory: MemoryType
    MemoryQty: number
    Motherboard: MotherType
    SSD?: DiskType
    HDD?: DiskType
    Case: CaseType
    PSU: PSUType
    Other: string
  }
}
