import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { AiFillPicture } from 'react-icons/ai'
import { RxVideo } from 'react-icons/rx'
import { BiPoll } from 'react-icons/bi'
import { IoCalendar } from 'react-icons/io5'
import { SlFeed } from 'react-icons/sl'
import { MdRssFeed } from 'react-icons/md'
// 
const AddPostCard = () => {
  return (
    <div className='bg-secondary p-5 rounded-2xl items-center'>
      <div className=" flex justify-between w-full gap-5">
        {/* Profile picture */}
        <div className="avatar h-full">
          <div className="w-[49px] rounded-2xl ring ring-accents/40 ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg" />
          </div>
        </div>
        {/* Input and add action */}
        <div className='items-center w-full max-w-xl h-full'>
          <div className='form-control w-full mb-4'>
            <input type="text" placeholder="Tell your friends about your thoughts..." className="input w-full bg-accents/40 placeholder:text-zinc-500 placeholder:text-[15.3px] placeholder:font-medium font-medium text-[15.3px] text-zinc-500 rounded-2xl py-3" />
          </div>
          <AddFeedActions>
            {/* <AddFeedActionsBtn Icon={AiFillPicture} text="Photo" icon_color='text-success' /> */}
            <AddFeedActionsBtn Icon={MdRssFeed} text="Feed" icon_color='text-orange-500' />
            <AddFeedActionsBtn Icon={RxVideo} text="Video" icon_color='text-blue-400' />
            <AddFeedActionsBtn Icon={BiPoll} text="Poll" icon_color='text-red-400' />
            <AddFeedActionsBtn Icon={IoCalendar} text="Schedule" icon_color='text-yellow-400' />
          </AddFeedActions>
        </div>
      </div>
    </div>
  )
}

export default AddPostCard


const AddFeedActions: FC<{ children: ReactNode[] | ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full items-center justify-between">
      {children}
    </div>
  )
}

const AddFeedActionsBtn: FC<{ text: string; Icon: IconType; icon_color: string; icon_size?: number; }> = ({ Icon, icon_color, text, icon_size = 20 }) => {
  return (
    <button className="btn btn-sm border-none bg-accents/40 hover:bg-accents/40 rounded-2xl text-center flex items-center gap-2 px-7 py-[9.5px] h-auto">
      <Icon size={icon_size} className={`${icon_color}`} />
      <span className=' text-[15px] inline-block capitalize font-medium text-quaternary '>{text}</span>
    </button>
  )
}
