import ClientFile from "./ClientFile";

export function generateMetadata(){
    return {
        title: "Home | Cart | Your online Cart",
        description: "Browse amazing Cart products ....",
        openGraph:{
            title: "Home | Your online Cart social media",
        description: "Browse amazing Cart products social media",
        }
    };
}

export default function Cart(){
    return(
        <ClientFile/>
    )
}