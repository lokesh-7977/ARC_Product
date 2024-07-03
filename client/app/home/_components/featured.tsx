"use client";
import ProductCard from './pcard';

export default function  FeatureProduct({ title }: { title: string }) {
    const productCards = Array(4).fill(<ProductCard />);

    return (
        <div className="bg-background rounded-md shadow-sm p-5 flex flex-col gap-5">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                {productCards}
            </div>
        </div>
    );
};


