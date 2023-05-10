export default function Menu({title,items}){
    return(
        <div>
            <section>
                <nav className="grid gap-y-4">
                    <h6 className="text-lg text-primary-brand-color">{title}</h6>
                    <nav>
                        <ul>
                            {items.map((item,key)=>(
                                <li key={key}>
                                    <a href="#">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </nav>
            </section>
        </div>
    )
}