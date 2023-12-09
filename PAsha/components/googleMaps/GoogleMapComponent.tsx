import React, { useState } from 'react';
import {SiGooglemaps} from "react-icons/si";

interface MapProps {
    center: { lat: number; lng: number };
}

export const CustomInfoWindowContent: React.FC = () => {
    const openGoogleMaps = () => {
        const googleMapsLink = 'https://www.google.com/maps/place/%D0%91%D1%96%D0%BB%D0%B8%D0%B9+%D0%BB%D0%BE%D1%82%D0%BE%D1%81/@49.4311816,32.0080307,13z/data=!4m15!1m8!3m7!1s0x40d14b866064977f:0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!3b1!8m2!3d49.4413155!4d32.0643442!16zL20vMDRod3Rz!3m5!1s0x40d14c974c5882e7:0xb62516c54950f32!8m2!3d49.4562165!4d32.052894!16s%2Fg%2F11cn0nf3qg?entry=ttu';
        window.open(googleMapsLink, '_blank');
    };

    return (
        <div>
            <span>Де ми: </span>
            <a
            className="text-base text-slate-100 cursor-pointer line"
            href="https://www.google.com/maps/place/%D0%91%D1%96%D0%BB%D0%B8%D0%B9+%D0%BB%D0%BE%D1%82%D0%BE%D1%81/@49.4311816,32.0080307,13z/data=!4m15!1m8!3m7!1s0x40d14b866064977f:0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!3b1!8m2!3d49.4413155!4d32.0643442!16zL20vMDRod3Rz!3m5!1s0x40d14c974c5882e7:0xb62516c54950f32!8m2!3d49.4562165!4d32.052894!16s%2Fg%2F11cn0nf3qg?entry=ttu"
            target="_blank"
        >
           Україна так далі
        </a>
        </div>

    );
};

const GoogleMapComponent: React.FC<MapProps> = ({ center }) => {
    const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(true);

    const toggleInfoWindow = () => {
        setInfoWindowOpen(!infoWindowOpen);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '400px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41517.149957144575!2d32.00803073316936!3d49.431181553807306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14c9dbf9b7861%3A0xbc334d7c335631fe!2z0JTQvtC70LjQvdCwINCi0YDQvtGP0L3QtA!5e0!3m2!1suk!2sua!4v1702154441934!5m2!1suk!2sua"
                    width="100%"
                    height="400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onClick={toggleInfoWindow}
                ></iframe>
            </div>
            {/*{infoWindowOpen && <CustomInfoWindowContent />}*/}
        </div>
    );
};

export default GoogleMapComponent;
