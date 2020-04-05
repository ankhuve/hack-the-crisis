import React, { useState, useEffect } from "react";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./errands.scss";
import ErrandRow from "../../components/ErrandRow/ErrandRow";
import SettingsButton from "../../components/SettingsButton/SettingsButton";

const Errands = () => {
    const MIN_SWIPE_DISTANCE = 40;
    const [errands, setErrands] = useState([
        {
            id: 1,
            type: "groceries",
            description: {
                text: 'Hi! I’m 70+ and my wife tells me we should stay inside. If there’s any kind soul out there who can help us with our groceries, I’d be very grateful.',
                items: ["Milk", "Bread", "Butter"],
            },
            user: {
                name: "Göran Carlsson",
                avatar: "avatar2.png",
            },
            distance: 250
        },
        {
            id: 2,
            type: "groceries",
            description: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et vestibulum dolor, id varius orci. Donec accumsan sapien orci, ut dignissim enim auctor et. Etiam ex tortor, hendrerit sed ornare eu, rutrum in ante.',
                items: ["Milk", "Bread", "Butter"],
            },
            user: {
                name: "Rose Jiménez",
                avatar: "avatar1.png",
            },
            distance: 600
        },
        {
            id: 3,
            type: "groceries",
            description: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et vestibulum dolor, id varius orci. Donec accumsan sapien orci, ut dignissim enim auctor et. Etiam ex tortor, hendrerit sed ornare eu, rutrum in ante.',
                items: ["Milk", "Bread", "Butter"],
            },
            user: {
                name: "Göran Carlsson",
                avatar: "avatar2.png",
            },
            distance: 780
        },
        {
            id: 4,
            type: "groceries",
            description: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et vestibulum dolor, id varius orci. Donec accumsan sapien orci, ut dignissim enim auctor et. Etiam ex tortor, hendrerit sed ornare eu, rutrum in ante.',
                items: ["Milk", "Bread", "Butter"],
            },
            user: {
                name: "Rose Jiménez",
                avatar: "avatar1.png",
            },
            distance: 950
        },
    ]);

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Groceries",
            selected: false,
        },
        {
            id: 2,
            name: "Mail",
            selected: true,
        },
        {
            id: 3,
            name: "Medicine",
            selected: false,
        },
        {
            id: 4,
            name: "Pet walk",
            selected: true,
        },
        {
            id: 5,
            name: "Misc",
            selected: true,
        },
    ]);

    const [listOpen, setListOpen] = useState(false);
    const [dragStart, setDragStart] = useState({ x: null, y: null });
    const [selectedMission, setSelectedMission] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, []);

    const openList = () => {
        setListOpen(true);
    };

    const closeList = () => {
        setListOpen(false);
    };

    const onDragStart = (e) => {
        const xPos = e.screenX || e.changedTouches[0].screenX;
        const yPos = e.screenY || e.changedTouches[0].screenY;
        setDragStart({ x: xPos, y: yPos });
    };

    const onDragEnd = (e) => {
        const xPos = e.screenX || e.changedTouches[0].screenX;
        const yPos = e.screenY || e.changedTouches[0].screenY;
        const deltaY = yPos - dragStart.y;
        e.stopPropagation();
        if (-deltaY > MIN_SWIPE_DISTANCE || (xPos === dragStart.x && yPos === dragStart.y)) {
            openList();
        } else if (deltaY > MIN_SWIPE_DISTANCE) {
            closeList();
        }
    };

    const selectCategory = (id) => {
        const updatedCategories = [...categories];
        const categoryIndex = updatedCategories.findIndex((c) => c.id === id);
        if (categoryIndex !== -1) {
            const category = updatedCategories[categoryIndex];
            category.selected = !category.selected;
            updatedCategories.splice(categoryIndex, 1, category);
            setCategories([...updatedCategories]);
        }
    };

    const selectMission = (mission, event) => {
        event.stopPropagation();
        document.body.style.overflow = 'hidden';
        setSelectedMission(mission);
    };

    const clearSelectedMission = () => {
        document.body.style.removeProperty('overflow');
        setSelectedMission(null);
    }

    return (
        <div className="Errands">
            {selectedMission && 
                <div className="modal">
                    <div className="modal__backdrop" onClick={clearSelectedMission}/>
                    <div className="modal__content">
                        <h1 className="modal__content__title">{selectedMission.user.name}</h1>
                        <label>{selectedMission.type}</label>
                        {selectedMission.description.text && <p className="m-t-1">{selectedMission.description.text}</p>}
                        <button className="button button--secondary button--big">Call</button>
                    </div>
                </div>
            }
            <SettingsButton />
            <GoogleMap className="Errands__map"></GoogleMap>
            {/* <div className="Errands__map__dot"></div> */}
            <div
                className={`sheet ${listOpen ? "sheet--open" : ""}`}
                onTouchStart={(e) => onDragStart(e)}
                onTouchEnd={(e) => onDragEnd(e)}
                onMouseDown={(e) => onDragStart(e)}
                onMouseUp={(e) => onDragEnd(e)}
            >
                <div className="flex">
                    <label>Categories</label>
                </div>
                <div className="Errands__categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => selectCategory(category.id)}
                            className={`button button--round button--small ${
                                category.selected ? "button--secondary" : "button--secondary--faded"
                            }`}
                        >
                            {category.selected && <div className="icon icon--checkbox"></div>}
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className="flex">
                    <label>Missions</label>
                </div>
                {errands.map((errand) => (
                    <ErrandRow
                        name={errand.user.name}
                        distance={errand.distance}
                        avatarSrc={require(`../../assets/images/${errand.user.avatar}`)}
                        onClick={(e) => selectMission(errand, e)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Errands;
