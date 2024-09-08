export const ASSETS = {
  ICON: (color: string = "rgba(0,0,0,1)") =>
    `data:image/svg+xml;base64,${btoa(`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0269 50C21.5623 50 18.3029 49.3397 15.2486 48.0191C12.2399 46.6985 9.59593 44.9226 7.31661 42.6913C5.08288 40.4144 3.30501 37.7732 1.98301 34.7678C0.661002 31.7168 0 28.4608 0 25C0 21.6758 0.615416 18.5109 1.84625 15.5055C3.12267 12.4545 4.94612 9.74499 7.31661 7.37705C9.6871 4.96357 12.3767 3.14208 15.3854 1.91257C18.4397 0.637523 21.6535 0 25.0269 0H25.0953C28.4687 0 31.6141 0.614754 34.5317 1.84426C37.4948 3.07377 40.0932 4.75865 42.3269 6.89891C44.6062 8.99362 46.4297 11.4982 47.7973 14.4126C48.9482 16.8269 49.6794 19.4025 49.9909 22.1394C50.0873 22.9859 49.4049 23.7022 48.552 23.7022H27.881C27.06 23.7022 26.3945 23.0374 26.3945 22.2173V16.1885C26.3945 15.8713 26.2908 15.6058 26.0834 15.3922C26.0208 15.3277 25.957 15.264 25.8925 15.2015C25.6786 14.9943 25.4129 14.8907 25.0953 14.8907C24.7306 14.8907 24.4115 15.0273 24.138 15.3005C23.91 15.5282 23.7961 15.8242 23.7961 16.1885V33.8115C23.7961 34.1291 23.8827 34.4121 24.056 34.6605C24.1074 34.7342 24.1716 34.7983 24.2453 34.8497C24.494 35.0227 24.7773 35.1093 25.0953 35.1093C25.9614 35.1093 26.3945 34.6767 26.3945 33.8115V27.7827C26.3945 26.9626 27.06 26.2978 27.881 26.2978H48.547C49.4018 26.2978 50.0847 27.0171 49.9843 27.8651C49.6798 30.4358 48.9964 32.896 47.934 35.2459C46.7032 38.0237 44.9937 40.5055 42.8056 42.6913C40.4351 45.0592 37.7227 46.8807 34.6684 48.1557C31.6597 49.3852 28.4687 50 25.0953 50H25.0269Z" fill="${color}" />
<animate 
    attributeName="opacity" 
    values=".75;1;1;0.75" 
    keyTimes="0;0.25;0.75;1" 
    dur="5s" 
    repeatCount="indefinite" 
  />
</svg>
`)}`,
  CONNECT_ICON:
    "data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M50.0377%2084.9391C45.1873%2084.9391%2040.6241%2084.0155%2036.3481%2082.1683C32.1359%2080.3211%2028.4343%2077.8369%2025.2433%2074.7157C22.116%2071.5309%2019.627%2067.8365%2017.7762%2063.6325C15.9254%2059.3648%2015%2054.8105%2015%2049.9695C15%2045.3197%2015.8616%2040.8927%2017.5847%2036.6888C19.3717%2032.4211%2021.9246%2028.6311%2025.2433%2025.3189C28.5619%2021.9429%2032.3274%2019.3951%2036.5396%2017.6753C40.8156%2015.8918%2045.3149%2015%2050.0377%2015H50.1334C54.8561%2015%2059.2598%2015.8599%2063.3443%2017.5797C67.4927%2019.2995%2071.1305%2021.6563%2074.2577%2024.6501C77.4487%2027.5801%2080.0016%2031.0834%2081.9162%2035.16C83.5275%2038.5372%2084.5512%2042.1399%2084.9873%2045.9681C85.1222%2047.1523%2084.1669%2048.1542%2082.9728%2048.1542H54.0334C52.884%2048.1542%2051.9523%2047.2242%2051.9523%2046.0771V37.6442C51.9523%2037.2005%2051.8071%2036.8292%2051.5167%2036.5303C51.4291%2036.4401%2051.3398%2036.351%2051.2495%2036.2636C50.95%2035.9738%2050.578%2035.8289%2050.1334%2035.8289C49.6228%2035.8289%2049.1761%2036.0199%2048.7932%2036.4021C48.4741%2036.7206%2048.3145%2037.1346%2048.3145%2037.6442V62.2949C48.3145%2062.7391%2048.4358%2063.135%2048.6784%2063.4825C48.7503%2063.5855%2048.8402%2063.6752%2048.9435%2063.7471C49.2916%2063.9892%2049.6883%2064.1102%2050.1334%2064.1102C51.346%2064.1102%2051.9523%2063.5051%2051.9523%2062.2949V53.862C51.9523%2052.7148%2052.884%2051.7849%2054.0334%2051.7849H82.9658C84.1625%2051.7849%2085.1186%2052.7911%2084.978%2053.9772C84.5518%2057.573%2083.595%2061.0144%2082.1077%2064.3013C80.3845%2068.1868%2077.9912%2071.6583%2074.9278%2074.7157C71.6091%2078.028%2067.8118%2080.5758%2063.5358%2082.3594C59.3236%2084.0792%2054.8561%2084.9391%2050.1334%2084.9391H50.0377Z%22%20fill%3D%22%23FF3D00%22%2F%3E%3C%2Fsvg%3E",
  CLOSE: ({
    color = "rgba(0,0,0,1)",
    size = 30,
    style,
  }: {
    color?: string;
    size?: number;
    style?: string;
  }) => `<svg width="${size}px" height="${size}px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" class="close" style="${style}">
 <path d="m900 112.5h-600c-103.39 0-187.5 84.113-187.5 187.5v600c0 103.39 84.113 187.5 187.5 187.5h600c103.39 0 187.5-84.113 187.5-187.5v-600c0-103.39-84.113-187.5-187.5-187.5zm-85.988 648.49c14.664 14.664 14.664 38.363 0 53.023-7.3125 7.3125-16.91 10.988-26.512 10.988s-19.199-3.6758-26.512-10.988l-160.99-160.99-160.99 160.99c-7.3125 7.3125-16.91 10.988-26.512 10.988s-19.199-3.6758-26.512-10.988c-14.664-14.664-14.664-38.363 0-53.023l160.99-160.99-160.99-160.99c-14.664-14.664-14.664-38.363 0-53.023 14.664-14.664 38.363-14.664 53.023 0l160.99 160.99 160.99-160.99c14.664-14.664 38.363-14.664 53.023 0 14.664 14.664 14.664 38.363 0 53.023l-160.99 160.99z" fill="${color}" />
</svg>
`,
  LOADING: ({
    color = "rgba(0,0,0,1)",
    size = 30,
  }: {
    color?: string;
    size?: number;
  }) => {
    return `<svg width="${size}" height="${size}" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="${color}">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>`;
  },
};
