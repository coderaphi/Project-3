
import React, { Component } from 'react';
import Prodcard from "./components/Prodcard";
import Navigation from "./components/Navigation"
import Search from "./components/Search";
import api from './util/api';
import Carousel from './components/Carousel';
import { Button, Header, Image, Modal, Card, Feed } from 'semantic-ui-react';
import Topbutton from './components/Topbutton';
import Create from './components/Create';
import  Loader  from './components/Loader';
import Activeusers from './components/Activeusers'



class Main extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: '',
    search: "",
    image: "",
    name: "",
    error: "",
    showProdModal: false,
    topProducts: [],
  



    createDataModal:false
  }

  componentDidMount() {
    
    api.getProducts()
    .then (res=>  this.setState  ({topProducts: res.data.products}))
    .catch(err=> console.log(err));
   

      
    
    api.getCategories().then(res => {
      return res.data.categories.map(c => ({ id: c.id, name: c.name }));
    }).then(categories => {
      console.log(categories);
      this.setState({ categories: categories });
     
    });
  }

  laptopData =(cat) => {
    console.log(cat)
    api.getLaptops(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }
  cameraData =(cat) => {
    console.log(cat)
    api.getCameras(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }
  moviesData =(cat) => {
    console.log(cat)
    api.getMovies(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }
  phonesData =(cat) => {
    console.log(cat)
    api.getPhones(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }

  tvData =(cat) => {
    console.log(cat)
    api.getTv(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }

  fridgeData =(cat) => {
    console.log(cat)
    api.getFridge(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }

  homeAudioData =(cat) => {
    console.log(cat)
    api.getHomeAudio(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
  }

  fitnessWearables =(cat) => {
    console.log(cat)
    api.getFitnessWearables(cat).then (res =>{
      console.log(res);
      this.setState({topProducts: res.data.products})
    })
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

      <div className="topbutton">
        <Topbutton
        
        laptopData={this.laptopData}
        moviesData={this.moviesData}
        cameraData={this.cameraData}
        phonesData={this.phonesData}
        homeAudioData={this.homeAudioData}
        tvData={this.tvData}
        fitnessWearables={this.fitnessWearables}
        playstationData={this.playstationData}
        fridgeData={this.fridgeData}
     
        >
        

        </Topbutton>
      </div>

        {
          this.state.topProducts.length > 0 &&
          <Carousel
            products={this.state.topProducts}
            
          />
        }


        
       

        <div className="mainstage" > Taskd
        <div className='main' > 
        <Search className="searchPanel"
          categories={this.state.categories}
          categoryName={this.state.selectedCategory}
          onCategoryChange={this.onCategoryChange}
        />
      
        <div className="createButton"> 
          <Button size='massive' color='orange' onClose={(e) => this.state ({createDataModal: false})}   onClick={(e)=> this.setState({createDataModal: true})}>Create Ivunt</Button>
        </div>
        </div>
        <div className="left-panel">
        <p> left panel</p>
        </div>
        
        <div className="right-panel"> 
        <Activeusers/>
        </div>
        <div className='footer'>
        <p> footer</p>
        </div>
        </div>


         
       
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

       {
          this.state.createDataModal &&
          <Modal defaultOpen={true} centered={true} onClose={(e) => this.setState({ createDataModal: false })} size={'large'}>
            <Modal.Header>{this.state.selectedCategory.label}</Modal.Header>
            <Modal.Content>
              {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
            
              <div className="ui link cards" style={{justifyContent: 'center'}}>
              <Create/>
              
              </div>
            </Modal.Content>
          </Modal>
        }

      </div>

    )
  }
}


export default Main
