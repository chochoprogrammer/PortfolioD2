'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiGithubFill, RiArrowRightLine } from 'react-icons/ri';
import { RxDotsHorizontal } from 'react-icons/rx';
import Link from 'next/link';

interface SectionType {
  extra_styles: string
}

const WorkSection: React.FC<SectionType> = ({extra_styles}) => {
  const projects = [
    {
      name: 'AnimeMe',
      url: 'https://github.com/chochoprogrammer/AnimeMe',
      image: 'project01.png',
      desc: 'This is a project for anime lovers. It is for reviewing, discussing and exploring animes.',
    },
    {
      name: 'DesignHive',
      url: 'https://github.com/chochoprogrammer/Course-App',
      image: 'project01.png',
      desc: 'This is a course app project of only tech related courses with complex fuctionalities.',
    },
    {
      name: 'MallGo',
      url: 'https://github.com/chochoprogrammer/Ecommerce-01-Frontend',
      image: 'project01.png',
      desc: 'An E-commerce website with common and special function that make this unique user friendly.',
    },
  ]

  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);

    const handleViewport = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    }

    handleViewport();

    window.addEventListener('resize', handleViewport);
    return () => {
      window.removeEventListener('resize', handleViewport);
    }
  }, []);

  return (
    <section id="works" className={`flex flex-col gap-y-[2.5rem] ${extra_styles}`}>
      <div className="flex flex-col gap-y-[1rem]">
        <h2 className="w-max mx-auto text-[1.875rem] text-textDark font-bold tracking-tight ">WORKS</h2>
        <p className="w-max mx-auto text-textLight ">Some of my past works</p>
      </div>
      <ul className="w-full min-h-[100vh] flex flex-wrap justify-evenly gap-[calc(3vw+.5rem)] py-[1rem+5vw]">
          {/* PROJECTS */}
          {projects.map((project, index) => {
            return (
            <li 
              key={index} 
              className="group w-full md:w-[calc(15rem+5vw)] h-[25rem] rounded-t-md shadow-sm hover:shadow-md hover:shadow-secondary/20 hover:translate-y-[-.5rem] transition-translate duration-500 ease-in-out"
            >
              <Link href={project.url} target="_blank" className="w-full h-full flex flex-col ">
                <Image 
                  src={`/images/${project.image}`} 
                  alt="PROJECT IMAGE" 
                  width={700} 
                  height={700}
                  className={`w-full h-[calc(60%)] rounded-t-md object-cover`} 
                />
                <div 
                  className={`bg-white/90 leading-[2rem] flex flex-col gap-y-[.75rem] py-[1rem] px-[.75rem] rounded-b-md shadow-sm shadow-surface/50 group-hover:bg-surface transition-all ease-in-out duration-200`}
                >
                  <h3 className="text-[2rem] text-textDark font-bold">
                    {project.name}
                  </h3>
                  <p className="w-full text-textLight text-sm line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="h-max flex justify-between items-end">
                    <RiGithubFill size="35" color="#001C30" />
                    <div className="flex h-max items-center justify-center">
                      <RxDotsHorizontal size="30" color="#001C30" />
                      <RiArrowRightLine size="30" color="#001C30" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            );
          })}
      </ul>
    </section>
  )
}

export default WorkSection;