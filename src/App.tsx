import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      slug
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log(data);

  return <h1 className="text-2xl text-violet-800">Hello World!</h1>;
}

export default App;
