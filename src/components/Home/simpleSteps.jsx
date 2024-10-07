import React from 'react'

function simpleSteps() {
  return (
    <div>
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
              <span className="text-primary">Our Process</span>
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Be Your Own Boss or Get Hired in <span className="text-primary">4 Easy Steps</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
              Join a <span className="text-primary">TechEase</span> course and equip yourself with the skills you need to land your dream job or start your own business in just four steps.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-white" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5v14" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900">
                  <span className="text-primary">Enroll</span> in a Course
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Select from our wide range of industry-leading tech courses.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-white" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7l6 6 12-12" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900">
                  Master <span className="text-primary">Key Skills</span>
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Learn job-ready skills with hands-on projects and expert mentorship.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-white" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M3 12v7a2 2 0 002 2h14a2 2 0 002-2v-7" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900">
                  Build <span className="text-primary">Your Portfolio</span>
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  Create real-world projects to showcase your expertise to employers or clients.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-white" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5v14" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900">
                  <span className="text-primary">Land</span> Your Dream Job or Start Your Business
                </h3>
                <h4 className="mt-2 text-base text-gray-700">
                  With your new skills and portfolio, you'll be ready to get hired or launch your own venture.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default simpleSteps
