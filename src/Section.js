import React from 'react';
import ill2 from './images/ill2.svg';
import logo from './images/logo.png';

function Section(props) {
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img class="object-cover object-center rounded" alt="ill2" src={ill2}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-regular text-gray-900">If the world around you is becoming overwhelming and overstimulating, stay with us for a little while longer.
        
      </h1>
      <p class="mb-8 leading-relaxed sm:text-4xl font-medium text-3xl text-gray-900 mb-4">Destress and reconnect with your true self with </p>
      <img src ={logo} alt="logo" />

      {/* <div class="flex justify-center">
        <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
</section>
        </div>
    );
}

export default Section;