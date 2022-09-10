export type CPUType = {
  Name: string
  Brand: 'Intel' | 'AMD'
  Interface: number
  Frequency: number
  FrequencyMax: number
  Socket: string
  TDP: number
  CoreQty: number
  ThreadQty: number
  Price: number
}

export type CPUFanType = {
  Name: string
  Brand: string
  Socket: string
  TDP: number
  Price: number
}

export type GPUType = RAMType & {
  Name: string
  Brand: 'Intel' | 'AMD' | 'NVIDIA'
  TechProcess: number
  Interface: number
  Power: string
  Price: number
}

export type RAMType = {
  RAMName: string
  Type: string
  Frequency: number
  Capacity: number
  RAMPrice: number
}

export type MotherType = {
  Name: string
  Socket: string
  Chipset: string
  Price: number
}

export type DiskType = {
  Name: string
  Type: 'SSD' | 'HDD'
  Capacity: number
  ReadSpeed: number
  WriteSpeed: number
  Price: number
}

export type CaseType = {
  Name: string
  Type: string
  FanQty: number
  Color: string
  Price: number
}

export type PSUType = {
  Name: string
  Certificate: string
  Capasity: number
  Price: number
}
