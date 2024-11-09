import * as PeopleData from "@/data.json";
import People from "./interfaces/People";
import { ApiResponse } from "./interfaces/Department";

// Components
import Department from "./components/Department";
import PeopleComponent from "./components/People";

async function getDepartments() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments/all`, {
    cache: "no-store",
  });
  const data: ApiResponse = await response.json();
  return data;
}

export default async function Home() {
  const departments = await getDepartments();
  let PeopleWoe = Array.from(PeopleData);
  return (
    <>
      <h1>People Data</h1>
      <PeopleComponent data={PeopleWoe} />

      <h1>Departments Data</h1>
      <Department data={departments.data} />
    </>
  );
}
