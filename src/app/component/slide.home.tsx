'use client'
import { Carousel } from "antd";
import SlideModule from "./slide.module";




const SlideHomeModule = () => {

    return (
        <div style={{ marginTop: '-116px' }}>
            {/* <Carousel dotPosition="left" autoplay draggable> */}
            <SlideModule backgroundImage='/img/header-1.jpg' headerTitle='Renewable Energy Products' id='solar' />
            <SlideModule backgroundImage='/img/header-2.jpg' headerTitle='Mounting Screw Products' id='screw' />
            <SlideModule backgroundImage='/img/header-4.jpg' headerTitle='Aluminum Frame Products' id='aluminum' />
            <SlideModule backgroundImage='/img/header-3.jpg' headerTitle='Iron Steel Casting Products' id='steel-casting' />
            <SlideModule backgroundImage='/img/header-5.jpg' headerTitle='Moulded_Extruded Rubber Products' id='rubber' />
            <SlideModule backgroundImage='/img/header-6.jpg' headerTitle='Plastic Pipe Products' id='wood' />
            <SlideModule backgroundImage='/img/header-7.jpg' headerTitle='Plywood Products' id='pipes' />
            <SlideModule backgroundImage='/img/header-8.jpg' headerTitle='Anam Cau - Palm Plate' id='palm-plate' />
            <SlideModule backgroundImage='/img/header-9.jpg' headerTitle='Grassgreen Straw Reed' id='grass-straw' />
            {/* </Carousel> */}
        </div>

    )
}

export default SlideHomeModule;