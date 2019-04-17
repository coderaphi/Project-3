import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
// import faker from 'faker'

const ActiveUsers = () => (
  <Card>
    <Card.Content  style={{display: 'flex', justifyContent: 'center'}}>
      <Card.Header style={{ marginTop : 10 }} >Users online</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label style={{ marginLeft : 18 }} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4TletwTYH2RC3bHmS4dw-vNbllGGgye7v67YjpS-cUur_93QaA' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary >
               <a>Jenny Hess</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label style={{ marginLeft : 18 }}  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVR90pVuiaxHbBdugfx0XZb13MthKvblGk8XaO7qPpzdlsqlKkQ' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary>
               <a>Mark Twing</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label style={{ marginLeft : 18 }}  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToj7_9ChVX2Ow8vKgJSppEHSTKfnWBIufEveRJQ0rS-uqaNk3g' />
          <Feed.Content>
            <Feed.Date content='Active' />
            <Feed.Summary>
               <a>Molly Malone</a> 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label style={{ marginLeft : 18 }}  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl' />
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