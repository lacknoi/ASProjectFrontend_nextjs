import React from 'react'

type Props = {
  params: any;
}

export default async function SMS({params}: Props) {
  const user = "admin"
  const password = "password"
  const url = `https://codemobiles.com/adhoc/youtubes/index_new.php?username=${user}&password=${password}&type=songs`;
  const result = await fetch(url)
  const data = await result.json()

  return (
    <div>
      <div>SMS ID : {params.id}</div>
      <span>{JSON.stringify(data)}</span>
    </div>
  )
}