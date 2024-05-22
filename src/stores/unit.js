import { defineStore } from 'pinia';
export const useUnitStore = defineStore('unit', {
    state: () => ({
        user: {},
        educationalInstitution: {},
        group: {},
        pupils: {},
        subject: {},
        theme: {},
        questions: {},
        answers: {}
    }),
    actions: {},
    getters: {},
});