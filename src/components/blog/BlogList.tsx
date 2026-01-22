import BlogCard from './BlogCard'
import type { Blog } from '../../types/blog';
import { BlogCardSkeleton } from '../layout/Loading';


const BlogList = ({ isPending, data, setDetailed }: { isPending:boolean, data: Blog[], setDetailed: React.Dispatch<React.SetStateAction<string>> }) => {

  if(isPending) return <BlogCardSkeleton />;
  return (
    <div className="flex flex-col gap-6   md:w-[27%]  justify-center items-center my-5">
      <strong className='text-4xl text-left'>Latest Articles</strong>
      <div className="w-full overflow-y-auto md:overflow-y-hidden">

        <div className="flex flex-row md:flex-col gap-6 w-100 md:w-full px-4 md:px-0">
          {data.map((blog) => {
            return (
              <BlogCard blog={blog} setDetailed={setDetailed} />

            )
          })}
        </div>
      </div>

    </div>
  )
}

export default BlogList;