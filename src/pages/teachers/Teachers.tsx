import { useEffect } from "react";
import { Link } from "react-router-dom";
import { teacherStore } from "../../stores";
import {
  DataGrid,
  GridColDef,
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TablePaginationProps,
  TextField,
} from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import { DeleteOutline, EditNote, Search } from "@mui/icons-material";

const Teachers = () => {
  const teachers = teacherStore((state) => state.teachers);
  const fetchTeacher = teacherStore((state) => state.fetchTeacher);

  useEffect(() => {
    fetchTeacher();
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
      width: 100,
      renderCell: (params) => (
        <Link to={`/teacher/${params.row.id}`}>{params.value}</Link>
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

  function Pagination({
    page,
    onPageChange,
    className,
  }: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1);
        }}
      />
    );
  }

  function CustomPagination(props: any) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <TextField
          sx={{
            ".MuiInputBase-root": {
              borderRadius: 2,
              backgroundColor: "rgb(248, 250, 252)",
              fontSize: "small",
            },
          }}
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <Link to={"/teacher/create"}>
          <Button>Add Teacher</Button>
        </Link>
      </Box>
      <DataGrid
        rows={teachers}
        columns={columns}
        sx={{ border: "none" }}
        pagination
        slots={{
          pagination: CustomPagination,
        }}
        // autoPageSize
        disableColumnMenu
        hideFooterSelectedRowCount
      />
    </>
  );
};

export default Teachers;
