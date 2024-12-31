export type Blog = {
    title: string;
    date: string;
    description: string;
    image:string;
    imageAlt:string;
    slug: string;
    text:string;
}

const blogs: Blog[] = [
	{
		title: "Khao Sok Trip",
        date: "Thursday November 4th",
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image:"./Images/KhaoSok1.jpg",
        imageAlt:"./Images/KhaoSok1.jpg",
        text:"This is the text for this blog",
        slug:"add later",
	},
	{
		title: "Painting School Trip",
        date: "Thursday November 5th",
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image:"./Images/KhaoSok1.jpg",
        imageAlt:"./Images/KhaoSok1.jpg",
        text:"This is the text for this blog",
        slug:"add later",
	}
];

export default blogs