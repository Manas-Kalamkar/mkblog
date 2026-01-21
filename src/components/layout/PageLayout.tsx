import { useQuery } from '@tanstack/react-query'
import type { Blog } from '../../types/blog';
import BlogList from '../blog/BlogList';
import BlogDetail from '../blog/BlogDetail';
import { useState } from 'react';
const PageLayout = () => {

const [detailed,setDetailed] = useState("1");

  const { data, isPending, error, isFetching } = useQuery<Blog[], Error>({
    queryKey: ["blogsData"],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:3001/blogs'
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }
      return await response.json();
    },
  });

  if (isPending) return "Loading..."

  if (error) return 'An error has occurred: ' + error?.message;

  return (
    <>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <div className='flex py-[2%]'>
      <BlogList data={data}  setDetailed={setDetailed} />
      <BlogDetail detailed={detailed} />
        
      </div>
    </>)
}

export default PageLayout