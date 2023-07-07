import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  subMonths,
  isSameMonth,
} from "date-fns";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Calendar() {
  const [monthString, setMonthString] = useState(format(new Date(), "yyyy-MM"));
  const [direction, setDirection] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();
  const month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    if (isAnimating) return;
    const next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
    setDirection(1);
    setIsAnimating(true);
  }

  function previousMonth() {
    if (isAnimating) return;
    const previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
    setDirection(-1);
    setIsAnimating(true);
  }

  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
      <div className="flex h-[90vh] items-start pt-16 text-stone-900">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white overflow-hidden relative">
          <div className="py-8">
            <div className="flex flex-col justify-center rounded text-center">
              <motion.div
                animate={{ height: bounds.height > 0 ? bounds.height : null }}
              >
                <div ref={ref}>
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                    onExitComplete={() => setIsAnimating(false)}
                  >
                    <motion.div
                      key={monthString}
                      initial="enter"
                      animate="middle"
                      exit="exit"
                    >
                      <header className="relative flex justify-between px-8">
                        <motion.button
                          className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                          onClick={previousMonth}
                          variants={removeImediately}
                        >
                          <ChevronLeftIcon className="h-4 w-4" />
                        </motion.button>
                        <motion.p
                          className="absolute inset-0 flex items-center justify-center font-semibold"
                          variants={variants}
                          custom={direction}
                        >
                          {format(month, "MMMM yyyy")}
                        </motion.p>
                        <motion.button
                          className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                          onClick={nextMonth}
                          variants={removeImediately}
                        >
                          <ChevronRightIcon className="h-4 w-4" />
                        </motion.button>
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, white 10%, transparent 30%,  transparent 70%, white 90%)",
                          }}
                        ></div>
                      </header>
                      <motion.div
                        className="grid grid-cols-7 gap-y-6 mt-6 px-8"
                        variants={removeImediately}
                      >
                        <span className="font-medium text-stone-500">Su</span>
                        <span className="font-medium text-stone-500">Mo</span>
                        <span className="font-medium text-stone-500">Tu</span>
                        <span className="font-medium text-stone-500">We</span>
                        <span className="font-medium text-stone-500">Th</span>
                        <span className="font-medium text-stone-500">Fr</span>
                        <span className="font-medium text-stone-500">Sa</span>
                      </motion.div>
                      <motion.div
                        className="grid grid-cols-7 gap-y-6 mt-6 px-8"
                        custom={direction}
                        variants={variants}
                      >
                        {days.map((day) => (
                          <span
                            key={format(day, "yyyy-MM-dd")}
                            className={`${
                              isSameMonth(day, month) ? "" : "text-stone-300"
                            } font-semibold`}
                          >
                            {format(day, "d")}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

let variants = {
  enter: (direction) => {
    return { x: `${100 * direction}%`, opacity: 0 };
  },
  middle: { x: "0%", opacity: 1 },
  exit: (direction) => {
    return { x: `${-100 * direction}%`, opacity: 0 };
  },
};

let removeImediately = {
  exit: { visibility: "hidden" },
};
