import{_ as u,c as s,d as t,F as n,e as d,o,t as r,a as i,w as _,b as h,r as p}from"./index-c6e7b88d.js";const{VITE_APP_URL:P,VITE_APP_PATH:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"tunafin",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f={data(){return{products:[]}},methods:{getProducts(){this.$http.get(`${P}/v2/api/${m}/products/all`).then(l=>{this.products=l.data.products})}},mounted(){this.getProducts()}},V=t("h2",null,"產品列表",-1),E={class:"table"},g=t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")],-1),A=["src"];function T(l,$,x,k,a,R){const c=p("router-link");return o(),s(n,null,[V,t("table",E,[t("tbody",null,[g,(o(!0),s(n,null,d(a.products,e=>(o(),s("tr",{key:e.id},[t("td",null,r(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"200"},null,8,A)]),t("td",null,r(e.title),1),t("td",null,[i(c,{to:`/product/${e.id}`},{default:_(()=>[h("詳細資料")]),_:2},1032,["to"])])]))),128))])])],64)}const w=u(f,[["render",T]]);export{w as default};