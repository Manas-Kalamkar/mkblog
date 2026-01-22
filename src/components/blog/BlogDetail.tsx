import { useBlog } from '../../hooks/useBlogs'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BlogDetailSkeleton } from '../layout/Loading';

const BlogDetail = ({ detailed }: {
  detailed: string
}) => {
  console.log(detailed)

  const { data: blog, error, isPending, isFetching } = useBlog(detailed);

  if (isPending) return <BlogDetailSkeleton />;

  if (error) return 'An error has occurred: ' + error?.message;

  return (
    <Card className='py-0  md:h-fit  flex flex-col justify-center items-center md:mx-10 shadow-2xl w-screen'>
      <img src={blog?.coverImage} alt={"cover image"} className='w-fit md:w-full md:h-200 md:object-cover rounded-t-2xl' />

      <div className="data flex flex-col  mx:-2  md:mx-15 my-15 gap-8 lg:gap-16">
        <CardAction className="typeAndDate flex gap-4 text-center m-auto">
          <div className='uppercase font-bold text-violet-600'>{blog?.category.join(" • ")}</div>•
          <div className='lowercase'>{parseInt((blog?.date!).split("T")[1].split(":")[0]) <= 7 ? 5 : 10} min read</div>
        </CardAction>

        <CardHeader className='flex flex-col gap-4'>
          <CardContent className='flex flex-row w-full justify-between'>
            <CardTitle className="heading text-2xl md:text-6xl text-left font-extrabold">
              {blog?.title}
            </CardTitle>
            <CardAction>
              <Button className='cursor-pointer w-fit h-fit  text-gray-100 font-bold' >Share Article</Button>
            </CardAction>
          </CardContent>



          <Table>
            <TableHeader >
              <TableRow>
                <TableHead className="category uppercase font-bold text-gray-500">Category</TableHead>
                <TableHead className="readTime uppercase font-bold text-gray-500">Read Time</TableHead>
                <TableHead className="date uppercase font-bold text-gray-500">Date</TableHead>
              </TableRow>

            </TableHeader>
            <TableBody>

              <TableRow>
                <TableCell className="text-[14px] font-bold text-xl ">{blog?.category.join(" & ")} </TableCell>
                <TableCell className="text-[14px] font-bold text-xl ">{parseInt((blog?.date!).split("T")[1].split(":")[0]) <= 7 ? 5 : 10} Mins</TableCell>
                <TableCell className="text-[14px] font-bold text-xl ">{(blog?.date!).split("T")[0]}</TableCell>

              </TableRow>
            </TableBody>


          </Table>
        </CardHeader>
        <CardContent className="text-left  text-md md:text-2xl">
          {blog?.content}
        </CardContent>
        <div className="tags"></div>
        {isFetching ? "Updating..." : ""}
      </div>
    </Card >
  )
}

export default BlogDetail