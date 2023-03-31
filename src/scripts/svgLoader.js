let containerBattery = document.getElementById('icon1-container');
export const setBattery = (batteryEnergy) => {
  if (batteryEnergy == 1) {
    containerBattery.innerHTML = `<svg
      class="public-style"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 113.04 113.03"
    >
      <defs>
        <style>
          .battery-1-1 {
            fill: url(#battery-1-gradient);
          }
          .battery-1-2,
          .battery-1-3,
          .battery-1-5 {
            fill: none;
            stroke: #fff;
            stroke-miterlimit: 10;
          }
          .battery-1-3 {
            stroke-width: 1.48px;
          }
          .battery-1-4 {
            fill: url(#battery-1-gradient-2);
          }
          .battery-1-5 {
            stroke-width: 0.84px;
            opacity: 0.87;
          }
          .battery-1-6 {
            font-size: 14.41px;
            fill: #fff;
            font-family: IRANSans;
          }
        </style>
        <linearGradient
          id="battery-1-gradient"
          x1="31.97"
          y1="56.52"
          x2="69.92"
          y2="56.52"
          gradientTransform="translate(-18.41 94.63) rotate(-90)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#ed1c24" />
          <stop offset="0.01" stop-color="#ed1c24" />
          <stop offset="1" stop-color="#ed1c24" />
        </linearGradient>
        <linearGradient
          id="battery-1-gradient-2"
          x1="0"
          y1="56.52"
          x2="113.04"
          y2="56.52"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#battery-1-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="app">
          <g id="Battery_low" data-name="Battery low">
            <rect
              class="battery-1-1"
              x="26.21"
              y="50.38"
              width="23.79"
              height="12.27"
              rx="0.72"
              transform="translate(94.63 18.41) rotate(90)"
            />
            <rect
              class="battery-1-2"
              x="27.74"
              y="40.62"
              width="53.96"
              height="31.8"
              rx="1.05"
            />
            <path
              class="battery-1-3"
              d="M81.7,47.26a3.59,3.59,0,0,1,3.6,3.6V62.18a3.6,3.6,0,0,1-3.6,3.6"
            />
            <path
              class="battery-1-4"
              d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
            />
            <circle class="battery-1-5" cx="56.52" cy="56.52" r="47.87" />
          </g>
        </g>
      </g>
    </svg>
    <div>Battery</div>`
  }
  else if (batteryEnergy == 2) {
    containerBattery.innerHTML = `<svg
      class="public-style"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 113.04 113.03"
      >
      <defs>
        <style>
          .battery-2-1 {
            fill: url(#battery-2-gradient);
          }
          .battery-2-2,
          .battery-2-3,
          .battery-2-5 {
            fill: none;
            stroke: #fff;
            stroke-miterlimit: 10;
          }
          .battery-2-2 {
            stroke-width: 1.48px;
          }
          .battery-2-4 {
            fill: url(#battery-2-gradient-2);
          }
          .battery-2-5 {
            stroke-width: 0.84px;
            opacity: 0.87;
          }
          .battery-2-6 {
            font-size: 14.41px;
            fill: #fff;
            font-family: IRANSans;
          }
        </style>
        <linearGradient
          id="battery-2-gradient"
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
          id="battery-2-gradient-2"
          x1="0"
          y1="56.52"
          x2="155.32"
          y2="56.52"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#battery-2-gradient"
        />
      </defs>
      <g id="Layer_battery_2" data-name="Layer 2">
        <g id="app">
          <rect
            class="battery-2-1"
            x="32.35"
            y="44.24"
            width="23.79"
            height="24.55"
            rx="1.02"
            transform="translate(100.76 12.27) rotate(90)"
          />
          <path
            class="battery-2-2"
            d="M81.7,47.26a3.59,3.59,0,0,1,3.6,3.6V62.18a3.6,3.6,0,0,1-3.6,3.6"
          />
          <rect
            class="battery-2-3"
            x="27.74"
            y="40.62"
            width="53.96"
            height="31.8"
            rx="1.05"
          />
          <path
            class="battery-2-4"
            d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
          />
          <circle class="battery-2-5" cx="56.52" cy="56.52" r="47.87" />
        </g>
      </g>
      </svg>
      <div>Battery</div>`;
  }
  else if (batteryEnergy == 3) {
    containerBattery.innerHTML = `<svg
      class="public-style"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 113.04 113.03"
    >
      <defs>
        <style>
          .battery-3-1 {
            fill: url(#battery-3-gradient);
          }
          .battery-3-2,
          .battery-3-3,
          .battery-3-5 {
            fill: none;
            stroke: #fff;
            stroke-miterlimit: 10;
          }
          .battery-3-3 {
            stroke-width: 1.48px;
          }
          .battery-3-4 {
            fill: url(#battery-3-gradient-2);
          }
          .battery-3-5 {
            stroke-width: 0.84px;
            opacity: 0.87;
          }
        </style>
        <linearGradient
          id="battery-3-gradient"
          x1="31.97"
          y1="56.52"
          x2="66.31"
          y2="56.52"
          gradientTransform="translate(-7.38 105.66) rotate(-90)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f7931e" />
          <stop offset="0.16" stop-color="#f89a1c" />
          <stop offset="0.39" stop-color="#f9ae17" />
          <stop offset="0.66" stop-color="#fbce0e" />
          <stop offset="0.97" stop-color="#fffb01" />
          <stop offset="1" stop-color="#ff0" />
        </linearGradient>
        <linearGradient
          id="battery-3-gradient-2"
          x1="21.57"
          y1="29.06"
          x2="110.42"
          y2="98.87"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#battery-3-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="app">
          <g id="Battery_80_" data-name="Battery 80%">
            <rect
              class="battery-3-1"
              x="37.24"
              y="39.35"
              width="23.79"
              height="34.34"
              rx="1.2"
              transform="translate(105.66 7.38) rotate(90)"
            />
            <rect
              class="battery-3-2"
              x="27.74"
              y="40.62"
              width="53.96"
              height="31.8"
              rx="1.05"
            />
            <path
              class="battery-3-3"
              d="M81.7,47.26a3.59,3.59,0,0,1,3.6,3.6V62.18a3.6,3.6,0,0,1-3.6,3.6"
            />
            <path
              class="battery-3-4"
              d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
            />
            <circle class="battery-3-5" cx="56.52" cy="56.52" r="47.87" />
          </g>
        </g>
      </g>
    </svg>
    <div>Battery</div>`
  }
  else if (batteryEnergy == 4) {
    containerBattery.innerHTML = `<svg
      class="public-style"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 113.04 113.11"
      >
      <defs>
        <style>
          .battery-4-1 {
            fill: url(#battery-4-gradient);
          }
          .battery-4-2,
          .battery-4-3,
          .battery-4-5 {
            fill: none;
            stroke: #fff;
            stroke-miterlimit: 10;
          }
          .battery-4-3 {
            stroke-width: 1.48px;
          }
          .battery-4-4 {
            fill: url(#battery-4-gradient-2);
          }
          .battery-4-5 {
            stroke-width: 0.84px;
            opacity: 0.87;
          }
          .battery-4-6 {
            font-size: 14.41px;
            fill: #fff;
            font-family: IRANSans;
          }
        </style>
        <linearGradient
          id="battery-4-gradient"
          x1="31.97"
          y1="56.52"
          x2="77.9"
          y2="56.52"
          gradientTransform="translate(-1.58 111.45) rotate(-90)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#00ff4f" />
          <stop offset="0.26" stop-color="#03fe48" />
          <stop offset="0.63" stop-color="#0afb34" />
          <stop offset="1" stop-color="#14f71a" />
        </linearGradient>
        <linearGradient
          id="battery-4-gradient-2"
          x1="21.57"
          y1="29.06"
          x2="110.42"
          y2="98.87"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#battery-4-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="app">
          <g id="Battery_100_" data-name="Battery 100%">
            <rect
              class="battery-4-1"
              x="43.04"
              y="33.55"
              width="23.79"
              height="45.93"
              rx="1.39"
              transform="translate(111.45 1.58) rotate(90)"
            />
            <rect
              class="battery-4-2"
              x="27.74"
              y="40.62"
              width="53.96"
              height="31.8"
              rx="1.05"
            />
            <path
              class="battery-4-3"
              d="M81.7,47.26a3.59,3.59,0,0,1,3.6,3.6V62.18a3.6,3.6,0,0,1-3.6,3.6"
            />
            <path
              class="battery-4-4"
              d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
            />
            <circle class="battery-4-5" cx="56.52" cy="56.52" r="47.87" />
          </g>
        </g>
      </g>
    </svg>
    <div>Battery</div>`
  }
}

let containerBluetooth = document.getElementById('icon2-container');
export const setBluetooth = (bluetoothisConnected) => {
  if (bluetoothisConnected == 1) {
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
      <div>Connected</div>`;
  }
  else {
    containerBluetooth.innerHTML = `<svg 
        class="public-style"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 113.04 113.56">
        <defs>
          <style>
            .bluetooth-dis-1,
            .bluetooth-dis-3 {
              fill: #fff;
            }
            .bluetooth-dis-2 {
              fill: none;
              stroke: #fff;
              stroke-miterlimit: 10;
              stroke-width: 0.63px;
            }
            .bluetooth-dis-3 {
              font-size: 14.41px;
              font-family: IRANSans;
            }
            .bluetooth-dis-4 {
              font-size: 13px;
            }
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="app">
            <g id="Bluetooth_disconnect" data-name="Bluetooth disconnect">
              <path
                class="bluetooth-dis-1"
                d="M69.21,48.79,56.52,36.1H54.3V53L44.1,42.76,41,45.9,53.38,58.32,41,70.74l3.14,3.14,10.2-10.2V80.54h2.22L69.21,67.85l-9.56-9.53ZM58.74,44.61l4.18,4.18L58.74,53Zm4.18,23.24L58.74,72V63.68Z"
              />
              <path
                class="bluetooth-dis-1"
                d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
              />
              <circle class="bluetooth-dis-2" cx="56.52" cy="56.52" r="47.87" />
            </g>
          </g>
        </g>
      </svg>
      <div>Disconnected</div>`
  }
}

let containerWalking = document.getElementById('icon4-container');
export const setWalking = (isWalking) => {
  if (isWalking == 1) {
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
  } else {
    containerWalking.innerHTML = `<svg
      class="public-style"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 113.04 113.65"
    >
      <defs>
        <style>
          .motione-less-1 {
            fill: url(#motion-less-gradient);
          }
          .motione-less-2 {
            fill: none;
            stroke: #fff;
            stroke-miterlimit: 10;
            stroke-width: 0.63px;
          }
          .motione-less-3 {
            font-size: 14.41px;
            fill: #fff;
            font-family: IRANSans;
          }
          .motione-less-4 {
            fill: url(#motion-less-gradient-2);
          }
          .motione-less-5 {
            fill: url(#motion-less-gradient-3);
          }
        </style>
        <linearGradient
          id="motion-less-gradient"
          x1="-54.67"
          y1="56.52"
          x2="133.03"
          y2="56.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stop-color="#ff0040" />
          <stop offset="0.28" stop-color="#fd0a3f" />
          <stop offset="0.71" stop-color="#f7233b" />
          <stop offset="1" stop-color="#f33838" />
        </linearGradient>
        <linearGradient
          id="motion-less-gradient-2"
          x1="43.14"
          y1="62.82"
          x2="69.89"
          y2="62.82"
          xlink:href="#motion-less-gradient"
        />
        <linearGradient
          id="motion-less-gradient-3"
          x1="50.92"
          y1="27.96"
          x2="62.11"
          y2="27.96"
          xlink:href="#motion-less-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="buttons_mods" data-name="buttons mods">
          <g id="Motionless_mode" data-name="Motionless mode">
            <path
              class="motione-less-1"
              d="M56.52,113A56.52,56.52,0,1,1,113,56.52,56.58,56.58,0,0,1,56.52,113Zm0-109.67a53.15,53.15,0,1,0,53.15,53.15A53.21,53.21,0,0,0,56.52,3.37Z"
            />
            <circle class="motione-less-2" cx="56.52" cy="56.52" r="47.87" />
            <path
              class="motione-less-4"
              d="M49.26,43.9H48V59.26a2.46,2.46,0,0,1-1.8,2.59,2.4,2.4,0,0,1-3.07-2.39c0-3.16,0-6.33,0-9.49,0-2.55,0-5.1,0-7.65A7.12,7.12,0,0,1,50.31,35q6.25-.07,12.5,0a7.1,7.1,0,0,1,7.07,7.14c0,5.78,0,11.57,0,17.35a2.4,2.4,0,0,1-2,2.43,2.44,2.44,0,0,1-2.68-1.49A4.09,4.09,0,0,1,65,59.08c0-4.83,0-9.66,0-14.49V43.9H63.76V87.22a3.27,3.27,0,0,1-3.67,3.42,3.21,3.21,0,0,1-2.87-3.07c0-1.83,0-3.67,0-5.51V62.15H55.84v25a3.29,3.29,0,1,1-6.56.18q0-5.37,0-10.76,0-16.1,0-32.19Z"
            />
            <path
              class="motione-less-5"
              d="M62.11,28a5.6,5.6,0,1,1-5.54-5.61A5.62,5.62,0,0,1,62.11,28Z"
            />
          </g>
        </g>
      </g>
    </svg>
    <div>Motion Less</div>`
  }
}

let userSituationSvg = document.getElementById('user-situation-svg');
userSituationSvg.innerHTML = `<defs>
<style>
  .user-1 {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
  }
  .user-2 {
    fill: #fff;
    opacity: 0.14;
  }
</style>
</defs>
<g id="Layer_2" data-name="Layer 2">
<g id="app">
  <g id="Situation_NORMAL" data-name="Situation NORMAL">
    <path
      class="user-1"
      d="M15,.5a14.53,14.53,0,0,0-3.73,28.58L15,32.82l3.74-3.74A14.53,14.53,0,0,0,15,.5Zm0,3.23A4.85,4.85,0,1,1,10.2,8.58,4.84,4.84,0,0,1,15,3.73Zm0,23.11a11.63,11.63,0,0,1-9.69-5.2c.05-3.22,6.46-5,9.69-5s9.65,1.76,9.7,5A11.66,11.66,0,0,1,15,26.84Z"
    />
    <path
      class="user-2"
      d="M15,.5a14.53,14.53,0,0,0-3.73,28.58L15,32.82l3.74-3.74A14.53,14.53,0,0,0,15,.5Zm0,3.23A4.85,4.85,0,1,1,10.2,8.58,4.84,4.84,0,0,1,15,3.73Zm0,23.11a11.63,11.63,0,0,1-9.69-5.2c.05-3.22,6.46-5,9.69-5s9.65,1.76,9.7,5A11.66,11.66,0,0,1,15,26.84Z"
    />
  </g>
</g>
</g>`;
let tempraturesSvg = document.getElementsByClassName('temprature-style');
for (let i = 0; i < tempraturesSvg.length; i++) {
  tempraturesSvg[i].innerHTML = `<defs>
  <style>
    .temprature-1 {
      fill: #a00;
      opacity: 0.39;
    }
    .temprature-2 {
      fill: red;
    }
    .temprature-3,
    .temprature-4 {
      fill: none;
      stroke: #b3b3b3;
      stroke-miterlimit: 10;
    }
    .temprature-4 {
      stroke-linecap: round;
    }
  </style>
</defs>
<g id="Layer_2" data-name="Layer 2">
  <g id="app">
    <path
      class="temprature-1"
      d="M25.91,41.72A8.61,8.61,0,1,1,11.28,35.1a2.73,2.73,0,0,0,.83-1.94V15.44H22.52V21.8h0V33.16a2.74,2.74,0,0,0,.85,2A8.62,8.62,0,0,1,25.91,41.72Z"
    />
    <path class="temprature-2" d="M0,13.34l3.62,2.25L0,17.86Z" />
    <path
      class="temprature-3"
      d="M25.91,41.72A8.61,8.61,0,1,1,11.28,35.1a2.73,2.73,0,0,0,.83-1.94V5.83A5.29,5.29,0,0,1,17.24.5,5.19,5.19,0,0,1,22.5,5.7V33.16a2.74,2.74,0,0,0,.85,2A8.63,8.63,0,0,1,25.91,41.72Z"
    />
    <line
      class="temprature-4"
      x1="9.17"
      y1="33.4"
      x2="4.78"
      y2="33.4"
    />
    <line
      class="temprature-4"
      x1="9.17"
      y1="19.92"
      x2="4.78"
      y2="19.92"
    />
    <line
      class="temprature-4"
      x1="9.17"
      y1="5.06"
      x2="4.78"
      y2="5.06"
    />
    <line
      class="temprature-4"
      x1="9.17"
      y1="12.49"
      x2="6.73"
      y2="12.49"
    />
    <line
      class="temprature-4"
      x1="9.17"
      y1="26.66"
      x2="6.73"
      y2="26.66"
    />
  </g>
</g>`;
}
let heartContainer = document.getElementById('heart-icon');
heartContainer.innerHTML = `<defs>
<style>
  .heart-1 {
    fill: none;
    stroke: red;
    stroke-miterlimit: 10;
    stroke-width: 1.15px;
  }
  .heart-2 {
    opacity: 0.17;
  }
  .heart-3 {
    fill: red;
  }
  .heart-4 {
    opacity: 0.86;
  }
</style>
</defs>
<g id="Layer_2" data-name="Layer 2">
<g id="app">
  <g id="Heart_icon" data-name="Heart icon">
    <path
      class="heart-1"
      d="M30.68,20.41a7.18,7.18,0,0,1-3.42-.91c-2.52-1.69-2.72-4.44-.68-6.58s6.14-3.21,6.14-3.21V5.44l-1.45.44a36.38,36.38,0,0,0-18,12.39h0"
    />
    <path
      class="heart-1"
      d="M12.06,10.3V7.58A2.14,2.14,0,0,1,14.2,5.44h3.94V7.87"
    />
    <path
      class="heart-1"
      d="M18.14,7.87V2.4A1.82,1.82,0,0,1,20,.57h0A1.82,1.82,0,0,1,21.78,2.4V9.08"
    />
    <path
      class="heart-1"
      d="M21.78,9.08V4.83A1.82,1.82,0,0,1,23.61,3h0a1.82,1.82,0,0,1,1.82,1.82v3"
    />
    <path
      class="heart-1"
      d="M28,12.06A11.53,11.53,0,0,1,31,18.27c.7,4.22,5.7,13.91-5.34,13.91-5.9,0-16-5.35-16-13.91a9.24,9.24,0,0,1,9.61-9.63,14.22,14.22,0,0,1,4.29.64"
    />
    <g class="heart-2">
      <path
        class="heart-3"
        d="M30.68,20.41a7.18,7.18,0,0,1-3.42-.91c-2.52-1.69-2.72-4.44-.68-6.58s6.14-3.21,6.14-3.21V5.44l-1.45.44a36.38,36.38,0,0,0-18,12.39h0"
      />
      <path
        class="heart-3"
        d="M12.06,10.3V7.58A2.14,2.14,0,0,1,14.2,5.44h3.94V7.87"
      />
      <path
        class="heart-3"
        d="M18.14,7.87V2.4A1.82,1.82,0,0,1,20,.57h0A1.82,1.82,0,0,1,21.78,2.4V9.08"
      />
      <path
        class="heart-3"
        d="M21.78,9.08V4.83A1.82,1.82,0,0,1,23.61,3h0a1.82,1.82,0,0,1,1.82,1.82v3"
      />
      <path
        class="heart-3"
        d="M28,12.06A11.53,11.53,0,0,1,31,18.27c.7,4.22,5.7,13.91-5.34,13.91-5.9,0-16-5.35-16-13.91a9.24,9.24,0,0,1,9.61-9.63,14.22,14.22,0,0,1,4.29.64"
      />
    </g>
    <g class="heart-4">
      <polygon
        class="heart-3"
        points="0 36.38 9.9 36.13 9.68 36.27 11.44 32.77 11.71 32.23 11.9 32.8 13.85 38.55 13.38 38.55 15.25 32.88 15.44 32.33 15.71 32.84 17.53 36.26 17.31 36.13 23.53 36.38 17.31 36.63 17.16 36.63 17.09 36.49 15.27 33.08 15.73 33.04 13.86 38.7 13.62 39.41 13.38 38.71 11.43 32.96 11.89 32.99 10.13 36.49 10.06 36.63 9.9 36.63 0 36.38"
      />
    </g>
  </g>
</g>
</g>`;
let gasContainers = document.getElementsByClassName('gas-style');
for (let i = 0; i < gasContainers.length; i++) {
  gasContainers[i].innerHTML = `<defs>
  <style>
    .gas-1 {
      fill: none;
      stroke: #ff0;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
    .gas-2,
    .gas-3 {
      fill: #ff0;
    }
    .gas-2 {
      opacity: 0.1;
    }
    .gas-3 {
      opacity: 0.18;
    }
  </style>
</defs>
<g id="Layer_2" data-name="Layer 2">
  <g id="app">
    <line class="gas-1" x1="17.65" y1="0.5" x2="21.89" y2="0.5" />
    <path
      class="gas-2"
      d="M34.65,22.61c0,3.64-2.37,6.6-5.28,6.6H5.28c-2.92,0-5.28-3-5.28-6.6S2.36,16,5.28,16a4.59,4.59,0,0,1,3.17,1.31A4.55,4.55,0,0,1,11.61,16a3.94,3.94,0,0,1,.6,0c.58-5,4.05-8.9,8.23-8.9s7.67,3.88,8.24,8.92a3.16,3.16,0,0,1,.69-.06C32.28,16,34.65,19,34.65,22.61Z"
    />
    <path
      class="gas-3"
      d="M19.77,6.8h0a5.3,5.3,0,0,1,5.3,5.3V27.84a1.81,1.81,0,0,1-1.81,1.81h-7a1.81,1.81,0,0,1-1.81-1.81V12.1a5.3,5.3,0,0,1,5.3-5.3Z"
    />
    <line
      class="gas-1"
      x1="19.77"
      y1="3.41"
      x2="22.14"
      y2="3.41"
    />
    <line
      class="gas-1"
      x1="17.39"
      y1="5.31"
      x2="19.77"
      y2="5.31"
    />
    <line
      class="gas-1"
      x1="19.77"
      y1="0.89"
      x2="19.77"
      y2="6.8"
    />
  </g>
</g>`;
}