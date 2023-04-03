import { School, Work } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Experience.css'
import { Exp, Education } from '../Helpers/Exp'

const Experience = () => {
    return (
        <div className='experience'>
            <h1> Experience</h1>
            {
                Exp.map((data) => {
                    return (
                        <VerticalTimeline lineColor='#3e497a'>
                            <VerticalTimelineElement
                                className='vertical-timeline-element--education'
                                date={data.years}
                                dateClassName='date-class'
                                iconStyle={{ background: '#3e497a', color: '#fff' }}
                                icon={<Work/>}
                                position={data.position}
                            >
                                <h3 className='vertical-timeline-element'>{data.name}</h3>
                                <p>{data.Designation}</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    )
                })
            }
            {
                Education.map((data) => {
                    return (
                        <VerticalTimeline lineColor='#3e497a'>
                            <VerticalTimelineElement
                                className='vertical-timeline-element--education'
                                date={data.years}
                                dateClassName='date-class'
                                iconStyle={{ background: '#3e497a', color: '#fff' }}
                                icon={<School/>}
                                position={data.position}
                            >
                                <h3 className='vertical-timeline-element'>{data.name}</h3>
                                <p>{ data.degree} in {data.branch}</p>
                                <p>{data.university}</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    )
                })
            }
            {/* <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2013-2019'
                iconStyle={{background:'#3e497a', color:'#fff'}}
                icon={<School/>}
                contentStyle={{backgroundColor:'#3e497a', color:'#fff'}}
            >
                <h3 className='vertical-timeline-element'> Institute Of Civil And Rural Engineering</h3>
                <p>High school diploma, Gargo</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='2013-2019'
                iconStyle={{background:'#3e497a', color:'#fff'}}
                icon={<Work/>}
                position='right'
                contentStyle={{backgroundColor:'#3e497a', color:'#fff'}}
            >
                <h3 className='vertical-timeline-element'> Institute Of Civil And Rural Engineering</h3>
                <p>High school diploma, Gargo</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='2013-2019'
                dateClassName='date-class'
                iconStyle={{background:'#3e497a', color:'#FFF'}}
                icon={<Work/>}
                position='left'
                contentStyle={{backgroundColor:'#3e497a', color:'#f0f0f0'}}
            >
                <h3 className='vertical-timeline-element'> Institute Of Civil And Rural Engineering</h3>
                <p>High school diploma, Gargo</p>
            </VerticalTimelineElement>
        </VerticalTimeline> */}
        </div>
    )
}

export default Experience