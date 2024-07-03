"use client";
import FeaturedProduct from './featured';

export default function products() {
    const productTitles = ["Mens Product", "Womens Product", "Kids Product"];

    return (
        <div className="flex flex-col gap-5">
            {productTitles.map(title => (
                <FeaturedProduct key={title} title={title} />
            ))}
        </div>
    );
}

