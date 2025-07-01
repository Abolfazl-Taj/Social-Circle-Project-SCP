const Loading = () => {
  return (
  <div className="flex-1 absolute w-full h-screen top-0 left-0  bg-gradient-to-b from-red-950 via-0% to-[#000]  flex items-center justify-center">
        <div className="text-white text-2xl animate-ping">
            Loading ....
        </div>
    </div>
  )
}

export default Loading