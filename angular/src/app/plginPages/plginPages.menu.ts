//配置插件显示的信息
export const PAGES_MENU =
  {
    path: '',
    plugins: [
      {
        path: 'MDB',
        menu: {
          title: 'general.menu.mdb',
          tabs:[
            {
              "name":"首页",
              "path":"/home"
            },{
              "name":"样式",
              "path":"/css"
            },{
              "name":"组件",
              "path":"/components"
            },{
              "name":"高级",
              "path":"/advanced"
            },{
              "name":"导航",
              "path":"/navigation"
            },{
              "name":"表单",
              "path":"/forms"
            },{
              "name":"列表",
              "path":"/tables"
            },{
              "name":"Modals",
              "path":"/modals"
            },{
              "name":"扩展",
              "path":"/extended"
            },{
              "name":"Sections",
              "path":"/sections"
            }
          ],
          icon: 'fa fa fa-bookmark',
          selected: false,
          expanded: false,
          order: 0
        }
      },
    ]
  };
//存放插件的路由信息
export const PLUGIN_MODULE=[
  {path: 'MDB', loadChildren: './template/MDB/app.module#AppModule', data: {preload: true} }
  ];
