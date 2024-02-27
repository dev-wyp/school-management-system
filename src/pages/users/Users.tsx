import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteOutline,
  EditNote,
  GridView,
  TableRows,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { teacherStore } from "../../stores";

const Users = (props) => {
  const { setTitle } = useOutletContext();
  const staffs = teacherStore((state) => state.teachers);
  const fetchUsers = teacherStore((state) => state.fetchTeachers);
  const [layout, setLayout] = useState<string | null>("1");

  useEffect(() => {
    document.title = props.header;
    setTitle(props.title);
    fetchUsers();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      width: 50,
      renderCell: (params) => String(params.value).padStart(3, "0"),
    },
    {
      field: "username",
      headerName: "UserName",
      headerClassName: '',
      width: 100,
      renderCell: (params) => (
        <Link to={`/staff/${params.row.id}`}>{params.value}</Link>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => params.row.firstName + " " + params.row.lastName,
    },
    {
      field: "birthDate",
      headerName: "Date of Birth",
      width: 100,
      renderCell: (params) => params.value || "-",
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 90,
      renderCell: (params) => params.value || "-",
    },
    {
      field: "campus",
      headerName: "Campus",
      width: 150,
      renderCell: (params) => params.row.university || "-",
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      renderCell: (params) => params.row.company.title || "-",
    },
    {
      field: "class",
      headerName: "Class",
      width: 100,
      renderCell: (params) => params.row.company.department || "-",
    },
    {
      field: "bloodGroup",
      headerName: "Section",
      width: 80,
      renderCell: (params) => params.value || "-",
    },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "address",
      headerName: "Address",
      width: 300,
      renderCell: (params) => params.value.address + ", " + params.value.city,
    },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      maxWidth: 200,
      renderCell: (params) => (
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton onClick={() => console.log(params.row.id)}>
            <EditNote />
          </IconButton>
          <IconButton
            onClick={() => console.log(params.row.id)}
            sx={{ color: "red" }}
          >
            <DeleteOutline />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box p={2} sx={{backgroundColor: '#ffffff'}}>
      <Box mb={3} display={"flex"} justifyContent={'space-between'}>
        <ToggleButtonGroup
          size="small"
          value={layout}
          exclusive
          onChange={(
            _event: React.MouseEvent<HTMLElement>,
            newLayout: string | null
          ) => setLayout(newLayout)}
          aria-label="text alignment"
        >
          <ToggleButton value="1" aria-label="Grid View">
            <GridView />
          </ToggleButton>
          <ToggleButton value="2" aria-label="Table View">
            <TableRows />
          </ToggleButton>
        </ToggleButtonGroup>
        <TextField
          id="search"
          type="text"
          className="w-96 ms-3 flex end"
          placeholder="Search Staff"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{
            ".MuiInputBase-root": { height: 39.6, borderRadius: "6px" },
          }}
        />
      </Box>
      {layout === "1" ? (
        <Grid container spacing={2}>
          {staffs.map((staff: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={staff.id}>
              <Paper
                elevation={3}
                sx={{
                  minHeight: 160,
                  backgroundColor: "#eef2f6",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={staff.image}
                  sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
                />
                <Typography variant="subtitle2" component="h6" fontWeight={600}>
                  {staff.firstName} {staff.lastName}
                </Typography>
                <Typography component="span" fontSize={13}>
                  {staff.company?.title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  mt={2}
                >
                  <Button
                    variant="outlined"
                    href={`/staff/${staff.id}`}
                    sx={{ px: 1, fontSize: 11, textTransform: "none" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    href={`/staff/${staff.id}/edit`}
                    color="warning"
                    sx={{ px: 1, fontSize: 11, textTransform: "none" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ px: 1, fontSize: 11, textTransform: "none" }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <DataGrid
          rows={staffs}
          columns={columns}
          sx={{ border: "none" }}
          pagination
          // slots={{
          //   pagination: CustomPagination,
          // }}
          // autoPageSize
          disableColumnMenu
          hideFooterSelectedRowCount
        />
      )}
    </Box>
  );
};

export default Users;
