let containerBattery = document.getElementById('icon1-container');
containerBattery.innerHTML = `<svg
class="public-style"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 113.04 113.03"
>
<defs>
  <style>
    .battery-1 {
      fill: url(#battery-gradient);
    }
    .battery-2,
    .battery-3,
    .battery-5 {
      fill: none;
      stroke: #fff;
      stroke-miterlimit: 10;
    }
    .battery-2 {
      stroke-width: 1.48px;
    }
    .battery-4 {
      fill: url(#battery-gradient-2);
    }
    .battery-5 {
      stroke-width: 0.84px;
      opacity: 0.87;
    }
    .battery-6 {
      font-size: 14.41px;
      fill: #fff;
      font-family: IRANSans;
    }
  </style>
  <linearGradient
    id="battery-gradient"
    x1="31.97"
    y1="56.52"
    x2="107.86"
    y2="56.52"
    gradientTransform="translate(-12.27 100.76) rotate(-90)"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stop-color="#f77900" />
    <stop offset="0.42" stop-color="#f77b00" />
    <stop offset="0.58" stop-color="#f88200" />
    <stop offset="0.69" stop-color="#f88d00" />
    <stop offset="0.77" stop-color="#f99e00" />
    <stop offset="0.85" stop-color="#fbb400" />
    <stop offset="0.92" stop-color="#fcd000" />
    <stop offset="0.97" stop-color="#feef00" />
    <stop offset="1" stop-color="#ff0" />
  </linearGradient>
  <linearGradient
    id="battery-gradient-2"
    x1="0"
    y1="56.52"
    x2="155.32"
    y2="56.52"
    gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
    xlink:href="#battery-gradient"
  />
</defs>
<g id="Layer_battery_2" data-name="Layer 2">
  <g id="app">
    <rect
      class="battery-1"
      x="32.35"
      y="44.24"
      width="23.79"
      height="24.55"
      rx="1.02"
      transform="translate(100.76 12.27) rotate(90)"
    />
    <path
      class="battery-2"
      d="M81.7,47.26a3.59,3.59,0,0,1,3.6,3.6V62.18a3.6,3.6,0,0,1-3.6,3.6"
    />
    <rect
      class="battery-3"
      x="27.74"
      y="40.62"
      width="53.96"
      height="31.8"
      rx="1.05"
    />
    <path
      class="battery-4"
      d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
    />
    <circle class="battery-5" cx="56.52" cy="56.52" r="47.87" />
  </g>
</g>
</svg>
<div>Battery</div>`;
let containerBluetooth = document.getElementById('icon2-container');
containerBluetooth.innerHTML = `<svg
class="public-style"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 113.04 113.45"
>
<defs>
  <style>
    .blue-connected-1 {
      fill: url(#blue-connected-gradient);
    }
    .blue-connected-2 {
      fill: url(#blue-connected-gradient-2);
    }
    .blue-connected-3 {
      fill: none;
      stroke: #fff;
      stroke-miterlimit: 10;
      stroke-width: 0.63px;
    }
    .blue-connected-4 {
      font-size: 14.41px;
      fill: #fff;
      font-family: IRANSans;
    }
    .blue-connected-5 {
      font-size: 13px;
    }
  </style>
  <linearGradient
    id="blue-connected-gradient"
    x1="36.52"
    y1="58.32"
    x2="76.52"
    y2="58.32"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stop-color="#0054ff" />
    <stop offset="0.23" stop-color="#08f" />
    <stop offset="0.48" stop-color="#0bf" />
    <stop offset="0.71" stop-color="#00e0ff" />
    <stop offset="0.89" stop-color="#00f7ff" />
    <stop offset="1" stop-color="aqua" />
  </linearGradient>
  <linearGradient
    id="blue-connected-gradient-2"
    x1="27.44"
    y1="39.2"
    x2="124.54"
    y2="97.03"
    xlink:href="#blue-connected-gradient"
  />
</defs>
<g id="Layer_2" data-name="Layer 2">
  <g id="app">
    <g id="Bluetooth_connected" data-name="Bluetooth connected">
      <path
        class="blue-connected-1"
        d="M45.41,58.32,41,53.88l-4.44,4.44L41,62.77Zm23.8-9.53L56.52,36.1H54.3V53L44.1,42.76,41,45.9,53.38,58.32,41,70.74l3.14,3.14,10.2-10.2V80.54h2.22L69.21,67.85l-9.56-9.53ZM58.74,44.61l4.18,4.18L58.74,53Zm4.18,23.24L58.74,72V63.68Zm9.16-14-4.45,4.44,4.45,4.45,4.44-4.45Z"
      />
      <path
        class="blue-connected-2"
        d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
      />
      <circle
        class="blue-connected-3"
        cx="56.52"
        cy="56.52"
        r="47.87"
      />
    </g>
  </g>
</g>
</svg>
<div>Bluetooth connected</div>`;
let containerFreefall = document.getElementById('icon3-container');
containerFreefall.innerHTML = `<svg
class="public-style"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 113.04 113.23"
>
<defs>
  <style>
    .cls-1 {
      fill: url(#fall-gradient);
    }
    .cls-2 {
      fill: none;
      stroke: red;
      stroke-miterlimit: 10;
      stroke-width: 0.84px;
    }
    .cls-3 {
      fill: url(#fall-gradient-2);
    }
    .cls-4 {
      fill: url(#fall-gradient-3);
    }
    .cls-5 {
      fill: red;
    }
    .cls-6 {
      display: none;
      font-size: 14.41px;
      fill: #fff;
      font-family: IRANSans;
    }
  </style>
  <linearGradient
    id="fall-gradient"
    x1="17.26"
    y1="30.49"
    x2="111.44"
    y2="92.94"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.02" stop-color="#ed1c24" />
    <stop offset="1" stop-color="red" />
  </linearGradient>
  <linearGradient
    id="fall-gradient-2"
    x1="35.86"
    y1="61.14"
    x2="76.48"
    y2="61.14"
    xlink:href="#fall-gradient"
  />
  <linearGradient
    id="fall-gradient-3"
    x1="68.37"
    y1="77.44"
    x2="79.2"
    y2="77.44"
    xlink:href="#fall-gradient"
  />
</defs>
<g id="Layer_2" data-name="Layer 2">
  <g id="app">
    <g id="Free_fall_ON" data-name="Free fall ON">
      <path
        class="cls-1"
        d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
      />
      <circle class="cls-2" cx="56.52" cy="56.52" r="47.87" />
      <path
        class="cls-3"
        d="M65.67,64.86l-7.14-5c1.16-2,2.35-3.88,3.36-5.84a7.39,7.39,0,0,0,.85-3c.1-3.05,0-6.1,0-9.14a2.18,2.18,0,0,0-2.44-2.39c-1.94,0-2.88.71-2.89,2.36,0,2.85,0,5.69,0,8.53a2.15,2.15,0,0,1-.14,1c-1.68,3-3.4,5.91-5.19,9-.37-.89-.67-1.73-1.05-2.53-.73-1.53-1.46-3.06-2.28-4.54a2.76,2.76,0,0,0-1.18-.93q-3.87-2-7.76-4c-1.59-.81-2.63-.46-3.44,1.13-.92,1.79-.65,2.75,1,3.62,2.25,1.16,4.52,2.27,6.75,3.47a2.74,2.74,0,0,1,1.1,1.21c.85,1.91,1.69,3.82,2.35,5.79a7,7,0,0,0,2.91,3.66C54,69.67,57.41,72.11,61,74.65c-1.79.84-3.46,1.65-5.15,2.39-.19.08-.56-.16-.8-.32-1.8-1.24-3.59-2.51-5.39-3.76s-2.69-1-3.86.65-.83,2.58.86,3.76c2.19,1.53,4.43,3,6.54,4.61a3.43,3.43,0,0,0,3.82.41q4.31-2,8.54-4a3.24,3.24,0,0,0,1.09-1c1.46-2.08,2.93-4.15,4.31-6.29A3.62,3.62,0,0,0,71.55,69c-.2-2.34-.59-4.68-.84-7a1.91,1.91,0,0,1,.34-1.28c1.55-2,3.17-4,4.76-5.93a2.15,2.15,0,0,0-.33-3.38c-1.56-1.31-2.64-1.36-3.71-.06-2.08,2.5-4.14,5-6.14,7.58a2.78,2.78,0,0,0-.42,1.72C65.27,62,65.49,63.3,65.67,64.86Z"
      />
      <path
        class="cls-4"
        d="M73.78,72a5.42,5.42,0,0,0,0,10.84,5.42,5.42,0,1,0,0-10.84Z"
      />
      <path
        class="cls-5"
        d="M43.38,26.3c.17,2.14.25,4.28.32,6.42s.06,4.27.1,6.41,0,4.28-.1,6.42-.15,4.27-.32,6.41c-.18-2.14-.26-4.28-.32-6.41S43,41.27,43,39.13s0-4.28.1-6.41S43.21,28.44,43.38,26.3Z"
      />
      <path
        class="cls-5"
        d="M79.09,47c.18,2.14.26,4.28.33,6.42s.06,4.27.09,6.41,0,4.28-.09,6.41-.15,4.28-.33,6.42c-.17-2.14-.25-4.28-.32-6.42s-.06-4.27-.1-6.41,0-4.28.1-6.41S78.92,49.16,79.09,47Z"
      />
      <path
        class="cls-5"
        d="M55.17,23.38c.14,1.36.21,2.72.26,4.08s0,2.72.08,4.09,0,2.72-.08,4.08-.12,2.72-.26,4.08C55,38.35,55,37,54.91,35.63s0-2.72-.07-4.08,0-2.73.07-4.09S55,24.74,55.17,23.38Z"
      />
    </g>
  </g>
</g>
</svg>
<div>Free fall</div>`;
let containerWalking = document.getElementById('icon4-container');
containerWalking.innerHTML = `<svg
class="public-style"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 113.04 113.23"
>
<defs>
  <style>
    .walking-1 {
      fill: url(#walking-gradient);
    }
    .walking-2 {
      fill: none;
      stroke: #fff;
      stroke-miterlimit: 10;
      stroke-width: 0.63px;
    }
    .walking-3 {
      fill: url(#walking-gradient-2);
    }
    .walking-4 {
      font-size: 14.41px;
      fill: #fff;
      font-family: IRANSans;
    }
  </style>
  <linearGradient
    id="walking-gradient"
    x1="-16.87"
    y1="56.52"
    x2="170.83"
    y2="56.52"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.02" stop-color="#45ffc1" />
    <stop offset="0.07" stop-color="#3cffb6" />
    <stop offset="0.22" stop-color="#27ff99" />
    <stop offset="0.38" stop-color="#16ff82" />
    <stop offset="0.55" stop-color="#09ff72" />
    <stop offset="0.74" stop-color="#02ff69" />
    <stop offset="1" stop-color="#0f6" />
  </linearGradient>
  <linearGradient
    id="walking-gradient-2"
    x1="20.87"
    y1="55.52"
    x2="60.19"
    y2="55.52"
    xlink:href="#walking-gradient"
  />
</defs>
<g id="Layer_2" data-name="Layer 2">
  <g id="app">
    <g id="walking">
      <path
        class="walking-1"
        d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
      />
      <circle class="walking-2" cx="56.52" cy="56.52" r="47.87" />
      <path
        class="walking-3"
        d="M61.56,35.11a6,6,0,1,0-6.05-6.05A6.08,6.08,0,0,0,61.56,35.11ZM50.37,45.39,41.9,88h6.35l5.44-24.2,6.35,6V88h6.05V65.35l-6.35-6,1.82-9.07a22.13,22.13,0,0,0,16.63,7.56v-6a14.85,14.85,0,0,1-13-7.26l-3-4.84a6.24,6.24,0,0,0-5.14-3c-.91,0-1.51.3-2.42.3L38.87,43.57V57.79h6.05V47.51l5.45-2.12"
      />
    </g>
  </g>
</g>
</svg>
<div>Walking</div>`;