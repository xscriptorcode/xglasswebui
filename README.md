**X Glass Web UI** es una colección de componentes en React y TypeScript que representan íconos populares, herramientas de UI y símbolos de diseño, todos integrados en contenedores con estilo glassmorphism. Está pensada para portfolios, paneles de administración o cualquier proyecto moderno que requiera una estética cuidada y uniforme.

## Características

- Construido con React y TypeScript
- Estilo glassmorphism aplicado mediante Tailwind CSS
- Componentes reutilizables y adaptables a diferentes tamaños
- Compatibilidad con temas claro y oscuro
- Organización modular por categorías: redes sociales, trabajo, diseño, herramientas, entre otros

## Estructura

```
/components/icons/
├── SocialIconsGlass.tsx
├── PortfolioIconsGlass.tsx
├── DesignIconsGlass.tsx
└── ...
```

Cada archivo contiene exportaciones nombradas de componentes:

```tsx
import { TwitterIconGlass, GithubIconGlass } from "@/components/icons/SocialIconsGlass";
```

## Uso
* Copia los archivos de componentes a tu proyecto.
* Asegúrate de tener configurado Tailwind CSS.
* Importa y usa los íconos directamente:

``` tsx
<LinkedInIconGlass />
```

### Personalización
* Puedes modificar propiedades como stroke="white" o bg-white/10 por variables CSS o clases Tailwind adaptadas a tu paleta.
* Todos los íconos son escalables y tienen animación hover.
* Si deseas tipografías personalizadas (por ejemplo, EB Garamond), puedes importarlas desde Google Fonts e integrarlas con clases CSS.