let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Mexico City",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    ñ: "search-bar",
    q: "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Ocio",
      background_url: "src/img/banners/aventurine.gif",
      categories: [
        {
          name: "Redes Sociales",
          links: [
            {
              name: "X",
              url: "https://x.com/home?lang=es",
              icon: "brand-x-filled",
              icon_color: "#7daea3",
            },
            {
              name: "UnixPorn",
              url: "https://reddit.com/r/unixporn/",
              icon: "brand-reddit",
              icon_color: "#e78a4e",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962",
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "#d3869b",
            },
            {
              name: "Tumblr",
              url: "https://www.tumblr.com/",
              icon: "brand-tumblr",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Anime",
          links: [
            {
              name: "AnimeFLV",
              url: "https://www3.animeflv.net/",
              icon: "brand-bilibili",
              icon_color: "#7daea3",
            },
            {
              name: "Anilist",
              url: "https://anilist.co/user/NeiK0s496/",
              icon: "brand-funimation",
              icon_color: "#9dbe8a",
            },
            {
              name: "MyAnimeList",
              url: "https://https://myanimelist.net/profile/NeiKos426",
              icon: "robot",
              icon_color: "#5a6ac8",
            },
          ],
        },
        {
          name: "Inspiración y Edits",
          links: [
            {
              name: "Pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "brush",
              icon_color: "#d5a6bd",
            },
            {
              name: "Pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "Canva",
              url: "https://www.canva.com/",
              icon: "paint",
              icon_color: "#9fc5e8",
            },
            {
              name: "PixAi",
              url: "https://pixai.art/",
              icon: "brand-openai",
              icon_color: "#d3869b",
            },
            {
              name: "Colors",
              url: "https://coolors.co/image-picker",
              icon: "palette",
              icon_color: "#daa0cc",
            },
          ],
        },
      ],
    },
    {
      name: "Uni",
      background_url: "src/img/banners/phainon2.gif",
      categories: [
        {
          name: "Util",
          links: [
            {
              name: "Notion",
              url: "https://www.notion.so/",
              icon: "brand-notion",
              icon_color: "#ecf2f6",
            },
            {
              name: "Compscilib",
              url: "https://compscilib.com/",
              icon: "brand-vscode",
              icon_color: "#8abeb7",
            },
            {
              name: "Deepseek",
              url: "https://chat.deepseek.com/",
              icon: "world-search",
              icon_color: "#f0c674",
            },
            {
              name: "Overleaf",
              url: "https://es.overleaf.com/project",
              icon: "leaf",
              icon_color: "#63996b",
            },
          ],
        },
        {
          name: "Universidad",
          links: [
            {
              name: "Fac. Ciencias",
              url: "https://web.fciencias.unam.mx/;jsessionid=260DA23A51DEA1B3AC4525D1BAF4B625/",
              icon: "device-laptop",
              icon_color: "#8abeb7",
            },

            {
              name: "Google Classroom",
              url: "https://classroom.google.com/u/4/?pli=1",
              icon: "school",
              icon_color: "#eab308",
            },

            {
              name: "Drive",
              url: "https://drive.google.com/drive/u/0/home",
              icon: "brand-google-drive",
              icon_color: "#ffa348",
            },
          ],
        },
        {
          name: "Materias",
          links: [
            {
              name: "Matemáticas IV",
              url: "https://tuaulavirtual.educatic.unam.mx/my/courses.php",
              icon: "bookmark",
              icon_color: "#ffa348",
            },
            {
              name: "Lógica Computacional",
              url: "https://turing.iimas.unam.mx/~nohernan/teaching/notas-lc/index.html",
              icon: "book",
              icon_color: "#8abeb7",
            },
            {
              name: "Datacamp",
              url: "https://www.datacamp.com/",
              icon: "brand-python",
              icon_color: "#059669",
            },
            {
              name: "Google Books",
              url: "https://play.google.com/books?type=ebooks&source=uploads",
              icon: "book",
              icon_color: "#ea6962",
            },
            {
              name: "Mi Horario",
              url: "/schedule.html",  // Add this line
              icon: "calendar",
              icon_color: "#eab308",
            },
          ],
        },
      ],
    },
    {
      name: "Code",
      background_url: "src/img/banners/sw.gif",
      categories: [
        {
          name: "Dev",
          links: [
            {
              name: "Github",
              url: "https://github.com/NeiKa0s496",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "Gitlab",
              url: "https://gitlab.com/NeiKos496",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
            {
              name: "Hugging Face",
              url: "https://huggingface.co",
              icon: "mood-smile",
              icon_color: "#eab308",
            },
          ],
        },
        {
          name: "Cursos",
          links: [
            {
              name: "Microsoft",
              url: "https://learn.microsoft.com/es-mx/training/",
              icon: "brand-windows",
              icon_color: "#ea6562",
            },
            {
              name: "CS50",
              url: "https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "Logica Computacional",
              url: "https://marcovladimir.codeberg.page/logcomp.html",
              icon: "robot",
              icon_color: "#65a30d",
            },
            {
              name: "Redes Neuronales",
              url: "https://victormijangosdelacruz.github.io/Redes-Neuronales/",
              icon: "brain",
              icon_color: "#0891b2",
            },
            {
              name: "Cisco",
              url: "https://www.netacad.com/dashboard",
              icon: "router",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "Práctica",
          links: [
            {
              name: "Leetcode",
              url: "https://leetcode.com/u/NeiK0s496/",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "Mío",
      background_url: "src/img/banners/sunny.gif",
      categories: [
        {
          name: "Mensajería",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/3/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "Whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: "#a9b665",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/",
              icon: "brand-facebook",
              icon_color: "#0284c7",
            },
          ],
        },
        {
          name: "Compras",
          links: [
            {
              name: "Amazon",
              url: "https://www.amazon.com.mx/",
              icon: "brand-amazon",
              icon_color: "#ea6962",
            },
            {
              name: "AliExpress",
              url: "https://es.aliexpress.com/",
              icon: "shopping-cart",
              icon_color: "#ff6b00",
            },
            {
              name: "IKEA",
              url: "https://www.ikea.com/mx/",
              icon: "armchair-2",
              icon_color: "#0058a3",
            },
          ],
        },
        {
          name: "Varios",
          links: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "Discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: "#c49ae5",
            },
            {
              name: "Clip Studio",
              url: "https://assets.clip-studio.com/es-es//",
              icon: "pencil",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName("head")[0].appendChild(css);
})();
