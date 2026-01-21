import BlogList from '../blog/BlogList';
import BlogDetail from '../blog/BlogDetail';
import { useState } from 'react';
import { useBlogs } from '../../hooks/useBlogs';
const PageLayout = () => {

  const [detailed, setDetailed] = useState("1");

  const { data, isPending, error, isFetching } = useBlogs();

  if (isPending) return "Loading..."

  if (error) return 'An error has occurred: ' + error?.message;

  return (
    <>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <div className='flex py-[2%]'>
        <BlogList data={data ?? []} setDetailed={setDetailed} />
        <BlogDetail detailed={detailed} />

      </div>
    </>)
}

export default PageLayout