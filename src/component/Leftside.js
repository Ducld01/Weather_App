import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchWeather } from '../slice/weather'
import clouds from '../accest/image/Clouds.png'
import moment from 'moment'


const Leftside = () => {
    const [value, setValue] = useState('hanoi')
    const data = useSelector((state) => state.weathers.weather)
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchdata = async () => {
            await dispatch(fetchWeather(value))
        }
        fetchdata()
    }, [dispatch])
    const search = async evt => {
        if (evt.key === "Enter") {
           await dispatch(fetchWeather(value))
        }
    }

    return (
        <div className="col-md-3 col-sm-12 bg-white p-4">
            {data &&
                <div className="main">
                    <div className="mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Press city and enter"
                            onChange={(e) => setValue(e.target.value)}
                            onKeyPress={search}
                        />
                    </div>
                    <img src={clouds} className="rounded" />
                    <div className="fs-2 fw-bold lh-sm city-text text-capitalize">{data.name}</div>
                    {(typeof data.main != 'undefined') ? (
                        <>
                            <div className="fs-1 fw-bold">{data.main.temp}°C</div>
                            <div className="fs-5 lh-lg">{moment.unix(data.dt).format('dddd, h:mm a')}</div>
                            <div className="fs-6 lh-base text-capitalize text-muted mb-3"> {data.weather[0].description} <br></br>{data.weather[0].main} {data.clouds.all}% </div>
                        </>
                    ) : (<></>)}
                    <div className="position-relative d-flex justify-content-center align-items-center">
                        <div className="position-absolute">
                            <div className="fs-3 fw-bold text-white text-uppercase">{data.name}</div>
                        </div>
                        <img src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6" alt="" className="img-fluid rounded " />
                    </div>
                </div>
            }

        </div>
    )
}

export default Leftside
