import BlogList from '../blog/BlogList';
import BlogDetail from '../blog/BlogDetail';
import React, { useState } from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import CreateBlog from './CreateBlog';
import { Loading } from './Loading';

const PageLayout = ({ createArticle, setcreateArticle }: { createArticle: boolean, setcreateArticle: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const [detailed, setDetailed] = useState("1");
  const { data, isPending, error, isFetching } = useBlogs();
  if (error) console.log('An error has occurred: ' + error?.message);
  


  return (
    <>
      <div>{isFetching ? <Loading /> : ''}</div>
      <div className='flex flex-col py-[2%]'>

        <div className="flex flex-col md:flex-row md:py-[2%] gap-5">

          <BlogList isPending={isPending} data={data ?? []} setDetailed={setDetailed} />
          <BlogDetail detailed={detailed} />



          {createArticle && <CreateBlog setcreateArticle={setcreateArticle} />}



        </div>

      </div>
    </>)
}

export default PageLayout