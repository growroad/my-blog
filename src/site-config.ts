/**
 * astro-theme-ink · site configuration
 * Everything the theme needs in one typed object — no virtual modules,
 * just import { config } from '@/site-config' where needed.
 */

export interface NavItem {
  title: string
  link: string
}

export interface FriendLink {
  name: string
  desc: string
  url: string
  /** Absolute URL of the avatar image. Optional. */
  avatar?: string
}

export interface EducationItem {
  school: string
  /** e.g. "计算机技术" */
  major?: string
  /** e.g. "硕士" */
  degree?: string
  /** e.g. "August 2021 - July 2024" */
  date: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface HomeHeroConfig {
  /** Tagline chip above the name, e.g. "Developer / Designer / Photographer" */
  tagline?: string
  /** Location label, e.g. "China / QingDao" */
  location?: string
  /** About paragraph under the name */
  about: string
  /** Short homepage introduction; falls back to the first paragraph of about. */
  summary?: string
  /** Action buttons */
  buttons?: { title: string; link: string }[]
}

/** Home page content — edit this file and sections appear/disappear automatically. */
export interface HomeConfig {
  hero: HomeHeroConfig
  /** How many recent posts to show; capped at 5 (0 hides the section). */
  recentPosts: number
  /** Education timeline; renders when non-empty */
  education?: EducationItem[]
  /** Skill groups; renders when non-empty */
  skills?: SkillGroup[]
  /** Show the tag cloud on the home page */
  showTags: boolean
  /** Show friend links on the home page */
  showFriends: boolean
}

export interface Config {
  /** Site identity */
  site: {
    title: string
    /** Shown on the home page hero and in the footer copyright */
    author: string
    description: string
    lang: string
    favicon: string
    /** Avatar image shown on the home page hero; a path under `public/` */
    avatar: string
    /** Open-graph image path under `public/` */
    ogImage: string
    /** Founding year of the blog — used by the console easter egg */
    since: number
    /** Default color palette for first-time visitors: 'ink' (warm) | 'fresh' (mint) */
    palette: 'ink' | 'fresh'
    /** Default theme for first-time visitors: 'light' | 'dark' | 'system' (follow OS) */
    theme: 'light' | 'dark' | 'system'
    /** e.g. " · " */
    titleDelimiter: string
  }
  header: {
    menu: NavItem[]
  }
  /** Article page views — Waline server URL; leave empty to disable.
   *  Waline 3 counts via POST `/article` (v2 counted on GET); the theme
   *  handles both. The same server also powers the site-wide counter below. */
  pageview: {
    server: string
    /** Site-wide total-visits counter in the footer (shares the same server) */
    siteWide: boolean
  }
  footer: {
    /** Show a quote selected at build time; omitted or false keeps the footer quiet. */
    showQuote?: boolean
    /** Shown as `© <year> <author>`; set a custom string to override entirely */
    copyright?: string
    /** Extra plain-text links rendered next to the copyright */
    links?: { title: string; url: string }[]
    social?: Record<string, { label: string; url: string }>
  }
  blog: {
    pageSize: number
  }
  /** Home page content (config-driven sections) */
  home: HomeConfig
  /** Lightweight client-side search (no external indexer) */
  search: {
    enabled: boolean
  }
  /**
   * Waline comment system. Leave `server` empty to disable.
   * See https://waline.js.org to deploy your own Waline instance.
   */
  comment: {
    provider: 'waline'
    server: string
  }
  friends: FriendLink[]
}

export const config: Config = {
  site: {
    title: "个体年代",
    author: '图哥',
    description: "我码字的后花园",
    lang: '中文',
    favicon: '/favicon/favicon.ico',
    avatar: '/touxiang.jpg',
    ogImage: '/og-card.svg',
    since: 2020,
    palette: 'fresh',
    theme: 'system',
    titleDelimiter: ' · '
  },

  header: {
    menu: [
      { title: '首页', link: '/' },
      { title: '文章', link: '/blog' },
      { title: '归档', link: '/archives' },
      { title: '标签', link: '/tags' },
      { title: '链接', link: '/links' },
      { title: '关于', link: '/about' }
    ]
  },

  // Article page views + site-wide visit counter (your own Waline server)
  pageview: {
    server: 'https://mysoholife.com/',
    siteWide: true
  },

  footer: {
    showQuote: true,
    copyright: `© 1893 - ${new Date().getFullYear()} 图哥`,
    links: [
      { title: 'RSS', url: '/rss.xml' },
      { title: '公众号个体年代', url: '#' }
    ],
    social: {
      github: { label: 'GitHub', url: '#' }
    }
  },

  blog: {
    pageSize: 8
  },

  // Home page content — edit this and the sections render automatically
  home: {
    hero: {
      tagline: '外贸 / 读书 / 带娃',
      location: '微信：abctunan',
      about:
        '就是个做外贸的soho，提供599建站服务，有时间就写点文章\n\n中年失业没办法，在走投无路的情况下做起了外贸，结果一不小心成了。\n\n看看书、带带娃、弹弹琴，把把脉，下下棋，仅此而已。',
      buttons: [{ title: '更多介绍', link: '/about' }]
    },
    recentPosts: 5,
    education: [],
    skills: [
      { title: '编着玩', items: ['Python', 'JS', 'C', 'HTML', 'CSS', 'Shell'] },
      { title: '弄着玩', items: ['读书', '国际象棋', '弹琴', '看娃','中国医学'] },
      {
        title: '工具们',
        items: [
          'VS Code',
          'Obsidian',
          'Typora',
          'Git',
          'Docker',
          'Linux',
          'FFMPEG',
          'Hermes',
          'Openlitespeed',
          'Thinkpad'
        ]
      }
    ],
    showTags: false,
    showFriends: false
  },

  search: {
    enabled: true
  },

  comment: {
    provider: 'waline',
    // Fill in your Waline server URL to enable comments, e.g. deployed on
    // Vercel + LeanCloud: https://your-waline.vercel.app/
    server: ''
  },

  friends: [
    {
      name: 'Github',
      desc: 'The web framework for content-driven Codes.',
      url: 'https://github.com/',
      avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      name: 'UnoCSS',
      desc: 'The instant atomic CSS engine.',
      url: 'https://unocss.dev',
      avatar: 'https://unocss.dev/favicon.svg'
    }
  ]
}
