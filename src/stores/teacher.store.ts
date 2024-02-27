import axios from "axios";
import { create } from "zustand";
// import { devtools } from "zustand/middleware";

const BaseUrl = 'https://dummyjson.com/users'

export const teacherStore = create((set: any) => ({
  teachers: [],
  teacher: {},
  loading: false,
  hasError: false,
  fetchTeachers: async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}?limit=20&skip=0`
      );
      if (response.status === 200) {
        set({ teachers: response.data.users });
      }
    } catch (error) {
      set({ hasError: true });
    } finally {
      set({ loading: false });
    }
  },
  fetchTeacher: async (id?: number) => {
    try {
      const response = await axios.get(`${BaseUrl}/${id}`);
      if (response.status === 200) {
        set({ teacher: response.data });
      }
    } catch (error) {
      set({ hasError: true });
    } finally {
      set({ loading: false });
    }
  },
  addTeacher: (teacher: any) =>
    set((state: any) => ({ teachers: [...state.teachers, teacher] })),
}));

// const teacherStore = create(devtools(store))

// fetch: async () => {
//     set(() => ({ loading: true }));
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users/1"
//       );
//       set((state) => ({ data: (state.data = response.data), loading: false }));
//     } catch (err) {
//       set(() => ({ hasErrors: true, loading: false }));
//     }
//   }
