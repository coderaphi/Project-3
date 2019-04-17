import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
// import Prodcard from "./components/Prodcard"; /////Ask HASIKA

const panes = [
  { menuItem: 'Tech Products', render: () => <Tab.Pane>
    {/* <Prodcard/> */}////////Ask HASIKA


  </Tab.Pane> },
  { menuItem: 'Special events', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Fund my Ivunt', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Charity', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class BucketTabs extends Component {
  state = { activeIndex: 1 }

  handleRangeChange = e => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        {/* <div>activeIndex: {activeIndex}</div> */}
        <input type='range' max='2' value={activeIndex} onChange={this.handleRangeChange} />
        <Tab panes={panes} activeIndex={activeIndex} onTabChange={this.handleTabChange} />
      </div>
    )
  }
}

export default BucketTabs
