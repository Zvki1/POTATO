import React from 'react';
import './style.css';
function Popup({data}) {
    return (
        <div className="leaflet-popup-pane popup bg-custom-gray w-auto inline-flex rounded-3xl">
        <div className="popup-inner px-16 py-11  flex flex-col gap-6">
            {/* drone infos */}
           <h2 className='text-3xl text-custom-button font-roboto font-bold'>Drone {data["uav1/bat/id"]}</h2>
           <div className=' flex items-end gap-4'>
            <h3 className='text-xl text-custom-graytxt font-roboto font-normal'>Battery Level:</h3>
            <p className='text-xl'>100%</p>
           </div>

           <div className='flex flex-col gap-3'>
           <h3 className='text-xl text-custom-graytxt'>Localisation:</h3>
           <div className='flex flex-col gap-2 pl-5'>
           <p className='text-md'>Latitude:{data["uav1/gps/lat"]} N</p>
           <p className='text-md'>longitude:{data["uav1/gps/lon"]} N</p>
           </div>
           </div>
           <div className='flex flex-row items-end gap-4'>
           <h3 className='text-xl text-custom-graytxt'>State:</h3>
           <p className='text-xl'>{data["uav1/state"]}</p>
           </div>
           <hr />
           {/* <hr color="white" size="2" width="75%" align="center" /> */}
           <button className='bg-custom-button hover:bg-orange-500 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-3 '>
           
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.32731 19.763L12.8097 12L16.3412 18.117C14.641 19.3443 12.5968 20.0033 10.5 20C9.75411 20 9.02721 19.918 8.32731 19.763ZM6.3906 19.12C5.10598 18.5391 3.95829 17.6938 3.02244 16.6393C2.08658 15.5847 1.3836 14.3447 0.959384 13H9.92308L6.3906 19.119V19.12ZM0.551443 11C0.408359 9.59725 0.564582 8.18011 1.00979 6.84224C1.45499 5.50436 2.17904 4.27623 3.13407 3.23901L7.61242 11H0.551443ZM4.65985 1.88301C6.35972 0.655891 8.40359 -0.00309877 10.5 1.09555e-05C11.2459 1.09555e-05 11.9728 0.0820109 12.6727 0.237011L8.19033 8L4.65985 1.88301ZM14.6094 0.88001C15.894 1.46089 17.0417 2.30619 17.9776 3.36073C18.9134 4.41527 19.6164 5.65534 20.0406 7H11.0769L14.6094 0.88001ZM20.4486 9C20.5916 10.4027 20.4354 11.8199 19.9902 13.1578C19.545 14.4956 18.821 15.7238 17.8659 16.761L13.3876 9H20.4506H20.4486Z" fill="#EFEFEF"/>
</svg>

                 <p className='text-md'>View LiveStream</p>
           
           </button>
        </div>
    </div>
    );
}

export default Popup;