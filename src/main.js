
import React, { Component } from 'react';
import Prodcard from "./components/Prodcard";
import Navigation from "./components/Navigation"
import Banner from "./components/Banner";
import Search from "./components/Search";
import api from './util/api';
import Carousel from './components/Carousel'
import Wrapper from './components/Wrapper'



class Main extends Component {
  state = {
    products: [],
    search: "",
    image: "",
    name: "",
    

  }
  componentDidMount() {
    api.getData()
      .then(res => {
        console.log(res.data.products[0].image);
        console.log(res.data.products[0].name);
        console.log("Data");
        console.log(res.data);
        this.setState({ products: res.data.products});
        this.setState({ image: res.data.products[0].image });
        this.setState({ name: res.data.products[0].name });

      })

      // console.log (res.data.products)
      // console.log (res.data.products[0].lists.name)  
      .catch(err => console.log(err));
  }


  render() {
    return (

      <div className="site">
        <Navigation></Navigation>
        <Carousel></Carousel>

        <Banner></Banner>
        <Search></Search>
        <Wrapper> 
          
            <div className="container">
             <div className="ui link cards">
              <div className="row">
              {this.state.products.map((product) =>(
                <Prodcard
                  name={product.name}
                  image={product.image}
                  price={product.salePrice}
                  >

                </Prodcard>
                ))}
                {/* <Prodcard />
                <Prodcard />
                <Prodcard />
                <Prodcard />
                <Prodcard />
                <Prodcard />
                <Prodcard /> */}
              </div>
            </div>
          </div>

          
          
        </Wrapper>
      </div>

    )
  }
}

export default Main
