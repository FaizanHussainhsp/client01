// "use client";

// export default function Home() {
//   return (
//     <div>
//       <div style={{ 
//         height: "100vh",
//         background: `url(https://www.orangehrm.com/assets/Uploads/home/ohrm-home.webp)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         position: 'relative'
//       }}>
//         {/* <h1 style={{ 
//           color: 'white', 
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//           padding: '20px',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           borderRadius: '8px'
//         }}>
//           Welcome to My App
//         </h1> */}
//         <div style={{position: 'absolute',
//          height:"50%",
//          width:"100%",

//          bottom:"-2%",
         
//         //  marginTop:100,
//         }}>
//         <img 
//           src="https://www.orangehrm.com/public/_resources/themes/orangehrm/dist/images/wallpaper-bot-deco.png" 
//           alt="Bottom Image" 
//           style={{
//             height:"100%",
//             width: '100%'
//           }}
//         />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

import LogoSlider from "../components/margue";
import LogoMarquee from "../components/margue";
import { motion } from "framer-motion";
const clients = [
  { id: 1, logo: "/logos/client1.png" },
  { id: 2, logo: "/logos/client2.png" },
  { id: 3, logo: "/logos/client3.png" },
  { id: 4, logo: "/logos/client4.png" },
];

export default function Home() {

  
 
  return (
    <div>
      <div style={{ 
        height: "100vh",
        background: `url(https://www.orangehrm.com/assets/Uploads/home/ohrm-home.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: 'relative'
      }}>
        {/* Left Side Content */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          maxWidth: '500px',
          zIndex:100000000000
          // color: 'red'
          // background:"red",
          
          
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Streamline All Your HRM Needs on One Intuitive Platform
          </h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}>
            Elevate your HR game with a platform designed to drive efficiency, boost engagement, 
            and foster retention. Our innovative HR software simplifies your workflow, empowering 
            your team and unlocking the potential of your people from hiring to thriving.
          </p>
           {/* <div style={{
          // position: 'absolute',
          // top: '30%',
          // right: '10%',
          display: 'flex',
          gap: '1rem',
          background:"white",
          borderRadius:"4rem",
          backgroundColor:"red",
          padding:"2px",
          height:"2rem"
        // marginBottom:"2rem"
          // padding:".1rem"
        }}>
          <input
            type="email"
            placeholder="Enter your business email"
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              border: 'none',
              outline: 'none',
              width: '300px',
              fontSize: '1rem',
              height:"90%"
            }}
          />
          <button style={{
            // padding: '0.8rem',
            borderRadius: '25px',
            border: 'none',
            background: '#ff6b35',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            height:"50%",
            transition: 'all 0.3s ease',
            ':hover': {
              background: '#e55a2b'
            }
          }}>
            30-day free trial
          </button>
        </div> */}

        <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  background: 'white',
  borderRadius: '4rem',
 
  // padding: '1rem',             // Added extra padding
  border: '1px solid gray',     // Added gray border
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Optional: adds a subtle shadow for depth
}}>
  <input
    type="email"
    placeholder="Enter your business email"
    style={{
      padding: '0.8rem 1.5rem',
      borderRadius: '25px',
      border: 'none',
      outline: 'none',
      width: '300px',
      fontSize: '1rem'
    }}
  />
  <button style={{
    borderRadius: '25px',
    border: 'none',
    background: '#ff6b35',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0.8rem 1.5rem',
    transition: 'background 0.3s ease',
    marginTop:5,
    marginBottom:5
  }}>
    30-day free trial
  </button>
</div>

        </div>

        {/* Right Side Form */}
       

        {/* Bottom Decoration */}
        <div style={{
          position: 'absolute',
          height: "50%",
          width: "100%",
          bottom: "-2%",
        }}>
          <img 
            src="https://www.orangehrm.com/public/_resources/themes/orangehrm/dist/images/wallpaper-bot-deco.png" 
            alt="Bottom Image" 
            style={{
              height: "100%",
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <div style={{textAlign:"center",marginTop:"4rem"}}>
        <h2 style={{fontSize:"2.5rem"}}>
          We have 5 million + active users worldwide
        </h2>
        <span style={{fontSize:"1.3rem",marginTop:"2rem",display:"inline-block"}}>Here are some of our clients</span>
      </div>
      <LogoSlider
  logos={[
    { src: 'https://avatars.mds.yandex.net/i?id=9fcd5583545ce0467d486e893239445a27368e6e-2398611-images-thumbs&n=13', alt: 'Company 1' },
    { src: 'https://avatars.mds.yandex.net/i?id=ca1e5a7e03715abad5422df17f59af660670911f-5587421-images-thumbs&n=13', alt: 'Company 2' },
    { src: 'https://avatars.mds.yandex.net/i?id=39908ed41bc27cb2095f33d730358c6d4711ada8-8715693-images-thumbs&n=13', alt: 'Company 3' },
    { src: 'https://avatars.mds.yandex.net/i?id=01302d240dd01b6acaf8c1fef38d360080abfc7e-2941046-images-thumbs&n=13', alt: 'Company 4' },
    { src: 'https://avatars.mds.yandex.net/i?id=d5cc25eb4c7624faf8d91858faef8120b2615d45-9838181-images-thumbs&n=13', alt: 'Company 5' }
  ]}
/>
      {/* <div style={{background:"blue",display:"flex",justifyContent:"center"}}> 
         <LogoMarquee logos={clientLogos}/> */}
          <div style={{height:"200px",display:"flex",justifyContent:"center",alignItems:"flex-end", background: `url(https://www.orangehrm.com/public/_resources/themes/orangehrm/dist/images/homepage-about-top.png)`, backgroundSize: "cover"}}>
               <img src="https://www.orangehrm.com/assets/Uploads/OrangeHRM_Logo.svg" style={{width: "80px",
            marginBottom: "20px"}}/>
          </div>
          <div style={{height:"200px",background:"#f8f3e9",display:"flex",justifyContent:"center"}}>
            <div style={{maxWidth:"500px",textAlign:"center"}}>

           
            <h2 style={{fontSize:"4rem",color:"#f58321"}}>HR for All</h2>
            <span>OrangeHRM provides a world-class HRIS experience and offers everything you and your team need to be the HR heroes you know you are.</span>
         </div>
          </div>
          <div style={{ height: "80vh",
    background: `url(https://avatars.mds.yandex.net/i?id=2f1e60e935c409f279618978c12382138b623592-9837727-images-thumbs&n=13)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"}}></div>
          </div>
    // </div>
  );
}