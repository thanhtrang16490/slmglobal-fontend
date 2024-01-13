'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box } from "@mui/material";
import Button from "@mui/material/Button/Button";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Divider from '@mui/material/Divider';
import SlideModule from "./slide.module";

const MainSlider = () => {
    const NextArrow = (props: any) => {
        return (
            <>
                {/* <Button variant="outlined"
                    onClick={props.onClick}
                    sx={{
                        position: "absolute",
                        bottom: '30px',
                        right: "50%",
                        zIndex: 2,
                        minWidth: 50,
                        width: 75,
                        color: "white",
                        backgroundColor: '#17274f90',
                        transform: "translateX(50%)"
                    }}
                >
                    <KeyboardArrowDownOutlinedIcon />
                </Button> */}
            </>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <>
                {/* <Button variant="outlined" onClick={props.onClick}
                    sx={{
                        position: "absolute",
                        left: "50%",
                        zIndex: 2,
                        minWidth: 50,
                        width: 75,
                        top: "170px",
                        color: "white",
                        backgroundColor: '#17274f90',
                        transform: "translateX(-50%)"
                    }}
                >
                    <KeyboardArrowUpOutlinedIcon />
                </Button> */}
            </>
        )
    }

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={{ marginTop: '-116px', position: 'relative' }}>
            <Box>
                <Slider {...settings}>
                    <SlideModule backgroundImage='/img/header-1.jpg' headerTitle='Renewable Energy Products' id='solar' />
                    <SlideModule backgroundImage='/img/header-2.jpg' headerTitle='Ground Anchor Products' id='screw' />
                    <SlideModule backgroundImage='/img/header-4.jpg' headerTitle='Aluminum Frame Products' id='aluminum' />
                    <SlideModule backgroundImage='/img/header-3.jpg' headerTitle='Iron Steel Casting Products' id='steel-casting' />
                    <SlideModule backgroundImage='/img/header-5.jpg' headerTitle='Moulded_Extruded Rubber Products' id='rubber' />
                    <SlideModule backgroundImage='/img/header-6.jpg' headerTitle='Plastic Pipe Products' id='wood' />
                    <SlideModule backgroundImage='/img/header-7.jpg' headerTitle='Plywood Products' id='pipes' />
                    <SlideModule backgroundImage='/img/header-8.jpg' headerTitle='Anam Cau - Palm Plate' id='palm-plate' />
                    <SlideModule backgroundImage='/img/header-9.jpg' headerTitle='Grassgreen Straw Reed' id='grass-straw' />
                </Slider>
                <Divider />
            </Box>
        </div>
    );
}

export default MainSlider;