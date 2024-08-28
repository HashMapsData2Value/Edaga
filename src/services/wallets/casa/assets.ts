export const ASSETS = {
  ICON: (color: string = "rgba(0,0,0)") =>
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
  CLOSE: ({
    color = "rgba(0,0,0)",
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
};
