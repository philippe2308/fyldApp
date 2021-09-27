import React, { useState, useEffect } from 'react';
import './style.scss';
import Lottie from 'react-lottie';
import animationData from './../../assets/lotties/loader.json';
import {
    iconCountries,
    iconAgeAveragr,
    iconFeminine} from './../../assets';



const subjects = [
    {
        title:"We are multicultural",
        subTitle:"7 different countries",
        icon: iconCountries,
        color:'#0000FF'
    },
    {
        title:"We are girl power",
        subTitle:"45% of our team are women",
        icon:iconFeminine,
        color:'#FF1493'
    },
    {
        title:"We are openmind",
        subTitle:"30 is the average age of our team",
        icon:iconAgeAveragr,
        color:'#00FF00'
    }
]


function LoadIcon() {
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentCircle, setCurrentCircle] = useState(0);
    const [showTitles, setShowTitles] = useState(false);
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    

    const changeSubjects = () => {
        console.log('ready2');
        console.log(currentCircle);
        if (currentCircle === 1) {
            setCurrentIndex2((currentIndex2 + 1) % 3);
        } else {
            setCurrentIndex1((currentIndex2));
        }
        setCurrentCircle((currentCircle + 1) % 2);
    }

  useEffect(
      () => {
          

          let timer2 = setInterval(() => {
              console.log(showTitles);
              changeSubjects();
        }, 3*1000);

        return () => {
            clearInterval(timer2);
        };
    },
    [currentCircle,currentIndex1,currentIndex2]
    );

    useEffect(() => {
        let timer1 = setTimeout(() => {
            setShowTitles(true);
      }, 6 * 1000);
        return () =>   clearTimeout(timer1);
      }, [showTitles]);
    return (
        <div className="background">
            


            <div className="firstDiagonal">
                <div className="dotContainer firstContainer">
                    <div className="dot">
                        <img src={subjects[currentIndex1].icon}/>
                    </div>
                </div>
                <div className="loadIcon">
                    <div className="logoFyld">
                        <img src="https://wp.fyld.pt/wp-content/uploads/2020/09/FYLD_Logo_Animation_1920x1080px_BLACK_Animated_Gif_optimize.gif" class="logo-players" alt="Consultores TI - Equipa técnica">
                        </img>
                    </div>
                </div>
                <div className="title" style={{ color: showTitles ? '#fff' : 'transparent' }}>
                    {subjects[currentIndex2].subTitle}
                </div>
            </div>

            <div className="secondDiagonal">
                <div className="dotContainer">
                    <div className="dot">
                        <img src={subjects[currentIndex2].icon}/>
                    </div>
                </div>
                <div className="title" style={{color:showTitles ?'#fff': 'transparent' }}>
                    {subjects[currentIndex2].title}
                </div>
                <div className="lottieIcon">
                    <Lottie
                        options={defaultOptions}
                        width={400}
                        height={400}
                    />
                </div>
            </div>

            <svg>
	<defs>
		<filter id="goo">
			<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
			<feColorMatrix
				in="blur"
				mode="matrix"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
				result="goo"
			/>
			<feBlend in="SourceGraphic" in2="goo" />
		</filter>
	</defs>
</svg>
      </div>
    );
  }
  
  export default LoadIcon;