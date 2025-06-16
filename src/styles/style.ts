// src/styles/enhancedTailwindStyles.ts

type ImageStyleProps = {
  size?: 'thumbnail' | 'medium' | 'large' | 'xlarge' | 'full';
  ratio?: 'square' | 'landscape' | 'portrait' | 'cinematic' | 'auto';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  animation?: 'fade' | 'slide' | 'zoom' | 'parallax' | 'none';
  lazy?: boolean;
  priority?: boolean;
};

type VideoStyleProps = {
  layout?: 'responsive' | 'fixed' | 'fill';
  controls?: boolean;
  autoplay?: boolean;
  animation?: 'fade' | 'slide' | 'none';
  poster?: boolean;
};

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'caption' | 'subtitle' | 'small';
type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextColor = 'primary' | 'secondary' | 'accent' | 'dark' | 'light' | 'error' | 'success' | 'warning' | 'muted';
type TextAnimation = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'typewriter' | 'none';

type NavItem = {
  name: string;
  href: string;
  current: boolean;
  seoTitle?: string;
  ariaLabel?: string;
};

type NavbarStyleProps = {
  variant?: 'light' | 'dark' | 'transparent' | 'gradient';
  sticky?: boolean;
  items: NavItem[];
  animation?: 'slide' | 'fade' | 'none';
  seoOptimized?: boolean;
};

type ButtonStyleProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'hover' | 'pulse' | 'bounce' | 'none';
  fullWidth?: boolean;
  loading?: boolean;
};

type CardStyleProps = {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'hover' | 'fade' | 'slide' | 'none';
  interactive?: boolean;
};

type LayoutStyleProps = {
  container?: 'full' | 'constrained' | 'narrow' | 'wide';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'dark' | 'gradient';
};

/**
 * Enhanced Image Styles Generator with SEO and Animations
 */
export const imageStyles = (props: ImageStyleProps = {}): {
  container: string;
  img: string;
  seoAttributes: Record<string, string>;
} => {
  const {
    size = 'full',
    ratio = 'auto',
    rounded = 'none',
    fit = 'cover',
    animation = 'fade',
    lazy = true,
    priority = false
  } = props;

  const sizeClasses = {
    thumbnail: 'w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40',
    medium: 'w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96',
    large: 'w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto',
    xlarge: 'w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-auto',
    full: 'w-full h-auto'
  };

  const ratioClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4] sm:aspect-[9/16]',
    cinematic: 'aspect-[16/9] sm:aspect-[21/9]',
    auto: ''
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm sm:rounded',
    md: 'rounded sm:rounded-md lg:rounded-lg',
    lg: 'rounded-lg sm:rounded-xl lg:rounded-2xl',
    full: 'rounded-full'
  };

  const fitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  };

  const animationClasses = {
    fade: 'transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in',
    slide: 'transition-transform duration-700 ease-out transform translate-y-4 animate-slide-up',
    zoom: 'transition-transform duration-500 ease-in-out hover:scale-105 focus:scale-105',
    parallax: 'transition-transform duration-300 ease-out will-change-transform',
    none: ''
  };

  const containerClasses = [
    'relative overflow-hidden',
    'before:absolute before:inset-0 before:bg-gray-800 before:animate-pulse',
    'after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-full after:animate-shimmer'
  ].join(' ');

  const imgClasses = [
    'block max-w-full h-auto',
    sizeClasses[size],
    ratioClasses[ratio],
    roundedClasses[rounded],
    fitClasses[fit],
    animationClasses[animation],
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900'
  ].join(' ');

  const seoAttributes = {
    loading: lazy && !priority ? 'lazy' : 'eager',
    decoding: 'async',
    'data-priority': priority ? 'true' : 'false',
    'data-animation': animation,
    fetchpriority: priority ? 'high' : 'auto'
  };

  return {
    container: containerClasses,
    img: imgClasses,
    seoAttributes
  };
};

/**
 * Enhanced Video Styles Generator
 */
export const videoStyles = (props: VideoStyleProps = {}): {
  wrapper: string;
  video: string;
  controls: string;
  seoAttributes: Record<string, string>;
} => {
  const {
    layout = 'responsive',
    controls = true,
    autoplay = false,
    animation = 'fade',
    poster = true
  } = props;

  const layoutClasses = {
    responsive: 'relative w-full overflow-hidden aspect-video',
    fixed: 'w-full h-auto max-w-full',
    fill: 'absolute inset-0 w-full h-full'
  };

  const animationClasses = {
    fade: 'transition-opacity duration-700 ease-in-out',
    slide: 'transition-transform duration-700 ease-out',
    none: ''
  };

  const videoClasses = [
    layout === 'responsive' ? 'absolute inset-0 w-full h-full' : 'w-full h-auto',
    'object-cover rounded-lg sm:rounded-xl',
    animationClasses[animation],
    'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900'
  ].join(' ');

  const controlsClasses = [
    'absolute inset-0 flex items-center justify-center',
    'bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300',
    'backdrop-blur-sm rounded-lg'
  ].join(' ');

  const seoAttributes = {
    preload: 'metadata',
    'data-poster': poster ? 'true' : 'false',
    'aria-label': 'Video content',
    tabindex: '0'
  };

  return {
    wrapper: layoutClasses[layout],
    video: videoClasses,
    controls: controlsClasses,
    seoAttributes
  };
};

/**
 * Enhanced Text Styles Generator with Animations
 */
export const textStyles = (
  variant: TextVariant = 'body',
  align: TextAlign = 'left',
  color: TextColor = 'dark',
  animation: TextAnimation = 'none'
): {
  classes: string;
  seoAttributes: Record<string, string>;
} => {
  const variantClasses = {
    h1: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight',
    h2: 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
    h3: 'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
    h4: 'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
    h5: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-normal',
    h6: 'text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-normal',
    body: 'text-sm xs:text-base sm:text-lg leading-relaxed',
    lead: 'text-base xs:text-lg sm:text-xl md:text-2xl leading-relaxed font-light',
    caption: 'text-xs xs:text-sm opacity-75 leading-normal',
    subtitle: 'text-sm xs:text-base sm:text-lg font-medium text-gray-600 leading-normal',
    small: 'text-xs leading-tight'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  const colorClasses = {
    primary: 'text-blue-400 dark:text-blue-300',
    secondary: 'text-gray-300 dark:text-gray-200',
    accent: 'text-amber-400 dark:text-amber-300',
    dark: 'text-gray-100 dark:text-gray-50',
    light: 'text-gray-900 dark:text-gray-100',
    error: 'text-red-400 dark:text-red-300',
    success: 'text-green-400 dark:text-green-300',
    warning: 'text-yellow-400 dark:text-yellow-300',
    muted: 'text-gray-400 dark:text-gray-300'
  };

  const animationClasses = {
    fade: 'animate-fade-in opacity-0',
    'slide-up': 'animate-slide-up transform translate-y-4 opacity-0',
    'slide-down': 'animate-slide-down transform -translate-y-4 opacity-0',
    'slide-left': 'animate-slide-left transform translate-x-4 opacity-0',
    'slide-right': 'animate-slide-right transform -translate-x-4 opacity-0',
    typewriter: 'animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-gray-400',
    none: ''
  };

  const classes = [
    variantClasses[variant],
    alignClasses[align],
    colorClasses[color],
    animationClasses[animation],
    'transition-all duration-300 ease-in-out'
  ].join(' ');

  const seoAttributes = {
    'data-variant': variant,
    'data-animation': animation,
    'aria-live': animation === 'typewriter' ? 'polite' : undefined
  };

  return { classes, seoAttributes };
};

/**
 * Enhanced Navbar Styles Generator
 */
export const navbarStyles = (props: NavbarStyleProps = { 
  variant: 'light', 
  sticky: false, 
  items: [], 
  animation: 'slide',
  seoOptimized: true 
}) => {
  const { 
    variant = 'light', 
    sticky = false, 
    animation = 'slide',
    seoOptimized = true 
  } = props;

  const baseClasses = [
    'flex items-center justify-between',
    'px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16',
    'py-3 xs:py-4 sm:py-6',
    'transition-all duration-300 ease-in-out',
    sticky ? 'sticky top-0 z-50 backdrop-blur-md' : '',
    variant === 'light' ? 'bg-white/10 text-gray-100 shadow-lg border-b border-gray-700/50' : '',
    variant === 'dark' ? 'bg-gray-900/90 text-white border-b border-gray-700' : '',
    variant === 'transparent' ? 'bg-black/20 text-white backdrop-blur-sm' : '',
    variant === 'gradient' ? 'bg-gradient-to-r from-gray-900/80 to-black/80 text-white backdrop-blur-sm' : '',
    animation === 'slide' ? 'animate-slide-down' : '',
    animation === 'fade' ? 'animate-fade-in' : ''
  ].join(' ');

  const itemClasses = (current: boolean) => [
    'relative px-2 xs:px-3 sm:px-4 py-2 rounded-md',
    'text-xs xs:text-sm sm:text-base font-medium',
    'transition-all duration-200 ease-in-out',
    'hover:scale-105 focus:scale-105',
    'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900',
    current 
      ? 'bg-gray-800/80 text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400' 
      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
  ].join(' ');

  const mobileMenuClasses = [
    'fixed inset-0 z-50 p-4 xs:p-6 space-y-4',
    'animate-slide-in-right',
    'backdrop-blur-lg',
    variant === 'light' ? 'bg-gray-900/95' : '',
    variant === 'dark' ? 'bg-gray-900/95' : '',
    variant === 'transparent' ? 'bg-gray-900/90' : '',
    variant === 'gradient' ? 'bg-gradient-to-br from-gray-900/95 to-black/95' : ''
  ].join(' ');

  const seoAttributes = seoOptimized ? {
    role: 'navigation',
    'aria-label': 'Main navigation',
    'data-sticky': sticky ? 'true' : 'false'
  } : {};

  return {
    base: baseClasses,
    brand: 'text-lg xs:text-xl sm:text-2xl font-bold hover:scale-105 transition-transform duration-200',
    item: itemClasses,
    mobile: {
      menu: mobileMenuClasses,
      toggle: [
        'inline-flex items-center justify-center p-2 rounded-md',
        'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100',
        'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-gray-900',
        'transition-all duration-200 ease-in-out'
      ].join(' ')
    },
    seoAttributes
  };
};

/**
 * Button Styles Generator
 */
export const buttonStyles = (props: ButtonStyleProps = {}): string => {
  const {
    variant = 'primary',
    size = 'md',
    animation = 'hover',
    fullWidth = false,
    loading = false
  } = props;

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-400 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl shadow-blue-500/25',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100 focus:ring-gray-400 focus:ring-offset-gray-900 shadow-lg',
    outline: 'border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white focus:ring-blue-400 focus:ring-offset-gray-900',
    ghost: 'text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-400 focus:ring-offset-gray-900',
    danger: 'bg-red-600 hover:bg-red-500 text-white focus:ring-red-400 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl shadow-red-500/25'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const animationClasses = {
    hover: 'hover:scale-105 active:scale-95',
    pulse: 'hover:animate-pulse',
    bounce: 'hover:animate-bounce',
    none: ''
  };

  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    animationClasses[animation],
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : ''
  ].join(' ');
};

/**
 * Card Styles Generator
 */
export const cardStyles = (props: CardStyleProps = {}): string => {
  const {
    variant = 'default',
    padding = 'md',
    animation = 'hover',
    interactive = false
  } = props;

  const baseClasses = 'rounded-lg transition-all duration-300 ease-in-out';

  const variantClasses = {
    default: 'bg-gray-800/50 shadow-lg border border-gray-700/50 backdrop-blur-sm',
    elevated: 'bg-gray-800/70 shadow-2xl backdrop-blur-md',
    outlined: 'bg-gray-900/30 border-2 border-gray-600/50 backdrop-blur-sm',
    filled: 'bg-gray-800/80 border border-gray-700/30 backdrop-blur-sm'
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3 xs:p-4',
    md: 'p-4 xs:p-6 sm:p-8',
    lg: 'p-6 xs:p-8 sm:p-10 md:p-12',
    xl: 'p-8 xs:p-10 sm:p-12 md:p-16'
  };

  const animationClasses = {
    hover: 'hover:shadow-2xl hover:-translate-y-1',
    fade: 'animate-fade-in opacity-0',
    slide: 'animate-slide-up transform translate-y-4 opacity-0',
    none: ''
  };

  return [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    animationClasses[animation],
    interactive ? 'cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900' : ''
  ].join(' ');
};

/**
 * Layout Styles Generator
 */
export const layoutStyles = (props: LayoutStyleProps = {}): {
  container: string;
  section: string;
  grid: string;
} => {
  const {
    container = 'constrained',
    spacing = 'md',
    background = 'white'
  } = props;

  const containerClasses = {
    full: 'w-full',
    constrained: 'container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl',
    narrow: 'container mx-auto px-4 xs:px-6 sm:px-8 max-w-4xl',
    wide: 'container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-8xl'
  };

  const spacingClasses = {
    none: 'space-y-0',
    sm: 'space-y-4 xs:space-y-6',
    md: 'space-y-6 xs:space-y-8 sm:space-y-12',
    lg: 'space-y-8 xs:space-y-12 sm:space-y-16 md:space-y-20',
    xl: 'space-y-12 xs:space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32'
  };

  const backgroundClasses = {
    white: 'bg-gray-900 text-gray-100',
    gray: 'bg-gray-800 text-gray-100',
    dark: 'bg-black text-white',
    gradient: 'bg-gradient-to-br from-gray-900 to-black text-white'
  };

  const gridClasses = [
    'grid gap-4 xs:gap-6 sm:gap-8',
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    'auto-rows-auto'
  ].join(' ');

  return {
    container: [containerClasses[container], spacingClasses[spacing]].join(' '),
    section: [backgroundClasses[background], 'py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24'].join(' '),
    grid: gridClasses
  };
};

/**
 * SEO Optimization Utilities
 */
export const seoUtils = {
  structuredData: (type: 'Article' | 'Organization' | 'WebSite', data: Record<string, any>) => ({
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type,
        ...data
      })
    }
  }),

  metaTags: {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    googlebot: 'index,follow',
    yandexBot: 'index,follow',
    bingBot: 'index,follow'
  },

  imageAlt: (context: string, description: string) => 
    `${context} - ${description}`.trim(),

  linkAttributes: (isExternal: boolean = false) => ({
    ...(isExternal && {
      rel: 'noopener noreferrer',
      target: '_blank'
    }),
    'aria-describedby': 'link-description'
  })
};

/**
 * Animation Keyframes (to be added to your CSS)
 */
export const animationCSS = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-down {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-left {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-right {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: currentColor; }
}

.animate-fade-in { animation: fade-in 0.7s ease-in-out forwards; }
.animate-slide-up { animation: slide-up 0.7s ease-out forwards; }
.animate-slide-down { animation: slide-down 0.5s ease-out forwards; }
.animate-slide-left { animation: slide-left 0.7s ease-out forwards; }
.animate-slide-right { animation: slide-right 0.7s ease-out forwards; }
.animate-slide-in-right { animation: slide-in-right 0.3s ease-out forwards; }
.animate-shimmer { animation: shimmer 2s infinite; }
.animate-typewriter { animation: typewriter 2s steps(20) forwards, blink 1s infinite; }

/* Mobile-first responsive breakpoints */
@media (max-width: 475px) { .xs\\:text-sm { font-size: 0.875rem; } }
@media (max-width: 640px) { .sm\\:text-base { font-size: 1rem; } }
`;

/**
 * Export enhanced style utilities
 */
export const tw = {
  image: imageStyles,
  video: videoStyles,
  text: textStyles,
  navbar: navbarStyles,
  button: buttonStyles,
  card: cardStyles,
  layout: layoutStyles,
  seo: seoUtils,
  animations: animationCSS
};

// Usage example components
export const exampleUsage = {
  heroSection: `
    <section className="${tw.layout().section}">
      <div className="${tw.layout().container}">
        <h1 className="${tw.text('h1', 'center', 'light', 'slide-up').classes}">
          Welcome to Our Site
        </h1>
        <p className="${tw.text('lead', 'center', 'muted', 'fade').classes}">
          Experience the future of web design
        </p>
      </div>
    </section>
  `,
  
  imageGallery: `
    <div className="${tw.layout().grid}">
      {images.map((img, index) => (
        <div key={index} className="${tw.card({ animation: 'hover', interactive: true })}">
          <img 
            className="${tw.image({ size: 'large', animation: 'zoom' }).img}"
            {...tw.image().seoAttributes}
            src={img.src}
            alt={tw.seo.imageAlt('Gallery', img.description)}
          />
        </div>
      ))}
    </div>
  `
};