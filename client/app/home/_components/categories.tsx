// "use client";
// import Image from 'next/image';

// export default function Categories() {
//     const images = [
//         { src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/bafbd8d5-f327-4bf3-aea4-9c53880cb7c21677917419652-SS23-TopNav-Men.png", alt: "Men" },
//         { src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/b0eb0d86-4623-45c7-b0cb-4fdd49ee5dc81677917419663-SS23-TopNav-Women.png", alt: "Women" },
//         { src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/cf5acd39-4447-4f7c-acdb-60ed7faea66d1677917419638-SS23-TopNav-Kids.png", alt: "Kids" },
//         { src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/8ea951bd-68e3-43d8-a332-01b085c11c171677917419576-SS23-TopNav-Footwear.jpg", alt: "Footwear" },
//         { src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_200,c_limit,fl_progressive/assets/images/2023/3/4/3849d868-2bed-46cf-b7f7-2b20e3f63abf1677917419617-SS23-TopNav-Jewellery.jpg", alt: "Jewellery" },
//     ];

//     return (
//         <div className='flex flex-row gap-10 bg-background p-2 justify-around rounded-md flex-wrap'>
//             {images.map((image, index) => (
//                 <div key={index} className='flex flex-col items-center'>
//                     <Image src={image.src} alt={image.alt} width={200} height={200} className='h-52 w-52 object-cover' />
//                 </div>
//             ))}
//         </div>
//     )
// }
