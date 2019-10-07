import React, { Component } from "react";
import { Icon, Text, Container } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      // <Container>
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="shoppingcart"
        type="AntDesign"
      />
      /* <Text>{this.props.quantity}</Text> */
      // </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   quantity: state.cartReucer.quantity
// });

export default withNavigation(CartButton);
