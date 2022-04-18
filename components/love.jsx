import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
class Love extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: "",
      todolist: [],
    };
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({
      todolist: [...this.state.todolist, this.state.ms],
      ms: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.ms}
          onChangeText={(value) => this.setState({ ms: value })}
          placeholder="enter what to to ..."
        ></TextInput>
        <Button title="add" onPress={this.add}></Button>
        <ScrollView>
          {" "}
          {this.state.todolist.map((item, id) => (
            <Text style={styles.item} key={id}>
              {" "}
              {`${id} ${item}`}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Love;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textInput: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#FFF",
    padding: "15",
    border: "1px solid #000",
    width: "100%",
    marginTop: 10,
  },
});
