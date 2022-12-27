import { Link } from "@remix-run/react"
import { AiOutlineMessage, AiOutlineSend } from "react-icons/ai"
import { RiAttachment2, RiHeart2Fill } from "react-icons/ri"
import { RxDotsVertical } from "react-icons/rx"
import { ImFilePicture } from "react-icons/im"
// import { GrSend } from "react-icons/ai"

const PostCard = () => {
    return (
        <Link to={""} className="md:p-5 p-4 mt-5 bg-secondary md:rounded-2xl rounded-lg h-auto">
            {/* Head */}
            <div className="flex gap-6 w-full mb-2">
                {/* Profile Picture */}
                <div className="avatar h-full">
                    <div className="w-[47px] md:w-[50px] rounded-2xl ring ring-accents/40 ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                {/* Meta Data */}
                <div className="w-full">
                    {/* Username */}
                    <div className="flex justify-between h-auto">
                        <div>
                            <Link to={""} className='text-[15px] md:text-[15.5px] mb-2 text-zinc-400 btn p-0 border-none bg-transparent hover:bg-transparent h-auto min-h-[auto] font-medium lowercase'>@lobbey</Link>
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <h2 className='text-white text-[16.5px] md:text-[17px] text-opacity-80  font-medium mb-1'>Kali Lubah</h2>
                                    <span className="badge bg-primary w-[.5rem] h-[.5rem] p-0"></span>
                                    <p className="text-primary text-[13.5px] md:text-sm text-opacity-80">1 hour ago</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn hover:bg-transparent bg-transparent border-none p-0">
                            <RxDotsVertical size={17} className="text-zinc-400 mb-3" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Body */}
            <div className="md:mb-4 mb-5">
                <p className="md:text-[14.6px] text-[13.7px] font-normal text-left text-white text-opacity-80 w-full max-w-none pb-3 md:mb-0 mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolorem ab expedita commodi, ullam, praesentium facere id officia a laboriosam odio voluptatem earum nobis consequatur natus nesciunt odit! Quaerat, magni.</p>
                <div className="w-full rounded-sm">
                    <picture className="w-full">
                        <img className="w-full h-full  max-h-fit" src="https://images.unsplash.com/photo-1665376085803-547f6bf43cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Blah" />
                    </picture>
                </div>
            </div>
            {/* Interraction */}
            <div className="flex w-full items-center justify-between md:mb-0 mb-4 ">
                <div className="flex justify-between items-center gap-6">
                    <button className="btn p-0 border-none bg-transparent hover:bg-transparent h-auto min-h-[auto]">
                        <RiHeart2Fill size={24} className="text-red-500" />
                    </button>
                    <button className="btn p-0 border-none bg-transparent hover:bg-transparent h-auto min-h-[auto]">
                        <AiOutlineMessage size={24} className="text-zinc-400" />
                    </button>
                    <button className="btn p-0 border-none bg-transparent hover:bg-transparent h-auto min-h-[auto]">
                        <AiOutlineSend size={24} className="text-zinc-400" />
                    </button>
                </div>
                <button className="btn p-0 border-none bg-primary hover:bg-primary text-accents h-[auto] min-h-[auto] text-sm font-medium px-2 py-1" style={{ textTransform: "none" }}>
                    Hire me
                </button>
            </div>
            <div className="divider before:bg-accents/25 after:bg-accents/25 md:flex hidden"></div>
            {/* Comment Box */}
            <div className="flex justify-between w-full gap-4">
                <div className="avatar h-full hidden md:inline-flex">
                    <div className="w-[46.5px] rounded-2xl ring ring-accents/40 ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg" />
                    </div>
                </div>
                {/*  */}
                <div className='max-w-xl w-full flex items-center bg-accents rounded-2xl px-5'>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Tell your friends about your thoughts..." className="input w-full bg-transparent placeholder:text-zinc-500 placeholder:text-[15.3px] placeholder:font-medium font-medium text-[15.3px] text-zinc-500 rounded-2xl py-3 focus:outline-none" />
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="btn border-none bg-transparent hover:bg-transparent px-0 h-auto min-h-[auto]">
                            <RiAttachment2 size={23} className="text-zinc-400" />
                        </button>
                        <button className="btn border-none bg-transparent hover:bg-transparent px-0 h-auto min-h-[auto]">

                            <ImFilePicture size={20} className="text-zinc-400" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard