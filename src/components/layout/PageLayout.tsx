import BlogList from '../blog/BlogList';
import BlogDetail from '../blog/BlogDetail';
import { useState } from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import CreateBlog from './CreateBlog';
import { Button } from '../ui/button';
import { BlogCardSkeleton } from './Loading';

const PageLayout = () => {

  const [createArticle, setcreateArticle] = useState(false)
  const [detailed, setDetailed] = useState("1");
  const { data, isPending, error, isFetching } = useBlogs();
  if (isPending) return <BlogCardSkeleton />
  if (error) return 'An error has occurred: ' + error?.message;



  return (
    <>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <div className='flex flex-col py-[2%]'>

        <div className="flex justify-between items-center mx-10 border-b-2 pb-2">
          <h1 className='text-6xl font-extrabold'>MK Blog</h1>
          <Button className='cursor-pointer bg-violet-600 w-fit h-fit  text-gray-100 font-bold' onClick={() => { setcreateArticle(true) }}>Create Article</Button>


        </div>

        <div className="flex flex-col md:flex-row md:py-[2%] gap-5">

          <BlogList data={data ?? []} setDetailed={setDetailed} />
          <BlogDetail detailed={detailed} />



          {createArticle && <CreateBlog setcreateArticle={setcreateArticle} />}



        </div>

      </div>
    </>)
}

export default PageLayout