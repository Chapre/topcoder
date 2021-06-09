import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
//Table need consists checkbox, Name, Value & Time to Mine columns
const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'value', headerName: 'Value', width: 200 },
    { field: 'timeToMine', headerName: 'Time to Mine', width: 200 },
  ];
  
  const rows = [
    { id:1, name: "ore1", value: 10, timeToMine: 5 },
    { id:2, name: "ore2", value: 12, timeToMine: 3 },
    { id:3, name: "ore3", value: 14, timeToMine: 2 },
    { id:4, name: "ore4", value: 16, timeToMine: 8 },
    { id:5, name: "ore5", value: 18, timeToMine: 4 },
    { id:6, name: "ore6", value: 20, timeToMine: 6 },
  ]

function UserTabs(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {setValue(newValue);};
    const [selection, setSelection] = React.useState([]);
    return(
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab id="tabTable" label="Table" {...a11yProps(0)} />
                    <Tab id="tabCard" label="Timeline" {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} 
                    columns={columns} pageSize={5}
                    onSelectionModelChange={(e) => {
                        const selectedIDs = new Set(e.selectionModel);
                        var items =[];
                        for (const element of selectedIDs) {
                            var r = rows.find(x => x.id === element);
                            if(r){
                                items.push(r);
                            }
                        }

                        var j=1/3;
                        items.sort((a, b) => a.value/a.timeToMine - b.value/b.timeToMine);
                        setSelection(items);
                      }}
                    checkboxSelection
                    onRowSelected={(e) => 
                        console.log(e.data)}
                    />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
            </TabPanel>        
        </div>
    );
}

export default (UserTabs);