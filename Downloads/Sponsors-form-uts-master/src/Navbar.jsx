
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect  } from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  
  const [nav, setNav] = useState(true);
  useEffect(() => {
    const storedIsOpen = sessionStorage.getItem('navbarIsOpen');
    if (storedIsOpen !== null ) {
        setNav(JSON.parse(storedIsOpen));
    }
   
}, []);
  const handleNav = () => {
    setNav(!nav);
    sessionStorage.setItem('navbarIsOpen', JSON.stringify(!nav));
}
  return (
    <div>
       <nav className="navbar-class">
      <div className=" flex justify-between text-center bg-[#fff] md:m-0 m-8  p-4 md:p-6 md:px-16 px-2 w- md:w-full"> 
     <svg width="219" height="64" viewBox="0 0 219 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[219px] w-[100px] cursor-pointer " >
<g clipPath="url(#clip0_170_344)">
<path d="M44.9764 38.5696L44.7539 39.4151L44.9764 38.5696Z" fill="#606060"/>
<path d="M36.8765 14.0042V31.3601C36.8765 40.2161 29.8896 47.4254 21.0781 47.7815V14.0042H36.8765Z" fill="#973AE0"/>
<path d="M19.7876 14.0042V47.826C10.9761 47.4699 3.98926 40.2161 3.98926 31.3601V14.0042H19.7876Z" fill="#00ADFF"/>
<path d="M57.6591 31.8942C66.6931 31.8942 74.036 39.2371 74.036 48.271V48.182H41.2822V48.271C41.2822 39.2371 48.5806 31.8942 57.6591 31.8942Z" fill="#FFD100"/>
<path d="M74.081 13.8706H41.2383V30.4255H74.081V13.8706Z" fill="#FF0056"/>
<path d="M109.771 30.4255H85.2062C80.6224 30.4255 76.9287 26.7318 76.9287 22.148C76.9287 17.5643 80.6224 13.8706 85.2062 13.8706H109.771V30.4255Z" fill="#FF6B00"/>
<path d="M76.9287 31.7159H101.494C106.078 31.7159 109.771 35.4096 109.771 39.9934C109.771 44.5771 106.078 48.2708 101.494 48.2708H76.9287V31.7159Z" fill="#00B66C"/>
<path d="M121.342 27.2659C120.452 27.2659 119.651 27.0879 118.983 26.6874C118.271 26.2868 117.737 25.7973 117.337 25.1298C116.936 24.4622 116.714 23.7057 116.714 22.8602V15.9623H118.805V22.7266C118.805 23.2162 118.939 23.6612 119.161 24.0617C119.384 24.4622 119.696 24.7738 120.096 24.9963C120.497 25.2188 120.897 25.3523 121.342 25.3523C121.832 25.3523 122.277 25.2188 122.677 24.9963C123.078 24.7738 123.389 24.4622 123.612 24.0617C123.834 23.6612 123.968 23.2162 123.968 22.7266V15.9623H125.97V22.9047C125.97 23.7502 125.748 24.5067 125.347 25.1743C124.947 25.8418 124.413 26.3758 123.701 26.7319C123.033 27.0879 122.232 27.2659 121.342 27.2659Z" fill="#322355"/>
<path d="M128.507 27.177V18.7216H130.42L130.465 20.4572L130.109 20.6352C130.198 20.2347 130.42 19.9232 130.732 19.5671C131.043 19.2111 131.399 18.9886 131.845 18.8106C132.29 18.6326 132.69 18.5436 133.18 18.5436C133.803 18.5436 134.337 18.6771 134.782 18.9441C135.227 19.2111 135.538 19.5671 135.761 20.1012C135.983 20.6352 136.072 21.2582 136.072 22.0148V27.177H134.114V22.1483C134.114 21.7032 134.07 21.3472 133.936 21.0802C133.803 20.8132 133.625 20.5907 133.402 20.4572C133.135 20.3237 132.868 20.2792 132.512 20.2792C132.245 20.2792 131.978 20.3237 131.711 20.4127C131.444 20.5017 131.266 20.6352 131.088 20.8132C130.91 20.9912 130.776 21.1692 130.687 21.3917C130.598 21.6142 130.554 21.8368 130.554 22.1038V27.177H129.486C129.308 27.177 129.13 27.177 128.952 27.177C128.774 27.177 128.64 27.177 128.507 27.177Z" fill="#322355" />
<path d="M139.455 16.9414C139.055 16.9414 138.743 16.8524 138.52 16.6299C138.298 16.4074 138.209 16.1404 138.209 15.7844C138.209 15.4284 138.342 15.1613 138.565 14.9388C138.788 14.7163 139.099 14.6273 139.5 14.6273C139.9 14.6273 140.212 14.7163 140.434 14.9388C140.657 15.1168 140.746 15.4284 140.746 15.7844C140.746 16.0959 140.612 16.4074 140.39 16.5854C140.167 16.7634 139.856 16.9414 139.455 16.9414ZM138.476 27.177V18.7215H140.434V27.177H138.476Z" fill="#322355"/>
<path d="M142.97 27.177V15.3394H144.972V27.177H142.97Z" fill="#322355"/>
<path d="M151.159 27.3551C150.313 27.3551 149.557 27.177 148.889 26.7765C148.222 26.376 147.687 25.8865 147.331 25.2189C146.975 24.5514 146.753 23.7949 146.753 22.9493C146.753 22.1038 146.931 21.3472 147.331 20.6797C147.732 20.0122 148.222 19.4781 148.889 19.1221C149.557 18.7216 150.313 18.5436 151.159 18.5436C152.004 18.5436 152.761 18.7216 153.384 19.1221C154.007 19.5226 154.585 20.0122 154.941 20.6797C155.342 21.3472 155.52 22.1038 155.52 22.9493C155.52 23.7949 155.342 24.5514 154.941 25.2189C154.541 25.8865 154.051 26.4205 153.384 26.7765C152.716 27.1325 151.96 27.3551 151.159 27.3551ZM151.159 25.575C151.604 25.575 152.049 25.4415 152.405 25.2189C152.761 24.9964 153.028 24.6849 153.25 24.2844C153.473 23.8839 153.562 23.4388 153.562 22.9493C153.562 22.4153 153.473 21.9703 153.25 21.5697C153.028 21.1692 152.761 20.8577 152.405 20.6352C152.049 20.4127 151.648 20.2792 151.159 20.2792C150.669 20.2792 150.269 20.4127 149.913 20.6352C149.557 20.8577 149.245 21.1692 149.067 21.5697C148.845 21.9703 148.756 22.4153 148.756 22.9048C148.756 23.3943 148.845 23.8394 149.067 24.2399C149.29 24.6404 149.557 24.9519 149.913 25.1744C150.269 25.486 150.669 25.575 151.159 25.575Z" fill="#322355"/>
<path d="M157.3 27.177V18.7215H159.258L159.302 21.3917L159.035 20.7686C159.169 20.3236 159.347 19.9676 159.658 19.6116C159.925 19.2556 160.281 18.9885 160.637 18.8105C161.038 18.6325 161.394 18.499 161.839 18.499C162.017 18.499 162.195 18.499 162.373 18.5435C162.551 18.588 162.685 18.6325 162.774 18.677L162.24 20.8576C162.106 20.8131 161.973 20.7241 161.795 20.6796C161.617 20.6351 161.439 20.6351 161.261 20.6351C160.993 20.6351 160.726 20.6796 160.504 20.7686C160.281 20.8577 160.059 20.9912 159.881 21.2137C159.703 21.3917 159.569 21.6142 159.436 21.8367C159.347 22.0592 159.302 22.3262 159.302 22.6377V27.1325H157.3V27.177Z" fill="#322355"/>
<path d="M165.222 16.9414C164.821 16.9414 164.51 16.8524 164.287 16.6299C164.065 16.4074 163.976 16.1404 163.976 15.7844C163.976 15.4284 164.109 15.1613 164.332 14.9388C164.554 14.7163 164.866 14.6273 165.266 14.6273C165.667 14.6273 165.978 14.7163 166.201 14.9388C166.423 15.1168 166.512 15.4284 166.512 15.7844C166.512 16.0959 166.379 16.4074 166.156 16.5854C165.934 16.7634 165.622 16.9414 165.222 16.9414ZM164.243 27.177V18.7215H166.201V27.177H164.243Z" fill="#322355"/>
<path d="M168.737 27.177V18.7216H170.651L170.695 20.4572L170.339 20.6352C170.428 20.2347 170.651 19.9232 170.962 19.5671C171.274 19.2111 171.63 18.9886 172.075 18.8106C172.52 18.6326 172.921 18.5436 173.41 18.5436C174.033 18.5436 174.567 18.6771 175.012 18.9441C175.457 19.2111 175.769 19.5671 175.991 20.1012C176.214 20.6352 176.303 21.2582 176.303 22.0148V27.177H174.345V22.1483C174.345 21.7032 174.3 21.3472 174.167 21.0802C174.033 20.8132 173.855 20.5907 173.633 20.4572C173.366 20.3237 173.099 20.2792 172.743 20.2792C172.476 20.2792 172.208 20.3237 171.941 20.4127C171.674 20.5017 171.496 20.6352 171.318 20.8132C171.14 20.9912 171.007 21.1692 170.918 21.3917C170.829 21.6142 170.784 21.8368 170.784 22.1038V27.177H169.805C169.627 27.177 169.449 27.177 169.271 27.177C169.093 27.177 168.871 27.177 168.737 27.177Z" fill="#322355" />
<path d="M117.292 37.6797V35.8551H122.766V37.6797H117.292ZM118.983 44.3106V33.719H120.941V44.3106H118.983Z" fill="#322355"/>
<path d="M128.239 44.4886C127.349 44.4886 126.548 44.3106 125.881 43.9101C125.213 43.554 124.679 43.02 124.279 42.397C123.878 41.7295 123.7 41.0174 123.7 40.1719C123.7 39.5043 123.789 38.9258 124.012 38.3473C124.234 37.8132 124.501 37.3237 124.902 36.9232C125.302 36.5227 125.747 36.2112 126.281 35.9886C126.815 35.7661 127.394 35.6771 128.017 35.6771C128.551 35.6771 129.085 35.7661 129.575 35.9886C130.064 36.2112 130.465 36.4782 130.821 36.8787C131.177 37.2347 131.444 37.6797 131.622 38.2138C131.8 38.7033 131.889 39.2818 131.889 39.8603V40.5279H125.035L124.679 39.1928H130.242L129.975 39.4598V39.1038C129.931 38.7923 129.842 38.4808 129.664 38.2138C129.486 37.9467 129.263 37.7687 128.951 37.6352C128.684 37.5017 128.373 37.4127 128.017 37.4127C127.483 37.4127 127.038 37.5017 126.682 37.7242C126.326 37.9467 126.059 38.2138 125.881 
38.6143C125.703 39.0148 125.614 39.4598 125.614 40.0384C125.614 40.5724 125.747 41.0619 125.97 41.4624C126.192 41.863 126.504 42.1745 126.949 42.397C127.349 42.6195 127.883 42.7085 128.417 42.7085C128.818 42.7085 129.174 42.664 129.486 42.5305C129.797 42.397 130.153 42.1745 130.554 41.863L131.533 43.2425C131.266 43.5095 130.91 43.7321 130.554 43.9101C130.198 44.0881 129.797 44.2661 129.396 44.3551C129.04 44.3996 128.64 44.4886 128.239 44.4886Z" fill="#322355"/>
<path d="M137.273 44.4886C136.472 44.4886 135.76 44.3106 135.137 43.91C134.514 43.5095 134.025 43.02 133.669 42.3525C133.313 41.6849 133.135 40.9284 133.135 40.1273C133.135 39.3263 133.313 38.5253 133.669 37.9022C134.025 37.2347 134.514 36.7007 135.137 36.3446C135.76 35.9441 136.472 35.7661 137.273 35.7661C138.03 35.7661 138.742 35.8996 139.321 36.2111C139.944 36.4782 140.433 36.8787 140.745 37.4127L139.677 38.7478C139.499 38.5253 139.321 38.3027 139.054 38.1247C138.787 37.9467 138.564 37.8132 138.253 37.6797C137.986 37.5907 137.719 37.5017 137.407 37.5017C136.917 37.5017 136.517 37.6352 136.161 37.8577C135.805 38.0802 135.493 38.3918 135.271 38.7923C135.048 39.1928 134.959 39.6378 134.959 40.1273C134.959 40.6169 135.048 41.0619 135.271 41.4624C135.493 41.8629 135.805 42.1745 136.161 42.397C136.517 42.6195 136.962 42.753 137.407 42.753C137.674 42.753 137.941 42.7085 138.208 42.6195C138.475 42.5305 138.698 42.397 138.965 42.219C139.187 42.041 139.41 41.8184 139.632 41.5959L140.7 42.931C140.344 43.4205 139.855 43.7765 139.187 44.0881C138.653 44.3106 137.986 44.4886 137.273 44.4886Z" fill="#322355"/>
<path d="M142.303 44.3107V32.473H144.261V37.5908L143.905 37.7688C143.994 37.3683 144.216 37.0568 144.528 36.7007C144.839 36.3447 145.195 36.1222 145.64 35.9442C146.085 35.7662 146.486 35.6772 146.975 35.6772C147.599 35.6772 148.133 35.8107 148.578 36.0777C149.023 36.3447 149.334 36.7007 149.557 37.2348C149.779 37.7688 149.868 38.3918 149.868 39.1484V44.3107H147.91V39.2819C147.91 38.8369 147.866 38.4808 147.732 38.2138C147.599 37.9468 147.421 37.7243 147.198 37.5908C146.931 37.4573 146.664 37.4128 146.308 37.4128C146.041 37.4128 145.774 37.4573 145.507 37.5463C145.284 37.6353 145.062 37.7688 144.884 37.9468C144.706 38.1248 144.572 38.3028 144.483 38.5253C144.394 38.7479 144.35 38.9704 144.35 39.2374V44.3107H143.282C143.104 44.3107 142.926 44.3107 142.748 44.3107C142.57 44.3107 142.436 44.3107 142.303 44.3107Z" fill="#322355"/>
<path d="M159.614 44.4887C158.857 44.4887 158.19 44.3551 157.611 44.1326C157.033 43.9101 156.543 43.5096 156.143 43.0646L157.433 41.952C157.745 42.308 158.101 42.575 158.501 42.7531C158.902 42.9311 159.302 42.9756 159.747 42.9756C159.925 42.9756 160.103 42.9756 160.237 42.9311C160.37 42.8866 160.504 42.8421 160.593 42.7531C160.682 42.6641 160.771 42.575 160.86 42.4415C160.949 42.308 160.949 42.219 160.949 42.0855C160.949 41.8185 160.86 41.6405 160.682 41.4625C160.593 41.3735 160.415 41.329 160.192 41.24C159.97 41.151 159.658 41.062 159.302 40.973C158.724 40.8395 158.234 40.6614 157.878 40.4389C157.478 40.2609 157.211 40.0384 156.988 39.7714C156.81 39.5489 156.677 39.3264 156.588 39.1039C156.499 38.8368 156.454 38.5698 156.454 38.2583C156.454 37.9023 156.543 37.5463 156.721 37.2348C156.899 36.9232 157.122 36.6562 157.389 36.4337C157.656 36.2112 158.012 36.0332 158.412 35.8997C158.813 35.7662 159.213 35.7217 159.614 35.7217C160.059 35.7217 160.459 35.7662 160.86 35.8997C161.26 35.9887 161.616 36.1667 161.972 36.3447C162.328 36.5227 162.595 36.7897 162.862 37.0568L161.794 38.2583C161.572 38.0803 161.349 37.9023 161.127 37.7243C160.904 37.5908 160.637 37.4573 160.415 37.3683C160.148 37.2793 159.925 37.2348 159.747 37.2348C159.525 37.2348 159.347 37.2348 159.213 37.2793C159.08 37.3238 158.902 37.3683 158.813 37.4573C158.724 37.5463 158.635 37.6353 158.546 37.7243C158.457 37.8133 158.457 37.9468 158.457 38.1248C158.457 38.2583 158.501 38.3918 158.546 38.4808C158.59 38.6143 158.679 38.7033 158.813 38.7478C158.946 38.8368 159.124 38.9259 159.347 39.0149C159.569 39.1039 159.881 39.1929 160.281 39.2819C160.815 39.4154 161.26 39.5934 161.616 39.7269C161.972 39.8604 162.239 40.0829 162.462 40.3054C162.684 40.4834 162.818 40.7059 162.907 40.973C162.996 41.24 163.04 41.507 163.04 41.8185C163.04 42.308 162.907 42.7531 162.595 43.1536C162.328 43.5541 161.928 43.8656 161.438 44.0881C160.726 44.3551 160.192 44.4887 159.614 44.4887Z" fill="#322355"/>
<path d="M167.49 44.4886C166.867 44.4886 166.333 44.3551 165.888 44.088C165.443 43.821 165.087 43.4205 164.865 42.931C164.642 42.4415 164.509 41.8184 164.509 41.1064V35.8551H166.467V40.6614C166.467 41.1064 166.556 41.5069 166.689 41.8184C166.823 42.1299 167.045 42.397 167.312 42.5305C167.579 42.7085 167.891 42.7975 168.291 42.7975C168.559 42.7975 168.826 42.753 169.048 42.664C169.271 42.575 169.493 42.4415 169.627 42.2634C169.76 42.0854 169.938 41.9074 170.027 41.6849C170.116 41.4624 170.161 41.1954 170.161 40.9284V35.8551H172.119V44.
3106H170.205L170.161 42.5305L170.517 42.3525C170.383 42.753 170.161 43.109 169.849 43.4205C169.538 43.732 169.182 43.999 168.781 44.1771C168.38 44.3996 167.935 44.4886 167.49 44.4886Z" fill="#322355 "/>
<path d="M174.433 44.3106V35.8551H176.391L176.435 37.5462L176.124 37.6797C176.213 37.4127 176.346 37.1457 176.569 36.9232C176.747 36.7007 176.969 36.4782 177.236 36.3001C177.503 36.1221 177.77 35.9886 178.082 35.8996C178.393 35.8106 178.705 35.7661 179.016 35.7661C179.461 35.7661 179.862 35.8551 180.262 35.9886C180.618 36.1221 180.93 36.3446 181.152 36.6562C181.375 36.9677 181.553 37.3682 181.687 37.8577L181.375 37.8132L181.508 37.5462C181.642 37.2792 181.776 37.0567 181.998 36.8342C182.221 36.6117 182.443 36.4336 182.71 36.2556C182.977 
36.0776 183.244 35.9441 183.556 35.8996C183.867 35.8106 184.134 35.7661 184.446 35.7661C185.069 35.7661 185.603 35.8996 186.048 36.1666C186.493 36.4336 186.804 36.8342 187.027 37.3237C187.249 37.8577 187.338 38.4808 187.338 39.2818V44.3551H185.336V39.3708C185.336 38.9258 185.291 38.5698 185.158 38.3027C185.024 38.0357 184.891 37.8132 184.624 37.6797C184.401 37.5462 184.09 37.4572 183.778 37.4572C183.511 37.4572 183.244 37.5017 183.022 37.5907C182.799 37.6797 182.577 37.8132 182.399 37.9912C182.221 38.1692 182.087 38.3473 181.998 38.5698C181.909 38.7923 181.865 39.0148 181.865 39.2818V44.3106H179.862V39.3263C179.862 38.9258 179.817 38.5698 179.684 38.3027C179.55 38.0357 179.417 37.8132 179.15 37.6797C178.927 37.5462 178.66 37.4572 178.349 37.4572C178.082 37.4572 177.815 37.5017 177.592 37.5907C177.37 37.6797 177.147 37.8132 176.969 37.9467C176.791 38.1247 176.658 38.3027 176.569 38.5253C176.48 38.7478 176.435 38.9703 176.435 39.2373V44.3106H174.433Z" fill="#322355"/>
<path d="M189.386 44.3106V35.8551H191.344L191.388 37.5462L191.077 37.6797C191.166 37.4127 191.299 37.1457 191.522 36.9232C191.7 36.7007 191.922 36.4782 192.189 36.3001C192.456 36.1221 192.723 35.9886 193.035 35.8996C193.346 35.8106 193.658 35.7661 193.969 35.7661C194.415 35.7661 194.815 35.8551 195.216 35.9886C195.572 36.1221 195.883 36.3446 196.106 36.6562C196.328 36.9677 196.506 37.3682 196.64 37.8577L196.328 37.8132L196.462 37.5462C196.595 37.2792 196.729 37.0567 196.951 36.8342C197.174 36.6117 197.396 36.4336 197.663 36.2556C197.93 
36.0776 198.197 35.9441 198.509 35.8996C198.82 35.8106 199.087 35.7661 199.399 35.7661C200.022 35.7661 200.556 35.8996 201.001 36.1666C201.446 36.4336 201.757 36.8342 201.98 37.3237C202.202 37.8577 202.291 38.4808 202.291 39.2818V44.3551H200.244V39.3708C200.244 38.9258 200.2 38.5698 200.066 38.3027C199.933 38.0357 199.799 37.8132 199.532 37.6797C199.31 37.5462 198.998 37.4572 198.687 37.4572C198.42 37.4572 198.153 37.5017 197.93 37.5907C197.708 37.6797 197.485 37.8132 197.307 37.9912C197.129 38.1692 196.996 38.3473 196.907 38.5698C196.818 38.7923 196.773 39.0148 196.773 39.2818V44.3106H194.771V39.3263C194.771 38.9258 194.726 38.5698 194.593 38.3027C194.459 38.0357 194.326 37.8132 194.058 37.6797C193.836 37.5462 193.569 37.4572 193.257 37.4572C192.99 37.4572 192.723 37.5017 192.501 37.5907C192.278 37.6797 192.056 37.8132 191.878 37.9467C191.7 38.1247 191.566 38.3027 191.477 38.5253C191.388 38.7478 191.344 38.9703 191.344 39.2373V44.3106H189.386Z" fill="#322355"/>
<path d="M205.629 34.075C205.228 34.075 204.917 33.986 204.694 33.7635C204.472 33.5855 204.383 33.2739 204.383 32.9179C204.383 32.5619 204.516 32.2949 204.739 32.0724C204.961 31.8499 205.273 31.7609 205.673 31.7609C206.074 31.7609 206.385 31.8499 206.608 
32.0724C206.83 32.2504 206.919 32.5619 206.919 32.9179C206.919 33.2294 206.786 33.541 206.563 33.719C206.341 33.986 206.029 34.075 205.629 34.075ZM204.65 44.3105V35.8551H206.608V44.3105H204.65Z" fill="#322355"/>
<path d="M208.389 37.6797V35.8551H213.862V37.6797H208.389ZM210.035 
44.3106V33.719H211.993V44.3106H210.035Z" fill="#322355"/>
</g>
<defs>
<clipPath id="clip0_170_344">
<rect width="210.14" height="34.7119" fill="white" transform="translate(3.98926 13.5593)"/>
</clipPath>
</defs>
</svg>
<div className={!nav ? "absolute  shadow-lg flex justify-start md:top-[10px] top-[120px]" :' absolute invisible' } default>
  <div className= " relative md:absolute flex flex-col bg-white md:left-[600px] z-40 md:p-10  md:top-[100px]  md:w-[603px] w-[100%]  md:h-[440px] rounded-lg  h-100% shadow-lg md:items-start items-center">
      <ul className=""> 
    
     <div className="group flex flex-row justify-between w-full hover:border-b-2 hover:border-gray-300">
    < NavLink to ='/' ><li  className='  cursor-pointer z-40  p-4 text-center font-lex font-medium text-[14px] md:text-[32px] left-12'>Home 
      <span className="invisible  group-hover:visible relative  md:left-60  left-28 cursor-pointer  text-center font-lex  md:text-[16px]">
        Where our heart is</span></li></NavLink>
    
     </div>
     <div className="group mt-4 flex justify-between w-full hover:border-b-2 hover:border-gray-300">
     <a href="#highlight"><li  className="cursor-pointer z-40  p-4 text-center font-lex font-medium text-[14px] md:text-[32px] left-8" >UTS 23 in pictures<span className="invisible  group-hover:visible relative  md:left-8  left-4 cursor-pointer  text-center font-lex  md:text-[16px]">
     cool place to explore</span></li></a>
     </div>

     <div className="group mt-4 flex justify-between w-full hover:border-b-2 hover:border-gray-300 w-inherit">
     <a href="#about"> <li  className="cursor-pointer z-40  p-4 text-center font-lex font-medium text-[14px] md:text-[32px] left-12" >About Us  <span className="invisible  group-hover:visible relative  md:left-44  left-16 cursor-pointer  text-center font-lex  md:text-[16px]">
know us and our why</span></li></a>
     </div>
    
     <div className="group mt-4 flex justify-between w-full hover:border-b-2 hover:border-gray-300">
     <a href="#sponsors"><li  className="cursor-pointer z-40  p-4 text-center font-lex font-medium text-[14px] md:text-[30px] " >Partners and Sponsors <span className="invisible  group-hover:visible relative  md:left-2  left-2 cursor-pointer  text-center font-lex  md:text-[16px]">
give us money&#x1F450;</span></li></a>
     </div>
   
      </ul>
      </div>
      
    </div>

  <div onClick={handleNav} className='p-4 cursor-pointer '>
{ !nav ? <AiOutlineClose size={26} className='  mb-0 cursor-pointer '/>: <AiOutlineMenu size={26} className=' mb-0  mx-2 cursor-pointer   hover:bg-none'/> }

  
</div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar