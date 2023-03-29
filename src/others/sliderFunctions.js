
export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ background: "rgba(0, 0, 0, 0.6)",right:'0',display:'flex',width:'5%',height:'100px',alignItems:'center',justifyContent:'center',borderRadius:'12px' }} onClick={onClick}>
      </div>
    );
  }
  
export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ background: "rgba(0, 0, 0, 0.6)",left:'0',display:'flex',width:'5%',height:'100px',alignItems:'center',justifyContent:'center',borderRadius:'12px',zIndex:100 }} onClick={onClick}>
      </div>
    );
  }
  


export let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    // centerMode:true,
    centerPadding:'100px',
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };