import { createWebHistory, createRouter } from "vue-router";

import AddDoctor from '../components/Doctor/AddDoctor'

import DoctorList from '../components/Doctor/DoctorList'
import Home from '../components/Layout/Home'
import About from '../components/Layout/About'
import Organizations from "../components/Organization/Organizations"
import AddOrganization from "../components/Organization/AddOrganization"
import Organization from "../components/Organization/Organization"
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
        path: "/doctor",
        name: "Doctor",
        component: DoctorList
    },
    {
        path: "/add",
        name: "Add New Doctor",
        component: AddDoctor
    },
    {
      path: "/organization",
      name: "All Organization",
      component: Organizations
    },
    {
      path: "/organization/:id",
      name: "Organization",
      component: Organization
    },
    {
      path: "/organization/new",
      name: "New Organization",
      component: AddOrganization
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;