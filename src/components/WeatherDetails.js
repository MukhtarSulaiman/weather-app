import {
     UilTemperature,
     UilTear,
     UilWind,
     UilSun,
     UilSunset,
     UilArrowUp,
     UilArrowDown
} from '@iconscout/react-unicons';

const WeatherDetails = ({ weatherDetails, toLocalTime, iconCode }) => {
     
     const {
          main, icon, temp, feels_like,
          humidity, speed, sunrise, sunset,
          temp_max, temp_min, timezone
     } = weatherDetails;

     const weather = [
          [
               {
                    id: 1,
                    icon: UilTemperature,
                    element: 'Real feel',
                    unit: feels_like ? `${feels_like.toFixed()}°` : ''
               },
               {
                    id: 2,
                    icon: UilTear,
                    element: 'Humidity',
                    unit: `${humidity}%`
               },
               {
                    id: 3,
                    icon: UilWind,
                    element: 'Wind',
                    unit: speed ? `${speed.toFixed()} km/h` : ''
               }
          ],
          [
               {
                    id: 1,
                    icon: UilSun,
                    element: 'Rise',
                    unit: sunrise ? `${toLocalTime(sunrise, timezone, 'hh:mm a')}` : ''
               },
               {
                    id: 2,
                    icon: UilSunset,
                    element: 'Set',
                    unit: sunset ? `${toLocalTime(sunset, timezone, 'hh:mm a')}` : ''
               },
               {
                    id: 3,
                    icon: UilArrowUp,
                    element: 'Hight',
                    unit: temp_max ? `${temp_max.toFixed()}°` : ''
               },
               {
                    id: 4,
                    icon: UilArrowDown,
                    element: 'Low',
                    unit: temp_min ? `${temp_min.toFixed()}°` : ''
               },
          ]
     ]

     return (
          <div>
               <p className='text-center my-4 text-cyan-200'>{ main }</p>
               <div className='flex justify-between items-center'>
                    <img
                         src={iconCode(icon)}
                         width='80'
                         alt='clear sky' />
                    <h3 className='text-3xl font-medium'>{temp ? temp.toFixed() : '' }°</h3>
                    <div className='grid gap-y-2'>
                         {weather[0].map(weather => {
                              return (
                                   <div key={weather.id} className='flex items-center gap-2'>
                                        <weather.icon size='20' />
                                        <small>{weather.element}: <span className='font-semibold'>{weather.unit}</span></small>
                                   </div>
                              )
                         })}
                    </div>
               </div>
               <div className='my-8 flex justify-center sm:justify-between flex-wrap gap-3'>
                    {weather[1].map(weather => {
                         return (
                              <div key={weather.id} className='flex items-center gap-1'>
                                   <weather.icon size='20' />
                                   <small>{weather.element}: <span className='font-semibold'>{weather.unit}</span></small>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}

export default WeatherDetails;