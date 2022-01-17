import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
const Today = () => {
    const data = useSelector((state) => state.weathers.weather)
    const current = useSelector((state) => state.weathers.current)
    if (typeof data !== 'object' && typeof current !== 'object') {
        return (<div>
            LOADING.....
        </div>)
    }
    return (

        <div className="row">
            {current.current  &&
                <div className="d-flex flex-wrap">
                    {(typeof current.current !== 'undefined') ? (
                        <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">UV index</p>
                            <div className="text-center">
                                <i className="fad fa-sun my-1 icon_size icon-color-1" />
                                <p className="fs-3 text-muted fw-bold">{current.current.uvi}</p>
                            </div>
                        </div>
                    </div>
                    ):null}
                    
                    <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">Wind Status</p>
                            <div className="text-center">
                                <i className="far fa-wind icon_size icon-color-2" />
                                <p className="fs-3 text-muted fw-bold text-center">{(current.current.wind_speed * 3.6).toFixed(2)} km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">Sunrise & Sunset</p>
                            <p className="fs-4 text-muted fw-bold"><i className="fal fa-sunrise icon_size icon-color-1"></i> {moment.unix(current.current.sunrise).format('h:mm a')}</p>
                            <p className="fs-4 text-muted fw-bold"><i className="fal fa-sunset icon_size icon-color-1"></i> {moment.unix(current.current.sunset).format('h:mm a')}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">Humidity</p>
                            <div className="text-center">
                                <i className="fas fa-humidity icon_size icon-color-2"></i>
                                <p className="fs-3 text-muted fw-bold text-center">{current.current.humidity} %</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">Visibility</p>
                            <div className="text-center">
                                <i className="fal fa-tachometer-alt-slow icon_size icon-color-1"></i>
                                <p className="fs-3 text-muted fw-bold text-center">
                                {current.current.visibility/1000} km
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12 p-3">
                        <div className="bg-white p-2 rounded-3 h-100">
                            <p className="fs-5 text-black-50">Pressure</p>
                            <div className="text-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 256 512" className="icon-color-2 icon_size" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z" />
                                </svg>
                                <p className="fs-3 text-muted fw-bold text-center">{current.current.pressure}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Today
