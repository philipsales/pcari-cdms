import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';

import NotFound from '../views/NotFound.vue';
import TerminologyService from '../views/TerminologyService.vue';
import VocabularyList from '../views/terminology/VocabularyList.vue';
import VocabularyCreate from '../views/terminology/VocabularyCreate.vue';
import ValuesetCreate from '../views/terminology/ValuesetCreate.vue';
import ValuesetList from '../views/terminology/ValuesetList.vue';

import ClinicalAnnotation from '../views/ClinicalAnnotation.vue';
import ProjectList from '../views/annotation/ProjectList.vue';
import ProjectCreate from '../views/annotation/ProjectCreate.vue';
import ProjectWorkplace from '../views/annotation/ProjectWorkplace.vue';
import ReviewList from '../views/annotation/ReviewList.vue';

import CohortBuilder from '../views/CohortBuilder.vue';
import CohortList from '../views/cohort/CohortList.vue';
import CohortCreate from '../views/cohort/CohortCreate.vue';
import SubsetList from '../views/cohort/SubsetList.vue';
import SubsetCreate from '../views/cohort/SubsetCreate.vue';

import UserList from '../views/access/UserList.vue';
import UserCreate from '../views/access/UserCreate.vue';
import RoleList from '../views/access/RoleList.vue';
import RoleCreate from '../views/access/RoleCreate.vue';

import MedicalCaseList from '../views/medical/MedicalCaseList.vue';

import BiobankCaseList from '../views/biobank/BiobankCaseList.vue';

import UserAccount from '../views/account/UserAccount.vue';

import SidebarStandard from '../components/sidebars/SidebarStandard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  }, {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  }, {
    path: '/terminology',
    component: TerminologyService,
    children: [
      {
        path: '/',
        name: 'TerminologyService',
        components: {
          default: TerminologyService,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/vocabulary/list',
    name: 'VocabularyList',
    component: VocabularyList,
  }, {
    path: '/vocabulary/create',
    name: 'VocabularyCreate',
    component: VocabularyCreate,
  }, {
    path: '/valueset/create',
    name: 'ValuesetCreate',
    component: ValuesetCreate,
  }, {
    path: '/valueset/list',
    name: 'ValuesetList',
    component: ValuesetList,
  }, {
    path: '/annotation',
    component: ClinicalAnnotation,
    children: [
      {
        path: '/',
        name: 'ClinicalAnnotation',
        components: {
          default: ClinicalAnnotation,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'project',
        name: 'ProjectList',
        components: {
          default: ProjectList,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'review',
        name: 'ReviewList',
        components: {
          default: ReviewList,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/annotation/create',
    name: 'ProjectCreate',
    component: ProjectCreate,
  }, {
    path: '/annotation/workplace',
    name: 'ProjectWorkplace',
    component: ProjectWorkplace,
  }, {
    path: '/build',
    component: CohortBuilder,
    children: [
      {
        path: '/',
        name: 'CohortBuilder',
        components: {
          default: CohortBuilder,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'subset',
        name: 'SubsetList',
        components: {
          default: SubsetList,
          sidebar: SidebarStandard,
        },
      },
      {
        path: 'cohort',
        name: 'CohortList',
        components: {
          default: CohortList,
          sidebar: SidebarStandard,
        },
      },
    ],
  }, {
    path: '/cohort/create',
    name: 'CohortCreate',
    component: CohortCreate,
  }, {
    path: '/subset/create',
    name: 'SubsetCreate',
    component: SubsetCreate,
  }, {
    path: '/user/list',
    name: 'UserList',
    component: UserList,
  }, {
    path: '/user/create',
    name: 'UserCreate',
    component: UserCreate,
  }, {
    path: '/role/list',
    name: 'RoleList',
    component: RoleList,
  }, {
    path: '/role/create',
    name: 'RoleCreate',
    component: RoleCreate,
  }, {
    path: '/medical/cases/list',
    name: 'MedicalCaseList',
    component: MedicalCaseList,
  }, {
    path: '/biobank/cases/list',
    name: 'BiobankCaseList',
    component: BiobankCaseList,
  }, {
    path: '/account/user',
    name: 'UserAccount',
    component: UserAccount,
  }, {
    path: '/:notFound(.*)',
    component: NotFound,
  }],
});
