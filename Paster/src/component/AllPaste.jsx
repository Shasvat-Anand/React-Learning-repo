 import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste, resetAllpaste  } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllPaste = () => {
  const allpastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredSort = allpastes
    .filter((paste) =>
      paste.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleRemove = (pasteId) => {
    dispatch(removeFromPaste(pasteId));
  };

  const handleRemoveAll = () => {
    if (allpastes.length === 0) return;
    if (window.confirm("Delete all pastes? This cannot be undone.")) {
      dispatch(resetAllpaste());
      toast.success("All pastes removed");
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Copy failed");
    }
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="px-4 py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h1>
            All <span className="text-purple-400">Pastes</span>
          </h1>

          <div className="flex w-full max-w-xl items-center gap-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4
                           text-slate-100 placeholder-slate-500 outline-none transition
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              onClick={handleRemoveAll}
              className="shrink-0 cursor-pointer rounded-xl bg-rose-600/20 px-5 py-3 text-sm font-medium
                         text-rose-400 transition hover:bg-rose-600 hover:text-white"
            >
              Remove All
            </button>
          </div>
        </div>

        {/* Paste list */}
        <div className="flex flex-col gap-5">
          {filteredSort.length > 0 ? (
            filteredSort.map((paste) => (
              <div
                key={paste._id}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg
                           transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/60
                           hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-left text-slate-50">{paste.title}</h2>
                  <span className="shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    {formatDate(paste.createdAt)}
                  </span>
                </div>

                <p className="mt-3 line-clamp-3 whitespace-pre-wrap text-left text-slate-400">
                  {paste.content}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                  <Link
                    to={`/?pasteId=${paste._id}`}
                    className="rounded-lg bg-emerald-600/20 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-600 hover:text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleRemove(paste._id)}
                    className="cursor-pointer rounded-lg bg-rose-600/20 px-4 py-2 text-sm font-medium text-rose-400 transition hover:bg-rose-600 hover:text-white"
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => handleCopy(paste.content)}
                    className="cursor-pointer rounded-lg bg-sky-600/20 px-4 py-2 text-sm font-medium text-sky-400 transition hover:bg-sky-600 hover:text-white"
                  >
                    Copy
                  </button>

                  <Link
                    to={`/paste/${paste._id}`}
                    className="rounded-lg bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-400 transition hover:bg-purple-600 hover:text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 py-16 text-center text-slate-500">
              No pastes found
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AllPaste;