import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { set } from "date-fns";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // so as to prevent the navigation to the note details page

    if (!window.confirm("Are you sure you want to delete this note")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); //It will get rid of the deleted note from the array and updated the Ui immediately
      toast.success("Note deleted successfully", {
        duration: 4000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the note");
    }
  };
  return (
    <>
      <Link
        to={`/notes/${note._id}`}
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
      >
        <div className="card-body">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <span className="text-sm text-base-content/60">
            <p> Created at: {formatDate(new Date(note.createdAt))}</p>
            <p>Updated at: {formatDate(new Date(note.updatedAt))}</p>
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NoteCard;
