import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line no-unused-vars
import firebase from '../assets/partners/firebase.png';
import stripe from '../assets/partners/stripe.png';
import bkash from '../assets/partners/bkash.png';
import nagad from '../assets/partners/nagad.jpg';
import visa from '../assets/partners/visa.jpg';
import mastercard from '../assets/partners/mastercard.png';
import ubereats from '../assets/partners/ubereats.png';
import foodpanda from '../assets/partners/foodpanda.png';

const logos = [
  firebase,
  stripe,
  bkash,
  nagad,
  visa,
  mastercard,
  ubereats,
  foodpanda
];

const PoweredBy = () => {
  return (
    <div className="bg-white dark:bg-[#2e2e2e]  py-10 overflow-hidden lg:w-2/3 mx-auto pb-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-24">Powered By</h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 lg:gap-24 w-max"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear'
          }}
        >
         
          {[...logos, ...logos].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Powered logo ${index}`}
              className="w-28 h-20 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PoweredBy;
