import React from 'react';
import CategoriesCard from "../categories-card/categories-card.component";
import {motion} from "framer-motion";

const Categories = () => {
    return (
        <ul className="card-list">


                <CategoriesCard backgroundColor={"#814A0E"} backgroundImage={"g1.jpg"} title={'legumes Sec'} subtitle={'5 food Apps Delivering the bes of your city'}/>
               <CategoriesCard backgroundColor={"#959684"} backgroundImage={"g2.jpg"} title={'FRUITS SEC'} subtitle={'Arrange Your Apple Devices for the Gram'}/>
               <CategoriesCard backgroundColor={"#5DBCD2"} backgroundImage={"g5.jpg"} title={'PRODUIT LAITIERS'} subtitle={'Map Apps for the Superior Mode of Transport'}/>
               <CategoriesCard backgroundColor={"#8F986D"} backgroundImage={"g6.jpg"} title={'CONSERVES'} subtitle={'Our Pick of Apps to Help You Escape From Apps'}/>
               <CategoriesCard backgroundColor={"#FA6779"} backgroundImage={"g8.jpg"} title={'SEmoul'} subtitle={'The Latest Ultra-Specific Photography Editing Apps'}/>
               <CategoriesCard backgroundColor={"#282F49"} backgroundImage={"g7.jpg"} title={'BOISSONS'} subtitle={'100 Cupcake Apps for the Cupcake Connoisseur'}/>
        </ul>
    )
}

export default Categories;
