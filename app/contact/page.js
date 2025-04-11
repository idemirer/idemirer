export const metadata = {
  title: 'Contact Information',
  description: 'Contact information',
};

export default function Contact() {
  return (
    <section>
      <h1>Contact Information</h1>
      <div className='flex space-x-4 font-bold py-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          width={24}
          height={24}
          className='fill-[#00ccbb] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)]'
        >
          <path d='M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1 .6-33.6 .8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z' />
        </svg>
        <a
          href='https://www.researchgate.net/profile/Ilhan-Demirer-2'
          target='_blank'
          alt='Research Gate'
          aria-label='Research Gate'
        >
          Ilhan Demirer
        </a>
      </div>
      <div className='flex space-x-4 font-bold py-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          width={24}
          height={24}
          className='fill-[#0e76a8] drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)]'
        >
          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
        </svg>
        <a
          href='https://www.linkedin.com/in/ilhan-demirer-3230642a/'
          alt='LinkedIn'
          target='_blank'
          aria-label='LinkedIn'
        >
          Ilhan Demirer
        </a>
      </div>
      <div className='flex space-x-4 font-bold py-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          width={24}
          height={24}
          className='fill-black drop-shadow-[1px_1px_1px_rgba(10,10,10,0.5)] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,.6)]'
        >
          <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
        </svg>
        <a href='https://x.com/idemirer' target='_blank' aria-label='X.com @idemirer'>
          @idemirer
        </a>
      </div>
      <div className='flex space-x-4 font-bold py-2'></div>
    </section>
  );
}
