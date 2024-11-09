import React from 'react'

type Props = {
    data: {
        id: number;
        name: string;
        email: string;
        profession: string;
    }[];
}

function People({ data }: Props) {
  return (
    <div>
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
            <p>{person.profession}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default People