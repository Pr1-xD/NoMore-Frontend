import React from 'react';
import logo from './images/logob.png';

function GratTime(props) {
    return (
        <div>
             <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl"><img src={logo} alt="logo" /></span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">End
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to GratTime!<br/> When we feel FOMO, we tend to compare our life to others’.<br/>

With the help of this GratTime, you can keep track of the things to be grateful for in your life!<br/>

Sometimes all we need is a little reminder to count our own blessings 💖<br/>
</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="flex w-full justify-center items-end">
        {/* <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div> */}
        <button class="inline-flex text-white bg-main-color border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default GratTime;