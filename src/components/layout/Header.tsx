import React from 'react'
import { Button } from '../ui/button'

const Header = ({ setcreateArticle }: { setcreateArticle: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div><div className="flex justify-between items-center md:py-8 md:my-10 mx-10 border-b-2 pb-2">
            <h1 className='text-6xl font-extrabold'>MK Blog</h1>
            <Button className='cursor-pointer bg-violet-600 w-fit h-fit  text-gray-100 font-bold' onClick={() => { setcreateArticle(true) }}>Create Article</Button>

        </div></div>
    )
}

export default Header