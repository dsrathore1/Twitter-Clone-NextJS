import React from 'react'

const FollowBar = () => {
    return (
        <div className='w-[30%] px-6 py-3 hidden lg:block'>
            <div className="bg-neutral-800 rounded-xl py-4">
                <h2 className="text-white text-xl font-semibold px-3">Who to follow?</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {/* TODO USER LIST */}
                </div>
            </div>
        </div>
    )
}

export default FollowBar