export default function MobileApp(){
    return(
        <div className="bg-primary-brand-color bg-mobile-app p-10 mt-7 rounded-lg text-white">
            <div>
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin</h3>
                <p>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                <nav className="flex flex-row gap-2">
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                    </a>
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                    </a>
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                     </a>
                </nav>
            </div>
        </div>
    )
}