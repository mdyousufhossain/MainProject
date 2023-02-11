import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menu } from '../../constants/info';
import ThemeIcon from '../../constants/darkmodUI';
// animation from framer js

// animation need more edite edite and animate the way you want 
const items = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10">
      <div className="hidden flex items-center md:block">
        <ul className="flex items-center">
          { menu && menu.map((m) => (
            <li key={m.id}>
              <Link className="navbarMentu dark:text-Title_Dark" to={m.link}>
                {m.titile}
              </Link>
            </li>
          ))}
          <li> <ThemeIcon /> </li>
        </ul>
      </div>
      {/* there will be animation delay and humberguer mennu maybe a bit animation  */}

      <motion.div
        className="text-right md:hidden"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-secondary  dark:border-primary hover:text-white hover:border-slate-500 mx-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        {isOpen && (
          <motion.ul
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}

          >
            { menu && menu.map((m) => (
              <motion.li
                className="navbarMentu"
                key={m.id}
                to={m.link}
                variants={items}
              ><Link>
                {m.titile}
              </Link>
              </motion.li>
            ))}
            <li><ThemeIcon /></li>
          </motion.ul>
        )}
      </motion.div>
    </nav>
  );
}

export default NavBar;
