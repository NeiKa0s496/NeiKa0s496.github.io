class Links extends Component {
  constructor() {
    super();
  }

  static getIcon(link) {
    const defaultColor = "#726f6f";

    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>`
      : "";
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);

    return `
      ${categories
        .map(({ name, links }) => {
          return `
          <li>
            <h1>${name}</h1>
              <div class="links-wrapper">
              ${links
                .map(
                  (link) => `
                  <div class="link-info">
                    <a href="${link.url}">
                      ${Links.getIcon(link)}
                      ${
                        link.name ? `<p class="link-name">${link.name}</p>` : ""
                      }
                    </a>
                </div>`
                )
                .join("")}
            </div>
          </li>`;
        })
        .join("")}
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat;background-size: contain; "`;
  }

  static getAll(tabs) {
    return `
      ${tabs
        .map(({ name, background_url }, index) => {
          return `<ul class="${name}" ${Category.getBackgroundStyle(
            background_url
          )} ${index == 0 ? "active" : ""}>
            <div class="banner"></div>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
        })
        .join("")}
    `;
  }
}

class Tabs extends Component {
  refs = {};

  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.icons.tabler,
      this.resources.fonts.K2D,
      this.resources.fonts.raleway,
      this.resources.libs.awoo,
    ];
  }

  style() {
    return `
      status-bar {
          bottom: -70px;
          height: 32px;
          background:rgb(49, 49, 49);
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      }

      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #fff;
      }
          /*color del fondo sombra*/

      #panels {
          border-radius: 5px 0 0 5px;
          width: 90%;
          max-width: 1200px;
          height: 450px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          background: rgb(49 49 49 / 60%);
          backdrop-filter: blur(1px);
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 10px 0 0 10px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 100%;
          right: 100%;
          background: rgb(49 49 49 / 0%) url("../img/bg-1.gif") repeat left;
	        transition: all .6s;
	        # animation: scroll 25s ease-in-out infinite;
      }

      @keyframes scroll {
          50% {
              background-position-x: -240px;
          }
      }

      .categories ul:nth-child(2) {
          --flavour:rgb(225, 194, 68);
      }

      .categories ul:nth-child(3) {
          --flavour:rgb(96, 255, 242);
      }

      .categories ul:nth-child(4) {
          --flavour:rgb(255, 220, 122);
      }

      .categories ul:nth-child(5) {
          --flavour:rgb(134, 198, 211);
      }

      .categories ul:nth-child(6) {
          --flavour:rgb(68, 156, 155);
      }

      .categories ul:nth-child(7) {
          --flavour:rgb(122, 138, 255);
      }

      .categories ul:nth-child(8) {
          --flavour:rgb(238, 180, 141);
      }

      .categories ul:nth-child(9) {
          --flavour:rgb(206, 226, 188);
      }

      .categories ul:nth-child(10) {
          --flavour: #7daea3;
      }

      .categories ul:nth-child(11) {
          --flavour:rgb(134, 207, 211);
      }

      .categories ul:nth-child(12) {
          --flavour:rgb(134, 208, 211);
      }

      .categories ul .links {
          box-shadow: inset -1px 0 var(--flavour);
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }
    
      /* color de fondo*/

      .categories .links {
          right: 0;
          width: 62%;
          height: 100%;
          background: rgb(49 49 49 / 0%);
          padding: 5%;
          flex-wrap: wrap;
          backdrop-filter: blur(4px);
      }

      .categories .links li {
          list-style: none;
      }
    
    /* color de letra y fondo de los cuadritos*/

      .categories ul .links a {
          color:rgb(253, 252, 255);
          text-decoration: none;
          font: 700 18px 'K2D', sans-serif;
          transition: all .2s;
          display: inline-flex;
          align-items: center;
          padding: .4em .7em;
          background:rgb(28, 124, 131, 0.5);
          box-shadow: 0 4px rgba(41, 96, 93, 0.5), 0 5px 10px rgb(0 0 0 / 20%);
          border-radius: 2px;
          margin-bottom: .7em;
          backdrop-filter: blur(4px);
      }

      .categories .link-info {
          display: inline-flex;
      }

      .categories .link-info:not(:last-child) { margin-right: .5em; }

      .categories ul .links a:hover {
          transform: translate(0, 4px);
          box-shadow: 0 0 rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, .5), 0 -0px 5px rgba(0, 0, 0, .1);
          color: var(--flavour);
      }

 /* cambiar el color de la caja de letras y demas */
      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          overflow-wrap: break-word;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          border-radius: 5px;
          box-shadow: inset 0 0 0 2px var(--flavour);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to bottom, rgb(49 49 49 / 80%), transparent);
          color: var(--flavour);
          letter-spacing: 1px;
          font: 500 30px 'Oxanium', sans-serif;
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          backdrop-filter: blur(4px);
      }

      
      /* color de las lineas que dividen categorias*/
      .categories .links li:not(:last-child) {
          box-shadow: 0 1px 0 rgb(229, 194, 161);
          padding: 0 0 .5em 0;
          margin-bottom: 1.5em;
      }

      /* titulos de las categorias*/

      .categories .links li h1 {
          color:rgb(255, 233, 160);
	        opacity: 0.5;
          font-size: 13px;
          margin-bottom: 1em;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
      }

      .categories .link-icon {
          font-size: 27px;
          color: #726f6f;
      }

      .categories .link-icon + .link-name {
          margin-left: 10px;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
      }

      .ti {
          animation: fadeInAnimation ease .5s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          height: 27px;
          width: 27px;
      }

      @keyframes fadeInAnimation {
          0% {
              opacity: 0;
          }
          100% {
              opacity: 1;
           }
      }
    `;
  }

  template() {
    return `
      <div id="links" class="-">

        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
            <search-bar></search-bar>
            <config-tab></config-tab>
          </div>
          <status-bar class="!-"></status-bar>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}
