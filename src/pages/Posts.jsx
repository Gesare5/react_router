import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../components/card';

// GOOD NEWS!!! THIS CODE WORKS WHEN YOU VISIT /posts/{id} AS REQUIRED/REQUESTED BY YOU.
// HOWEVER I TRIED TO DISPLAY THE ID AS A CLICKABLE LINK ON THE CARD LIKE YOU DID FOR THE userPost AND IT FAILED OR RATHER REFUSED TO SHOW.


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const parms = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${parms.id}`)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, [parms]);

  return (
    <div>
      {posts.map(({ title, id, userId, body }) => (
        <Card key={id} title={title} body={body} userId={userId} />
      ))}
    </div>
  );
};


export default Posts;