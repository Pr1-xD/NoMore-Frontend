import React from "react";

function Subsec(props) {
    return(
        <div>
            <section>
                <div class ="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <div class="flex w-full justify-center items-end">
                        
                        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <p class="mb-8 leading-relaxed sm:text-4xl font-medium text-3xl text-gray-900 mb-4">Join our community</p>
                            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            
                        </div>
                        <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg ">Button</button>
                        <p class="mb-8 leading-relaxed sm:text-4xl font-medium text-3xl text-gray-900 mb-4">Or, link your account</p>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Subsec;