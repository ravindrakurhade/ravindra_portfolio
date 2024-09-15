"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    // Call the usePathname function to get the current pathname
    const pathname = usePathname();
    // console.log(pathname);
    

    return (
        <AnimatePresence>
            {/* Ensure the key is correctly updated */}
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
                    exit={{ opacity: 1 }} // Set exit animation back to 1 for visibility
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
