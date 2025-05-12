import { PlusIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";

interface NewsItem {
    id: number;
    news: string;
    date: string;
}

const AddNew = ({ formAction }) => {
    // Refs
    const AddNewBtn = useRef<HTMLButtonElement>(null);
    const CancelNewBtn = useRef<HTMLButtonElement>(null);
    const AddNewtextarea = useRef<HTMLTextAreaElement>(null);
    const EditTextarea = useRef<HTMLTextAreaElement>(null);

    // State
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [newText, setNewText] = useState("");
    const [editText, setEditText] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    // Handlers
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewText(e.target.value);
    };

    const handleEditTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditText(e.target.value);
    };

    const addNewsHandler = () => {
        if (!newText.trim()) return;

        const newItem = {
            id: Date.now(),
            news: newText.trim(),
            date: new Date().toISOString(),
        };

        setNews([...news, newItem]);
        setNewText("");
        setIsAdding(false);
    };

    const startEditing = (id: number, currentText: string) => {
        setIsEditing(id);
        setEditText(currentText);
        setEditingId(id);
    };

    const saveEditHandler = () => {
        if (!editText.trim() || editingId === null) return;

        setNews(news.map(item =>
            item.id === editingId
                ? { ...item, news: editText.trim(), date: new Date().toISOString() }
                : item
        ));

        cancelEditHandler();
    };

    const cancelEditHandler = () => {
        setIsEditing(null);
        setEditText("");
        setEditingId(null);
    };

    const deleteNewsHandler = (id: number) => {
        setNews(news.filter(item => item.id !== id));
    };

    // Effects
    useEffect(() => {
        formAction({
            target: {
                name: "news",
                value: news
            }
        });
    }, [news]);

    useEffect(() => {
        if (isAdding) AddNewtextarea.current?.focus();
        if (isEditing !== null) EditTextarea.current?.focus();
    }, [isAdding, isEditing]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (isAdding) addNewsHandler();
                if (isEditing !== null) saveEditHandler();
            } else if (e.key === "Escape") {
                if (isAdding) setIsAdding(false);
                if (isEditing !== null) cancelEditHandler();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isAdding, isEditing, newText, editText]);

    // Date formatting
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="w-full bg-gradient-to-l from-slate-950/70 to-slate-950/40 px-6 py-4 rounded-xl border border-slate-800 shadow-lg my-6">
            <h2 className="text-white text-2xl border-b border-slate-800 pb-3 font-bold mb-4">
                ✨ What's Happening?
            </h2>

            {/* Add News Section */}
            <AnimatePresence>
                {isAdding ? (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden my-3"
                    >
                        <div className="space-y-4">
                            <textarea
                                ref={AddNewtextarea}
                                value={newText}
                                onChange={handleTextChange}
                                placeholder="Share what's new... 💭"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          placeholder-slate-400 resize-none min-h-[100px]"
                            />

                            <div className="flex items-center justify-end gap-3">
                                <button
                                    ref={CancelNewBtn}
                                    onClick={() => setIsAdding(false)}
                                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg 
                            transition-all duration-200 font-medium flex items-center gap-2"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                    Cancel
                                </button>
                                <button
                                    ref={AddNewBtn}
                                    onClick={addNewsHandler}
                                    disabled={!newText.trim()}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 
                            text-white rounded-lg transition-all duration-200 font-medium flex items-center gap-2
                            disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <CheckIcon className="h-5 w-5" />
                                    Add
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsAdding(true)}
                        className="px-6 py-3 gap-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 
                      text-white hover:from-blue-600 hover:to-indigo-600 flex items-center justify-center 
                      font-bold my-3 transition-all duration-300 shadow-md w-full max-w-md mx-auto"
                    >
                        <PlusIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-180" />
                        Add New Update
                    </motion.button>
                )}
            </AnimatePresence>

            {/* News List */}
            {news.length > 0 && (
                <div className="mt-6">
                    <ul className="space-y-3">
                        <AnimatePresence>
                            {news.map((item) => (
                                <motion.li
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                    whileHover={{
                                        scale: 1.01,
                                        boxShadow: "0 4px 12px -2px rgba(0, 0, 100, 0.15)",
                                    }}
                                    className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                            hover:from-slate-700/90 hover:to-slate-800/90 backdrop-blur-sm rounded-xl 
                            p-4 pr-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-slate-700/50 
                            shadow-sm transition-all"
                                >
                                    {isEditing === item.id ? (
                                        // Edit Mode
                                        <div className="w-full space-y-3">
                                            <textarea
                                                ref={EditTextarea}
                                                value={editText}
                                                onChange={handleEditTextChange}
                                                className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white 
                                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                  placeholder-slate-400 resize-none min-h-[80px]"
                                            />
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={cancelEditHandler}
                                                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded-lg 
                                    transition-all duration-200 font-medium flex items-center gap-1 text-sm"
                                                >
                                                    <XMarkIcon className="h-4 w-4" />
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={saveEditHandler}
                                                    disabled={!editText.trim()}
                                                    className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 
                                    text-white rounded-lg transition-all duration-200 font-medium flex items-center gap-1 text-sm
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <CheckIcon className="h-4 w-4" />
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        // View Mode
                                        <>
                                            {/* ID Badge */}
                                            <div className="flex-shrink-0 flex flex-col items-center">
                                                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-900/40 
                                       group-hover:bg-blue-800/50 text-blue-200 font-bold text-sm transition-colors 
                                       shadow-inner mb-1">
                                                    #{item.id.toString().slice(-3)}
                                                </span>
                                                <span className="text-xs text-slate-400">
                                                    {formatDate(item.date)}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-slate-100 font-medium line-clamp-3 group-hover:line-clamp-none 
                                    transition-all duration-200">
                                                    {item.news}
                                                </p>
                                            </div>

                                            {/* Actions */}
                                            <motion.div
                                                className="absolute right-3 top-3 sm:top-1/2 sm:-translate-y-1/2 flex gap-2"
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <motion.button
                                                    onClick={() => startEditing(item.id, item.news)}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    type="button"
                                                    className="p-2 rounded-full hover:bg-blue-600/30 text-blue-200 hover:text-blue-100 
                                    transition-colors"
                                                    aria-label="Edit"
                                                >
                                                    <RiPencilFill className="text-lg" />
                                                </motion.button>

                                                <motion.button
                                                    onClick={() => deleteNewsHandler(item.id)}
                                                    whileHover={{ scale: 1.1 }}
                                                    type="button"
                                                    whileTap={{
                                                        scale: 0.85,
                                                        rotate: -10,
                                                        backgroundColor: "rgba(239, 68, 68, 0.3)"
                                                    }}
                                                    className="p-2 rounded-full hover:bg-red-900/30 text-red-300 hover:text-red-200 
                                    transition-colors"
                                                    aria-label="Delete"
                                                >
                                                    <RiDeleteBin2Fill className="text-xl" />
                                                </motion.button>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddNew;