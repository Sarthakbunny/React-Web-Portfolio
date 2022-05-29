import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '../images/schoolicon.png';
import StartIcon from '../images/starticon.png';
import ZyngaIcon from '../images/zynga.png'
import NagarroIcon from '../images/nagarro.jpeg';
import BrandieIcon from '../images/brandie.jpeg';
import IITIcon from '../images/iitrpr.jpeg';
import NccuIcon from '../images/nccu.jpeg';

const Icon = ({ src }) => {
  return (
    <div>
      <img
        className="img_logo"
        src={src}
        style={{
          border: "1px solid #d1c8c8"
        }}
      />
    </div>
  )
}
/* array of object
{
    year: 
    title:
    description:
    company:
    location;
}
sorted in ascending order of month/year
display in a linked-list format top to bottom
tooltip when hover displaying JourneyTile compnent left right alternatively
*/
function Journey() {
  return (
    <div>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Oct 2021 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src={ZyngaIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer 1</h3>
          <h4 className="vertical-timeline-element-subtitle">Zynga, Bangalore</h4>
          <p>
            Tech Stack: Unity, C#, Jenkins, JIRA, Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2020 - Oct 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src={NagarroIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Associate Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Nagarro, Gurugram</h4>
          <p>
            Tech Stack: NodeJS, ReactJS, Express, System Design, Microservices, MongoDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2020 -  August 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src={BrandieIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Brandie, Remote</h4>
          <p>
            Tech Stack: NodeJS, Express, PostgreSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2019 - Aug 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Icon src={NccuIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Research Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">NCCU, Chiayi, Taiwan</h4>
          <p>
            Tech Stack: Face Recognition, Python, HOGG, Machine Learning
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2016 - 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Icon src={IITIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's in Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Ropar, Rupnagar, Punjab</h4>
          <p>
            Courses: C, Data Structure and Algorithm, Probability, Applied Machine Learning
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Icon src={SchoolIcon} />}
        >
          <h3 className="vertical-timeline-element-title">High School</h3>
          <h4 className="vertical-timeline-element-subtitle">Lucknow Public School, Sec D</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<Icon src={StartIcon} />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Journey