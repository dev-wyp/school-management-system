import axios from "axios";
import { create } from "zustand";
// import { devtools } from "zustand/middleware";

export const teacherStore = create((set: any) => ({
    teachers: [],
    teacher: {},
    loading: false,
  hasError: false,
    fetchTeacher: async () => {
try {
    const response = await axios.get('https://dummyjson.com/users?limit=10&skip=0');
    if (response.status === 200) {
        set({teachers: response.data.users});
    }    
} catch (error) {
    set({ hasError: true });
} finally {
  set({ loading: false });
}
    },
    addTeacher: (teacher: any) => set((state: any) => ({ teachers: [...state.teachers, teacher] }))
}))

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