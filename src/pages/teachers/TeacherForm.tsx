import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation, useOutletContext } from 'react-router-dom'
import { teacherStore } from '../../stores';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TeacherForm = (props: any) => {
  const router = useNavigate();
  const locatio = useLocation();
  console.log(router);
  console.log(locatio);
  console.log(props);
  
    const teacher_id = useParams().tch_id;
    // const inputRef = useRef();
    const [value, setValue] = useState('');
    // const teachers = teacherStore(state => state.teachers)
    const addTeacher = teacherStore(state => state.addTeacher);
    const add = () => {
      // addTeacher(value)
      // setValue('');
      router('/students')
    }

    const { setTitle } = useOutletContext();
    useEffect(() => {
      document.title = props.header
      setTitle(props.title)
    }, [])
    
  return (
    <>
      {/* <ul>
      {
        teachers.map(p => (
          <li>{p}</li>
        ))
      }
    </ul> */}
      {/* <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} /> */}
      <button onClick={add}>Add</button>

      <Typography variant="h6" gutterBottom>
      Teacher Form {teacher_id}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default TeacherForm