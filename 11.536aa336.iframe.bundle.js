(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{2129:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return axiosURL}));var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(319),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__),axiosURL=function(){var axiosURL=axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();return axiosURL.interceptors.response.use((function(response){return response.data}),(function(error){return Promise.reject(error)})),{axiosURL:axiosURL}}().axiosURL},2216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_runner_work_onyxia_web_onyxia_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(2099)),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(225),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(732),js_components_commons_service_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(507),js_components_commons_service_card_card_service_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(513),js_utils_axios_config__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2129),js_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(149),app_validatedEnv__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(98),app_routes_router__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(19),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1),env=Object(app_validatedEnv__WEBPACK_IMPORTED_MODULE_9__.a)(),resource=Object(js_utils__WEBPACK_IMPORTED_MODULE_8__.g)(Object(js_utils_axios_config__WEBPACK_IMPORTED_MODULE_7__.a)(env.CONTENT.SERVICES_URL)),OngletContent=function OngletContent(){var services=resource.read().services,handleOpenService=function handleOpenService(service){return window.open(service.link)},gridItems=services.map((function(service,i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(js_components_commons_service_card_card_service_component__WEBPACK_IMPORTED_MODULE_6__.a,{title:service.title,subtitle:service.subtitle,avatar:Object(js_components_commons_service_card__WEBPACK_IMPORTED_MODULE_5__.c)(service),actions:createActionsCarte(service)(handleOpenService),contenu:createContenuCarte(service)},i)}));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:"contenu accueil",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{container:!0,spacing:8,classes:{container:"cartes"},children:gridItems})})};OngletContent.__docgenInfo={description:"",methods:[],displayName:"OngletContent"},__webpack_exports__.default=OngletContent;var createActionsCarte=function createActionsCarte(service){return function(openService){return function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{color:"secondary","aria-label":"ouvir",onClick:function onClick(){return openService(service)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{children:"launch"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a",Object(_home_runner_work_onyxia_web_onyxia_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_onyxia_web_onyxia_web_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},app_routes_router__WEBPACK_IMPORTED_MODULE_10__.b.sharedServicesDetails({serviceId:service.id}).ling),{},{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:"more-details",color:"secondary","aria-label":"plus de détails",onClick:function onClick(){},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{children:"more_horiz"})})}))]})}}},createContenuCarte=function createContenuCarte(service){return function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"paragraphe",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:"titre",children:"Description"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:"corps",children:service.description})]})}};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/js/components/services/home/content/onglet-content.js"]={name:"OngletContent",docgenInfo:OngletContent.__docgenInfo,path:"src/js/components/services/home/content/onglet-content.js"})}}]);