import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { JSX } from 'react'

const addresses = [
  {
    id: 1,
    coordinates: [55.839864, 37.488778],
  },
  {
    id: 2,
    coordinates: [55.66932, 37.550423],
  },
  {
    id: 3,
    coordinates: [55.707287, 37.759457],
  },
  {
    id: 4,
    coordinates: [55.615583, 37.722756],
  },
  {
    id: 5,
    coordinates: [55.86016, 37.588296],
  },
]

const YandexMap = (): JSX.Element => {
  const mapState = {
    center: [55.75396, 37.620393],
    zoom: 10,
  }

  return (
    <YMaps>
      <Map state={mapState} width={'400px'} height={'400px'}>
        {addresses.map((address) => (
          <Placemark key={address.id} geometry={address.coordinates} options={{ preset: 'islands#redDotIcon' }} />
        ))}
      </Map>
    </YMaps>
  )
}

export default YandexMap
