export type CPUType = {
  Name: string
  Brand: 'Intel' | 'AMD'
  Frequency: string
  FrequencyMax: string
  Socket: string
  TDP: string
  CoreQty: number
  ThreadQty: number
}

export type CPUFanType = {
  Name: string
  Brand: string
  Socket: string
  TDP: string
}

export type GPUType = RAMType & {
  Name: string
  Brand: 'Intel' | 'AMD' | 'NVIDIA'
  TechProcess: string
  Interface: number
  Power: string
}

export type RAMType = {
  RAMName: string
  Type: string
  Frequency: number
  Capacity: number
}

export type MotherType = {
  Name: string
  Socket: string
  Chipset: string
  Interfaces: string
}

export type DiskType = {
  Name: string
  Type: 'SSD' | 'HDD'
  Capacity: number
  ReadSpeed: number
  WriteSpeed: number
}

export type CaseType = {
  Name: string
  Type: string
  FanQty: number
  Color: string
  Props: string
}

export type PSUType = {
  Name: string
  Certificate: string
  Capasity: number
}
