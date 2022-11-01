import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: sans-serif;
    width: 100%;
    height: 100vh;
    background-color: aquamarine;
    .state_wrapper {
        padding: 20px;
        max-width: 411px;
        display: flex;
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
`
