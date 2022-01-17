import React from 'react'
import moment from 'moment'

const DailyCard = ({ item, index, actived , indexCard}) => {
    return (
        <div key={index} className="col-xs-12 col-md-3 col-sm-6 p-1" style={{ cursor: 'pointer' }} 
        onClick={()=>actived(index)}
        >
            <div className={indexCard == index ? 'bg-info p-2 rounded-3 h-100': 'bg-white p-2 rounded-3 h-100'}>
                <p className="fs-6 daily-item-text text-muted">{moment.unix(item.dt).format('ddd, DD/MM')}</p>
                <div className="text-center">
                    <img className="img-fluid" src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                    <p className="fs-6 text-muted fw-bold">
                        {Math.round(item.temp.min)+'° - '+Math.round(item.temp.max)+'°'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DailyCard
