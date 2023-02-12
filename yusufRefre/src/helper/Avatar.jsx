import React from 'react';

export function Avatar({ styleDiv, styleIMG, imgLink, altTXT }) {
  return (
    <div className={styleDiv}>
      <img src={imgLink} className={styleIMG} alt={altTXT} />
    </div>
  );
}

export function Top({ style }) {
  return (

    <svg
      className={style}
      height="90px"
      width="90px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path d="M226.932,399.948c-19.96,18.445-47.567,22.576-72.053,10.786c-8.852-4.263-16.322-10.149-22.17-17.199l-33.341,73.744
            c-1.517,3.355,0.177,5.884,0.975,6.815c0.798,0.93,3.039,2.989,6.585,2.003l24.272-6.756c2.766-0.769,5.562-1.14,8.319-1.14
            c11.631,0,22.578,6.583,27.849,17.492l10.962,22.685c1.601,3.315,4.604,3.646,5.854,3.621c1.226-0.016,4.242-0.414,5.758-3.769
            l53.033-117.304C237.148,392.603,231.63,395.606,226.932,399.948z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M412.631,467.279l-33.341-73.744c-5.848,7.051-13.318,12.937-22.17,17.199c-24.487,11.79-52.093,7.659-72.053-10.786
            c-4.698-4.342-10.216-7.345-16.045-9.022l53.033,117.304c1.517,3.356,4.533,3.753,5.758,3.769c1.25,0.025,4.253-0.306,5.854-3.621
            l10.962-22.685c5.27-10.909,16.218-17.492,27.849-17.492c2.757,0,5.554,0.371,8.319,1.14l24.272,6.756
            c3.546,0.987,5.788-1.072,6.585-2.003C412.454,473.162,414.148,470.633,412.631,467.279z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M438.821,207.791c-27.69-18.96-36.282-56.605-19.56-85.702c10.051-17.491,4.82-34.775-3.427-45.118
              c-8.248-10.34-23.936-19.285-43.223-13.38c-32.084,9.827-66.877-6.925-79.201-38.141C286.002,6.686,269.227,0,256,0
              c-13.227,0-30.002,6.686-37.41,25.451c-12.324,31.217-47.114,47.967-79.201,38.141c-19.289-5.904-34.974,3.039-43.223,13.38
              c-8.247,10.343-13.478,27.625-3.427,45.118c16.722,29.096,8.13,66.742-19.56,85.702c-16.646,11.399-19.431,29.24-16.489,42.136
              c2.942,12.896,13.194,27.761,33.137,30.808c33.174,5.068,57.248,35.256,54.809,68.727c-1.468,20.121,10.745,33.423,22.662,39.163
              c11.918,5.739,29.932,6.995,44.748-6.698c12.322-11.387,28.141-17.083,43.953-17.083c15.818,0,31.628,5.693,43.952,17.083
              c14.818,13.694,32.833,12.438,44.75,6.698c11.917-5.739,24.129-19.041,22.662-39.162c-2.439-33.471,21.635-63.659,54.809-68.728
              c19.943-3.047,30.193-17.913,33.137-30.808C458.252,237.03,455.465,219.189,438.821,207.791z M256,335.923
              c-72.575,0-131.619-59.044-131.619-131.619S183.424,72.684,256,72.684c72.576,0,131.619,59.044,131.619,131.619
              C387.618,276.878,328.575,335.923,256,335.923z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M255.999,97.225c-59.044,0-107.079,48.036-107.079,107.079c0,59.043,48.034,107.079,107.079,107.079
              s107.079-48.036,107.079-107.079S315.043,97.225,255.999,97.225z M310.874,193.922l-66.642,48.675
              c-2.115,1.545-4.653,2.362-7.237,2.362c-0.666,0-1.335-0.054-2.001-0.164c-3.249-0.537-6.147-2.358-8.041-5.054l-19.934-28.382
              c-3.895-5.547-2.556-13.2,2.989-17.095c5.546-3.895,13.198-2.557,17.094,2.989l12.75,18.154l56.548-41.302
              c5.473-3.995,13.15-2.803,17.146,2.671C317.543,182.248,316.346,189.924,310.874,193.922z"
          />
        </g>
      </g>
    </svg>

  );
}

export function Time({ style }) {
  return (

    <svg className={style} width="75pt" height="75pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">

      <g>
        <path d="m448.3 52.5h-70c-6.25 0-12.027-3.3359-15.156-8.75-3.125-5.4141-3.125-12.086 0-17.5 3.1289-5.4141 8.9062-8.75 15.156-8.75h70c6.2539 0 12.031 3.3359 15.156 8.75s3.125 12.086 0 17.5-8.9023 8.75-15.156 8.75z" />
        <path d="m413.3 105c-4.6406 0-9.0938-1.8438-12.375-5.125s-5.125-7.7344-5.125-12.375v-52.5c0-6.2539 3.3359-12.031 8.75-15.156 5.4141-3.125 12.086-3.125 17.5 0 5.4141 3.125 8.75 8.9023 8.75 15.156v52.5c0 4.6406-1.8438 9.0938-5.125 12.375s-7.7344 5.125-12.375 5.125z" />
        <path d="m254 166.5c-4.6406 0.007813-9.0938-1.8359-12.371-5.125l-24.746-24.746c-4.293-4.4453-5.9219-10.824-4.2891-16.785 1.6328-5.9609 6.2891-10.617 12.25-12.25 5.9609-1.6328 12.34-0.003906 16.785 4.2891l24.746 24.746c3.2812 3.2812 5.125 7.7344 5.125 12.375 0 4.6406-1.8438 9.0898-5.125 12.371s-7.7344 5.125-12.375 5.125z" />
        <path d="m572.6 166.5c-4.6406 0-9.0938-1.8438-12.375-5.125s-5.1211-7.7305-5.1211-12.371c0-4.6406 1.8398-9.0938 5.1211-12.375l24.754-24.746c3.2656-3.3633 7.7422-5.2773 12.43-5.3125 4.6875-0.039063 9.1914 1.8086 12.508 5.125 3.3125 3.3125 5.1602 7.8164 5.125 12.504-0.035157 4.6875-1.9492 9.168-5.3164 12.43l-24.758 24.746c-3.2773 3.2852-7.7266 5.1328-12.367 5.125z" />
        <path d="m184 261.21-114 36.004v143.8-0.003906c-0.5625 16.25 2.8711 32.387 10 47 25 49.598 88 63.801 104 66.801 16-3 78.801-17.199 103.8-67 7.0859-14.344 10.52-30.215 10-46.203v-144.39zm83.797 111.2-77.996 77.801c-3.6914 3.8359-8.7812 6-14.102 6s-10.41-2.1641-14.098-6l-41.402-41.199c-3.7461-3.7383-5.8477-8.8086-5.8477-14.102 0-5.2891 2.1016-10.363 5.8477-14.098 3.7773-3.7461 8.8789-5.8516 14.199-5.8516 5.3203 0 10.426 2.1055 14.199 5.8516l27.199 27 63.598-63.602c3.7773-3.7461 8.8828-5.8477 14.199-5.8477 5.3203 0 10.426 2.1016 14.203 5.8477 3.7422 3.7383 5.8477 8.8086 5.8516 14.102 0 5.2891-2.1055 10.363-5.8516 14.102z" />
        <path d="m530 295.01c0.046875-4.9805 1.9609-9.7617 5.3711-13.395 3.4102-3.6289 8.0625-5.   13.73 0 19.891c-3.5312 6.1641-10.062 9.9883-17.164 10.055z" />
        <path d="m410 515.01c-28.578-0.125-56.859-5.7617-83.301-16.598 5.4297-12.492 8.9258-25.742 10.371-39.289 22.914 10.395 47.773 15.809 72.938 15.887 44.332 0.027343 87.117-16.309 120.15-45.879 33.035-29.566 53.996-70.285 58.867-114.35 4.8672-44.066-6.6953-88.379-32.48-124.45-25.781-36.066-63.969-61.348-107.24-71-43.27-9.6562-88.582-3-127.25 18.691-38.668 21.688-67.969 56.883-82.293 98.84l-38.07-12.035h0.003906c17.32-51.367 53.004-94.527 100.2-121.2 47.199-26.668 102.58-34.965 155.52-23.293 52.941 11.668 99.703 42.477 131.32 86.516 31.613 44.039 45.844 98.203 39.965 152.09-5.8789 53.887-31.457 103.71-71.82 139.89-40.363 36.188-92.672 56.188-146.88 56.168z" />
      </g>
    </svg>

  );
}

export function Satisfaction({ style }) {
  return (

    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="60pt"
      height="60pt"
      viewBox="0 0 512.000000 512.000000"
      className={style}
    >

      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path d="M2393 5105 c-154 -28 -310 -101 -438 -204 -100 -81 -169 -124 -248
            -152 -53 -18 -94 -23 -282 -29 -239 -9 -307 -21 -444 -79 -215 -91 -411 -287
            -502 -502 -60 -140 -72 -206 -75 -417 -4 -282 -33 -369 -182 -554 -88 -109
            -159 -246 -194 -373 -31 -115 -31 -354 0 -470 33 -120 111 -271 198 -378 140
            -173 174 -272 174 -508 0 -180 16 -289 60 -412 89 -244 304 -463 551 -561 127
            -49 182 -58 385 -61 280 -5 372 -34 551 -179 107 -87 258 -165 378 -198 116
            -31 355 -31 470 0 146 40 289 118 419 229 61 53 168 107 251 128 40 10 127 16
            255 19 207 4 263 13 389 62 242 96 449 303 545 545 49 125 58 182 61 386 5
            280 35 372 179 550 87 107 165 258 198 378 31 115 31 355 0 470 -31 115 -112
            272 -190 368 -82 102 -124 171 -153 250 -18 53 -23 94 -29 282 -9 239 -21 307
            -79 444 -91 215 -287 411 -502 502 -139 59 -206 71 -419 76 -127 2 -216 9
            -255 18 -83 21 -190 75 -251 128 -248 211 -530 295 -821 242z m341 -414 c77
            -27 125 -56 208 -124 216 -177 430 -251 718 -249 181 2 244 -9 346 -58 110
            -53 201 -144 254 -254 50 -104 60 -165 60 -355 0 -296 68 -491 247 -709 100
            -121 140 -213 150 -343 11 -144 -37 -284 -140 -409 -71 -86 -108 -142 -147
            -220 -86 -171 -111 -289 -114 -544 -2 -165 -5 -187 -28 -247 -66 -175 -179
            -287 -355 -351 -50 -18 -84 -21 -248 -24 -209 -3 -294 -16 -431 -66 -91 -32
            -229 -114 -309 -182 -130 -112 -230 -151 -385 -151 -158 0 -257 41 -408 167
            -68 57 -188 128 -275 162 -129 51 -236 69 -407 68 -192 -1 -253 9 -357 59
            -112 54 -198 140 -252 252 -51 105 -61 165 -61 356 0 292 -71 497 -241 702
            -118 141 -154 232 -154 389 0 154 39 253 149 385 66 78 104 139 151 238 75
            158 108 338 98 524 -7 118 8 196 58 300 53 111 137 195 251 251 104 51 164 61
            358 61 173 -1 257 12 396 63 91 32 229 114 309 182 94 80 190 130 295 150 54
            10 206 -3 264 -23z"
        />
        <path d="M2405 4154 c-709 -76 -1277 -596 -1417 -1297 -32 -161 -32 -433 0
          -594 92 -460 360 -839 762 -1081 146 -87 320 -153 510 -193 141 -30 438 -33
          575 -6 345 69 618 212 853 447 234 234 383 518 449 855 27 139 24 425 -5 572
          -129 648 -623 1144 -1267 1273 -98 20 -368 34 -460 24z m415 -423 c352 -80
          651 -315 814 -639 84 -168 121 -329 121 -532 0 -157 -12 -236 -56 -372 -58
          -179 -154 -335 -293 -474 -171 -170 -371 -280 -606 -330 -106 -23 -352 -26
          -455 -5 -245 48 -455 160 -631 335 -173 173 -287 386 -335 631 -21 103 -18
          349 5 455 51 235 161 437 330 606 179 178 404 296 636 334 41 6 82 13 90 15
          42 11 302 -6 380 -24z"
        />
        <path d="M2687 2772 l-327 -327 -128 128 -128 128 -145 -140 -144 -140 273
        -273 272 -273 472 472 473 473 -80 81 c-44 44 -110 107 -146 139 l-65 59 -327
        -327z"
        />
      </g>
    </svg>

  );
}
