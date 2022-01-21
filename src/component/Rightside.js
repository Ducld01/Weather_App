import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Hour from './Hour/Hour';
import Today from './Today/Today';
import Week from './Week/Week';

const Rightside = () => {
    const [page, setPage] = useState('Today')
    const [active, setActive] = useState(false)
    const current = useSelector((state) => state.weathers.current)
    const  err = useSelector((state) => state.weathers.error)
    console.log(err);
    function Setpages(pg, index) {
        return <li role="button"
            key={index}
            onClick={() => {
                setPage(pg)
                setActive(!active)
            }
            }
            className={page === pg ? 'nav-item m-2 border-bottom border-3 border-dark' : 'nav-item m-2 text-muted'}>{pg}</li>
        // className="nav-item m-2 text-default">{pg}</li>
    }
    return (
        <div className="col-md-9 col-sm-12 p-4 overflow-auto" style={{ backgroundColor: 'rgb(246, 246, 248)', height: '90vh' }}>
            <div className="main">
                {
                    err && err != undefined ? 
                    <div className="alert alert-danger" role="alert">
                   City not found
                  </div> : null
                }
                <div className="d-flex align-items-center justify-content-between">
                    <ul className=" nav d-flex align-items-center justify-content-start fs-5 fw-bold">
                        {
                            [
                                { name: 'Today' },
                                { name: 'Week' },
                                { name: 'Hour' }
                            ].map((element, index) => Setpages(element.name, index))
                        }
                    </ul>
                </div>
                {/* render page theo state */}
                {page === 'Today' && <Today  />}
                {page === 'Week' && <Week />}
                {page === 'Hour' && <Hour hourly={current.hourly}/>}

            </div>
        </div>
    )
}

export default Rightside
