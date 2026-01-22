import {
    Card,
    CardAction,
    CardTitle,
    CardDescription,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export const BlogDetailSkeleton = () => {
    return (
        <Card className="py-0 h-fit w-[72%] flex flex-col items-center mx-10 shadow-2xl">

            <Skeleton className="aspect-video w-full rounded-t-2xl" />

            <div className="flex flex-col text-left mx-15 my-15 gap-16 w-full">

                <CardAction className="flex gap-4 items-center">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-20" />
                </CardAction>

                <CardHeader className="flex flex-col gap-6">

                    <CardContent className="flex flex-row w-full justify-between items-start">
                        <Skeleton className="h-14 w-3/4" />
                        <Button disabled className="opacity-50">
                            Share Article
                        </Button>
                    </CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Category</TableHead>
                                <TableHead>Read Time</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Skeleton className="h-6 w-40" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-6 w-20" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-6 w-28" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-11/12" />
                    <Skeleton className="h-6 w-10/12" />
                    <Skeleton className="h-6 w-9/12" />
                </CardContent>

            </div>
        </Card>
    );
};



export const BlogCardSkeleton = () => {
    return (
        <Card className="flex flex-col gap-2.5 border-2 border-gray-100 w-[90%] px-8 py-4">

            {/* Category + date */}
            <div className="flex justify-between">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-3 w-20 rounded-md" />
            </div>

            {/* Title */}
            <CardTitle>
                <Skeleton className="h-7 w-3/4" />
            </CardTitle>

            {/* Description */}
            <CardDescription className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
            </CardDescription>

            {/* Tag */}
            <CardAction>
                <Skeleton className="h-6 w-24 rounded-full" />
            </CardAction>
        </Card>
    );
};

