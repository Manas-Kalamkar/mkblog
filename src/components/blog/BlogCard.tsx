import type { Blog } from '../../types/blog'
import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

const BlogCard = ({ blog, setDetailed }: {
  blog: Blog, setDetailed: React.Dispatch<React.SetStateAction<string>>
}) => {

  return (
    <Card className='flex flex-col gap-2.5 card border-2 border-gray-100 object-cover  px-8 py-4 cursor-pointer
  w-[85vw] sm:w-[70vw] md:w-full
  shrink-0' onClick={() => setDetailed(`${blog?.id}`)}>
      <div className='typeandDate text-gray-400 flex justify-between'>
        <CardAction className='uppercase font-bold text-[0.9rem]'>{blog?.category[0]}</CardAction>
        <div className='lowercase text-[0.8rem]'>{Math.floor((Date.now() - Date.parse(blog?.date)) / (1000 * 60 * 60 * 24 * 7))} weeks ago</div>
      </div>
      <CardTitle className='heading font-black text-2xl'>
        {blog?.title}
      </CardTitle>
      <CardDescription >
        {blog?.description}
      </CardDescription>
      <CardAction className="tags bg-gray-300 w-fit px-4 py-1 rounded-full text-[0.9rem]">
        {blog?.category[1] ?? blog?.category[0]}
      </CardAction>
    </Card>
  )
}

export default BlogCard