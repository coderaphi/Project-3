import React, { Component } from "react";
import Prodcard from "./components/Prodcard";
import Navigation from "./components/Navigation";
import SearchProd from "./components/SearchProd";
import api from "./util/api";
import Carousel from "./components/Carousel";
import { Button, Modal, Dimmer, Loader } from "semantic-ui-react";
import Topbutton from "./components/Topbutton";
import Create from "./components/Create";
import Activeusers from "./components/Activeusers";
import EventsToday from "./components/EventsToday";
import BucketTabs from "./components/BucketTabs";
import Searchcreate from "./components/Searchcreate";
import TabContext from "./TabContext";

class Main extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
    search: "",
    image: "",
    name: "",
    error: "",
    showProdModal: false,
    topProducts: [],
    createDataModal: false,
    createivunt: [],
    tabs: ["Tech Products", "Home Products", "Special occasion", "My iVunt"],
    selectedTabIndex: 0,
    loading: true
  };

  componentDidMount() {
    api
      .getProducts()
      .then(res =>
        this.setState({ topProducts: res.data.products, loading: false })
      )
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });

    api
      .getCategories()
      .then(res => {
        return res.data.categories.map(c => ({ id: c.id, name: c.name }));
      })
      .then(categories => {
        console.log(categories);
        this.setState({ categories: categories, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  addProducts = (product, tabIndex) => {
    const { createivunt } = this.state;
    createivunt.push(product);
    console.log(tabIndex);
    this.setState({
      createivunt: createivunt,
      selectedTabIndex: tabIndex
    });
  };

  deleteProducts = product => {
    const createivunt = this.state.createivunt.filter(
      p => p.productId !== product.productId
    );
    // const firstIndex = this.state.createivunt.findIndex(p => p.productId !== product.productId);
    // this.state.createivunt.splice(firstIndex, 1);
    // const removeIndex = createivunt.findIndex (p=> p.id ===id)
    // this.setState({
    //   createivunt:createivunt.filter((_,i) => i !== removeIndex)
    // });
    this.setState({ createivunt });
  };

  loadProducts = cat => {
    api.getProducts(cat).then(res => {
      console.log(res);
      this.setState({ topProducts: res.data.products });
    });
  };

  onCategoryChange = category => {
    console.log(category);
    api.getProducts(category.value).then(res => {
      this.setState({
        products: res.data.products,
        selectedCategory: category,
        showProdModal: true
      });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    api
      .getProducts()
      .then(res => {
        console.log(res);
        if (res.data.status === "error") {
          throw new Error(res.data.products);
        }
        this.setState({ products: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  addTab = tabName => {
    this.state.tabs.push(tabName);
    this.setState({
      tabs: this.state.tabs
    });
  };

  changeActiveTab = tabIndex => {
    this.setState({
      selectedTabIndex: tabIndex
    });
  };

  render() {
    return (
      <TabContext.Provider
        value={{
          tabs: this.state.tabs,
          addTab: this.addTab,
          tabIndex: this.state.selectedTabIndex,
          changeActiveTab: this.changeActiveTab
        }}
      >
        <Dimmer active={this.state.loading}>
          <Loader inverted>Loading</Loader>
        </Dimmer>

        <div className="site">
          <Navigation />

          <div className="topbutton">
            <Topbutton loadProducts={this.loadProducts} />
          </div>

          {this.state.topProducts.length > 0 && (
            <Carousel
              products={this.state.topProducts}
              addProducts={this.addProducts}
            />
          )}

          <div className="mainstage">
            <div className="main" style={{ marginLeft: 20, marginRight: 20 }}>
              <Searchcreate
                categories={this.state.categories}
                categoryName={this.state.selectedCategory}
                onCategoryChange={this.onCategoryChange}
                onClick={e => this.setState({ createDataModal: true })}
              />

              <BucketTabs
                createivunt={this.state.createivunt}
                deleteProducts={this.deleteProducts}
              />
            </div>
            <div className="left-panel">
              <EventsToday />
            </div>

            <div className="right-panel">
              <Activeusers />
            </div>
            <div
              style={{ textAlign: "center", marginTop: 25, color: "white" }}
              className="footer"
            >
              <p> Copyrights reserved coderaphi inc</p>
            </div>
          </div>

          {this.state.showProdModal && (
            <Modal
              defaultOpen={true}
              centered={true}
              onClose={e => this.setState({ showProdModal: false })}
              size={"large"}
            >
              <Modal.Header>{this.state.selectedCategory.label}</Modal.Header>
              <Modal.Content>
                {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}

                <div className="ui link cards">
                  {this.state.products.map(product => (
                    <Prodcard
                      key={`p-${product.name}`}
                      name={product.name}
                      image={product.image}
                      price={product.salePrice}
                      addProducts={(tabName, tIndex) => this.addProducts({...product, tabName: tabName}, tIndex)}
                    />
                  ))}
                </div>
              </Modal.Content>
            </Modal>
          )}

          {this.state.createDataModal && (
            <Modal
              defaultOpen={true}
              centered={true}
              onClose={e => this.setState({ createDataModal: false })}
              size={"large"}
            >
              <Modal.Header
                style={{ justifyContent: "center", display: "flex" }}
              >
                {" "}
                <h1>Create your iVunt </h1>
              </Modal.Header>
              <Modal.Content>
                <div
                  className="ui link cards"
                  style={{ justifyContent: "center" }}
                >
                  <Create
                    createivunt={this.state.createivunt}
                    addProduct={this.addProducts}
                    onClose={() => this.setState({ createDataModal: false })}
                  />
                </div>
              </Modal.Content>
            </Modal>
          )}
        </div>
      </TabContext.Provider>
    );
  }
}

export default Main;
