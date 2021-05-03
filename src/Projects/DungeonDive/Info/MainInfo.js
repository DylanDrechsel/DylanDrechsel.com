import React from 'react';
import { motion } from 'framer-motion'

const MainInfo = () => {
    return (
			<motion.div className="MainInfo">
				<h1 style={{ fontSize: "32px" }}>
                    <b>
					Dungeon Dive is a web app using React that is inspired by the early
					<br />8-bit GameBoy games. Fight your way through the dungeon to reach the
					end and survive the many dangers it holds!
                    </b>
				</h1>
			</motion.div>
		);
};

export default MainInfo;