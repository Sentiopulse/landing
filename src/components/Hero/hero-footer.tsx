type HeroFooterProps = {
    title: string;
    subtitle: string;
}

export default function HeroFooter({title, subtitle}:HeroFooterProps){
    return(
        <div className="flex flex-col font-sans">
            <h1 className="flex justify-center text-chart-2 text-3xl font-bold">{title}</h1>
            <h2 className="text-muted-foreground">{subtitle}</h2>
        </div>
    )
}