import React from "react";
import FacebookIcon from "../../assets/icons/FooterIcons/Facebook";
import LinkedinIcon from "../../assets/icons/FooterIcons/Linkedin";
import TwiterIcon from "../../assets/icons/FooterIcons/Twitter";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-16	px-9">
      <div class=" 	 text-gray-400">
        <div class="container px-4 mx-auto">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 my-4 w-full xl:w-2/4">
              <a href="/" class="block w-56 mb-4">
                <svg
                  width="140"
                  height="23"
                  viewBox="0 0 140 23"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.308 17.5C1.828 17.5 1.436 17.404 1.132 17.212C0.828 17.004 0.62 16.732 0.508 16.396C0.412 16.044 0.412 15.66 0.508 15.244C0.62 14.828 0.844 14.412 1.18 13.996L9.916 2.548V3.676H2.02C1.492 3.676 1.084 3.54 0.796 3.268C0.524 2.996 0.388 2.612 0.388 2.116C0.388 1.62 0.524 1.244 0.796 0.987999C1.084 0.715999 1.492 0.579999 2.02 0.579999H11.668C12.164 0.579999 12.556 0.683999 12.844 0.891999C13.148 1.084 13.356 1.348 13.468 1.684C13.58 2.02 13.58 2.404 13.468 2.836C13.356 3.252 13.132 3.668 12.796 4.084L4.06 15.508V14.404H12.34C12.868 14.404 13.268 14.54 13.54 14.812C13.828 15.068 13.972 15.444 13.972 15.94C13.972 16.452 13.828 16.844 13.54 17.116C13.268 17.372 12.868 17.5 12.34 17.5H2.308ZM18.1002 22.036C17.6842 22.036 17.3402 21.924 17.0682 21.7C16.7962 21.476 16.6362 21.18 16.5882 20.812C16.5402 20.46 16.6042 20.084 16.7802 19.684L18.3882 16.132V17.62L14.1402 7.876C13.9802 7.46 13.9242 7.076 13.9722 6.724C14.0362 6.356 14.2122 6.068 14.5002 5.86C14.8042 5.636 15.2202 5.524 15.7482 5.524C16.1802 5.524 16.5242 5.628 16.7802 5.836C17.0522 6.028 17.3002 6.404 17.5242 6.964L20.3562 14.164H19.5882L22.5162 6.94C22.7402 6.396 22.9882 6.028 23.2602 5.836C23.5482 5.628 23.9322 5.524 24.4122 5.524C24.8282 5.524 25.1562 5.636 25.3962 5.86C25.6522 6.068 25.8042 6.348 25.8522 6.7C25.9162 7.052 25.8522 7.436 25.6602 7.852L20.0202 20.644C19.7802 21.188 19.5082 21.556 19.2042 21.748C18.9162 21.94 18.5482 22.036 18.1002 22.036ZM29.5531 17.716C28.9451 17.716 28.4811 17.556 28.1611 17.236C27.8411 16.916 27.6811 16.46 27.6811 15.868V7.348C27.6811 6.756 27.8331 6.308 28.1371 6.004C28.4571 5.684 28.8971 5.524 29.4571 5.524C30.0331 5.524 30.4731 5.684 30.7771 6.004C31.0811 6.308 31.2331 6.756 31.2331 7.348V8.596H30.9931C31.1851 7.636 31.6091 6.892 32.2651 6.364C32.9211 5.836 33.7691 5.54 34.8091 5.476C35.2091 5.444 35.5131 5.548 35.7211 5.788C35.9451 6.012 36.0651 6.388 36.0811 6.916C36.1131 7.412 36.0091 7.804 35.7691 8.092C35.5451 8.38 35.1611 8.556 34.6171 8.62L34.0651 8.668C33.1531 8.748 32.4731 9.012 32.0251 9.46C31.5931 9.908 31.3771 10.556 31.3771 11.404V15.868C31.3771 16.46 31.2171 16.916 30.8971 17.236C30.5931 17.556 30.1451 17.716 29.5531 17.716ZM41.4385 17.764C40.5745 17.764 39.7985 17.596 39.1105 17.26C38.4225 16.924 37.8865 16.468 37.5025 15.892C37.1185 15.316 36.9265 14.668 36.9265 13.948C36.9265 13.084 37.1505 12.404 37.5985 11.908C38.0465 11.396 38.7745 11.036 39.7825 10.828C40.7905 10.604 42.1265 10.492 43.7905 10.492H45.0625V12.364H43.8145C42.9985 12.364 42.3345 12.412 41.8225 12.508C41.3265 12.588 40.9665 12.732 40.7425 12.94C40.5345 13.148 40.4305 13.436 40.4305 13.804C40.4305 14.252 40.5825 14.62 40.8865 14.908C41.2065 15.196 41.6625 15.34 42.2545 15.34C42.7185 15.34 43.1265 15.236 43.4785 15.028C43.8465 14.804 44.1345 14.508 44.3425 14.14C44.5505 13.756 44.6545 13.324 44.6545 12.844V10.084C44.6545 9.38 44.4945 8.884 44.1745 8.596C43.8545 8.292 43.3105 8.14 42.5425 8.14C42.1105 8.14 41.6385 8.196 41.1265 8.308C40.6305 8.404 40.0785 8.572 39.4705 8.812C39.1185 8.972 38.8065 9.012 38.5345 8.932C38.2625 8.836 38.0545 8.676 37.9105 8.452C37.7665 8.212 37.6945 7.956 37.6945 7.684C37.6945 7.396 37.7745 7.124 37.9345 6.868C38.0945 6.596 38.3585 6.396 38.7265 6.268C39.4785 5.964 40.1825 5.756 40.8385 5.644C41.5105 5.532 42.1265 5.476 42.6865 5.476C43.9185 5.476 44.9265 5.66 45.7105 6.028C46.5105 6.38 47.1105 6.932 47.5105 7.684C47.9105 8.42 48.1105 9.372 48.1105 10.54V15.868C48.1105 16.46 47.9665 16.916 47.6785 17.236C47.3905 17.556 46.9745 17.716 46.4305 17.716C45.8865 17.716 45.4625 17.556 45.1585 17.236C44.8705 16.916 44.7265 16.46 44.7265 15.868V14.98L44.8945 15.124C44.7985 15.668 44.5905 16.14 44.2705 16.54C43.9665 16.924 43.5745 17.228 43.0945 17.452C42.6145 17.66 42.0625 17.764 41.4385 17.764ZM52.9979 17.716C52.3899 17.716 51.9259 17.548 51.6059 17.212C51.2859 16.876 51.1259 16.404 51.1259 15.796V2.284C51.1259 1.676 51.2859 1.204 51.6059 0.868C51.9259 0.531999 52.3899 0.363999 52.9979 0.363999C53.5899 0.363999 54.0459 0.531999 54.3659 0.868C54.6859 1.204 54.8459 1.676 54.8459 2.284V7.372H62.7179V2.284C62.7179 1.676 62.8779 1.204 63.1979 0.868C63.5179 0.531999 63.9739 0.363999 64.5659 0.363999C65.1739 0.363999 65.6379 0.531999 65.9579 0.868C66.2779 1.204 66.4379 1.676 66.4379 2.284V15.796C66.4379 16.404 66.2779 16.876 65.9579 17.212C65.6379 17.548 65.1739 17.716 64.5659 17.716C63.9739 17.716 63.5179 17.548 63.1979 17.212C62.8779 16.876 62.7179 16.404 62.7179 15.796V10.468H54.8459V15.796C54.8459 16.404 54.6859 16.876 54.3659 17.212C54.0619 17.548 53.6059 17.716 52.9979 17.716ZM75.6604 17.764C74.2684 17.764 73.0684 17.516 72.0604 17.02C71.0684 16.508 70.3004 15.796 69.7564 14.884C69.2284 13.956 68.9644 12.868 68.9644 11.62C68.9644 10.404 69.2204 9.34 69.7324 8.428C70.2444 7.5 70.9564 6.78 71.8684 6.268C72.7964 5.74 73.8444 5.476 75.0124 5.476C75.8604 5.476 76.6284 5.62 77.3164 5.908C78.0044 6.18 78.5964 6.58 79.0924 7.108C79.5884 7.62 79.9644 8.252 80.2204 9.004C80.4764 9.74 80.6044 10.564 80.6044 11.476C80.6044 11.78 80.5084 12.012 80.3164 12.172C80.1244 12.316 79.8444 12.388 79.4764 12.388H71.9404V10.516H77.9884L77.6044 10.852C77.6044 10.196 77.5084 9.652 77.3164 9.22C77.1244 8.772 76.8444 8.436 76.4764 8.212C76.1244 7.988 75.6844 7.876 75.1564 7.876C74.5644 7.876 74.0604 8.012 73.6444 8.284C73.2284 8.556 72.9084 8.948 72.6844 9.46C72.4604 9.972 72.3484 10.588 72.3484 11.308V11.5C72.3484 12.716 72.6284 13.612 73.1884 14.188C73.7644 14.764 74.6124 15.052 75.7324 15.052C76.1164 15.052 76.5564 15.004 77.0524 14.908C77.5484 14.812 78.0124 14.66 78.4444 14.452C78.8124 14.276 79.1404 14.22 79.4284 14.284C79.7164 14.332 79.9404 14.46 80.1004 14.668C80.2604 14.876 80.3484 15.116 80.3644 15.388C80.3964 15.66 80.3404 15.932 80.1964 16.204C80.0524 16.46 79.8124 16.676 79.4764 16.852C78.9324 17.156 78.3164 17.38 77.6284 17.524C76.9564 17.684 76.3004 17.764 75.6604 17.764ZM86.6963 17.764C85.8323 17.764 85.0563 17.596 84.3683 17.26C83.6803 16.924 83.1443 16.468 82.7603 15.892C82.3763 15.316 82.1843 14.668 82.1843 13.948C82.1843 13.084 82.4083 12.404 82.8563 11.908C83.3043 11.396 84.0323 11.036 85.0403 10.828C86.0483 10.604 87.3843 10.492 89.0483 10.492H90.3203V12.364H89.0723C88.2563 12.364 87.5923 12.412 87.0803 12.508C86.5843 12.588 86.2243 12.732 86.0003 12.94C85.7923 13.148 85.6883 13.436 85.6883 13.804C85.6883 14.252 85.8403 14.62 86.1443 14.908C86.4643 15.196 86.9203 15.34 87.5123 15.34C87.9763 15.34 88.3843 15.236 88.7363 15.028C89.1043 14.804 89.3923 14.508 89.6003 14.14C89.8083 13.756 89.9123 13.324 89.9123 12.844V10.084C89.9123 9.38 89.7523 8.884 89.4323 8.596C89.1123 8.292 88.5683 8.14 87.8003 8.14C87.3683 8.14 86.8963 8.196 86.3843 8.308C85.8883 8.404 85.3363 8.572 84.7283 8.812C84.3763 8.972 84.0643 9.012 83.7923 8.932C83.5203 8.836 83.3123 8.676 83.1683 8.452C83.0243 8.212 82.9523 7.956 82.9523 7.684C82.9523 7.396 83.0323 7.124 83.1923 6.868C83.3523 6.596 83.6163 6.396 83.9843 6.268C84.7363 5.964 85.4403 5.756 86.0963 5.644C86.7683 5.532 87.3843 5.476 87.9443 5.476C89.1763 5.476 90.1843 5.66 90.9683 6.028C91.7683 6.38 92.3683 6.932 92.7683 7.684C93.1683 8.42 93.3683 9.372 93.3683 10.54V15.868C93.3683 16.46 93.2243 16.916 92.9363 17.236C92.6483 17.556 92.2323 17.716 91.6883 17.716C91.1443 17.716 90.7203 17.556 90.4163 17.236C90.1283 16.916 89.9843 16.46 89.9843 15.868V14.98L90.1523 15.124C90.0563 15.668 89.8483 16.14 89.5283 16.54C89.2243 16.924 88.8323 17.228 88.3523 17.452C87.8723 17.66 87.3203 17.764 86.6963 17.764ZM100.32 17.764C98.8957 17.764 97.8317 17.372 97.1277 16.588C96.4237 15.788 96.0717 14.604 96.0717 13.036V2.212C96.0717 1.604 96.2237 1.148 96.5277 0.844C96.8477 0.523999 97.3037 0.363999 97.8957 0.363999C98.4717 0.363999 98.9117 0.523999 99.2157 0.844C99.5357 1.148 99.6957 1.604 99.6957 2.212V12.892C99.6957 13.548 99.8317 14.036 100.104 14.356C100.392 14.66 100.768 14.812 101.232 14.812C101.36 14.812 101.48 14.804 101.592 14.788C101.704 14.772 101.824 14.764 101.952 14.764C102.208 14.732 102.384 14.812 102.48 15.004C102.592 15.18 102.648 15.54 102.648 16.084C102.648 16.564 102.552 16.932 102.36 17.188C102.168 17.428 101.872 17.588 101.472 17.668C101.312 17.684 101.128 17.7 100.92 17.716C100.712 17.748 100.512 17.764 100.32 17.764ZM109.496 17.764C108.392 17.764 107.464 17.58 106.712 17.212C105.976 16.844 105.424 16.308 105.056 15.604C104.704 14.9 104.528 14.012 104.528 12.94V8.428H103.52C103.072 8.428 102.72 8.308 102.464 8.068C102.224 7.828 102.104 7.5 102.104 7.084C102.104 6.636 102.224 6.3 102.464 6.076C102.72 5.836 103.072 5.716 103.52 5.716H104.528V3.892C104.528 3.284 104.688 2.828 105.008 2.524C105.328 2.204 105.776 2.044 106.352 2.044C106.944 2.044 107.392 2.204 107.696 2.524C108 2.828 108.152 3.284 108.152 3.892V5.716H110.432C110.88 5.716 111.224 5.836 111.464 6.076C111.704 6.3 111.824 6.636 111.824 7.084C111.824 7.5 111.704 7.828 111.464 8.068C111.224 8.308 110.88 8.428 110.432 8.428H108.152V12.796C108.152 13.468 108.304 13.972 108.608 14.308C108.928 14.644 109.432 14.812 110.12 14.812C110.36 14.812 110.584 14.788 110.792 14.74C111 14.692 111.192 14.66 111.368 14.644C111.592 14.628 111.776 14.7 111.92 14.86C112.064 15.004 112.136 15.332 112.136 15.844C112.136 16.228 112.072 16.564 111.944 16.852C111.816 17.14 111.592 17.348 111.272 17.476C111.064 17.556 110.776 17.62 110.408 17.668C110.056 17.732 109.752 17.764 109.496 17.764ZM115.614 17.716C115.022 17.716 114.566 17.556 114.246 17.236C113.942 16.916 113.79 16.46 113.79 15.868V2.212C113.79 1.604 113.942 1.148 114.246 0.844C114.566 0.523999 115.022 0.363999 115.614 0.363999C116.19 0.363999 116.63 0.523999 116.934 0.844C117.254 1.148 117.414 1.604 117.414 2.212V7.924H117.078C117.446 7.14 117.99 6.54 118.71 6.124C119.446 5.692 120.278 5.476 121.206 5.476C122.15 5.476 122.926 5.66 123.534 6.028C124.142 6.38 124.598 6.924 124.902 7.66C125.206 8.38 125.358 9.3 125.358 10.42V15.868C125.358 16.46 125.198 16.916 124.878 17.236C124.574 17.556 124.126 17.716 123.534 17.716C122.958 17.716 122.51 17.556 122.19 17.236C121.886 16.916 121.734 16.46 121.734 15.868V10.588C121.734 9.772 121.582 9.188 121.278 8.836C120.99 8.468 120.542 8.284 119.934 8.284C119.166 8.284 118.55 8.524 118.086 9.004C117.638 9.484 117.414 10.124 117.414 10.924V15.868C117.414 17.1 116.814 17.716 115.614 17.716ZM133.872 16.756C133.456 16.756 133.136 16.644 132.912 16.42C132.688 16.18 132.576 15.852 132.576 15.436V11.86H129.072C128.672 11.86 128.36 11.756 128.136 11.548C127.912 11.324 127.8 11.012 127.8 10.612C127.8 10.212 127.912 9.908 128.136 9.7C128.36 9.476 128.672 9.364 129.072 9.364H132.576V5.932C132.576 5.5 132.688 5.172 132.912 4.948C133.136 4.724 133.464 4.612 133.896 4.612C134.312 4.612 134.624 4.724 134.832 4.948C135.056 5.172 135.168 5.5 135.168 5.932V9.364H138.672C139.088 9.364 139.4 9.476 139.608 9.7C139.832 9.908 139.944 10.212 139.944 10.612C139.944 11.012 139.832 11.324 139.608 11.548C139.4 11.756 139.088 11.86 138.672 11.86H135.168V15.436C135.168 15.852 135.056 16.18 134.832 16.42C134.624 16.644 134.304 16.756 133.872 16.756Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div>
                <p class="text-justify text-sm	font-medium	text-white">
                  At ZyraHealth, we're inspired by the strength and resilience
                  of families who choose to age in their homes, where every
                  memory and every familiar corner holds meaning. Aging in place
                  is more than just staying home—it’s about preserving dignity,
                  independence, and the love that defines us. Our mission is to
                  make that choice easier for families, providing the support
                  they need to navigate this journey with confidence and peace
                  of mind. We're not just imagining a future where aging in your
                  home is possible—we're creating a movement to reshape
                  healthcare, so seniors can live with grace, and society
                  embraces this important stage of life. Together, we can build
                  a world where aging in your home is at the heart of a more
                  caring, connected community.
                </p>
                <div className="flex gap-11	items-center mt-5 cursor-pointer">
                  <LinkedinIcon />
                  <FacebookIcon />
                  <LinkedinIcon />
                </div>
              </div>
            </div>

            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg	">
                  Find help (1/2)
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-white	">
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Personal care
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Home maintenance
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Transportation
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Moving and storage
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Wellness
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg ">
                  Find help (2/2)
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-white">
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Medical equipment
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Professional services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Pet care
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    End-of-life planning
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg ">
                  Take action
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-white">
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Find help
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Become a partner
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Resources
                  </a>
                </li>
                <li>
                  <Link to="/guiding-hero" class="hover:text-blue-400">
                    Guiding principles
                  </Link>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-400">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" md:flex md:flex-grow justify-center mt-10	py-5	border-t border-b border-white">
        <ul class="flex justify-center space-x-4 text-base	font-semibold	 text-white">
          <li>
            <a href="#" class="hover:text-secondary ">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-secondary">
              Site map
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-secondary ">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-secondary ">
              Terms of use
            </a>
          </li>
        </ul>
      </div>
      <div class=" py-4 text-gray-100">
        <div class="container mx-auto px-4">
          <div class=" flex flex-col items-center flex-wrap justify-between gap-2">
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ in Boston
            </div>
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              2024 ZyraHealth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
