import { FC, ReactNode } from "react"
import { CiSearch } from "react-icons/ci"
import { VscDiffAdded } from "react-icons/vsc"
const CommunityCards: FC = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between w-full items-center mb-1">
                <h1 className="text-white text-opacity-80 text-[17.5px]">Communities</h1>
                <div className="flex items-center">
                    <button className="btn bg-transparent border-none hover:bg-transparent px-3">
                        <CiSearch size={23} className="text-zinc-400" />
                    </button>
                    <button className="btn bg-transparent border-none hover:bg-transparent px-3">
                        <VscDiffAdded size={23} className="text-zinc-400" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-full px-2 pb-2 h-full overflow-y-auto">
                {/* Card */}
                <CommunityCard imgUrl="https://images.unsplash.com/photo-1672002759660-93f177240b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" title="Japa jumpers" />
                <CommunityCard imgUrl="https://images.unsplash.com/photo-1665148334401-8541c471f67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" title="Teen weevers" />
                <CommunityCard imgUrl="https://images.unsplash.com/photo-1665712638676-ff7045551805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="The red blues" />
                <CommunityCard imgUrl="https://images.unsplash.com/photo-1665070122183-7811591250bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="Parrisetr time flex" />
            </div>
        </div>
    )
}

export default CommunityCards

const CommunityCard: FC<{ title: string; imgUrl: string; }> = ({ imgUrl, title }) => {
    return (
        <div className="flex items-center  gap-4">
            <div className="avatar">
                <div className="w-[50px] rounded-2xl ring ring-accents/40 ring-offset-base-100 ring-offset-2">
                    <img src={imgUrl} />
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="text-white mb-1 text-opacity-80 text-[15.8px]">{title}</h4>
                <p className="text-sm font-medium inline-flex items-center text-zinc-400 gap-2">
                    <span className="badge badge-warning w-[.6rem] h-[.6rem] p-0"></span>
                    32 of your friends are in
                </p>
            </div>
        </div>)
}