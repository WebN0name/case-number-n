import { motion } from "framer-motion"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <div className="bg-header h-screen bg-cover w-full">
      <div className="h-full w-full bg-black bg-opacity-75 flex justify-center items-center">
        <div className="flex items-center flex-col">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 1.5,
              },
            }}
          >
            <h1 className="text-6xl text-white text-center mb-10 font-bold">Дело под номером N</h1>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 2,
              },
            }}
          >
            <h4 className="text-2xl text-white text-center mb-24">Все неявное станет явным</h4>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 3,
              },
            }}
          >
            <a
              className="w-48 h-16 block text-white bg-red-800 cursor-pointer text-center font-bold hover:bg-white hover:text-blue-700"
              style={{ lineHeight: "3.7rem", borderRadius: "30px" }}
              target="_blank"
              href="https://www.youtube.com/channel/UCpRqTrnHs2yFQ3yhezetL4Q"
            >
              Канал
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-9 cursor-pointer">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 2,
              },
            }}
          >
            <motion.div transition={{ y: { duration: 0.7, yoyo: Infinity, ease: "easeOut" } }} animate={{ y: 10 }}>
              <Link to="cards" smooth ={true} duration = {1000}>
                <svg
                  style={{ fill: "#dbdbdb" }}
                  x="0px"
                  y="0px"
                  width="38.417px"
                  height="18.592px"
                  viewBox="0 0 38.417 18.592"
                >
                  <g>
                    <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
                  </g>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
