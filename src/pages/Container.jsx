import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chart } from '../components/Chart'
import { fetchWather } from '../store/mainAsync'
import { Wrapper } from '../styles/containerStyle'

export const Container = () => {
    const { data } = useSelector(store => store)
    const dispatch = useDispatch()
    const [id, setId] = useState()
    const dataWeather = {}
    const cardData = []

    useEffect(() => {
        dispatch(fetchWather())
    }, [dispatch])

    const listWeather = () => {
        for (let i = 0; i < data.list?.length; i++) {
            dataWeather.push(data.list[i])
        }
        
        for (let i = 0; i < data.list?.length; i += 60) {
            cardData.push(data.list[i])
        }
        console.log(dataWeather[[]])
    }
    listWeather()
    
    
    const filteredItem = () => {
        const filterItem = data.list?.filter(item => moment(item.dt_txt).format("ddd") === id)
        return filterItem
    }

    return (
        <Wrapper>
            <div className="flex-container"> 
                 <div className='state_wrapper'>
                    {cardData?.map(item => 
                        <div className="state-cnt">
                            <div className='top-title'>
                                <p>{moment(item.dt_txt).format("lll")}</p>
                                <h3>{data.city?.name}</h3>
                            </div>

                            <div className="img_wrapper">
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                                <h2>{item.main.temp.toFixed(0)+"\xB0C"}</h2>
                            </div>
                            
                            <div className="bottom_wrapper">
                                <h3>Feels like {item.main.feels_like.toFixed(0)+"\xB0C"}. Few clouds. Moderate breeze</h3>
                                <div className='line_flex-cnt'>
                                    <div className="line"></div>
                                    <div className='text_cnt'>
                                        <p>77ms/s SW <span></span> 1007pg</p>
                                        <p>humidy: 85%<span></span> uv:1</p>
                                        <p>dew point: 12C <span></span> Vilby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="weather_wrapper-image">
                    <div className="weather_container">
                        {dataWeather.map(item => {
                            return (
                                <div key={item.dt} onMouseLeave={() => setId()} onMouseEnter={() => setId(moment(item.dt_txt).format("ddd"))} className='weather-wrapper'>
                                    <p>{moment(item.dt_txt).format("ddd")}</p>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                                    <div>{item.main.temp_max.toFixed(0) + "\xB0"}  <span>{item.main.temp_min.toFixed(0) + "\xB0"}</span></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="toltip_wrapper">

                        {filteredItem()?.map(item => 
                            <div className='toltip-cnt'>
                                <span>{moment(item.dt_txt).format("LT")}</span>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                                <p>{item.main.temp_max.toFixed(0) + "\xB0"}  <h4>{item.main.temp_min.toFixed(0) + "\xB0"}</h4></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Chart data={data?.list} />
        </Wrapper>
    )
}
