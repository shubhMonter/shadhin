import React from "react"
import NavBar from "./navbar"
import {Button,Card} from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const CustomButtonGroup = ({ next, previous }) => {
    return (
      
<div className="container">
<div className="" style={{marginTop:"15px"}}>
    <div className="col-xs-12 text-md-right lead">
        <a className="btn btn-outline-secondary prev remove-outline" title="go back" onClick={() => previous()}><i className="fa fa-lg fa-chevron-left"></i></a>
        <a className="btn btn-outline-secondary next remove-outline" title="more" onClick={() => next()}><i className="fa fa-lg fa-chevron-right"></i></a>
    </div>
</div>
</div>

    );
  };

const SideBar = () => {

    return (<>
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                    <li className="active">
                        <a href="#"><span className="fa-stack fa-lg pull-left">

                        </span></a>

                    </li>
                    <li className="active">
                        <a href="#"><span className="fa-stack fa-lg pull-left">
                            <i className="fa fa-home fa-stack-1x "></i>
                        </span>Home</a>

                    </li>
                    <li>
                        <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-music fa-stack-1x "></i></span>My Music</a>
                    </li>
                    <li>
                        <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-podcast fa-stack-1x "></i></span>Podcast</a>
                    </li>
                    <li>
                        <a href="#"> <span className="fa-stack fa-lg pull-left"><i className="fa fa-play-circle fa-stack-1x "></i></span>Video</a>
                    </li>

                </ul>
                <Card  className="gradient" style={{ width: '14rem',marginTop:"120%",marginLeft:"12px",color:"white"}}>
                <Card.Body>
                    <Card.Subtitle className="mb-2" ><h4 style={{fontWeight:"bolder"}}>Upgrade to Pro</h4></Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and 
                    </Card.Text>
                    <div className="text-center">
                    <Button variant="outline-secondary" className="white-outline" block >Secondary</Button> 
                    </div>
                    
                </Card.Body>
                </Card>
            </div>

            <div id="page-content-wrapper" >
                <NavBar />
                <div className="container-fluid xyz" style={{background:"#dad6d65e"}} >
                    <div className="row">
                        <div className="col-lg-12">
                            
                        <div className="container" style={{marginTop:"30px"}}>
                        <h3 style={{fontWeight:"bolder"}}>Top Picks </h3>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                // means to render carousel on server-side.
                                infinite={true}
                                keyBoardControl={true}

                                containerClassName="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}

                                dotListClassName="custom-dot-list-style"
                                itemClassName="carousel-item-padding-40-px"
                                arrows={false}
                                renderButtonGroupOutside={true} 
                                customButtonGroup={<CustomButtonGroup />}
                            >
                                <div className="movie">
                                    <img src="http://i.imgur.com/EW5FgJM.png" />

                                </div>
                                <div className="movie">
                                    <img src="https://visualhunt.com/photos/l/1/working-woman-technology-computer.jpg" />

                                </div>
                                <div className="movie">
                                    <img src="http://i.imgur.com/Hw7sWGU.png" />
                                </div>
                                <div className="movie">
                                    <img src="https://visualhunt.com/photos/l/1/people-office-team-collaboration.jpg" />

                                </div>
                                <div className="movie">
                                    <img src="http://i.imgur.com/EW5FgJM.png" />

                                </div>
                                <div className="movie">
                                    <img src="http://i.imgur.com/g27lAMl.png" />

                                </div>
                            </Carousel>
                            </div>
                        </div>
                        <div className="container" style={{marginTop:"50px"}}>
                        <h3 style={{fontWeight:"bolder"}}>Popular Artists </h3>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive1}
                                // means to render carousel on server-side.
                                infinite={true}
                                keyBoardControl={true}

                                containerClassName="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}

                                dotListClassName="custom-dot-list-style"
                                itemClassName="carousel-item-padding-40-px"
                                arrows={false}
                                renderButtonGroupOutside={true} 
                                customButtonGroup={<CustomButtonGroup />}
                            >
                                <div className="artists">
                                    <img src="http://i.imgur.com/EW5FgJM.png" />

                                </div>
                                <div className="artists">
                                    <img src="https://visualhunt.com/photos/l/1/working-woman-technology-computer.jpg" />

                                </div>
                                <div className="artists">
                                    <img src="http://i.imgur.com/Hw7sWGU.png" />
                                </div>
                                <div className="artists">
                                    <img src="https://visualhunt.com/photos/l/1/people-office-team-collaboration.jpg" />

                                </div>
                                <div className="artists">
                                    <img src="http://i.imgur.com/EW5FgJM.png" />

                                </div>
                                <div className="artists">
                                    <img src="http://i.imgur.com/g27lAMl.png" />

                                </div>
                            </Carousel>
                            </div>
                           
                    </div>
                </div>
            </div>
        </div>
        
        </>)
}
export default SideBar