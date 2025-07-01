import Continer from "../../Components/Custom/Continer"
import { usePeople } from "../../Hooks/usePeople"

const News = () => {
  const { people } = usePeople()

  return (
    <Continer>
      <div className="font-['Inter'] w-full flex flex-col md:flex-row flex-wrap gap-6 my-6 font-bold  border-slate-950/40 px-6 py-10 rounded-xl shadow-lg  animate-in fade-in zoom-in">
        {people.map((p) => (
          <div
            key={p.id}
            className="bg-gradient-to-tr from-[#111] to-[#000] w-full md:w-[48%] rounded-xl shadow-xl p-6 ring-1 ring-zinc-900 transition-transform duration-500 ease-in-out hover:scale-[1.01] hover:ring-slate-800/70 hover:z-10 active:scale-[0.98]"
          >
            {/* Person Name */}
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-950/30 rounded-full shadow w-fit mb-4">
              <span className="text-lg font-semibold text-white">{p.Full_Name}</span>
            </div>

            {/* News List */}
            <div className="flex flex-col gap-6">
              {p.news?.map((n) => (
                <div
                  key={n.id}
                  className="flex flex-col gap-3 bg-zinc-900/30 p-4 rounded-md shadow hover:shadow-lg hover:ring-1 hover:ring-zinc-700 transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm px-3 py-1 rounded bg-zinc-800 text-white font-semibold shadow-sm">
                      #{n.id}
                    </span>
                    <span className="text-xs bg-red-500/30 text-gray-200 px-2 py-1 rounded">
                      {n.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed text-justify">
                    {n.news}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Continer>
  )
}

export default News
