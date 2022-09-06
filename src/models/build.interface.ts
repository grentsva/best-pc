export interface IBuild {
  Id: number
  Name: string
  Price?: number
  IsDeleted: boolean
  ImageUrl: string
  Components: {
    CPU: string
    CPUFan: string
    GPU: string
    Memory: string
    MemoryQty: number
    SSD: string
    HDD: string
    Case: string
    PSU: string
    Other: string
  }
}
