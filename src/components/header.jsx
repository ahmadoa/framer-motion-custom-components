import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-screen h-[10%] py-3 flex flex-row items-center justify-center">
      <div className="w-fit flex flex-row gap-5">
        <Link
          className={`${
            pathname == "/" ? "" : "hover:text-white/50"
          } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline relative`}
          to={"/"}
        >
          {pathname == "/" && (
            <motion.div
              layoutId="active-pill"
              style={{
                borderRadius: 999,
              }}
              className="bg-white absolute inset-0"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">Multistep</span>
        </Link>
        <Link
          className={`${
            pathname == "/email" ? "" : "hover:text-white/50"
          } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline relative`}
          to={"/email"}
        >
          {pathname == "/email" && (
            <motion.div
              layoutId="active-pill"
              style={{
                borderRadius: 999,
              }}
              className="bg-white absolute inset-0"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">Email</span>
        </Link>
        <Link
          className={`${
            pathname == "/carousel" ? "" : "hover:text-white/50"
          } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline relative`}
          to={"/carousel"}
        >
          {pathname == "/carousel" && (
            <motion.div
              layoutId="active-pill"
              style={{
                borderRadius: 999,
              }}
              className="bg-white absolute inset-0"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">Carousel</span>
        </Link>
        <Link
          className={`${
            pathname == "/resizable_panel" ? "" : "hover:text-white/50"
          } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline relative`}
          to={"/resizable_panel"}
        >
          {pathname == "/resizable_panel" && (
            <motion.div
              layoutId="active-pill"
              style={{
                borderRadius: 999,
              }}
              className="bg-white absolute inset-0"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">Resizable</span>
        </Link>
        <Link
          className={`${
            pathname == "/calendar" ? "" : "hover:text-white/50"
          } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline relative`}
          to={"/calendar"}
        >
          {pathname == "/calendar" && (
            <motion.div
              layoutId="active-pill"
              style={{
                borderRadius: 999,
              }}
              className="bg-white absolute inset-0"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">Calendar</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
