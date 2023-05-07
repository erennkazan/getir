export default function Category({category:{id,title,image}}){
    return(
        <a href="#" className="flex flex-col items-center gap-y-2 text-center p-4">
            <img src="{image} alt={title}" className="w-12 h-12 rounded border border-gray-200"/>
            <span className="text-sm">{title}</span>
        </a>
    )
}