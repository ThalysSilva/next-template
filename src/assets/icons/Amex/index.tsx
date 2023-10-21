import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function AmexIcon({
  width = '32',
  height = '25',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 32 25`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >

      <g clipPath="url(#clip0_3_32)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V25H0V0Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.67812 24.7504H2.59347C2.59347 24.709 2.57227 24.6466 2.57227 24.6257C2.57227 24.605 2.57227 24.5636 2.50867 24.5636H2.38146V24.7504H2.31786V24.3141H2.50867C2.59347 24.3141 2.65692 24.3351 2.65692 24.4179C2.65692 24.4803 2.63572 24.5012 2.61467 24.5217C2.63587 24.5426 2.65692 24.5634 2.65692 24.605V24.688C2.65692 24.709 2.65692 24.709 2.67812 24.709V24.7504ZM2.59347 24.4389C2.59347 24.3765 2.55107 24.3765 2.52987 24.3765H2.38146V24.5012H2.50867C2.55107 24.5012 2.59347 24.4803 2.59347 24.4389ZM2.95373 24.5219C2.95373 24.2727 2.74187 24.0647 2.46626 24.0647C2.21201 24.0647 2 24.2727 2 24.5219C2 24.792 2.21201 25 2.46626 25C2.74172 24.9998 2.95373 24.792 2.95373 24.5219ZM2.89013 24.5219C2.89013 24.7505 2.69947 24.9167 2.46626 24.9167C2.23306 24.9167 2.0636 24.7504 2.0636 24.5219C2.0636 24.3141 2.23321 24.127 2.46626 24.127C2.69932 24.127 2.89013 24.3141 2.89013 24.5219ZM29 16.1264C29 16.7499 28.5973 17.0405 27.8767 17.0405H26.4994V16.4169H27.8767C28.0039 16.4169 28.1099 16.3963 28.1524 16.3549C28.1947 16.3132 28.2371 16.2508 28.2371 16.1678C28.2371 16.0845 28.1948 16.0015 28.1524 15.96C28.1099 15.9183 28.0252 15.8977 27.898 15.8977C27.2413 15.8767 26.4146 15.9183 26.4146 15.0041C26.4146 14.5883 26.69 14.1311 27.4318 14.1311H28.8516V14.7546H27.5376C27.4107 14.7546 27.3258 14.7546 27.2621 14.796C27.1985 14.8584 27.1563 14.9208 27.1563 15.0247C27.1563 15.1286 27.2199 15.191 27.3046 15.2327C27.3895 15.2534 27.4743 15.2742 27.5803 15.2742H27.9616C28.3643 15.2742 28.6187 15.3572 28.7883 15.5028C28.9152 15.6482 29 15.8355 29 16.1264ZM26.0118 15.5028C25.8422 15.3572 25.5877 15.2742 25.1851 15.2742H24.8038C24.6979 15.2742 24.613 15.2532 24.5283 15.2327C24.4434 15.191 24.3801 15.1286 24.3801 15.0247C24.3801 14.9208 24.4011 14.8584 24.4859 14.796C24.5495 14.7546 24.6342 14.7546 24.7614 14.7546H26.0754V14.1311H24.6555C23.8925 14.1311 23.638 14.5883 23.638 15.0041C23.638 15.9182 24.4647 15.8767 25.1218 15.8977C25.2487 15.8977 25.3336 15.9183 25.3759 15.96C25.4181 16.0015 25.4609 16.0845 25.4609 16.1678C25.4609 16.2508 25.4183 16.3132 25.3759 16.3549C25.3123 16.3963 25.2276 16.4169 25.1004 16.4169H23.7228V17.0405H25.1004C25.8208 17.0405 26.2236 16.7497 26.2236 16.1264C26.2236 15.8355 26.139 15.6482 26.0118 15.5028ZM23.299 16.438H21.625V15.8561H23.2567V15.2745H21.625V14.734H23.299V14.1314H20.9256V17.0406H23.299V16.438ZM20.1625 14.2769C19.9293 14.1522 19.6538 14.1312 19.2936 14.1312H17.6619V17.0405H18.3822V15.9807H19.1453C19.3994 15.9807 19.548 16.0016 19.654 16.1054C19.7812 16.2508 19.7812 16.5003 19.7812 16.6874V17.0405H20.4803V16.4793C20.4803 16.2092 20.4593 16.0845 20.3745 15.9391C20.3109 15.8558 20.184 15.752 20.0144 15.6896C20.2049 15.6276 20.5231 15.3781 20.5231 14.9208C20.5229 14.5884 20.3957 14.4013 20.1625 14.2769ZM16.1359 14.1312H13.8682L12.9568 15.0872L12.0879 14.1312H9.22687V17.0405H12.0457L12.957 16.0845L13.8259 17.0405H15.2035V16.064H16.0936C16.7081 16.064 17.323 15.8977 17.323 15.0872C17.3228 14.2976 16.6869 14.1312 16.1359 14.1312ZM19.5902 15.3367C19.4844 15.3781 19.3784 15.3781 19.2512 15.3781L18.3822 15.3991V14.7338H19.2512C19.3784 14.7338 19.5056 14.7338 19.5902 14.7962C19.6752 14.8379 19.7385 14.9209 19.7385 15.0456C19.7385 15.1704 19.6752 15.2743 19.5902 15.3367ZM16.1359 15.4821H15.2033V14.7338H16.1359C16.3903 14.7338 16.5597 14.8379 16.5597 15.0872C16.5597 15.3367 16.3901 15.4821 16.1359 15.4821ZM13.4019 15.5859L14.5039 14.4431V16.7913L13.4019 15.5859ZM11.6852 16.438H9.92618V15.8561H11.4944V15.2745H9.92618V14.734H11.7064L12.4906 15.586L11.6852 16.438ZM27.0289 12.0323H26.0118L24.6766 9.85026V12.0323H23.2357L22.9599 11.388H21.4765L21.201 12.0323H20.3743C20.0353 12.0323 19.5902 11.9492 19.3361 11.6997C19.1029 11.4504 18.9757 11.1179 18.9757 10.5984C18.9757 10.1619 19.0393 9.76711 19.357 9.45542C19.5689 9.22675 19.9505 9.12295 20.4378 9.12295H21.1159V9.74647H20.4378C20.1837 9.74647 20.0351 9.78805 19.8869 9.91278C19.7597 10.0375 19.6961 10.266 19.6961 10.5777C19.6961 10.8894 19.7597 11.1181 19.8869 11.2636C19.9927 11.3674 20.1837 11.409 20.3742 11.409H20.6922L21.7094 9.12311H22.7691L23.9559 11.8662V9.12295H25.058L26.3084 11.1387V9.12295H27.0288V12.0323H27.0289ZM18.6154 9.12295H17.8951V12.0323H18.6154V9.12295ZM17.1106 9.24769C16.8774 9.12295 16.6233 9.12295 16.2631 9.12295H14.6311V12.0323H15.3304V10.9724H16.0933C16.3477 10.9724 16.5173 10.9932 16.6232 11.0971C16.7504 11.2427 16.729 11.4921 16.729 11.6583V12.0323H17.4494V11.4504C17.4494 11.2011 17.4284 11.0763 17.3225 10.9308C17.2589 10.8477 17.1317 10.7437 16.9834 10.6815C17.1739 10.5984 17.4921 10.3698 17.4921 9.91263C17.4923 9.58016 17.3437 9.39306 17.1106 9.24769ZM14.1224 11.4298H12.4694V10.8478H14.1012V10.2452H12.4694V9.72568H14.1224V9.12311H11.7488V12.0325H14.1224V11.4298ZM11.219 9.12295H10.0534L9.18446 11.0971L8.25194 9.12295H7.10755V11.866L5.89957 9.12295H4.83999L3.5684 12.0323H4.33132L4.60678 11.388H6.09022L6.36568 12.0323H7.80687V9.74647L8.84525 12.0323H9.45977L10.4983 9.74647V12.0323H11.2188L11.219 9.12295ZM22.7058 10.7647L22.2182 9.62173L21.7309 10.7647H22.7058ZM16.5597 10.3076C16.4539 10.37 16.3479 10.37 16.1995 10.37H15.3304V9.72583H16.1993C16.3265 9.72583 16.4746 9.72583 16.5596 9.76741C16.6442 9.82977 16.6868 9.91293 16.6868 10.0375C16.6868 10.1621 16.6444 10.2659 16.5597 10.3076ZM4.86103 10.7647L5.3485 9.62173L5.83596 10.7647H4.86103ZM28.8305 0H3.54704V10.4738L4.41597 8.54117H6.25967L6.51408 9.01916V8.54117H8.6758L9.16326 9.58016L9.62953 8.54117H16.5173C16.835 8.54117 17.1105 8.60354 17.3227 8.7697V8.54117H19.2088V8.7697C19.5265 8.60339 19.9291 8.54117 20.3955 8.54117H23.1294L23.3838 9.01916V8.54117H25.3971L25.6939 9.01916V8.54117H27.6647V12.6143H25.6727L25.2914 11.9909V12.6143H22.8117L22.5362 11.9493H21.9214L21.6459 12.6143H20.3533C19.8446 12.6143 19.463 12.4895 19.2089 12.3649V12.6143H16.1359V11.6791C16.1359 11.5543 16.1147 11.5335 16.0299 11.5335H15.924V12.6141H9.98979V12.0945L9.77793 12.6141H8.52755L8.31569 12.1153V12.6141H5.92077L5.66651 11.9492H5.05184L4.77638 12.6141H3.54704V24.8959H28.8305V17.4353C28.5551 17.56 28.1735 17.6224 27.792 17.6224H25.9482V17.3729C25.7363 17.5394 25.3547 17.6224 24.9946 17.6224H19.1876V16.6874C19.1876 16.5626 19.1665 16.5626 19.0604 16.5626H18.9545V17.6224H17.047V16.521C16.7293 16.6664 16.3689 16.6664 16.0511 16.6664H15.8391V17.6224H13.5079L12.957 16.9989L12.3425 17.6224H8.59099V13.5495H12.4058L12.9568 14.1727L13.5503 13.5495H16.1147C16.4112 13.5495 16.8988 13.5909 17.1106 13.7986V13.5495H19.3994C19.6326 13.5495 20.0778 13.5909 20.3743 13.7986V13.5495H23.8288V13.7988C24.0197 13.6325 24.3801 13.5496 24.6978 13.5496H26.6263V13.7988C26.8384 13.6534 27.1349 13.5496 27.5166 13.5496H28.8305V0Z" fill="#0077A6"/>
      </g>
      <defs>
        <clipPath id="clip0_3_32">
          <rect width="32" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  );
}