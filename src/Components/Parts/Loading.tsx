const Loading = () => {
  return (
    <div className="flex-1 absolute w-full h-screen top-0 left-0  bg-gradient-to-b from-slate-700 to-slate-950  flex items-center justify-center">
        <div className="text-white text-2xl animate-ping">
            Loading ....
        </div>
    </div>
  )
}

export default Loading