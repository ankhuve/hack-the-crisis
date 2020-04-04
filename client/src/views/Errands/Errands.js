import React, { useState, useEffect } from "react";
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import "./errands.scss";
import ErrandRow from "../../components/ErrandRow/ErrandRow";

const Errands = () => {
    const [errands, setErrands] = useState([
        {
            id: 1,
            type: "groceries",
            description: ["Milk", "Bread", "Butter", "Condoms"],
            user: {
                name: "Göran",
            },
        },
        {
            id: 2,
            type: "groceries",
            description: ["Milk", "Bread", "Butter", "Condoms"],
            user: {
                name: "Göran",
            },
        },
        {
            id: 3,
            type: "groceries",
            description: ["Milk", "Bread", "Butter", "Condoms"],
            user: {
                name: "Göran",
            },
        },
        {
            id: 4,
            type: "groceries",
            description: ["Milk", "Bread", "Butter", "Condoms"],
            user: {
                name: "Göran",
            },
        },
    ]);

    const [listOpen, setListOpen] = useState(false);
    const [dragStart, setDragStart] = useState({ x: null, y: null });

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.removeProperty('overflow');
        }
    }, []);

    const openList = () => {
        setListOpen(true);
    }

    const closeList = () => {
        setListOpen(false);
    }

    const onDragStart = e => {
        const xPos = e.screenX || e.changedTouches[0].screenX;
        const yPos = e.screenY || e.changedTouches[0].screenY;
        setDragStart({ x: xPos, y: yPos });
    }

    const onDragEnd = e => {
        const xPos = e.screenX || e.changedTouches[0].screenX;
        const yPos = e.screenY || e.changedTouches[0].screenY;
        e.stopPropagation();
        if (yPos < dragStart.y || (xPos === dragStart.x && yPos === dragStart.y)) {
            openList();
        } else {
            closeList();
        }
    }

    return (
        <div className="Errands">
            <GoogleMap className="Errands__map"></GoogleMap>
            {/* <div className="Errands__map__dot"></div> */}
            <div className={`sheet ${listOpen ? 'sheet--open' : ''}`} 
                onTouchStart={e => onDragStart(e)}
                onTouchEnd={e => onDragEnd(e)}
                onMouseDown={e => onDragStart(e)}
                onMouseUp={e => onDragEnd(e)}
            >
                {errands.map((errand) => (
                    // <div key={errand.id} style={{height: '48px', borderBottom: '1px solid lightgrey'}}>
                    //     {errand.user.name}
                    // </div>
                    <ErrandRow name={errand.user.name} distance={250} />
                ))}
            </div>
        </div>
    );
};

export default Errands;
