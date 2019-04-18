import React, { Component } from 'react'
import { Tab, Icon } from 'semantic-ui-react'
import Prodcard from "../Prodcard"

const createpanes = createivunt => {
    return (
     
        [
        { menuItem: 'Tech Products', render: () => <Tab.Pane>
          
          
          <div className="ui link cards" >

        {createivunt.map((product) => (
        <Prodcard
            key={`p-${product.name}`}
            name={product.name}
            image={product.image}
            price={product.salePrice}
            addProducts= {()=>this.addProducts(product)}
        >
        

        </Prodcard>
))}
</div>
      
        </Tab.Pane> },
        { menuItem: 'Special events', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Fund my Ivunt', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        { menuItem: 'Charity', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        { menuItem: '＋ Add New', render: () => <Tab.Pane></Tab.Pane> },
      ]
    )
}


class BucketTabs extends Component {
  state = { activeIndex: 1 }

  handleRangeChange = e => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state
    const panes = createpanes(this.props.createivunt)
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
