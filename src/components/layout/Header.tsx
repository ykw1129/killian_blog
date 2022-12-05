import { useToggleTheme } from '@/hooks';
import '@/styles/index.scss'
import { storage } from '@/utils/storage';
import { Switch } from '@headlessui/react'
import { Link, navigate } from 'gatsby'
import { useState, useEffect } from 'react';
export const Header = () => {
  const { isDark, onDarkChange } = useToggleTheme();
  return (
    <header className="h-[56px] w-full header-fixed bg-white dark:bg-neutral-900 shadow">
      <section className='max-w-[1280px] w-full m-auto h-full flex items-center'>
        <h1 className='mr-2 dark:text-white' onClick={() => navigate('/')}>
          Blog
        </h1>
        <div className='w-80'>
          <div className='border border-slate-300 border-solid flex p-2 rounded bg-white dark:bg-black'>
            <input className='border-none flex-1 outline-none bg-inherit dark:caret-white' />
            <button>
              <span className='dark:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className='ml-auto'>
          <Link to='/Login' className='mr-2 btn'>Login</Link>
          <button className='hover-btn mr-2'>Create account</button>
          <Switch
            checked={isDark}
            onChange={onDarkChange}
            className={`${isDark ? 'bg-purple-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${isDark ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div>

        </div>
      </section>
    </header>
  )
}
