import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import axios from 'axios'
import s from './index.module.css'

function ChartBySeniority() {
  const [areas, setAreas] = useState([])

  useEffect(() => {
    axios
      .get('/api/jobs/jobbyseniority')
      .then((res) => res.data)
      .then((areasSearch) => {
        const formatedArea = areasSearch.map((singleArea) => {
          return {
            name: singleArea['seniority.name'],
            value: parseInt(singleArea.value),
          }
        })
        setAreas(formatedArea)
      })
  }, [])

  const colors = ['#FFBB28', '#FF8042', '#0088FE', '#00C49F']
  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <div className={s.contenedor}>
      <div className={s.title}>
        <h1>Busquedas por Seniority</h1>
      </div>
      <div className={s.graficos}>
        <PieChart width={500} height={200}>
          <Legend
            cy='20%'
            layout='vertical'
            align='left'
            verticalAlign='middle'
          />
          <Pie
            data={areas}
            cx='20%'
            // cy='20%'
            dataKey='value'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
          >
            {areas.map((areas, index) => (
              <Cell key={areas.areaId} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default ChartBySeniority
