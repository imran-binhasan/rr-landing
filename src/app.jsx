import Home from "./pages/home.jsx";
import { useSmoothScroll } from "./hooks/use-smooth-scroll.js";

export default function App() {
  useSmoothScroll();
  return (
    <div className="w-full overflow-x-hidden">
      <Home />
    </div>
  );
}
