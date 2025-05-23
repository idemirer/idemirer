export default function Footer() {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <footer className='text-center my-10 mx-4 md:mx-auto md:w-[400px]'>
      <div className='flex justify-between mx-4'>
        <div>
          <a
            href='https://www.researchgate.net/profile/Ilhan-Demirer-2'
            target='_blank'
            alt='Research Gate'
            aria-label='Research Gate'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              width={24}
              height={24}
              className='fill-[#00ccbb] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)] hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] dark:hover:drop-shadow-[1px_1px_1px_rgba(100,100,100,0.5)]'
            >
              <path d='M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1 .6-33.6 .8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z' />
            </svg>
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/ilhan-demirer-3230642a/'
            alt='LinkedIn'
            target='_blank'
            aria-label='LinkedIn'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              width={24}
              height={24}
              className='fill-[#0e76a8] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)] hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] dark:hover:drop-shadow-[1px_1px_1px_rgba(100,100,100,0.5)]'
            >
              <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
            </svg>
          </a>
        </div>
        <div>
          <a href='https://www.youtube.com/@IlhanDemirer' alt='YouTube' target='_blank' aria-label='YouTube'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              width={24}
              height={24}
              className='fill-[#bb001b] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)] hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] dark:hover:drop-shadow-[1px_1px_1px_rgba(100,100,100,0.5)]'
            >
              <path d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z' />
            </svg>
          </a>
        </div>
        <div>
          <a href='https://x.com/idemirer' alt='twitter' target='_blank' aria-label='X.com @idemirer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width={24}
              height={24}
              className='fill-(--text) drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)] hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] dark:hover:drop-shadow-[1px_1px_1px_rgba(100,100,100,0.5)]'
            >
              <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
            </svg>
          </a>
        </div>
        <div>
          <a href='https://github.com/idemirer' alt='github' target='_blank' aria-label='Github'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
              width={24}
              height={24}
              className='fill-[#4078C0] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)] hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] dark:hover:drop-shadow-[1px_1px_1px_rgba(100,100,100,0.5)]'
            >
              <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
            </svg>
            <span aria-hidden='true' className='hidden'>
              Github
            </span>
          </a>
        </div>
        <div className='text-xs text-gray-500'>
          Copyright &copy; <br />
          Ilhan Demirer {thisYear}
        </div>
      </div>
    </footer>
  );
}
