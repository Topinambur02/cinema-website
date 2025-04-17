import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { JSX } from 'react'
import { addresses } from '../../constants/addresses'

const YandexMap = (): JSX.Element => {
  const mapState = {
    center: [55.75396, 37.620393],
    zoom: 10,
  }

  return (
    <YMaps>
      <Map state={mapState} width={'400px'} height={'400px'}>
        {addresses.map(address =>
          <Placemark
            key={address.id}
            geometry={address.coordinates}
            options={{ preset: 'islands#redDotIcon' }}
          />
        )}
      </Map>
    </YMaps>
  )
}

export default YandexMap
