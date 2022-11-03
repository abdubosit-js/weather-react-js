import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'

export const Chart = ({data}) => {
  return (
    <Wrapper>
        <ResponsiveContainer width="100%" height={400} bgColor="#FFFFFF">
            <LineChart
                width={1200}
                height={400}
                data={data}
                bgColor="#FFFFFF"
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="main.temp_max" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="main.temp_min"  stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    .question {
        width: 500px;
        height: 500px;
    }

    .question-container {
        width: 100%;
        height: 100%;
    }
    g {
        color: white;
    }
`