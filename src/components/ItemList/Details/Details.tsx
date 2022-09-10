import noImage from '../../../assets/images/noImage.png'
import { IBuild } from '../../../models/build.interface'
import { DetailsBox, ImageBox } from '../../ui/Boxes'
import { DetailWrapper } from '../../ui/Wrappers'

const Details: React.FC<IBuild> = (item: IBuild) => {
  return (
    <DetailWrapper>
      <ImageBox
        src={item.ImageUrl.length > 0 ? item.ImageUrl : noImage}
        alt={item.Name}
      />
      <DetailsBox>
        <span>Процессор: {item.Components.CPU.Name}</span>
        <span>Сокет: {item.Components.CPU.Socket}</span>
        <span>Количество ядер: {item.Components.CPU.CoreQty}</span>
        <span>Количество потоков: {item.Components.CPU.ThreadQty}</span>
        <br></br>
        <span>Видеокарта: {item.Components.GPU?.Name}</span>
        <span>Тип видеопамяти: {item.Components.GPU?.Type}</span>
        <span>Количество видеопамяти: {item.Components.GPU?.Capacity} GB</span>
        {/* TODO подумать, как всю инфу можно разместить, возможно убрать лишние поля и меньше выпендриваться */}
      </DetailsBox>
    </DetailWrapper>
  )
}

export default Details
