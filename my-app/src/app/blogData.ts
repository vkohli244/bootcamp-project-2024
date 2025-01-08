type Blog = {
    title: string;
    date: string,//Date;
    description: string;
    image:string;
    imageAlt:string;
    slug: string;
    text:string;
    comments:string[];
    content:string;
}

const blogs: Blog[] = [
	{
		title: "Khao Sok Trip",
        date: "Thursday",//new Date("2024-11-04"),
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image:"./Images/KhaoSok1.jpg",
        imageAlt:"./Images/KhaoSok1.jpg",
        text:"This is the text for this blog",
        slug:"add later",
        comments:[""],
        content:"",
	},
	{
		title: "Painting School Trip",
        date: "Friday",//new Date("2024-11-05"),
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image:"./Images/KhaoSok1.jpg",
        imageAlt:"./Images/KhaoSok1.jpg",
        text:"This is the text for this blog",
        slug:"add later",
        comments:[""],
        content:"",
	}
];

export default blogs