import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import NotFound from "./pages/NotFound";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="relative w-full h-full">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
{
  /* <button
  className="p-4 text-red-500 bg-pink-300 "
  onClick={() => toast.success("error")}
>
  Click me
</button>

<button className="btn btn-outline">Click me</button> */
}
