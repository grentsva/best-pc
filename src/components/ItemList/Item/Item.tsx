import { useState, useMemo } from 'react'
import { IBuild } from '../../../models/build.interface'
import { ItemHeaderBox, NeomorphismBox } from '../../ui/Boxes'
import { DetailsBtn } from '../../ui/Buttons'
import Details from '../Details'
import React from 'react'

const Item: React.FC<IBuild> = (item: IBuild) => {
  const [showDetails, toogleDetails] = useState(false)

  const getItemLabel = (build: IBuild): string => {
    const ramCapacity: string =
      build.Components.Memory.Capacity * build.Components.MemoryQty + 'GB'
    return `${build.Name} | ${build.Components.CPU.Name} | ${
      build.Components.GPU
        ? build.Components.GPU.Name + ' | ' + ramCapacity
        : ramCapacity
    }`
  }

  const getItemPrice = (components: IBuild['Components']): number => {
    // TODO: пока что так, хотя хотелось бы подинамичнее
    return (
      components.CPU.Price +
      components.CPUFan.Price +
      (components.GPU ? components.GPU.Price : 0) +
      components.Memory.Price * components.MemoryQty +
      components.Motherboard.Price +
      (components.SSD ? components.SSD.Price : 0) +
      (components.HDD ? components.HDD.Price : 0) +
      (components.SSD ? components.SSD.Price : 0) +
      components.Case.Price +
      components.PSU.Price
    )
  }

  const itemLabel = useMemo(() => getItemLabel(item), [item])
  const itemPrice = useMemo(
    () => getItemPrice(item.Components),
    [item.Components]
  )

  return (
    <NeomorphismBox height={showDetails ? '200px' : '30px'}>
      <ItemHeaderBox>
        <span>{itemLabel}</span>
        <span>{itemPrice} руб.</span>
        <DetailsBtn onClick={() => toogleDetails(!showDetails)}>
          <span
            className={
              showDetails ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
            }
          ></span>
        </DetailsBtn>
      </ItemHeaderBox>

      {showDetails && <Details {...item} />}
    </NeomorphismBox>
  )
}

export default React.memo(Item)
