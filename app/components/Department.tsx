import React from "react";

type Props = {
    data: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
    }[];
}

function Department({ data }: Props) {
  return (
    <ul>
      {data.map((department) => (
        <li key={department.id}>
          <h2>{department.name}</h2>
          <p>{department.name}</p>
          <p>{department.created_at}</p>
          <p>{department.updated_at}</p>
        </li>
      ))}
    </ul>
  );
}

export default Department;
