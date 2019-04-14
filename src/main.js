
import React, { Component } from 'react';
import Prodcard from "./components/Prodcard";
import Navigation from "./components/Navigation"
// import Banner from "./components/Banner";
import Search from "./components/Search";
import api from './util/api';
import Carousel from './components/Carousel';
import Wrapper from './components/Wrapper';
import { Button, Header, Image, Modal } from 'semantic-ui-react';


class Main extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: '',
    search: "",
    image: "",
    name: "",
    error: "",
    showProdModal: false
  }

  componentDidMount() {


    api.getCategories().then(res => {
      return res.data.categories.map(c => ({ id: c.id, name: c.name }));
    }).then(categories => {
      // console.log(categories);
      this.setState({ categories: categories });
    });
  }

  onCategoryChange = (category) => {
    console.log(category);
    api.getProducts(category.value).then(res => {
      this.setState({
        products: res.data.products, selectedCategory: category, showProdModal: true
      });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    api.getProducts()
      .then(res => {
        console.log(res);
        if (res.data.status === "error") {
          throw new Error(res.data.products)
        }
        this.setState({ products: res.data.products, error: "" })
      })
      .catch(err => this.setState({ error: err.message }));

  }

  render() {
    return (

      <div className="site">
        <Navigation></Navigation>

        {
          this.state.products.length > 0 &&
          <Carousel
            products={this.state.products}
          />
        }


        {/* <Banner></Banner> */}
        <Search
          categories={this.state.categories}
          categoryName={this.state.selectedCategory}
          onCategoryChange={this.onCategoryChange}
        />

        {
          this.state.showProdModal &&
          <Modal defaultOpen={true} centered={true} onClose={(e) => this.setState({ showProdModal: false })} size={'large'}>
            <Modal.Header>{this.state.selectedCategory.label}</Modal.Header>
            <Modal.Content>
              {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
            
              <div className="ui link cards" style={{justifyContent: 'center'}}>

                {this.state.products.map((product) => (
                  <Prodcard
                    key={`p-${product.name}`}
                    name={product.name}
                    image={product.image}
                    price={product.salePrice}
                  >

                  </Prodcard>
                ))}
              </div>
            </Modal.Content>
          </Modal>
        }

        {/* <Modal
          isOpen={this.state.selectedCategory}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          style={{
            overlay: {
              backgroundColor: 'papayawhip'
            },
            content: {
              color: 'lightsteelblue'
            }
          }}
          contentLabel={this.state.selectedCategory && this.state.selectedCategory.name}
        >

          <Wrapper>

            <div className="container">
              <div className="ui link cards">
                <div className="row">
                  {this.state.products.map((product) => (
                    <Prodcard
                      key={`p-${product.name}`}
                      name={product.name}
                      image={product.image}
                      price={product.salePrice}
                    >

                    </Prodcard>
                  ))}
                </div>
              </div>
            </div>



          </Wrapper>
        </Modal> */}

      </div>

    )
  }
}


export default Main
