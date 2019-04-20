import React from 'react'
import { Progress, Segment } from 'semantic-ui-react'
import "./style.css"

const Goal = () => (
  <Segment inverted>
    <Progress percent={21} success>
      Funded
    </Progress>
 
  </Segment>
)
export default Goal