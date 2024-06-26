

;(()=>{
    (()=>{
        var t, n, e = document.body;
        function s() {
            return parseInt(localStorage.getItem("wcTheme") || 2)
        }
        function o() {
            return Boolean(window.wc.darkLightEnabled)
        }
        function i() {
            if (!o())
                return console.debug("User theming disabled."),
                {
                    isDarkTheme: window.wc.isSiteThemeDark,
                    themeMode: window.wc.isSiteThemeDark ? 1 : 0
                };
            console.debug("User theming enabled.");
            let t, n = s();
            switch (console.debug(`User's theme variation: ${n}`),
            n) {
            case 0:
                t = !1;
                break;
            case 1:
                t = !0;
                break;
            default:
                window.matchMedia("(prefers-color-scheme: dark)").matches ? t = !0 : window.matchMedia("(prefers-color-scheme: light)").matches ? t = !1 : t = window.wc.isSiteThemeDark;
                break
            }
            return t && !e.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"),
            document.body.classList.add("dark")) : !t && e.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"),
            document.body.classList.remove("dark")),
            {
                isDarkTheme: t,
                themeMode: n
            }
        }
        t = null,
        n = !1,
        window.wc = {
            darkLightEnabled: t,
            isSiteThemeDark: n
        },
        window.netlifyIdentity && window.netlifyIdentity.on("init", e=>{
            e || window.netlifyIdentity.on("login", ()=>{
                document.location.href = "/admin/"
            }
            )
        }
        ),
        i(),
        window.PlotlyConfig = {
            MathJaxConfig: "local"
        },
        Object.keys(localStorage).forEach(function(e) {
            /^wc-announcement-/.test(e) && (document.documentElement.setAttribute("data-wc-announcement-status", "dismissed"),
            console.debug("Hiding announcement..."))
        })
    }
    )()
}
)()
