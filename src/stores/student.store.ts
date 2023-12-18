import { create } from "zustand";
// import { devtools } from "zustand/middleware";

export const studentStore = create((set: any) => ({
    students: [],
    student: {},
    addStudent: (student: any) => set((state: any) => ({students: [...state.students, student]}))
}))

// const studentStore = create(devtools(store))
