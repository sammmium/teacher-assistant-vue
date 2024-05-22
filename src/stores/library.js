import { defineStore } from 'pinia';
export const useLibraryStore = defineStore('library', {
    state: () => ({
        educationalInstitutions: [],
        groups: [],
        pupils: [],
        subjects: [],
        themes: [],
        questions: [],
        answers: []
    }),
    actions: {},
    getters: {},
});