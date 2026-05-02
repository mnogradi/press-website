$files = @("index.html", "about.html", "publications.html", "theology.html", "astralis.html", "classics.html", "services.html", "support.html", "contact.html", "templates.html")

foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content $f -Raw
        $content = $content -replace "text-dawn-gold", "text-slate-500"
        $content = $content -replace "bg-dawn-gold", "bg-slate-300"
        $content = $content -replace "hover:text-dawn-gold", "hover:text-midnight"
        $content = $content -replace "group-hover:text-dawn-gold", "group-hover:text-slate-600"
        $content = $content -replace "border-dawn-gold", "border-slate-200"
        $content = $content -replace "decoration-dawn-gold/30", "decoration-slate-300"
        $content = $content -replace "text-dawn-white", "text-white/60"
        $content = $content -replace "'dawn-gold': '#c5a35d'", "'silver': '#cbd5e1'"
        
        # Specific hero label replacements (already did some but to be sure)
        $content = $content -replace "text-white/60 mb-4 tracking-\[0.2em\]", "text-white/50 mb-4 tracking-[0.2em]"
        
        Set-Content $f $content -NoNewline
    }
}
