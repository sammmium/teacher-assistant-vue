import { defineStore } from 'pinia';
export const useBreadcrumbsStore = defineStore('breadcrumbs', {
    state: () => ({
        breadcrumbs: []
    }),
    actions: {
        setBreadcrumbs(breadcrumbs) {
            this.breadcrumbs = breadcrumbs;
        }
    },
    getters: {
        getBreadcrumbs() {
            return this.breadcrumbs;
        }
    },
});
