/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
fontFamily : {
'display':['poppins' , 'sans-serif'],
'body' : ['Inter' , 'sans-serif' ],

gridTemplateColumns: {
  'custom': '2fr 1fr 1fr',
},


}

    },
  },
  plugins: [],
};
