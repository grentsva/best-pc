import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { IBuild } from '../../models/build.interface'
import { BuildService } from '../../services/build.service'
import { ContentWrapper } from '../ui/Wrappers'
import Preloader from '../common/Preloader'
import Item from './Item'

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
        console.error(err.message)
      }
    }
  )
  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContentWrapper>
      {isLoadingBuilds && <Preloader />}

      {items?.map(item => (
        <Item {...item} key={item.Id} />
      ))}
    </ContentWrapper>
  )
}

export default ItemList
