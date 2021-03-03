import React,{ Component } from 'react';
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header';
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../action";


class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="test" email="test@test.com" />
      </div>
    );
  }
}

function mapStateToProps({products}) {
  return {products };

}

export default connect(mapStateToProps, {productsFetch})(Home);
