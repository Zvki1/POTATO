import React from 'react';
import './style.css';


const HomePage = () => {

  return (
    <div className='homePage'> 
        <div style={{width: '70vw', height: '100vh', position: 'absolute', top: '20%', right: '2%'}}>       
          <div className='space-y-2' >
              {/* table element which contain: name battery location state actions */}
            
              <div className='flex flex-row w-full'>
                <div className='flex flex-row ' style={{gap: '95px',paddingLeft: '35px'}}>
                  <p className='font-roboto font-normal text-custom-graytxt' >Drone name</p>
                  <p className='font-roboto font-normal text-custom-graytxt'>Battery</p>
                </div>
                <p className=' font-roboto font-normal text-custom-graytxt'style={{paddingLeft: '120px'}}>Location</p>
                <div className='flex flex-row font-roboto font-normal text-custom-graytxt' style={{paddingLeft: '158px'}}>
                  <p className='font-roboto font-normal text-custom-graytxt'>State</p>
                  <p className='font-roboto font-normal text-custom-graytxt' style={{paddingLeft: '130px'}}>Actions</p>
                  </div>  
              </div>
              {/* drone1 */}
          <div className='  flex bg-custom-gray text-white pl-8 pr-16 justify-between rounded-2xl py-5 '>
              <div className='flex flex-row items-center gap-20'>
                  <p className='font-roboto font-bold text-custom-button'>Unknown 7.78.2</p>
                  <p className='font-roboto font-normal text-custom-light-gray'>20%</p>
                  <div>
                      <p className='font-roboto font-normal text-custom-light-gray'>latitude:48° 51’ 30,132 N</p>
                      <p className='font-roboto font-normal text-custom-light-gray'> longitude:48° 51’ 30,132 N</p>
                  </div>
                  <p className='font-roboto font-normal text-custom-light-gray'>armed</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
              <svg className='cursor-pointer' width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.71537C6.76951 2.71537 3.57694 5.00716 2.28549 8.25027C2.22165 8.41059 2.22165 8.58941 2.28549 8.74973C3.57694 11.9928 6.76951 14.2846 10.5 14.2846C14.2305 14.2846 17.4231 11.9928 18.7145 8.74973C18.7783 8.58941 18.7783 8.41059 18.7145 8.25027C17.4231 5.00716 14.2305 2.71537 10.5 2.71537ZM0.203824 7.43772C1.82094 3.37678 5.81978 0.5 10.5 0.5C15.1802 0.5 19.1791 3.37678 20.7962 7.43772C21.0679 8.12018 21.0679 8.87982 20.7962 9.56228C19.1791 13.6232 15.1802 16.5 10.5 16.5C5.81978 16.5 1.82094 13.6232 0.203824 9.56228C-0.0679412 8.87982 -0.0679413 8.12018 0.203824 7.43772Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6.68182C9.37033 6.68182 8.45455 7.49585 8.45455 8.5C8.45455 9.50415 9.37033 10.3182 10.5 10.3182C11.6297 10.3182 12.5455 9.50415 12.5455 8.5C12.5455 7.49585 11.6297 6.68182 10.5 6.68182ZM6 8.5C6 6.29086 8.01472 4.5 10.5 4.5C12.9853 4.5 15 6.29086 15 8.5C15 10.7091 12.9853 12.5 10.5 12.5C8.01472 12.5 6 10.7091 6 8.5Z" fill="#41BFB3"/>
          </svg>

          <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="21.5" stroke="#4B4B4B"/>
          </svg>

          <svg className='cursor-pointer' width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7.55228 9.5 8 9.98631 8 10.5862V15.4138C8 16.0137 7.55228 16.5 7 16.5C6.44772 16.5 6 16.0137 6 15.4138V10.5862C6 9.98631 6.44772 9.5 7 9.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.5C11.5523 9.5 12 9.98631 12 10.5862V15.4138C12 16.0137 11.5523 16.5 11 16.5C10.4477 16.5 10 16.0137 10 15.4138V10.5862C10 9.98631 10.4477 9.5 11 9.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.5C0 4.94772 0.49678 4.5 1.10959 4.5H16.8904C17.5032 4.5 18 4.94772 18 5.5C18 6.05228 17.5032 6.5 16.8904 6.5H1.10959C0.49678 6.5 0 6.05228 0 5.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.10526 7.5C3.71568 7.5 4.21053 7.99418 4.21053 8.60377V16.0849C4.21053 17.3041 5.20021 18.2925 6.42105 18.2925H11.5789C12.7998 18.2925 13.7895 17.3041 13.7895 16.0849V8.60377C13.7895 7.99418 14.2843 7.5 14.8947 7.5C15.5052 7.5 16 7.99418 16 8.60377V16.0849C16 18.5233 14.0206 20.5 11.5789 20.5H6.42105C3.97937 20.5 2 18.5233 2 16.0849V8.60377C2 7.99418 2.49484 7.5 3.10526 7.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.74C4 1.9506 5.64841 0.5 7.68182 0.5H9.31818C11.3516 0.5 13 1.9506 13 3.74V5.42C13 6.01647 12.4505 6.5 11.7727 6.5H5.22727C4.54947 6.5 4 6.01647 4 5.42V3.74ZM7.68182 2.66C7.00401 2.66 6.45455 3.14353 6.45455 3.74V4.34H10.5455V3.74C10.5455 3.14353 9.99599 2.66 9.31818 2.66H7.68182Z" fill="#41BFB3"/>
          </svg>


          <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="21.5" stroke="#4B4B4B"/>
          </svg>


          <svg className='cursor-pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.763 1.39855C13.961 0.200491 15.9034 0.200483 17.1015 1.39853C18.2995 2.59657 18.2995 4.53896 17.1015 5.73701L10.1099 12.7287C9.68161 13.157 9.13615 13.4489 8.54226 13.5677L5.65439 14.1452C5.2923 14.2177 4.91797 14.1043 4.65687 13.8432C4.39576 13.5821 4.28242 13.2078 4.35484 12.8457L4.93242 9.95782C5.0512 9.36394 5.3431 8.8185 5.77136 8.39023L12.763 1.39855ZM15.5396 2.96039C15.2042 2.62493 14.6603 2.62494 14.3248 2.96039L14.0399 3.24532L15.2547 4.4601L15.5396 4.17516C15.8751 3.83971 15.8751 3.29584 15.5396 2.96039ZM13.6928 6.02196L12.4781 4.80719L7.33323 9.95208C7.21332 10.072 7.13158 10.2247 7.09833 10.391L6.84564 11.6545L8.10907 11.4018C8.27537 11.3685 8.42809 11.2868 8.54801 11.1669L13.6928 6.02196ZM3.3132 2.79299C2.70326 2.79299 2.2088 3.28744 2.2088 3.89738V15.1868C2.2088 15.7967 2.70326 16.2912 3.3132 16.2912H14.6026C15.2126 16.2912 15.707 15.7967 15.707 15.1868V9.54209C15.707 8.93215 16.2015 8.43769 16.8114 8.43769C17.4214 8.43769 17.9158 8.93215 17.9158 9.54209V15.1868C17.9158 17.0166 16.4325 18.5 14.6026 18.5H3.3132C1.48337 18.5 0 17.0166 0 15.1868V3.89738C0 2.06755 1.48337 0.584187 3.3132 0.584187H8.95791C9.56786 0.584187 10.0623 1.07864 10.0623 1.68859C10.0623 2.29853 9.56786 2.79299 8.95791 2.79299H3.3132Z" fill="#41BFB3"/>
          </svg>

              </div>
          </div>
              {/* drone2 */}
          <div className='  flex bg-custom-gray text-white pl-8 pr-16 justify-between rounded-2xl py-5'>
              <div className='flex flex-row items-center gap-20'>
                  <p className='font-roboto font-bold text-custom-button'>Unknown 7.78.2</p>
                  <p className='font-roboto font-normal text-custom-light-gray'>20%</p>
                  <div>
                      <p className='font-roboto font-normal text-custom-light-gray'>latitude:48° 51’ 30,132 N</p>
                      <p className='font-roboto font-normal text-custom-light-gray'> longitude:48° 51’ 30,132 N</p>
                  </div>
                  <p className='font-roboto font-normal text-custom-light-gray'>armed</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
              <svg className='cursor-pointer' width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.71537C6.76951 2.71537 3.57694 5.00716 2.28549 8.25027C2.22165 8.41059 2.22165 8.58941 2.28549 8.74973C3.57694 11.9928 6.76951 14.2846 10.5 14.2846C14.2305 14.2846 17.4231 11.9928 18.7145 8.74973C18.7783 8.58941 18.7783 8.41059 18.7145 8.25027C17.4231 5.00716 14.2305 2.71537 10.5 2.71537ZM0.203824 7.43772C1.82094 3.37678 5.81978 0.5 10.5 0.5C15.1802 0.5 19.1791 3.37678 20.7962 7.43772C21.0679 8.12018 21.0679 8.87982 20.7962 9.56228C19.1791 13.6232 15.1802 16.5 10.5 16.5C5.81978 16.5 1.82094 13.6232 0.203824 9.56228C-0.0679412 8.87982 -0.0679413 8.12018 0.203824 7.43772Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6.68182C9.37033 6.68182 8.45455 7.49585 8.45455 8.5C8.45455 9.50415 9.37033 10.3182 10.5 10.3182C11.6297 10.3182 12.5455 9.50415 12.5455 8.5C12.5455 7.49585 11.6297 6.68182 10.5 6.68182ZM6 8.5C6 6.29086 8.01472 4.5 10.5 4.5C12.9853 4.5 15 6.29086 15 8.5C15 10.7091 12.9853 12.5 10.5 12.5C8.01472 12.5 6 10.7091 6 8.5Z" fill="#41BFB3"/>
          </svg>

          <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="21.5" stroke="#4B4B4B"/>
          </svg>

          <svg className='cursor-pointer' width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7.55228 9.5 8 9.98631 8 10.5862V15.4138C8 16.0137 7.55228 16.5 7 16.5C6.44772 16.5 6 16.0137 6 15.4138V10.5862C6 9.98631 6.44772 9.5 7 9.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.5C11.5523 9.5 12 9.98631 12 10.5862V15.4138C12 16.0137 11.5523 16.5 11 16.5C10.4477 16.5 10 16.0137 10 15.4138V10.5862C10 9.98631 10.4477 9.5 11 9.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.5C0 4.94772 0.49678 4.5 1.10959 4.5H16.8904C17.5032 4.5 18 4.94772 18 5.5C18 6.05228 17.5032 6.5 16.8904 6.5H1.10959C0.49678 6.5 0 6.05228 0 5.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.10526 7.5C3.71568 7.5 4.21053 7.99418 4.21053 8.60377V16.0849C4.21053 17.3041 5.20021 18.2925 6.42105 18.2925H11.5789C12.7998 18.2925 13.7895 17.3041 13.7895 16.0849V8.60377C13.7895 7.99418 14.2843 7.5 14.8947 7.5C15.5052 7.5 16 7.99418 16 8.60377V16.0849C16 18.5233 14.0206 20.5 11.5789 20.5H6.42105C3.97937 20.5 2 18.5233 2 16.0849V8.60377C2 7.99418 2.49484 7.5 3.10526 7.5Z" fill="#41BFB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.74C4 1.9506 5.64841 0.5 7.68182 0.5H9.31818C11.3516 0.5 13 1.9506 13 3.74V5.42C13 6.01647 12.4505 6.5 11.7727 6.5H5.22727C4.54947 6.5 4 6.01647 4 5.42V3.74ZM7.68182 2.66C7.00401 2.66 6.45455 3.14353 6.45455 3.74V4.34H10.5455V3.74C10.5455 3.14353 9.99599 2.66 9.31818 2.66H7.68182Z" fill="#41BFB3"/>
          </svg>


          <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="21.5" stroke="#4B4B4B"/>
          </svg>


          <svg className='cursor-pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.763 1.39855C13.961 0.200491 15.9034 0.200483 17.1015 1.39853C18.2995 2.59657 18.2995 4.53896 17.1015 5.73701L10.1099 12.7287C9.68161 13.157 9.13615 13.4489 8.54226 13.5677L5.65439 14.1452C5.2923 14.2177 4.91797 14.1043 4.65687 13.8432C4.39576 13.5821 4.28242 13.2078 4.35484 12.8457L4.93242 9.95782C5.0512 9.36394 5.3431 8.8185 5.77136 8.39023L12.763 1.39855ZM15.5396 2.96039C15.2042 2.62493 14.6603 2.62494 14.3248 2.96039L14.0399 3.24532L15.2547 4.4601L15.5396 4.17516C15.8751 3.83971 15.8751 3.29584 15.5396 2.96039ZM13.6928 6.02196L12.4781 4.80719L7.33323 9.95208C7.21332 10.072 7.13158 10.2247 7.09833 10.391L6.84564 11.6545L8.10907 11.4018C8.27537 11.3685 8.42809 11.2868 8.54801 11.1669L13.6928 6.02196ZM3.3132 2.79299C2.70326 2.79299 2.2088 3.28744 2.2088 3.89738V15.1868C2.2088 15.7967 2.70326 16.2912 3.3132 16.2912H14.6026C15.2126 16.2912 15.707 15.7967 15.707 15.1868V9.54209C15.707 8.93215 16.2015 8.43769 16.8114 8.43769C17.4214 8.43769 17.9158 8.93215 17.9158 9.54209V15.1868C17.9158 17.0166 16.4325 18.5 14.6026 18.5H3.3132C1.48337 18.5 0 17.0166 0 15.1868V3.89738C0 2.06755 1.48337 0.584187 3.3132 0.584187H8.95791C9.56786 0.584187 10.0623 1.07864 10.0623 1.68859C10.0623 2.29853 9.56786 2.79299 8.95791 2.79299H3.3132Z" fill="#41BFB3"/>
          </svg>

              </div>
          </div>

          </div>
          </div> 
    </div>
  );
};

export default HomePage;
