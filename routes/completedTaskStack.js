import { createStackNavigator } from "react-navigation-stack";
import CompletedTasks from "../screens/completedTasks";
import Header from "../components/header";
import React from "react";

const screens = {
  CompletedTasks: {
    screen: CompletedTasks,
    navigationOptions: ({ navigation }) => {
      return {
        // headerTitle can be a function as a value which can return a component. 'title' can not. 'title' can only return a string
        headerTitle: () => (
          <Header navigation={navigation} title="Completed Tasks" />
        ),
      };
    },
  },
};

const CompletedTasksStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { height: 90, backgroundColor: "#eee" },
  },
});

export default CompletedTasksStack;
