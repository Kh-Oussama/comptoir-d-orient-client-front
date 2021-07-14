import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import {Link, withRouter} from 'react-router-dom';

import { motion, useInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({title}) => {
    const inverted = useInvertedScale();
    return (
        <motion.div
            className="content-container"
            style={{ ...inverted, originY: 0, originX: 0 }}
        >
            <div className="post-data">
                <div className="title-block">
                    <Link to={``}>
                        <h1 className="title">{title}</h1>
                    </Link>
                    <i className="fas fa-palette"/>
                </div>

                <h2 className="subtitle"> brush1,brush2 ....</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo saepe voluptate. At consectetur dolorem doloribus excepturi odit quam quasi unde vitae. A et inventore, itaque molestiae nobis rerum saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eaque incidunt omnis placeat, quas velit veritatis! Cupiditate ea error fugiat id ipsam magnam maiores odio officiis, recusandae soluta suscipit unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dolor, dolorem ipsam iusto labore magni minus modi molestiae nesciunt numquam, perspiciatis possimus, quasi quisquam ratione rerum sunt suscipit ut.
                </p>
                <div className="cta">
                    <Link to={`/shop/mark/category/products`}>
                        Consulter &rarr;
                    </Link>
                </div>
            </div>

            {/*<LoremIpsum p={1} avgWordsPerSentence={6} avgSentencesPerParagraph={10} cl />*/}
        </motion.div>
    );
});
