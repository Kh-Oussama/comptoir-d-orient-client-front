import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {Segment, Sidebar} from "semantic-ui-react";
import exampleReducer from "./slider-reducer";
import VerticalSidebar from "../shop-sidebar/shop-sidebar.component";

function ShopContent() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    })

    const { animation, dimmed, direction, visible } = state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
        <div>
            <div className="sidebar-btn" >
                <IcomoonReact iconSet={iconSet} size={33} icon="list"   onClick={() =>
                    dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
                }/>

            </div>

            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>

                {!vertical && (
                    <VerticalSidebar
                        animation={animation}
                        direction={direction}
                        visible={visible}
                    />
                )}

                <Sidebar.Pusher dimmed={dimmed && visible}>
                    <Segment basic>
                        <div className="shop-container">
                            aaaaaaaaaaa
                        </div>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    )
}

export default ShopContent;