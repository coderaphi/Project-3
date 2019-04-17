import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const ActiveUsers = () => (
  <Card>
    <Card.Content  style={{display: 'flex', justifyContent: 'center'}}>
      <Card.Header>Users online</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary>
               <a>Jenny Hess</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary>
               <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary>
              <a>Elliot Baker</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default ActiveUsers