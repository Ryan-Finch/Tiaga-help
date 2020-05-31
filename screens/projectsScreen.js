import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import {ListItem, CheckBox} from "react-native-elements";
import SearchBarComp from '../components/searchBar'
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native'
import { State } from "react-native-gesture-handler";


var DATA = [
  {
    practiceProject:{
      title: "Project 1",
      tasks_to_complete:[{
          task:'Complete Search Bar',
          isChecked: false,
          task_description: 'What we need to do'
        },
        {
          task: 'Accordian Results',
          isChecked: false,
          task_description: 'Other Stuff We need to do'
        },
        {
          task: 'Whats Next?',
          isChecked: false,
          task_description: 'More Stuff to do'
        }],
    },
  },
  {
    practiceProject:{
      title: "Project 2",
      tasks_to_complete:[{
        task:'Complete Search Bar 2',
        isChecked: false,
        task_description: 'What we need to do'
      },
      {
        task: 'Accordian Results 2',
        isChecked: false,
        task_description: 'Other Stuff We need to do'
      },
      {
        task: 'Whats Next? 2',
        isChecked: false,
        task_description: 'More Stuff to do'
      }],
    },
    
  },
  {
    practiceProject:{
      title: "Project 3",
      tasks_to_complete:[{
        task:'Complete Search Bar 3',
        isChecked: false,
        task_description: 'What we need to do'
      },
      {
        task: 'Accordian Results 3',
        isChecked: false,
        task_description: 'Other Stuff We need to do'
      },
      {
        task: 'Whats Next? 3',
        isChecked: false,
        task_description: 'More Stuff to do'
      }],
    },
  }
];

export default function ProjectsScreen() {

  const [searchResults, getSearchResults] = useState('')

  const [Data, updateData] = useState(DATA)

  const handleSearchResults= (search)=>{
    getSearchResults(search)
  }

  const handleCheckBox = (index1, index2) =>{
    console.log(Data[index1].practiceProject.tasks_to_complete[index2].isChecked)
    let data = Data[index1].practiceProject.tasks_to_complete[index2].isChecked
    console.log(data)
    updateData([...Data], Data[index1].practiceProject.tasks_to_complete[index2].isChecked = !data)
  }
  

  return (
    <View>
      <SearchBarComp
        handleSearchResults={handleSearchResults} 
        searchResults={searchResults}
      />
      <Text style={styles.text}>Tasks</Text>  
      {Data.map((d,idx1)=> 
        {
          return(


            <Collapse key={idx1}>  
              <CollapseHeader>
                <ListItem 
                  title={d.practiceProject.title}
                  chevron={{color: 'red'}}
                  bottomDivider
                  />
              </CollapseHeader>
              <CollapseBody>
              {d.practiceProject.tasks_to_complete.map((stat, idx2) =>{
                return (
                <ListItem 
                key={idx2}
                title={stat.task}
                subtitle={stat.task_description}
                leftAvatar={
                  <CheckBox 
                    key={stat.task}
                    size={64}
                    checked={stat.isChecked}
                    onPress={() => handleCheckBox(idx1, idx2)}
                  />
                  }
                />
                )})
              }
                </CollapseBody>
            </Collapse>
        )})
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 50,
    fontSize: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    padding: 0,
    width: '100%'
  }
});
