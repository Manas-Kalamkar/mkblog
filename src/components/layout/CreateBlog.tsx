import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postBlog } from '../../api/api';
import type { postBlogInterface } from '../../types/blog';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const CreateBlog = ({ setcreateArticle }: { setcreateArticle: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: postBlog,

        onSuccess: () => {

            queryClient.invalidateQueries({ queryKey: ['blogsData'] });
            setcreateArticle(false);
        }
    });

    const createBlog = (data: postBlogInterface) => {
        mutation.mutate(data)
    }



    return (
        <Dialog open onOpenChange={setcreateArticle}>
            <DialogContent >

                {/* Header */}
                <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                        Create New Article
                    </DialogTitle>

                </DialogHeader>

                {/* Form */}
                <form className="mt-6 space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();

                        const formData = new FormData(e.currentTarget);

                        const title: string = formData.get("title") as string;
                        const description: string = formData.get("description") as string;
                        const category: string[] = [(formData.get("category") as string).toUpperCase()];
                        const date: string = new Date(formData.get("date") as string).toISOString();
                        const coverImage: string = formData.get("coverImage") as string;
                        const content: string = formData.get("content") as string;
                        createBlog({
                            title,
                            description,
                            category,
                            date,
                            coverImage,
                            content,
                        });
                    }}
                >

                    <div>
                        <label className="block text-sm font-semibold text-gray-600">
                            Author Name
                        </label>
                        <Input
                            required
                            type="text"
                            name='name'
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600">
                            Article Title
                        </label>
                        <Input
                            required
                            type="text"
                            name='title'
                            placeholder="Enter article title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600">
                            Short Description
                        </label>
                        <Input
                            required
                            type="text"
                            name='description'
                            placeholder="Brief summary"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600">
                                Category
                            </label>
                            <Input
                                required
                                type="text"
                                name='category'
                                placeholder="React, JS, etc."
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600">
                                Date
                            </label>
                            <Input
                                required
                                type="date"
                                name='date'
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600">
                            Cover Image
                        </label>
                        <Input
                            required
                            type="text"
                            name='coverImage'
                            placeholder='URL'
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600">
                            Content
                        </label>
                        <Textarea
                            rows={5}
                            cols={50}
                            name='content'
                            placeholder="Write your article content here..."

                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Button
                            type="button"
                            onClick={() => setcreateArticle(false)}
                            className="rounded-lg px-4 py-2 text-gray-200 hover:bg-gray-100"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="rounded-lg bg-violet-600 px-6 py-2 font-semibold text-white hover:bg-violet-700"
                        >
                            Publish
                        </Button>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateBlog