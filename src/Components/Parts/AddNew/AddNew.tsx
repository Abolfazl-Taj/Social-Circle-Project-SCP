import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import CreateInput from "../../Custom/CreateInput";
import { motion } from "framer-motion";
interface NewsItem {
    id: number;
    news: string;
    date: number | string; // You can change this to `string` if you want a full date format
}
const AddNew = ({ formAction }) => {

    const AddNewBtn = useRef<HTMLButtonElement>(null);
    const AddNewtextarea = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isadding, setIsadding] = useState(false)
    const [newtext, SetNewText] = useState("")
    const addnewtext = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        SetNewText(e.target.value)
    }
    const addNewsHandler = () => {
        const date = new Date();
        const formattedDate = date.toISOString().split("T")[0]; // Get the full date in YYYY-MM-DD format
        const [_year, month, day] = formattedDate.split("-"); // Split into year, month, and day
        setIsadding(false);
        setNews([
            ...news,
            {
                id: news.length + 1,
                news: newtext,
                date: `${month}-${day}`, // Use the template literal here correctly
            },
        ]);

    }
    useEffect(() => {
        formAction({
            target: {
                name: "news",
                value: news
            }
        })
    }, [news])


    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                SetNewText(AddNewtextarea?.current?.value)
                setTimeout(() => {
                    AddNewBtn?.current?.click();
                }, 0);
            }
        }
        document.addEventListener("keydown", handle)
        return () => document.removeEventListener("keydown", handle)

    }, [AddNewtextarea])



    return (
        <div className="w-full bg-gradient-to-l from-slate-950/70 to-slate-950/40 px-8 py-3 rounded border border-slate-900 shadow shadow-slate-800 my-6 gap-5">
            <h2 className="text-white text-2xl border-b border-slate-800 py-3 font-bold">Add What's Going on with them</h2>


            {isadding ? (
                <div className="my-3">
                    <CreateInput onblur={addnewtext} newref={AddNewtextarea} labelname="Whats Going on 🤔" lableclassName="font-bold text-white" inputtype="textarea" name="new" />
                    <div className="flex items-center justify-around">
                        <button ref={AddNewBtn} type="button" onClick={addNewsHandler} className="font-bold my-1 bg-green-600 hover:bg-green-700 transition-all px-5 py-1 text-white rounded w-24">Add</button>
                        <button type="button" onClick={() => setIsadding(false)} className="font-bold my-1 bg-red-600 hover:bg-red-700 transition-all px-5 py-1 text-white rounded w-24">Cancel</button>
                    </div>
                </div>
            ) : (<button
                className="px-6 py-3 gap-2 rounded-full bg-slate-600 text-white hover:bg-blue-600 flex items-center justify-between group font-bold my-5 hover:scale-105 transition-all duration-500 ease-in-out"
                type="button"
                onClick={() => setIsadding(!isadding)}
            >
                <PlusIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                Add News
            </button>)}
            {
                news.length > 0 && <div>
                    <ul>
                        {news.map((item) => (
                            <motion.li
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                key={item.id} className="bg-blue-950 hover:bg-slate-800 border-b py-1 px-3">
                                <span className="px-4 py-2 text-center border-r w-1/12">{item.id}</span>
                                <span className="px-4 py-2 text-center border-r w-2/12">{item.date}</span>
                                <span className="px-4 py-2 w-9/12">{item.news}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            }
        </div >
    );
};

export default AddNew;
