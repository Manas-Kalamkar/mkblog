import React from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Blog } from '../../types/blog'

const BlogDetail = ({ detailed }: {
  detailed: string
}) => {
  console.log(detailed)

  const { data: blog, error, isPending, isFetching } = useQuery<Blog, Error>({
    queryKey: ["blog", detailed],
    queryFn: async () => {
      const rep = await fetch(
        `http://localhost:3001/blogs/${detailed}`
      );
      if (!rep.ok) {
        console.log(rep.status)
        throw new Error(`Server error: ${rep.status}`)
      }
      return await rep.json();
    }
  });

  if (isPending) return "Loading";

  if (error) return 'An error has occurred: ' + error?.message;

  return (
    <div className='w-[72%] flex flex-col items-center mx-10 shadow-2xl border-shadow-2xl'>
      <img src={blog?.coverImage} alt={"cover image"} className='w-full h-200 object-cover rounded-t-2xl' />
      <div className="data flex flex-col text-left mx-15 my-15 gap-8">
        <div className="typeAndDate flex gap-4">
          <div className='uppercase font-bold text-violet-600'>{blog?.category.join(" • ")}</div>•
          <div className='lowercase'>{parseInt((blog?.date).split("T")[1].split(":")[0]) <= 7 ? 5:10} min read</div>
        </div>
        <div className="heading text-6xl font-extrabold">
          {blog?.title}
        </div>
        <button className='bg-violet-600 w-fit px-4 py-2 rounded-md text-gray-100 font-bold'>Share Article</button>
        <div className="details py-1 flex justify-around border-gray-50 rounded-md bg-gray-200 text-center">
          <div className='w-[33%] py-10 bg-gray-100'>
            <div className="category uppercase font-bold text-gray-500">Category</div>
            <div className="subheading font-bold text-xl ">{blog?.category.join(" & ")} </div>
          </div>
          <div className='w-[33%] py-10 bg-gray-100'>
            <div className="readTime uppercase font-bold text-gray-500">Read Time</div>
            <div className="subheading font-bold text-xl ">{parseInt((blog?.date).split("T")[1].split(":")[0]) <= 7 ? 5:10} Mins</div>
          </div>
          <div className='w-[33%] py-10 bg-gray-100'>
            <div className="date uppercase font-bold text-gray-500">Date</div>
            <div className="subheading font-bold text-xl ">{(blog?.date).split("T")[0]}</div>
          </div>
        </div>
        <div className="content text-2xl">
          {blog?.content}
        </div>
        <div className="tags"></div>
        {isFetching ? "Updating...":""}
      </div>
    </div>
  )
}

export default BlogDetail