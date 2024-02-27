import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom'
import { teacherStore } from '../../stores';

const UserDetail = (props: any) => {
  const { setTitle } = useOutletContext();
  const staff = teacherStore((state) => state.teacher);
  const fetchUser = teacherStore((state) => state.fetchTeacher);

  useEffect(() => {
    document.title = props.header;
    setTitle(props.title);
    fetchUser(1);
  }, []);

  console.log(staff);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              textAlign: "center",
              p: 2,
            }}
          >
            <img src="https://pro.eskooly.com/demo/public/uploads/staff/demo/staff.jpg" alt="" style={{ width: 100 }}></img>

            <Typography variant="subtitle2" component="h6" fontWeight={600} mt={2}>
              Wai Yan Phyo
            </Typography>
            <Typography component="span" fontSize={13}>
              Mathematics Teacher
            </Typography>

            <Box display={'flex'} justifyContent={'space-between'} mt={2} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Reg No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                123456
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Admission Date:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                01.01.2024
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Roll No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                10
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Class:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                GRADE 7
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Section:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                A
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Button variant='contained'>A</Button>
            <Button variant='contained'>B</Button>
            <Button variant='contained'>C</Button>
            <Button variant='contained'>D</Button>
            <Button variant='contained'>E</Button>
          </Box>
          <Paper
            elevation={3}
            sx={{
              textAlign: "center",
              p: 2,
            }}
          >
            <Box display={'flex'} justifyContent={'space-between'} mt={2} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Reg No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                123456
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Admission Date:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                01.01.2024
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Roll No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                10
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Class:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                GRADE 7
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Section:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                A
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mt={2} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Reg No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                123456
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Admission Date:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                01.01.2024
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Roll No:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                10
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Class:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                GRADE 7
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mb={1}>
              <Typography variant="subtitle2" component="h6">
                Section:
              </Typography>
              <Typography variant="subtitle2" component="h6" color={'#415094'}>
                A
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDetail