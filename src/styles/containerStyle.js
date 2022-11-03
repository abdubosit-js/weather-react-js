import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    font-family: sans-serif;
    background-image: url("https://www.presentationpoint.com/wp-content/uploads/2019/02/dphdwep.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .flex-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
        align-items: baseline;
    }
    
    .state_wrapper {
        width: 100%;
        display: flex;
        padding: 20px;
        align-items: center;
        background-color: white;
        .state-cnt {
            .top-title {
                p {
                    color: orange;
                }
                h3 {
                    font-size: 30px;
                    color: #202020;
                }
            }
        }
        .img_wrapper {
            display: flex;
            align-items: center;
            margin-top: 8px;
            h2 {
                font-weight: 400;
                font-size: 35px;
            }
        }
        .bottom_wrapper {
            h3 {
                font-size: 15px;
            }
            .line_flex-cnt {
                display: flex;
                height: 80px;
                gap: 20px;
                align-items: center;
                .line {
                    width: 2px;
                    height: 100%;
                    background-color: orange;
                    margin-left: 3px;
                }
                .text_cnt {
                    span {
                        display: inline-block;
                        width: 10px;
                    }
                }
            }
        }
    }
    .weather_wrapper-image {
        .weather_container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px;
        }
        .weather-wrapper {
            width: 100%;
            height: 150px;
            transition: 0.3s;
            padding: 5px;
            :hover {
                outline: 2px solid white;
            }
            p{
                text-align: center;
                color: white;
            }
            div {
                text-align: center;
            }
            span {
                color: white;
            }
        }
        position: relative;
        .toltip_wrapper {
            width: 100%;
            max-width: 500px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            z-index: 10;
            position: absolute;
            background-color: white;
            .toltip-cnt {
                margin-top: 20px;
                margin-left: 10px;
                margin-bottom: 20px;
                span {
                    text-align: center;
                    color: gray;
                }
                display: flex;
                flex-direction: column;
                align-content: center;
                img {
                    margin-top: -16px;
                }
                p {
                    text-align: center;
                }
                h4 {
                    display: inline-block;
                    color: gray;
                    font-weight: 200;
                }
            }
        }
    }
`
