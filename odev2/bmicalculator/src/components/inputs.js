import React, { useState } from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Text from '@mui/material/ListItemText';
import { DataGrid } from '@mui/x-data-grid';



export default function Inputs() {
  
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fname', headerName: 'First Name', width: 130 },
    { field: 'lname', headerName: 'Last Name', width: 130 },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 90,
    },
    {
      field: 'birthdate',
      headerName: 'Birth Date',
      width: 160,
      
    },
    {
      field: 'height',
      headerName: 'Height',
      width: 90,
    },
    {
      field: 'weight',
      headerName: 'Weight',
      width: 90,
    },
    {
      field: 'bmi',
      headerName: 'BMI',
      width: 90,
    },
    {
      field: 'result',
      headerName: 'RESULT',
      width: 190,
    },
  ];
  

  function calculateBMIStatus(bmiValue) {
    let indexResult;
    
  
    if (bmiValue < 16) {
      indexResult = 'Severe Thinness';
    } else if (bmiValue >= 16 && bmiValue < 17) {
      indexResult = 'Moderate Thinness';
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      indexResult = 'Mild Thinness';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      indexResult = 'Normal';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      indexResult = 'Overweight';
    } else if (bmiValue >= 30 && bmiValue < 35) {
      indexResult = 'Obese Class I';
    } else if (bmiValue >= 35 && bmiValue < 40) {
      indexResult = 'Obese Class II';
    } else {
      indexResult = 'Obese Class III';
    }
  
    return  indexResult ;
  }

  const paperStyle = {padding: '50px 0px', width: 550, margin: '20px auto'}
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState("");
  const [height, setHeight] = useState(0.0);
  const [weight, setWeight] = useState(0.0);

  const [rId, setRId] = useState(1);
  const [rfname, setRFirstName] = useState("");
  const [rlname, setRLastName] = useState("");
  const [rgender, setRGender] = useState("");
  const [rbirthDate, setRBirthDate] = useState("");
  const [rheight, setRHeight] = useState(0);
  const [rweight, setRWeight] = useState(0);

   var rIId = -1;
   var bmiiid = -1;
   var asdf = -1;
  const [bmiid, setBmiid] = useState(-1);
  const [bmiValue, setBmiValue] = useState();
  const [indexResult, setIndexReslt] = useState();
  const [indexRange, setIndexRange] = useState();
  
  const [bmi_id, setBmi_id] = useState(-1);
  const [id, setId] = useState(0);
  const [calcDate, setCalcDate] = useState("");

  const [cData, setCData] = useState([]);
  const [dData, setDData] = useState([]);
  
  const [ffname, setFfname] = useState('');
  const [llname, setLlname] = useState('');

  const searchFromId = async (e) => {
    e.preventDefault();
    const userData = await fetchUserData();
    const bmiData = await fetchBmiData(userData.id);
    await fetchBmi(bmiData.bmiid);
  };

  const searchFromName = async () => {
    setCData([]);
    const response = await fetch('http://localhost:8080/odev/user');
    const responseData = await response.json();
    const newData = responseData.filter(user => user.fname === ffname && user.lname === llname);
  
    const newDataWithBMI = newData.map(user => {
      const bmi = (user.weight / Math.pow(user.height, 2)).toFixed(2);
      const result = calculateBMIStatus(bmi);
      return { ...user, bmi, result };
    });
  
    setCData(newDataWithBMI);
    console.log(cData);
    console.log(newDataWithBMI);
  }

  const fetchUserData = async () => {
    const response = await fetch('http://localhost:8080/odev/user/' + rId);
    const data = await response.json();
    setRId(data.id);
    setRFirstName(data.fname);   
    setRLastName(data.lname);
    setRGender(data.gender);
    setRBirthDate(data.birthdate);
    setRHeight(data.height);
    setRWeight(data.weight);  
    console.log("rId = " + data.id); 
    return data;
  };
  
  const fetchBmiData = async () => {
    const response = await fetch('http://localhost:8080/odev/calculatebmi/' + rId);
    const data = await response.json();
    setId(data.id);
    setBmi_id(data.bmiid);
    setCalcDate(data.calcdate);
    console.log("bmiid = " + data.bmiid);
    console.log("setid = " + data.id);
    console.log("aclcdate = " + data.calcdate);
    return data;
  };
  
  const fetchBmi = async (bmiId) => {
    const response = await fetch('http://localhost:8080/odev/bmi/' + bmiId);
    const data = await response.json();
    setBmiid(data.bmi_id);
    setBmiValue(data.bmivalue);
    setIndexReslt(data.indexresult);
    setIndexRange(data.indexrange);
    console.log("bmi value = " + data.bmivalue);
    console.log("index result = " + data.indexresult);
    console.log("index range = " + data.indexrange);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const birthdate = birthDate;
    const user = { fname, lname, gender, birthdate, height, weight };
    console.log(user);
    const response = await fetch('http://localhost:8080/odev/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    rIId = data.id;
    setRId(data.id);
    setRFirstName(data.fname);
    setRLastName(data.lname);
    setRGender(data.gender);
    setRBirthDate(data.birthdate);
    setRHeight(data.height);
    setRWeight(data.weight);
    console.log('rId = ' + rId);
    console.log('http://localhost:8080/odev/calculatebmi/' + rIId);
    const calculateBmiResponse = await fetch('http://localhost:8080/odev/calculatebmi/' + rIId);
    const calculateBmiData = await calculateBmiResponse.json();
    bmiiid = calculateBmiData.bmiid;
    setId(calculateBmiData.id);
    setBmi_id(calculateBmiData.bmiid);
    setCalcDate(calculateBmiData.calcdate);
    bmiiid = calculateBmiData.bmiid;
    console.log('bmiid = ' + bmi_id);
    console.log('setid = ' + id);
    console.log('aclcdate = ' + calcDate);
    const bmiResponse = await fetch('http://localhost:8080/odev/bmi/' + bmiiid);
    const bmiData = await bmiResponse.json();
    setBmiid(bmiData.bmi_id);
    setBmiValue(bmiData.bmivalue);
    setIndexReslt(bmiData.indexresult);
    setIndexRange(bmiData.indexrange);
    console.log('bmi value = ' + bmiValue);
    console.log('index result = ' + indexResult);
    console.log('index range = ' + indexRange);
  };

  
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Input Infos</h1>
    <form  noValidate autoComplete='off'>
      <TextField id="FirstName" label="First Name" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={fname} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField id="LastName" label="Last Name" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={lname} onChange={(e) => setLastName(e.target.value)}/>
      <TextField id="Gender" label="Gender" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={gender} onChange={(e) => setGender(e.target.value)}/>
      <TextField id="BirthDate" label="Birth Date" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
      <TextField id="Height" label="Height" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={height} onChange={(e) => setHeight(e.target.value)}/>
      <TextField id="Weight" label="Weight" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 15}}value={weight} onChange={(e) => setWeight(e.target.value)}/>
      <Button variant='contained' onClick={handleClick} style={{margin:10}}>Calculate BMI</Button>
      </form>
      </Paper>
    </Container>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Searh From ID</h1>
    <form  noValidate autoComplete='off'>
      <TextField id="Id" label="Id" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={rId} onChange={(e) => setRId(e.target.value)}/>
      <Button variant='contained'onClick={searchFromId}  style={{margin:10}}>Searh From Id</Button>
      </form>
      </Paper>
    </Container>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>BMI RESULTS</h1>
        <Text>Name: {rfname}</Text>
        <Text>Surname: {rlname}</Text>
        <Text>Birth Date: {rbirthDate}</Text>
        <Text>Bmi Value: {bmiValue}</Text>
        <Text>IndexRange: {indexResult}</Text>
        <Text>IndexResult: {indexRange}</Text>
        <Text>Calculation Date: {calcDate}</Text>
      </Paper>
    </Container>
    </div>
    <Divider variant="middle" light= {false}/>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Searh From Name</h1>
    <form  noValidate autoComplete='off'>
      <TextField id="name" label="First Name" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={ffname} onChange={(e) => setFfname(e.target.value)}/>
      <TextField id="llname" label="Last Name" variant="outlined" fullWidth style={{marginTop: 5, marginBottom: 5}} value={llname} onChange={(e) => setLlname(e.target.value)}/>
      <Button variant='contained'onClick={searchFromName}  style={{margin:10}}>Searh From Id</Button>
      </form>
      </Paper>
    </Container>
    
    <Container>
    <DataGrid
        rows={cData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Container>
    </div>
    </div>
  );
}