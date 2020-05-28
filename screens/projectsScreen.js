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
import {ListItem, CheckBox } from "react-native-elements";
import SearchBarComp from '../components/searchBar'
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native'
import { State } from "react-native-gesture-handler";


var DATA = [
  {
    due_date: null,
    due_date_reason: "",
    due_date_status: "not_set",
    total_comments: 1,
    tags: [],
    attachments: [],
    status: 47,
    status_extra_info: {
      name: "Archived",
      color: "#5c3566",
      is_closed: true,
      },
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
    assigned_to: 5,
    assigned_to_extra_info: {
      username: "johnlund",
      full_name_display: "John Lund",
      photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.80x80_q85_crop.jpg",
      big_photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.300x300_q85_crop.jpg",
      gravatar_id: "b3f3c55e4e735fa1b62b5c8b408c816d",
      is_active: true,
      id: 5,
    },
    owner: 5,
    owner_extra_info: {
      username: "johnlund",
      full_name_display: "John Lund",
      photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.80x80_q85_crop.jpg",
      big_photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.300x300_q85_crop.jpg",
      gravatar_id: "b3f3c55e4e735fa1b62b5c8b408c816d",
      is_active: true,
      id: 5,
    },
    is_watcher: false,
    total_watchers: 1,
    is_voter: false,
    total_voters: 0,
    project: 9,
    project_extra_info: {
      name: "Taiga Open",
      slug: "johnlund-taiga-open",
      logo_small_url: null,
      id: 9,
    },
    id: 63,
    ref: 1,
    milestone: null,
    milestone_slug: null,
    milestone_name: null,
    is_closed: true,
    points: {
      "30": 97,
      "32": 97,
      "33": 97,
      "31": 100,
    },
    backlog_order: 1584057681074,
    sprint_order: 1584057681074,
    kanban_order: 0,
    created_date: "2020-03-13T00:01:21.085Z",
    modified_date: "2020-03-19T22:03:54.572Z",
    finish_date: "2020-03-19T22:03:54.589Z",
    subject: "Choose name for project",
    client_requirement: false,
    team_requirement: false,
    generated_from_issue: null,
    generated_from_task: null,
    external_reference: null,
    tribe_gig: null,
    version: 4,
    watchers: [5],
    is_blocked: false,
    blocked_note: "",
    total_points: 1.0,
    comment: "",
    origin_issue: null,
    origin_task: null,
    epics: null,
    epic_order: null,
    tasks: [],
    total_attachments: 0,
    assigned_users: [5],
  },
  {
    due_date: null,
    due_date_reason: "",
    due_date_status: "not_set",
    total_comments: 1,
    tags: [],
    attachments: [],
    status: 44,
    status_extra_info: {
      name: "In progress",
      color: "#729fcf",
      is_closed: false,
    },
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
    assigned_to: 5,
    assigned_to_extra_info: {
      username: "johnlund",
      full_name_display: "John Lund",
      photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.80x80_q85_crop.jpg",
      big_photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.300x300_q85_crop.jpg",
      gravatar_id: "b3f3c55e4e735fa1b62b5c8b408c816d",
      is_active: true,
      id: 5,
    },
    owner: 5,
    owner_extra_info: {
      username: "johnlund",
      full_name_display: "John Lund",
      photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.80x80_q85_crop.jpg",
      big_photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.300x300_q85_crop.jpg",
      gravatar_id: "b3f3c55e4e735fa1b62b5c8b408c816d",
      is_active: true,
      id: 5,
    },
    is_watcher: false,
    total_watchers: 1,
    is_voter: false,
    total_voters: 0,
    project: 9,
    project_extra_info: {
      name: "Taiga Open",
      slug: "johnlund-taiga-open",
      logo_small_url: null,
      id: 9,
    },
    id: 64,
    ref: 2,
    milestone: null,
    milestone_slug: null,
    milestone_name: null,
    is_closed: false,
    points: {
      "30": 97,
      "32": 97,
      "33": 97,
      "31": 105,
    },
    backlog_order: 1584058034885,
    sprint_order: 1584058034885,
    kanban_order: 0,
    created_date: "2020-03-13T00:07:14.897Z",
    modified_date: "2020-04-07T22:22:44.328Z",
    finish_date: null,
    subject: "Prototype Design",
    client_requirement: false,
    team_requirement: false,
    generated_from_issue: null,
    generated_from_task: null,
    external_reference: null,
    tribe_gig: null,
    version: 8,
    watchers: [5],
    is_blocked: false,
    blocked_note: "",
    total_points: 10.0,
    comment: "",
    origin_issue: null,
    origin_task: null,
    epics: null,
    epic_order: null,
    tasks: [],
    total_attachments: 0,
    assigned_users: [5],
  },
  {
    due_date: null,
    due_date_reason: "",
    due_date_status: "not_set",
    total_comments: 0,
    tags: [],
    attachments: [],
    status: 44,
    status_extra_info: {
      name: "In progress",
      color: "#729fcf",
      is_closed: false,
    },
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
    assigned_to: 13,
    assigned_to_extra_info: {
      username: "topher4",
      full_name_display: "Chris Finch",
      photo: null,
      big_photo: null,
      gravatar_id: "bd2c556ea18ce168e2f18d6419a61bd1",
      is_active: true,
      id: 13,
    },
    owner: 5,
    owner_extra_info: {
      username: "johnlund",
      full_name_display: "John Lund",
      photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.80x80_q85_crop.jpg",
      big_photo:
        "https://act.modernmasters.org/media/user/9/1/7/a/180062aa81a8c2b207bd379e79a0b7cd8b65f719a6e474a736b5c5421fbd/20151017-_mg_6545.jpg.300x300_q85_crop.jpg",
      gravatar_id: "b3f3c55e4e735fa1b62b5c8b408c816d",
      is_active: true,
      id: 5,
    },
    is_watcher: false,
    total_watchers: 0,
    is_voter: false,
    total_voters: 0,
    project: 9,
    project_extra_info: {
      name: "Taiga Open",
      slug: "johnlund-taiga-open",
      logo_small_url: null,
      id: 9,
    },
    id: 68,
    ref: 3,
    milestone: null,
    milestone_slug: null,
    milestone_name: null,
    is_closed: false,
    points: {
      "30": 97,
      "31": 97,
      "32": 97,
      "33": 97,
    },
    backlog_order: 1586298193004,
    sprint_order: 1586298193004,
    kanban_order: 1586298193004,
    created_date: "2020-04-07T22:23:13.021Z",
    modified_date: "2020-04-07T22:23:13.027Z",
    finish_date: null,
    subject: "Get code on Github and invite johnlund to collaborate",
    client_requirement: false,
    team_requirement: false,
    generated_from_issue: null,
    generated_from_task: null,
    external_reference: null,
    tribe_gig: null,
    version: 1,
    watchers: [],
    is_blocked: false,
    blocked_note: "",
    total_points: null,
    comment: "",
    origin_issue: null,
    origin_task: null,
    epics: null,
    epic_order: null,
    tasks: [],
    total_attachments: 0,
    assigned_users: [13],
  },
];

export default function ProjectsScreen() {
  const [searchResults, getSearchResults] = useState('')
  const [Data, updateData] = useState(DATA)

  const handleSearchResults= (search)=>{
    getSearchResults(search)
  }
  const handleCheckBox = (index1, index2) =>{
    console.log(Data[index1].practiceProject.tasks_to_complete[index2].isChecked)
    updateData([...Data], Data[index1].practiceProject.tasks_to_complete[index2].isChecked = !Data[index1].practiceProject.tasks_to_complete[index2].isChecked)
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
