import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//sample data
const rows = [
    createData('Rakesh', "morning","Doctor", "Edit     Add"),
    createData('Suresh', "night","Patient", "Edit      Add"),
    createData('Nagesh', "noon","Nurse", "Edit     Add"),
    createData('Ganesh', "morning","Doctor", "Edit     Add"),
    createData('Aug', "noon","Patient", "Edit     Add"),
  ];

function createData(Firstname: string, Shift: string, role: string, action: string) {
  return { Firstname, Shift, role, action };
}

//From Database 


export default function Dashboard() {
  const [searchKey,setSearchKey]= React.useState();
  React.useEffect(() => {
    const fetchApi = async () => {
      try {
           fetch('${apiKey}/db/data_fetch')
              .then((response) => response.json())
              .then((data) => {
                 console.log(data);
              })
              .catch((err) => {
                 console.log(err.message);
              });
      } catch (err) {
        // setError(err.message); 
      } finally {
        // setLoading(false); 
      }
    };
    fetchApi();
  }, []);

  const handleRequestSort = (event:any, property:any) => {
   sort(property)
  };

  const elasticSearchField=()=>{
    // performQuery = debounce(queryString => {
    //     client.search(queryString, {}).then(
    //       response => {
    //         this.setState({
    //           response
    //         });
    //       },
    //       error => {
    //         console.log(`error: ${error}`);
    //       }
    //     );
    //   }, 200); 
  }

  const elasticSearch = (event:any) =>{
  setSearchKey(event.target.value)
  elasticSearchField()
  }

  const createSortHandler = (property:any) => (event:any) => {
   sort(property)
  };

  return (
    <TableContainer component={Paper}>
      <h2 style={{ "textAlign": "center" }}>Shift Tracking System <input style={{"marginLeft":"90px"}}placeholder='search key' onChange={elasticSearch}></input></h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>          
        <TableRow>
            <TableCell align='left'>First Name</TableCell>
            <TableCell align="left">Shift</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Firstname                }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th">{row.Firstname}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Shift}
              </TableCell>
              <TableCell component="th">{row.role}</TableCell>
              <TableCell style={{ "color": "blue" }} component="th">{row.action} <Link to={`/crayons/${row}`}>{ }</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function sort(property: any) {
    throw new Error('Function not implemented.');
}
