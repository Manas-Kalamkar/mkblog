import BlogCard from './BlogCard'
import type { Blog } from '../../types/blog';

const BlogList = ({ data, setDetailed }: { data: Blog[],  setDetailed: React.Dispatch<React.SetStateAction<string>> }) => {

  return (
    <div className='flex flex-col gap-6 w-[27%]  align-middle center items-center '>
      <strong className='text-4xl text-left'>Latest Articles</strong>
      {data.map((blog) => {
        return (
          <BlogCard blog={blog} setDetailed={setDetailed} />

        )
      })}
    </div>
  )
}

export default BlogList;