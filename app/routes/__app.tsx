import { Link, NavLink, Outlet } from '@remix-run/react'
import { FC, ReactElement, useState } from 'react'
import { IconType } from 'react-icons'
import { AiFillMessage, AiOutlineMessage } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiHome, HiOutlineHome } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri'
import { TfiBell } from 'react-icons/tfi'
import CommunityCards from '~/components/communityCard'
import TrendingCard from '~/components/trendingCard'
import { Nav } from './__app/feed'

const __app = () => {
    return (
        <>
            <main className='mx-auto md:grid grid-cols-9 h-screen px-4'>
                <section className='h-screen hidden md:flex flex-col col-span-2'>
                    <header className='mb-3 py-8'>

                    </header>
                    <TrendingCard />
                </section>
                <section className='col-span-5 md:px-4 md:mx-0 mx-auto'>
                    <Nav />
                    <Outlet />
                    <BottomNav />
                </section>
                <section className='h-screen hidden md:flex flex-col gap-6 col-span-2 overflow-auto'>
                    <header className=' py-6 sticky z-[99] top-0 left-0 right-0 bottom-0 bg-accents'>
                        <div className="form-control px-2">
                            <input type="text" placeholder="# Explore" className="input h-[2.5rem] bg-secondary/70 w-full max-w-xs placeholder:text-zinc-500 placeholder:text-[15.3px] placeholder:font-medium font-medium text-[15.3px] text-zinc-500 " />
                        </div>
                    </header>
                    <ProfileCard />
                    <CommunityCards />
                </section>
            </main>
        </>
    )
}

export default __app

const ProfileCard: FC = () => {
    return (
        <div className='card w-full bg-secondary'>
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body pb-1 pt-4 px-4">
                <div className='flex flex-row w-full justify-between mb-3'>
                    <div className="avatar">
                        <div className="w-[50px] rounded-2xl ring ring-accents/40 ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/tailwind-css-component-profile-1@94w.jpg" />
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-white text-opacity-80 text-[15.5px] font-medium'>1984</h3>
                        <p className='inline-block text-[13.5px] text-zinc-400'>Followers</p>
                    </div>
                    <div>
                        <h3 className='text-white text-opacity-80 text-[15.5px] font-medium'>1002</h3>
                        <p className='inline-block text-[13.5px] text-zinc-400'>Following</p>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-white text-[17px] text-opacity-80  font-medium mb-1'>Kali Lubah</h2>
                    <p className='text-sm text-zinc-400 mb-3'>@jannah</p>
                    <p className='text-[14.5px] font-normal text-left text-white text-opacity-80 w-full line-clamp-3 max-w-none'>Hello, I'm a backend programmer. Opened to new projects</p>
                </div>
            </div>
            <div className="divider px-4 bg-accents"></div>
            <div className="card-actions px-4 mb-5 w-full">
                <Link to={""} className='btn text-[14px] font-medium capitalize w-full bg-accents/40 hover:bg-accents/40 border-none h-[2.6rem] min-h-[2.6rem] ext-sm text-zinc-400'>My Profile</Link>
            </div>
        </div>
    )
}

const BottomNav: FC = () => {
    type LinksType = {
        url?: string;
        icon: IconType;
        hasBadge?: boolean;
        activeIcon: IconType
    }
    const [links, _] = useState<LinksType[]>(
        [
            {
                activeIcon: HiHome,
                icon: HiOutlineHome,
                url: "/feed"
            },
            {
                icon: FiSearch,
                url: "/search",
                activeIcon: IoSearch
            },
            {
                icon: AiOutlineMessage,
                url: "",
                activeIcon: AiFillMessage
            },
            {
                icon: TfiBell,
                url: "/notifications",
                activeIcon: TfiBell,
                hasBadge: true
            },
            {
                icon: RiHeart2Line,
                url: "/followers",
                activeIcon: RiHeart2Fill
            },
        ]
    )
    const RenderIconLinkWithBadge: FC<{ fallBack: ReactElement; isActive: boolean; hasBadge: boolean; icon: IconType; activeIcon: IconType; }> = ({ hasBadge, isActive, fallBack: FallBack, icon: Icon, activeIcon: ActiveIcon }) => {
        return (
            <>
                {hasBadge ? (
                    <div className="indicator">
                        {isActive ? (
                            <ActiveIcon size={25} className="text-primary nav" />
                        ) : (
                            <Icon size={25} className="text-quaternary nav" />
                        )}
                        <span className="badge right-[5px] top-[6px] badge-xs  badge-success indicator-item"></span>
                    </div>
                ) : (
                    FallBack
                )}
            </>
        )
    }
    return (
        <div className="btm-nav md:hidden bg-secondary">
            {links.map(({ icon: Icon, url = "", activeIcon: ActiveIcon, hasBadge = false }, i) => {
                return (
                    <button key={i}>
                        <NavLink to={url} className="btn border-none bg-transparent hover:bg-transparent">
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <RenderIconLinkWithBadge
                                            fallBack={<ActiveIcon size={25} className={"text-primary"} />}
                                            hasBadge={hasBadge}
                                            icon={Icon}
                                            activeIcon={ActiveIcon}
                                            isActive={isActive} />
                                    ) : (

                                        <RenderIconLinkWithBadge
                                            fallBack={<Icon size={25} className={"text-quaternary"
                                            } />}
                                            activeIcon={ActiveIcon}
                                            hasBadge={hasBadge}
                                            icon={Icon}
                                            isActive={isActive} />
                                    )}
                                </>
                            )}
                        </NavLink>
                    </button>
                )
            })}
        </div>
    )
}