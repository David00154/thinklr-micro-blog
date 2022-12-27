import { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FC, ReactElement } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiHeart2Line } from "react-icons/ri";
import { TfiBell } from "react-icons/tfi";
import { VscDiffAdded } from "react-icons/vsc";
import AddPostCard from "~/components/addPostCard";
import PostCard from "~/components/postCard";
// 


export default function Feed() {
    return (
        <div className="h-screen flex flex-col gap-5">
            <MobileNav />
            <FeedHead>
                <AddPostCard />
            </FeedHead>
            {/* <FeedHead>
                <Nav />
                <AddPostCard />
            </FeedHead> */}
            <div className="h-auto md:mb-0 md:mt-0 mt-[64px] mb-[64px] overflow-y-auto flex flex-col pb-3">
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
}


const FeedHead: FC<{ children: ReactElement[] | ReactElement }> = ({ children }) => {
    return (
        <header className="hidden md:flex flex-col sticky z-[99] top-0 left-0 right-0 bottom-0 bg-accents">
            {children}
        </header>
    )
}
// 
export const Nav: FC = () => {
    return (
        <nav className="items-center hidden md:flex py-6 justify-center gap-12 bg-accents">
            <Link to={"/"} className="btn border-none bg-transparent hover:bg-transparent">
                <HiHome size={25} className="text-primary" />
            </Link>
            <Link to={""} className="btn border-none bg-transparent hover:bg-transparent">
                <AiOutlineMessage size={25} className="text-quaternary" />
            </Link>
            <Link to={"/notifications"} className="btn border-none bg-transparent hover:bg-transparent">
                <div className="indicator">
                    <TfiBell size={25} className="text-quaternary nav" />
                    <span className="badge right-[5px] top-[6px] badge-xs h-[11px] badge-success indicator-item"></span>
                </div>
            </Link>
            <Link to={""} className="btn border-none bg-transparent hover:bg-transparent">
                <RiHeart2Line size={25} className="text-quaternary" />
            </Link>
        </nav>
    )
}

export const MobileNav: FC = () => {
    return (
        <div className="navbar md:hidden fixed z-[99] top-0 left-0 right-0 bg-secondary py-2">

            <div className="flex-1">
                <Link to={""} className="btn btn-ghost normal-case text-white text-opacity-80 font-medium text-[20px]">Thinklr
                    <span className="badge badge-xs bg-primary"></span></Link>
            </div>
            <div className="flex-none">
                <button className="btn px-2 bg-transparent border-none hover:bg-transparent text-white text-opacity-80">
                    <VscDiffAdded size={25} className="" />
                </button>
            </div>
            <div className="flex-none">
                <button className="btn px-2 bg-transparent border-none hover:bg-transparent text-white text-opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    )
}