import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { IBuild } from '../../models/build.interface'
import { BuildService } from '../../services/build.service'
import { NeomorphismBox } from '../ui/Boxes'

const ItemList: React.FC = () => {
  const [items, setItems] = useState<IBuild[]>()

  const { isLoading: isLoadingBuilds, refetch: getAll } = useQuery<
    IBuild[],
    Error
  >(
    ['get builds'],
    async () => {
      return await BuildService.getAll()
    },
    {
      enabled: false,
      onSuccess: data => {
        setItems(data)
      },
      onError: (err: any) => {
        console.error(err)
      }
    }
  )
  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {items?.map(item => {
        return (
          <NeomorphismBox key={item.Id}>
            <span>{item.Name}</span>
            <span>{item.Price}</span>
            <span>{item.Components.CPU}</span>
          </NeomorphismBox>
        )
      })}
    </>
  )
}

export default ItemList
