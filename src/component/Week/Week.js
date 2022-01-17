import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import DailyCard from './DailyCard'

const Week = () => {
    const current = useSelector((state) => state.weathers.current)
    const [indexCard, setIndexCard] = useState(0)
    const [dailyDesc, setDailyDesc] = useState(current.daily[0])
    const actived = (i) => {
        setIndexCard(i)
        // console.log(i);
        setDailyDesc(current.daily[i ? i : indexCard])
    }
    console.log(dailyDesc);
    return (
        <>
            <div className="row">
                {current.daily &&
                    <div className="d-flex flex-wrap">
                        {current.daily.map((item, index) =>
                            <DailyCard item={item} index={index} actived={actived} indexCard={indexCard} />
                        )}
                    </div>
                }
            </div>
            {dailyDesc &&
                <div className="bg-white my-5 p-2 rounded-3 h-100">
                    <p className="fs-5 text-muted">{moment.unix(dailyDesc.dt).format('ddd, DD/MM')}</p>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <p className="fs-6 text-muted ">Temp current :{dailyDesc.temp.day}°C</p>
                            <p className="fs-6 text-muted ">Temp :{Math.round(dailyDesc.temp.min)+'°C - '+Math.round(dailyDesc.temp.max)+'°C'}</p>
                            <p className="fs-6 text-muted ">Humidity :{dailyDesc.humidity} %</p>
                            <p className="fs-6 text-muted ">Wind speed :{(dailyDesc.wind_speed*3.6).toFixed(2)}km/h</p>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <p className="fs-6 text-muted ">Sunrise :{moment.unix(dailyDesc.sunrise).format('h:mm a')}</p>
                            <p className="fs-6 text-muted ">Sunset :{moment.unix(dailyDesc.sunset).format('h:mm a')}</p>
                            <p className="fs-6 text-muted ">Description :{dailyDesc.weather[0].description}</p>
                            <p className="fs-6 text-muted ">Atmospheric pressure :{dailyDesc.pressure} hPa</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Week
