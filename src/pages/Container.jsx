import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWather } from '../store/mainAsync'
import { Wrapper } from '../styles/containerStyle'

export const Container = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(store => store)
    console.log(data.list[0])

    useEffect(() => {
        dispatch(fetchWather())
    }, [dispatch])

    return (
        <Wrapper>
            <div className='state_wrapper'>
                
                <div className="state-cnt">
                    <div className='top-title'>
                        <p>Nov 1, 11:12am</p>
                        <h3>Uz tashkent</h3>
                    </div>
                    <div className="img_wrapper">
                        <img src="" alt="" />
                        <h2>14*C</h2>
                    </div>
                    <div className="bottom_wrapper">
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
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
                <div className="weather_wrapper-image">

                </div>
            </div>
        </Wrapper>
    )
}
