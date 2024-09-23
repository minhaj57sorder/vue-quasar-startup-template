<template>
  <div
    style="position: relative; width: 100vw; height: 100vh; overflow: hidden"
  >
    <header class="layout-header" :class="{ expanded: leftSidebar }">
      <div>
        <div>Dashboard</div>
      </div>
    </header>

    <aside
      class="layout-sidebar aside aside-dark aside-hoverable"
      :class="{ expanded: leftSidebar }"
      @mouseover="expandLeftSidebar"
      @mouseleave="collapseLeftSidebar"
    >
      <div class="sidebar-header">
        <div class="sidebar-logo-action-header">
          <div class="sidebar-logo" :class="{ hide: !leftSidebar }">
            <span>Logo</span>
          </div>
          <div
            class="toggler-btn"
            :class="{ expanded: leftSidebarExpanded }"
            @click="toggleSidebarExpansion"
          >
            <span
              class="svg-icon"
              :class="{ 'rotate-180': leftSidebarExpanded }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                    fill="currentColor"
                    fill-rule="nonzero"
                    transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"
                  />
                  <path
                    d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                    fill="currentColor"
                    fill-rule="nonzero"
                    opacity="0.5"
                    transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div class="sidebar-menu aside-menu flex-column-fluid">
        <div class="hover-scroll-overlay-y my-5 my-lg-5">
          <div class="menu menu-column menu-title-gray-800">
            <div
              v-for="(item, index) in leftMenu"
              :key="index"
              class="menu-item menu-accordion"
              :class="{ show: item.show }"
            >
              <div v-if="item.content" class="menu-content" :class="{ separator: item.content.toLowerCase() === 'seperator' }">
                <span class="menu-section text-muted text-uppercase">
                  {{ item.content }}
                </span>
              </div>

              <div v-else>
                <a
                  v-if="item.link"
                  class="menu-link"
                  :href="item.link"
                  @click="expandSubMenu(`leftMenu[${index}]`)"
                >
                  <span class="menu-icon" v-if="item.icon" v-html="item.icon"></span>
                  <span class="menu-title">{{ item.title }}</span>
                  <span class="menu-arrow" v-if="item.sub"></span>
                </a>

                <span
                  v-else
                  class="menu-link"
                  @click="expandSubMenu(`leftMenu[${index}]`)"
                >
                  <span class="menu-icon" v-if="item.icon" v-html="item.icon"></span>
                  <span class="menu-title">{{ item.title }}</span>
                  <span class="menu-arrow" v-if="item.sub"></span>
                </span>

                <div v-if="item.sub" class="menu-sub menu-sub-accordion">
                  <div
                    v-for="(subItem, subIndex) in item.sub"
                    :key="subIndex"
                    class="menu-item menu-accordion"
                    :class="{ show: subItem.show }"
                  >
                    <a
                      v-if="subItem.link"
                      class="menu-link"
                      :href="subItem.link"
                      @click="expandSubMenu(`leftMenu[${index}].sub[${subIndex}]`)"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot" />
                      </span>
                      <span class="menu-title">{{ subItem.title }}</span>
                      <span class="menu-arrow" v-if="subItem.sub"></span>
                    </a>

                    <div
                      v-if="subItem.sub"
                      class="menu-sub menu-sub-accordion menu-active-bg"
                    >
                      <div
                        v-for="(thirdItem, thirdIndex) in subItem.sub"
                        :key="thirdIndex"
                        class="menu-item"
                      >
                        <a class="menu-link" :href="thirdItem.link">
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot" />
                          </span>
                          <span class="menu-title">{{ thirdItem.title }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="aside-footer flex-column-auto pt-5 pb-7 px-5">
          <a
            href="../../demo1/dist/documentation/getting-started.html"
            class="btn btn-custom btn-primary w-100"
            data-bs-toggle="tooltip"
          >
            <span class="btn-label">Docs &amp; Components</span>
          </a>
        </div>
      </div>
    </aside>

    <main class="layout-main" :class="{ expanded: !leftSidebar }">
      <div style="height: 100%; width: 100%; overflow: auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LayoutComponent",
  data() {
    return {
      leftSidebar: true,
      leftSidebarExpanded: true,
      leftMenu: [
        {
          content: "Dashboard",
        },
        {
          title: "Dashboard",
          icon: "DB",
          link: "/dashboard",
        },
        {
          title: "Suppliers",
          icon: "SU",
          sub: [
            { title: "Suppliers List", link: "/suppliers/suppliers-list" },
            { title: "Due Received List", link: "/suppliers/due-received-list" },
            { title: "Supplier Due Paid List", link: "/suppliers/supplier-due-paid-list" },
            { title: "Supplier Due Dismiss List", link: "/suppliers/supplier-due-dismiss-list" },
          ],
        },
        // Other menu items omitted for brevity, but should be structured similarly
      ],
    };
  },
  methods: {
    expandLeftSidebar() {
      if (!this.leftSidebarExpanded) {
        this.leftSidebar = true;
      }
    },
    collapseLeftSidebar() {
      if (!this.leftSidebarExpanded) {
        this.leftSidebar = false;
      }
    },
    toggleSidebarExpansion() {
      this.leftSidebarExpanded = !this.leftSidebarExpanded;
      this.leftSidebar = this.leftSidebarExpanded;
    },
    expandSubMenu(path) {
      console.log("expand sidebar menu: ", path)
      const collapseAllSubMenus = (menu) => {
        menu.forEach((item) => {
          if (item.sub) {
            item.show = false;
            collapseAllSubMenus(item.sub);
          }
        });
      };

      const collapseOtherSubMenus = (menu, parts) => {
        menu.forEach((item) => {
          if (parts.length > 0 && item === menu[parts[0]]) {
            if (item.sub) {
              collapseOtherSubMenus(item.sub, parts.slice(1));
            }
          } else if (item.sub) {
            item.show = false;
            collapseAllSubMenus(item.sub);
          }
        });
      };

      const updateObjectByPath = (originalObject, path, value) => {
        const updatedObject = JSON.parse(JSON.stringify(originalObject));
        const parts = path.split(/\.|\[|\]/).filter((p) => p);

        const updateRecursively = (obj, parts, value) => {
          const part = parts[0];
          if (parts.length === 1) {
            obj[part].show = value;
            return;
          }
          updateRecursively(obj[part], parts.slice(1), value);
        };

        updateRecursively(updatedObject, parts, value);
        return updatedObject;
      };

      const newLeftMenu = JSON.parse(JSON.stringify(this.leftMenu));
      const parts = path.replaceAll("leftMenu", "").split(/\.|\[|\]/).filter((p) => p);
      collapseOtherSubMenus(newLeftMenu, parts);
      const updatedMenu = updateObjectByPath(newLeftMenu, path.replaceAll("leftMenu", ""), true);
      this.leftMenu = updatedMenu;
    },
  },
};
</script>

<style scoped>

/* scroller customization start */
/* width */
::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background: #43464900;
  }
  /* Corner */
  ::-webkit-scrollbar-corner {
    background: #00000000;
    border: none;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #898e9390;
    border-radius: 50px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #adb2b890;
  }
  /* scroller customization end */
.layout-header {
    position: absolute;
    left: 75px;
    right: 0px;
    top: 0px;
    z-index: 200;
    height: 65px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
}

.layout-header.expanded {
    left: 265px;
}

.layout-main {
    position: absolute;
    left: 265px;
    top: 65px;
    transition: 0.3s;
}

.layout-main.expanded {
    left: 75px;
}

.layout-sidebar {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 75px;
    height: 100vh;
    z-index: 100;
    overflow: auto;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #1e1e2d;
    transition: 0.3s;
}

.layout-sidebar.expanded {
    width: 265px;
}

.sidebar-logo-action-header {
    display: flex;
    justify-content: space-between;
    height: 65px;
    padding-left: 25px;
    padding-right: 25px;
}

.sidebar-logo-action-header .toggler-btn {
    cursor: pointer;
}
.sidebar-menu {
    height: calc(100vh - 146px);
    overflow-y:scroll;
    width: 265px;
}
.aside-footer{
    /* height: 65px; */
    /* width: 265px; */
}
.sidebar-logo {
    height: 100%;
    width: 265px;
    display: flex;
    align-items: center;
}

.sidebar-logo.hide {
    width: 0px;
    height: 0px;
}

.sidebar-logo.hide>* {
    display: none;
}

.toggler-btn {
    display: flex;
    align-items: center;
}

.toggler-btn {
    color: #e9edf1;
    opacity: 0.3;
    transition: 0.3s;
}
.toggler-btn.expanded {
    color: #009ef7;
    opacity: 1;
}
.toggler-btn:hover {
    color: #009ef7;
    opacity: 1;
}
.toggler-btn .svg-icon svg {
    transform: rotate(0deg);
}

.toggler-btn .svg-icon.rotate-180 svg {
    transform: rotate(180deg);
}
.layout-sidebar{
    overflow: hidden;
}
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 13px !important;
    font-weight: 400;
    font-family: Poppins, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
/*! CSS Used from: file:///Users/minhaj/Downloads/Metronic_8.0.38/html_bootstrap5/theme/demo1/dist/assets/css/style.bundle.css */
a{color:#009ef7;text-decoration:none;}
a:hover{color:#006dab;text-decoration:underline;}
svg{vertical-align:middle;}
.mx-1{margin-right:.25rem!important;margin-left:.25rem!important;}
.my-4{margin-top:1rem!important;margin-bottom:1rem!important;}
.my-5{margin-top:1.25rem!important;margin-bottom:1.25rem!important;}
.mb-1{margin-bottom:.25rem!important;}
.pt-8{padding-top:2rem!important;}
.pb-0{padding-bottom:0!important;}
.pb-2{padding-bottom:.5rem!important;}
.fs-8{font-size:.85rem!important;}
.text-uppercase{text-transform:uppercase!important;}
.text-muted{--bs-text-opacity:1;color:#a1a5b7!important;}
.ls-1{letter-spacing:.1rem!important;}
@media (min-width:992px){
.my-lg-5{margin-top:1.25rem!important;margin-bottom:1.25rem!important;}
}
.flex-column-fluid{flex:1 0 auto;}
.text-muted{color:#a1a5b7!important;}
a{transition:color .2s ease,background-color .2s ease;}
a:hover{transition:color .2s ease,background-color .2s ease;}
.separator{display:block;height:0;border-bottom:1px solid #eff2f5;}
.menu{display:flex;padding:0;margin:0;list-style:none;}
.menu-sub{display:none;padding:0;margin:0;list-style:none;flex-direction:column;}
.menu-item{display:block;padding:0;}
.menu-item .menu-link{cursor:pointer;display:flex;align-items:center;padding:0;flex:0 0 100%;padding:.65rem 1rem;transition:none;outline:0!important;}
.menu-item .menu-link .menu-icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:2rem;margin-right:.5rem;}
.menu-item .menu-link .menu-icon .svg-icon{line-height:1;}
.menu-item .menu-link .menu-bullet{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:1.25rem;margin-right:.5rem;}
.menu-item .menu-link .menu-title{display:flex;align-items:center;flex-grow:1;}
.menu-item .menu-link .menu-arrow{display:flex;align-items:stretch;position:relative;overflow:hidden;flex-shrink:0;margin-left:.5rem;width:.8rem;height:.8rem;}
.menu-item .menu-link .menu-arrow:after{display:block;width:100%;content:" ";background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23A1A5B7'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.06463 4.42111C1.96161 4.22088 1.9809 3.9637 2.12863 3.78597L5.12847 0.177181C5.31402 -0.046034 5.63049 -0.060261 5.83532 0.145404C6.04015 0.351069 6.05578 0.698744 5.87023 0.921959L3.19406 4.14137L5.84414 7.06417C6.03896 7.27904 6.03835 7.62686 5.84278 7.84105C5.64721 8.05524 5.33073 8.05469 5.13591 7.83982L2.14806 4.54449C2.1141 4.50704 2.08629 4.46541 2.06463 4.42111Z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23A1A5B7'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.93537 4.57889C6.03839 4.77912 6.0191 5.0363 5.87137 5.21403L2.87153 8.82282C2.68598 9.04603 2.36951 9.06026 2.16468 8.8546C1.95985 8.64893 1.94422 8.30126 2.12977 8.07804L4.80594 4.85863L2.15586 1.93583C1.96104 1.72096 1.96165 1.37314 2.15722 1.15895C2.35279 0.944757 2.66927 0.945311 2.86409 1.16018L5.85194 4.45551C5.8859 4.49296 5.91371 4.53459 5.93537 4.57889Z'/%3e%3c/svg%3e");}
.menu-item .menu-content{padding:.65rem 1rem;}
.menu-item.show .menu-link .menu-arrow:after{-webkit-backface-visibility:hidden;transition:transform .3s ease;}
.menu-item.menu-accordion.show:not(.hiding):not(.menu-dropdown)>.menu-link .menu-arrow:after{transform:rotateZ(90deg);transition:transform .3s ease;}
.menu-sub-accordion{display:none;}
.show:not(.menu-dropdown)>.menu-sub-accordion{display:flex;}
.menu-column{flex-direction:column;width:100%;}
.menu-sub:not([data-popper-placement])>.menu-item>.menu-link{padding-left:calc(1rem + 1rem);}
.menu-sub:not([data-popper-placement])>.menu-item>.menu-sub:not([data-popper-placement])>.menu-item>.menu-link{padding-left:calc(2rem + 1rem);}
.menu-arrow-gray-500 .menu-item .menu-link .menu-arrow:after{background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23A1A5B7'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.06463 4.42111C1.96161 4.22088 1.9809 3.9637 2.12863 3.78597L5.12847 0.177181C5.31402 -0.046034 5.63049 -0.060261 5.83532 0.145404C6.04015 0.351069 6.05578 0.698744 5.87023 0.921959L3.19406 4.14137L5.84414 7.06417C6.03896 7.27904 6.03835 7.62686 5.84278 7.84105C5.64721 8.05524 5.33073 8.05469 5.13591 7.83982L2.14806 4.54449C2.1141 4.50704 2.08629 4.46541 2.06463 4.42111Z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23A1A5B7'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.93537 4.57889C6.03839 4.77912 6.0191 5.0363 5.87137 5.21403L2.87153 8.82282C2.68598 9.04603 2.36951 9.06026 2.16468 8.8546C1.95985 8.64893 1.94422 8.30126 2.12977 8.07804L4.80594 4.85863L2.15586 1.93583C1.96104 1.72096 1.96165 1.37314 2.15722 1.15895C2.35279 0.944757 2.66927 0.945311 2.86409 1.16018L5.85194 4.45551C5.8859 4.49296 5.91371 4.53459 5.93537 4.57889Z'/%3e%3c/svg%3e");}
.menu-title-gray-800 .menu-item .menu-link{color:#3f4254;}
.menu-title-gray-800 .menu-item .menu-link .menu-title{color:#3f4254;}
.menu-active-bg .menu-item .menu-link.active{transition:color .2s ease,background-color .2s ease;background-color:transparent;}
.menu-state-title-primary .menu-item .menu-link:hover:not(.disabled):not(.active){transition:color .2s ease,background-color .2s ease;color:#009ef7;}
.menu-state-title-primary .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-title{color:#009ef7;}
.menu-state-title-primary .menu-item.here>.menu-link,.menu-state-title-primary .menu-item.show>.menu-link{transition:color .2s ease,background-color .2s ease;color:#009ef7;}
.menu-state-title-primary .menu-item.here>.menu-link .menu-title,.menu-state-title-primary .menu-item.show>.menu-link .menu-title{color:#009ef7;}
.menu-state-title-primary .menu-item .menu-link.active{transition:color .2s ease,background-color .2s ease;color:#009ef7;}
.menu-state-title-primary .menu-item .menu-link.active .menu-title{color:#009ef7;}
.menu-state-icon-primary .menu-item .menu-link:hover:not(.disabled):not(.active){transition:color .2s ease,background-color .2s ease;}
.menu-state-icon-primary .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-icon .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#009ef7;}
.menu-state-icon-primary .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.menu-state-icon-primary .menu-item.here>.menu-link,.menu-state-icon-primary .menu-item.show>.menu-link{transition:color .2s ease,background-color .2s ease;}
.menu-state-icon-primary .menu-item.here>.menu-link .menu-icon .svg-icon svg [fill]:not(.permanent):not(g),.menu-state-icon-primary .menu-item.show>.menu-link .menu-icon .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#009ef7;}
.menu-state-icon-primary .menu-item.here>.menu-link .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g),.menu-state-icon-primary .menu-item.show>.menu-link .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.menu-state-icon-primary .menu-item .menu-link.active{transition:color .2s ease,background-color .2s ease;}
.menu-state-bullet-primary .menu-item .menu-link:hover:not(.disabled):not(.active){transition:color .2s ease,background-color .2s ease;}
.menu-state-bullet-primary .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-bullet .bullet{background-color:#009ef7;}
.menu-state-bullet-primary .menu-item.here>.menu-link,.menu-state-bullet-primary .menu-item.show>.menu-link{transition:color .2s ease,background-color .2s ease;}
.menu-state-bullet-primary .menu-item.here>.menu-link .menu-bullet .bullet,.menu-state-bullet-primary .menu-item.show>.menu-link .menu-bullet .bullet{background-color:#009ef7;}
.menu-state-bullet-primary .menu-item .menu-link.active{transition:color .2s ease,background-color .2s ease;}
.menu-state-bullet-primary .menu-item .menu-link.active .menu-bullet .bullet{background-color:#009ef7;}
.svg-icon{line-height:1;}
.svg-icon svg{height:1.15rem;width:1.15rem;}
.svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#a1a5b7;}
.svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.svg-icon.svg-icon-2 svg{height:1.5rem!important;width:1.5rem!important;}
.bullet{display:inline-block;background-color:#b5b5c3;border-radius:6px;width:8px;height:4px;flex-shrink:0;}
.bullet-dot{width:4px;height:4px;border-radius:100%!important;}
@media (min-width:992px){
div,span{scrollbar-width:thin;scrollbar-color:#eff2f5 transparent;}
div::-webkit-scrollbar,span::-webkit-scrollbar{width:.4rem;height:.4rem;}
div::-webkit-scrollbar-thumb,span::-webkit-scrollbar-thumb{background-color:#eff2f5;}
div:hover,span:hover{scrollbar-color:#e9edf1 transparent;}
div:hover::-webkit-scrollbar-thumb,span:hover::-webkit-scrollbar-thumb{background-color:#e9edf1;}
}
.hover-scroll-overlay-y{overflow-y:hidden;position:relative;--scrollbar-space:0.25rem;}
.hover-scroll-overlay-y::-webkit-scrollbar{width:calc(.4rem + var(--scrollbar-space));}
.hover-scroll-overlay-y::-webkit-scrollbar-thumb{background-clip:content-box;border-right:var(--scrollbar-space) solid transparent;}
.hover-scroll-overlay-y:hover{overflow-y:overlay;}
body a:active,body a:focus,body a:hover,html a:active,html a:focus,html a:hover{text-decoration:none!important;}
.aside {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 28px 0 rgba(82, 63, 105, .05);
    padding: 0;
}
.aside.aside-dark .separator{border-bottom-color:#282a3d;}
@media (min-width:992px){
.aside .aside-menu{width:265px;}
}
.aside-menu .menu .menu-item .menu-content,.aside-menu .menu .menu-item .menu-link{padding-left:25px;padding-right:25px;}
.aside-menu .menu .menu-sub:not([data-popper-placement])>.menu-item>.menu-link{padding-left:calc(.75rem + 25px);}
.aside-menu .menu .menu-sub:not([data-popper-placement])>.menu-item>.menu-sub:not([data-popper-placement])>.menu-item>.menu-link{padding-left:calc(1.5rem + 25px);}
.aside-menu .menu-item{padding:0;}
.aside-menu .menu-item .menu-link{padding-top:.75rem;padding-bottom:.75rem;}
.aside-menu .menu-item .menu-icon{justify-content:flex-start;}
.aside-dark .hover-scroll-overlay-y{--scrollbar-space:0.4rem;scrollbar-color:#3b3b64 transparent;}
.aside-dark .hover-scroll-overlay-y::-webkit-scrollbar-thumb{background-color:#3b3b64;}
.aside-dark .hover-scroll-overlay-y:hover{scrollbar-color:#41416e transparent;}
.aside-dark .hover-scroll-overlay-y:hover::-webkit-scrollbar-thumb{background-color:#41416e;}
.aside-dark .menu .menu-item .menu-section{color:#4c4e6f!important;}
.aside-dark .menu .menu-item .menu-link{color:#9899ac;}
.aside-dark .menu .menu-item .menu-link .menu-title{color:#9899ac;}
.aside-dark .menu .menu-item .menu-link .menu-icon .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#494b74;}
.aside-dark .menu .menu-item .menu-link .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.aside-dark .menu .menu-item .menu-link .menu-bullet .bullet{background-color:#9899ac;}
.aside-dark .menu .menu-item .menu-link .menu-arrow:after{background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%239899ac'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.06463 4.42111C1.96161 4.22088 1.9809 3.9637 2.12863 3.78597L5.12847 0.177181C5.31402 -0.046034 5.63049 -0.060261 5.83532 0.145404C6.04015 0.351069 6.05578 0.698744 5.87023 0.921959L3.19406 4.14137L5.84414 7.06417C6.03896 7.27904 6.03835 7.62686 5.84278 7.84105C5.64721 8.05524 5.33073 8.05469 5.13591 7.83982L2.14806 4.54449C2.1141 4.50704 2.08629 4.46541 2.06463 4.42111Z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%239899ac'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.93537 4.57889C6.03839 4.77912 6.0191 5.0363 5.87137 5.21403L2.87153 8.82282C2.68598 9.04603 2.36951 9.06026 2.16468 8.8546C1.95985 8.64893 1.94422 8.30126 2.12977 8.07804L4.80594 4.85863L2.15586 1.93583C1.96104 1.72096 1.96165 1.37314 2.15722 1.15895C2.35279 0.944757 2.66927 0.945311 2.86409 1.16018L5.85194 4.45551C5.8859 4.49296 5.91371 4.53459 5.93537 4.57889Z'/%3e%3c/svg%3e");}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active){transition:color .2s ease,background-color .2s ease;background-color:#1b1b28;color:#fff;}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-title{color:#fff;}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-icon .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#009ef7;}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-bullet .bullet{background-color:#009ef7;}
.aside-dark .menu .menu-item .menu-link:hover:not(.disabled):not(.active) .menu-arrow:after{background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.06463 4.42111C1.96161 4.22088 1.9809 3.9637 2.12863 3.78597L5.12847 0.177181C5.31402 -0.046034 5.63049 -0.060261 5.83532 0.145404C6.04015 0.351069 6.05578 0.698744 5.87023 0.921959L3.19406 4.14137L5.84414 7.06417C6.03896 7.27904 6.03835 7.62686 5.84278 7.84105C5.64721 8.05524 5.33073 8.05469 5.13591 7.83982L2.14806 4.54449C2.1141 4.50704 2.08629 4.46541 2.06463 4.42111Z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.93537 4.57889C6.03839 4.77912 6.0191 5.0363 5.87137 5.21403L2.87153 8.82282C2.68598 9.04603 2.36951 9.06026 2.16468 8.8546C1.95985 8.64893 1.94422 8.30126 2.12977 8.07804L4.80594 4.85863L2.15586 1.93583C1.96104 1.72096 1.96165 1.37314 2.15722 1.15895C2.35279 0.944757 2.66927 0.945311 2.86409 1.16018L5.85194 4.45551C5.8859 4.49296 5.91371 4.53459 5.93537 4.57889Z'/%3e%3c/svg%3e");}
.aside-dark .menu .menu-item.here>.menu-link,.aside-dark .menu .menu-item.show>.menu-link{transition:color .2s ease,background-color .2s ease;background-color:#1b1b28;color:#fff;}
.aside-dark .menu .menu-item.here>.menu-link .menu-title,.aside-dark .menu .menu-item.show>.menu-link .menu-title{color:#fff;}
.aside-dark .menu .menu-item.here>.menu-link .menu-icon .svg-icon svg [fill]:not(.permanent):not(g),.aside-dark .menu .menu-item.show>.menu-link .menu-icon .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#009ef7;}
.aside-dark .menu .menu-item.here>.menu-link .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g),.aside-dark .menu .menu-item.show>.menu-link .menu-icon .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.aside-dark .menu .menu-item.here>.menu-link .menu-bullet .bullet,.aside-dark .menu .menu-item.show>.menu-link .menu-bullet .bullet{background-color:#009ef7;}
.aside-dark .menu .menu-item.here>.menu-link .menu-arrow:after,.aside-dark .menu .menu-item.show>.menu-link .menu-arrow:after{background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.06463 4.42111C1.96161 4.22088 1.9809 3.9637 2.12863 3.78597L5.12847 0.177181C5.31402 -0.046034 5.63049 -0.060261 5.83532 0.145404C6.04015 0.351069 6.05578 0.698744 5.87023 0.921959L3.19406 4.14137L5.84414 7.06417C6.03896 7.27904 6.03835 7.62686 5.84278 7.84105C5.64721 8.05524 5.33073 8.05469 5.13591 7.83982L2.14806 4.54449C2.1141 4.50704 2.08629 4.46541 2.06463 4.42111Z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:center;background-color:transparent;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 9' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.93537 4.57889C6.03839 4.77912 6.0191 5.0363 5.87137 5.21403L2.87153 8.82282C2.68598 9.04603 2.36951 9.06026 2.16468 8.8546C1.95985 8.64893 1.94422 8.30126 2.12977 8.07804L4.80594 4.85863L2.15586 1.93583C1.96104 1.72096 1.96165 1.37314 2.15722 1.15895C2.35279 0.944757 2.66927 0.945311 2.86409 1.16018L5.85194 4.45551C5.8859 4.49296 5.91371 4.53459 5.93537 4.57889Z'/%3e%3c/svg%3e");}
.aside-dark .menu .menu-item .menu-link.active{transition:color .2s ease,background-color .2s ease;background-color:#1b1b28;color:#fff;}
.aside-dark .menu .menu-item .menu-link.active .menu-title{color:#fff;}
.aside-dark .menu .menu-item .menu-link.active .menu-bullet .bullet{background-color:#009ef7;}

/*! CSS Used from: file:///Users/minhaj/Downloads/Metronic_8.0.38/html_bootstrap5/theme/demo1/dist/assets/css/style.bundle.css */
*,::after,::before{box-sizing:border-box;}
a{color:#009ef7;text-decoration:none;}
a:hover{color:#006dab;text-decoration:underline;}
svg{vertical-align:middle;}
.btn{display:inline-block;font-weight:500;line-height:1.5;color:#181c32;text-align:center;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.75rem 1.5rem;font-size:1.1rem;border-radius:.475rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
@media (prefers-reduced-motion:reduce){
.btn{transition:none;}
}
.btn:hover{color:#181c32;text-decoration:none;}
.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(0,158,247,.25);}
.btn:active{box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}
.btn:active:focus{box-shadow:0 0 0 .25rem rgba(0,158,247,.25),inset 0 3px 5px rgba(0,0,0,.125);}
.btn:disabled{pointer-events:none;opacity:.6;box-shadow:none;}
.btn-primary{color:#000;background-color:#009ef7;border-color:#009ef7;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);}
.btn-primary:hover{color:#000;background-color:#26adf8;border-color:#1aa8f8;}
.btn-primary:focus{color:#000;background-color:#26adf8;border-color:#1aa8f8;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .25rem rgba(0,134,210,.5);}
.btn-primary:active{color:#000;background-color:#33b1f9;border-color:#1aa8f8;}
.btn-primary:active:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125),0 0 0 .25rem rgba(0,134,210,.5);}
.btn-primary:disabled{color:#000;background-color:#009ef7;border-color:#009ef7;}
.w-100{width:100%!important;}
.px-5{padding-right:1.25rem!important;padding-left:1.25rem!important;}
.pt-5{padding-top:1.25rem!important;}
.pb-7{padding-bottom:1.75rem!important;}
.flex-column-auto{flex:none;}
a{transition:color .2s ease,background-color .2s ease;}
a:hover{transition:color .2s ease,background-color .2s ease;}
.btn{outline:0!important;}
.btn:not(.btn-shadow):not(.shadow):not(.shadow-sm):not(.shadow-lg){box-shadow:none!important;}
.btn:not(.btn-outline):not(.btn-dashed):not(.border-hover):not(.border-active):not(.btn-flush):not(.btn-icon){border:0;padding:calc(.75rem + 1px) calc(1.5rem + 1px);}
.btn .svg-icon{flex-shrink:0;line-height:0;margin-right:.5rem;}
.btn.btn-primary{color:#fff;border-color:#009ef7;background-color:#009ef7;}
.btn.btn-primary .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#fff;}
.btn.btn-primary .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.btn.btn-primary:active:not(.btn-active),.btn.btn-primary:focus:not(.btn-active),.btn.btn-primary:hover:not(.btn-active){color:#fff;border-color:#0095e8;background-color:#0095e8!important;}
.btn.btn-primary:active:not(.btn-active) .svg-icon svg [fill]:not(.permanent):not(g),.btn.btn-primary:focus:not(.btn-active) .svg-icon svg [fill]:not(.permanent):not(g),.btn.btn-primary:hover:not(.btn-active) .svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#fff;}
.btn.btn-primary:active:not(.btn-active) .svg-icon svg:hover [fill]:not(.permanent):not(g),.btn.btn-primary:focus:not(.btn-active) .svg-icon svg:hover [fill]:not(.permanent):not(g),.btn.btn-primary:hover:not(.btn-active) .svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.svg-icon{line-height:1;}
.svg-icon svg{height:1.15rem;width:1.15rem;}
.svg-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#a1a5b7;}
.svg-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}
.svg-icon.svg-icon-2 svg{height:1.5rem!important;width:1.5rem!important;}
@media (min-width:992px){
div,span{scrollbar-width:thin;scrollbar-color:#eff2f5 transparent;}
div::-webkit-scrollbar,span::-webkit-scrollbar{width:.4rem;height:.4rem;}
div::-webkit-scrollbar-thumb,span::-webkit-scrollbar-thumb{background-color:#eff2f5;}
div:hover,span:hover{scrollbar-color:#e9edf1 transparent;}
div:hover::-webkit-scrollbar-thumb,span:hover::-webkit-scrollbar-thumb{background-color:#e9edf1;}
}
body a:active,body a:focus,body a:hover,html a:active,html a:focus,html a:hover{text-decoration:none!important;}
.aside .btn-custom{display:flex;align-items:center;justify-content:center;padding-left:0;padding-right:0;}
.aside .btn-custom .btn-label{transition:opacity .3s ease;display:inline-block;white-space:nowrap;overflow:hidden;opacity:1;}
.aside .btn-custom .btn-icon{display:inline-block;transition:opacity .3s ease;overflow:hidden;opacity:0;margin:0;width:0;}
.aside.aside-dark .btn-custom{color:#b5b5c3;background-color:rgba(63,66,84,.35);}
.aside.aside-dark .btn-custom:active:not(.btn-active),.aside.aside-dark .btn-custom:focus:not(.btn-active),.aside.aside-dark .btn-custom:hover:not(.btn-active){color:#b5b5c3;background-color:rgba(63,66,84,.35)!important;}
.aside.aside-dark .btn-custom .btn-icon{color:#b5b5c3;}
.aside.aside-dark .btn-custom .btn-icon svg [fill]:not(.permanent):not(g){transition:fill .3s ease;fill:#b5b5c3;}
.aside.aside-dark .btn-custom .btn-icon svg:hover [fill]:not(.permanent):not(g){transition:fill .3s ease;}



@media (min-width: 992px) {
    .aside:not(.expanded) .aside-menu .menu-content, 
    .aside:not(.expanded) .aside-menu .menu-title {
        opacity: 0;
        transition: opacity .3s ease;
    }
}
@media (min-width: 992px) {
    .aside:not(.aside-hoverable) .aside-menu .menu-item.show>.menu-sub, 
    .aside:not(.expanded) .aside-menu .menu-item.show>.menu-sub {
        height: 0;
        overflow: hidden;
        transition: height .3s ease;
    }
}
@media (min-width: 992px) {
    .aside:not(.aside-hoverable) .btn-custom .btn-icon, 
    .aside:not(.expanded) .btn-custom .btn-icon {
        width: auto;
        opacity: 1;
        transition: opacity .3s ease;
    }
}
@media (min-width: 992px) {
    .aside:not(.aside-hoverable) .btn-custom .btn-label, 
    .aside:not(.expanded) .btn-custom .btn-label {
        width: 0;
        opacity: 0;
        transition: opacity .3s ease;
    }
}
</style>
