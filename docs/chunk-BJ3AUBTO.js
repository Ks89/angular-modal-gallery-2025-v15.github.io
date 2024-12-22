import{a as x,b as V,c as Ei,d as yi,e as D,f as h,g as b,h as T,i as S,j as Ci,k as w}from"./chunk-7Z2QKU4D.js";import{$a as _i,A as le,B as ae,C as q,D as f,Da as vi,E as N,Ea as xi,F as oe,G as re,H as me,Ha as u,I as ri,Ia as A,J as e,K as P,L as de,La as g,Ma as I,O as Y,P as W,Q as J,R as C,T as se,U as mi,V as ce,W as di,X as si,Y as ci,_ as Z,_a as Ii,ab as wi,bb as Ri,c as y,fa as pi,ga as Di,h as ai,ia as gi,j as K,k as z,ka as Gi,la as F,ma as ui,n as ie,na as ee,o as m,oa as O,p as d,pa as Q,qa as te,r as p,ra as hi,s as oi,sa as X,t as B,ta as bi,ua as v,v as s,va as U,w as i,wa as pe,x as t,xa as Si,y as n,ya as E,z as ne,za as fi}from"./chunk-FVSW6MDG.js";var ge,he=y(()=>{"use strict";D();T();C();A();I();E();w();ge=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Array simple"),this.codeHtml='<button (click)="openModal(302, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l]})}metaData(){this.uiService.setMetaData({title:"Demo simple"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-array-simple-page"]],standalone:!1,decls:83,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Minimal example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example with all default values."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(302,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var be,Se=y(()=>{"use strict";C();I();xi();_i();be=(()=>{class r{constructor(o){this.titleService=o,this.title="Modal Gallery",this.titleService.titleEvent.subscribe(l=>{this.onUpdateTitle(l)})}onUpdateTitle(o){this.title=o}static{this.\u0275fac=function(l){return new(l||r)(d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-demo-page"]],standalone:!1,decls:12,vars:1,consts:[["id","demo",1,"title"],[1,"container"],[1,"row"],[1,"col-12","col-md-3","push-md-9"],[1,"col-12","col-md-9","pull-md-3"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3),t()()(),i(4,"div",1)(5,"div",2)(6,"div",3),n(7,"app-sidebar-demo")(8,"br")(9,"br"),t(),i(10,"div",4),n(11,"router-outlet"),t()()()),l&2&&(m(3),P(a.title))},dependencies:[fi,Ii],styles:["#demo[_ngcontent-%COMP%]{padding:4rem 2rem 4rem 0;border-radius:0;margin-bottom:2rem}"]})}}return r})()});var fe,ve=y(()=>{"use strict";D();T();C();A();I();E();w();fe=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Download simple"),this.codeHtml='<button (click)="openModal(317, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          downloadable: true
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{downloadable:!0}}})}metaData(){this.uiService.setMetaData({title:"Demo download"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-download-simple-page"]],standalone:!1,decls:131,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],["href","https://developers.google.com/web/updates/2018/02/chrome-65-deprecations#block_cross-origin_wzxhzdk5a_download"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Download Simple example"),t()(),i(4,"p"),e(5,"Modal gallery example with "),i(6,"b",3),e(7,"downloadable images ONLY with ctrl+s/cmd+s."),t()(),n(8,"br"),i(9,"p")(10,"b"),e(11,"Attention: for security reasons Google Chrome and other browsers decided to block cross-origin downloads."),t(),e(12," So to use the download feature of this example, your images must be in the same server of your Angular application, otherwise the browser will navigate to the image itself, without to download it automatically. For more information check: "),i(13,"a",4),e(14,"HERE"),t()(),n(15,"br"),i(16,"h3"),e(17,"Live Demo"),t(),n(18,"br"),i(19,"button",5),f("click",function(){return a.openModal(317,0)}),e(20,"Click to open modal gallery id=1 at index=0"),t(),n(21,"br")(22,"br"),i(23,"section")(24,"h3"),e(25,"Code"),t(),n(26,"br"),i(27,"h4"),e(28,"Template"),t(),n(29,"ks-codemirror",6)(30,"br"),i(31,"h4"),e(32,"Typescript"),t(),n(33,"ks-codemirror",6),t(),n(34,"br")(35,"br"),i(36,"section")(37,"h3"),e(38,"Service inputs"),t(),n(39,"br"),i(40,"table",7)(41,"thead")(42,"tr")(43,"th"),e(44,"Input"),t(),i(45,"th"),e(46,"Value"),t()()(),i(47,"tbody")(48,"tr")(49,"td")(50,"code"),e(51,"id"),t()(),i(52,"td")(53,"div")(54,"i"),e(55,"Value: "),t(),i(56,"code"),e(57,"NUMERIC UNIQUE ID"),t()(),i(58,"div")(59,"b",3),e(60,"Unique id"),t()()()(),i(61,"tr")(62,"td")(63,"code"),e(64,"images"),t()(),i(65,"td")(66,"div")(67,"i"),e(68,"Value: "),t(),i(69,"code"),e(70,"Image[]"),t()(),i(71,"div")(72,"b",3),e(73,"Array of "),i(74,"code"),e(75,"Image"),t(),e(76," objects"),t()()()(),i(77,"tr")(78,"td")(79,"code"),e(80,"currentImage"),t()(),i(81,"td")(82,"div")(83,"i"),e(84,"Value: "),t(),i(85,"code"),e(86,"Image"),t()(),i(87,"div")(88,"b",3)(89,"code"),e(90,"Image"),t(),e(91," object to show"),t()()()(),i(92,"tr")(93,"td")(94,"code"),e(95,"libConfig"),t()(),i(96,"td")(97,"div")(98,"i"),e(99,"Value: "),t(),i(100,"code"),e(101,"ModalLibConfig"),t()(),i(102,"div")(103,"b",3)(104,"code"),e(105,"ModalLibConfig"),t(),e(106," object to config the library. See below."),t()()()()()()(),i(107,"section")(108,"h4"),e(109,"ModalLibConfig"),t(),n(110,"br"),i(111,"table",7)(112,"thead")(113,"tr")(114,"th"),e(115,"Input"),t(),i(116,"th"),e(117,"Value"),t()()(),i(118,"tbody")(119,"tr")(120,"td")(121,"code"),e(122,"currentImageConfig"),t()(),i(123,"td")(124,"div")(125,"i"),e(126,"Value: "),t(),i(127,"code"),e(128,"{ downloadable: true }"),t()(),i(129,"div"),e(130,"Image download is enabled with keyboard shortcuts"),t()()()()()()()),l&2&&(m(29),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var xe,Ee=y(()=>{"use strict";E();D();T();C();A();I();E();w();xe=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Download advanced"),this.codeHtml='  <button (click)="openModal(315, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modal GalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          downloadable: true
        },
        buttonsConfig: {
          visible: true,
          strategy: ButtonsStrategy.SIMPLE
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{downloadable:!0},buttonsConfig:{visible:!0,strategy:O.SIMPLE}}})}metaData(){this.uiService.setMetaData({title:"Demo download advanced"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-download-advanced-page"]],standalone:!1,decls:147,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],["href","https://developers.google.com/web/updates/2018/02/chrome-65-deprecations#block_cross-origin_wzxhzdk5a_download"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Download Advanced example"),t()(),i(4,"p"),e(5,"Modal gallery example with "),i(6,"b",3),e(7,"downloadable images"),t(),e(8," and "),i(9,"b",3),e(10,"download button"),t(),e(11,"."),t(),n(12,"br"),i(13,"p")(14,"b"),e(15,"Attention: for security reasons Google Chrome and other browsers decided to block cross-origin downloads."),t(),e(16," So to use the download feature of this example, your images must be in the same server of your Angular application, otherwise the browser will navigate to the image itself, without to download it automatically. For more information check: "),i(17,"a",4),e(18,"HERE"),t()(),n(19,"br"),i(20,"h3"),e(21,"Live Demo"),t(),n(22,"br"),i(23,"button",5),f("click",function(){return a.openModal(315,0)}),e(24,"Click to open modal gallery id=1 at index=0"),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Code"),t(),n(30,"br"),i(31,"h4"),e(32,"Template"),t(),n(33,"ks-codemirror",6)(34,"br"),i(35,"h4"),e(36,"Typescript"),t(),n(37,"ks-codemirror",6),t(),n(38,"br")(39,"br"),i(40,"section")(41,"h3"),e(42,"Service inputs"),t(),n(43,"br"),i(44,"table",7)(45,"thead")(46,"tr")(47,"th"),e(48,"Input"),t(),i(49,"th"),e(50,"Value"),t()()(),i(51,"tbody")(52,"tr")(53,"td")(54,"code"),e(55,"id"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"NUMERIC UNIQUE ID"),t()(),i(62,"div")(63,"b",3),e(64,"Unique id"),t()()()(),i(65,"tr")(66,"td")(67,"code"),e(68,"images"),t()(),i(69,"td")(70,"div")(71,"i"),e(72,"Value: "),t(),i(73,"code"),e(74,"Image[]"),t()(),i(75,"div")(76,"b",3),e(77,"Array of "),i(78,"code"),e(79,"Image"),t(),e(80," objects"),t()()()(),i(81,"tr")(82,"td")(83,"code"),e(84,"currentImage"),t()(),i(85,"td")(86,"div")(87,"i"),e(88,"Value: "),t(),i(89,"code"),e(90,"Image"),t()(),i(91,"div")(92,"b",3)(93,"code"),e(94,"Image"),t(),e(95," object to show"),t()()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"libConfig"),t()(),i(100,"td")(101,"div")(102,"i"),e(103,"Value: "),t(),i(104,"code"),e(105,"ModalLibConfig"),t()(),i(106,"div")(107,"b",3)(108,"code"),e(109,"ModalLibConfig"),t(),e(110," object to config the library. See below."),t()()()()()()(),i(111,"section")(112,"h4"),e(113,"ModalLibConfig"),t(),n(114,"br"),i(115,"table",7)(116,"thead")(117,"tr")(118,"th"),e(119,"Input"),t(),i(120,"th"),e(121,"Value"),t()()(),i(122,"tbody")(123,"tr")(124,"td")(125,"code"),e(126,"currentImageConfig"),t()(),i(127,"td")(128,"div")(129,"i"),e(130,"Value: "),t(),i(131,"code"),e(132,"{ downloadable: true }"),t()(),i(133,"div"),e(134,"Image download is enabled with keyboard shortcuts"),t()()(),i(135,"tr")(136,"td")(137,"code"),e(138,"buttonsConfig"),t()(),i(139,"td")(140,"div")(141,"i"),e(142,"Value: "),t(),i(143,"code"),e(144,"{ visible: true, strategy: ButtonsStrategy.SIMPLE }"),t()(),i(145,"div"),e(146,"It will show download button"),t()()()()()()()),l&2&&(m(33),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var ye,Ce=y(()=>{"use strict";E();D();T();C();A();I();E();w();Z();ye=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Output events"),this.codeHtml='<button class="btn-modal" (click)="openModal(333, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.closeSubscription = dialogRef.close$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - close$: ', event);
    });
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
    });
    this.firstImageSubscription = dialogRef.firstImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - firstImage$: ', event);
    });
    this.lastImageSubscription = dialogRef.lastImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - lastImage$: ', event);
    });
    this.hasDataSubscription = dialogRef.hasData$.subscribe((event: ImageModalEvent) => {
      // angular-modal-gallery will emit this event if it will load successfully input images
      console.log('OUTPUT - hasData$: ', event);
    });
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonBeforeHook$: ', event);
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        console.log('delete in app with images count ' + this.images.length);
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
      }
    });
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }`}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l]});this.closeSubscription=a.close$.subscribe(c=>{console.log("OUTPUT - close$: ",c),this.closeImageModal=c}),this.showSubscription=a.show$.subscribe(c=>{console.log("OUTPUT - show$: ",c),this.visibleIndex=c}),this.firstImageSubscription=a.firstImage$.subscribe(c=>{console.log("OUTPUT - firstImage$: ",c),this.isFirstImage=c}),this.lastImageSubscription=a.lastImage$.subscribe(c=>{console.log("OUTPUT - lastImage$: ",c),this.isLastImage=c}),this.hasDataSubscription=a.hasData$.subscribe(c=>{console.log("OUTPUT - hasData$: ",c),this.imageLoaded=c}),this.buttonBeforeHookSubscription=a.buttonBeforeHook$.subscribe(c=>{console.log("OUTPUT - buttonBeforeHook$: ",c),!(!c||!c.button)&&(c.button.type===Q.DELETE&&(console.log("delete in app with images count "+this.images.length),this.images=this.images.filter(L=>c.image&&L.id!==c.image.id)),this.buttonBeforeHook=c)}),this.buttonAfterHookSubscription=a.buttonAfterHook$.subscribe(c=>{!c||!c.button||(this.buttonAfterHook=c)})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo outputs"})}ngOnDestroy(){this.closeSubscription&&this.closeSubscription.unsubscribe(),this.showSubscription&&this.showSubscription.unsubscribe(),this.firstImageSubscription&&this.firstImageSubscription.unsubscribe(),this.lastImageSubscription&&this.lastImageSubscription.unsubscribe(),this.hasDataSubscription&&this.hasDataSubscription.unsubscribe(),this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe(),this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe()}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-output-events-page"]],standalone:!1,decls:154,vars:25,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"table-responsive"],[1,"table","table-hover","table-sm"],[3,"content","language"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Output Events example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example with "),i(6,"b",3),e(7,"output events logged in console."),t()(),n(8,"br"),i(9,"h3"),e(10,"Live Demo"),t(),n(11,"br"),i(12,"button",4),f("click",function(){return a.openModal(333,0)}),e(13,"Click to open modal gallery id=1 at index=0"),t(),n(14,"br")(15,"br"),i(16,"h3"),e(17,"Live demo results"),t(),i(18,"div",5)(19,"table",6)(20,"thead")(21,"tr")(22,"th"),e(23,"Output"),t(),i(24,"th"),e(25,"$event value (Event payload)"),t()()(),i(26,"tbody")(27,"tr")(28,"td")(29,"code"),e(30,"(hasData)"),t()(),i(31,"td")(32,"div"),e(33),Y(34,"json"),t()()(),i(35,"tr")(36,"td")(37,"code"),e(38,"(close)"),t()(),i(39,"td")(40,"div"),e(41),Y(42,"json"),t()()(),i(43,"tr")(44,"td")(45,"code"),e(46,"(show)"),t()(),i(47,"td")(48,"div"),e(49),Y(50,"json"),t()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"(firstImage)"),t()(),i(55,"td")(56,"div"),e(57),Y(58,"json"),t()()(),i(59,"tr")(60,"td")(61,"code"),e(62,"(lastImage)"),t()(),i(63,"td")(64,"div"),e(65),Y(66,"json"),t()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"(buttonBeforeHook)"),t()(),i(71,"td")(72,"div"),e(73),Y(74,"json"),t()()(),i(75,"tr")(76,"td")(77,"code"),e(78,"(buttonAfterHook)"),t()(),i(79,"td")(80,"div"),e(81),Y(82,"json"),t()()()()()(),n(83,"br")(84,"br"),i(85,"section")(86,"h3"),e(87,"Code"),t(),n(88,"br"),i(89,"h4"),e(90,"Template"),t(),n(91,"ks-codemirror",7)(92,"br"),i(93,"h4"),e(94,"Typescript"),t(),n(95,"ks-codemirror",7),t(),n(96,"br")(97,"br"),i(98,"section")(99,"h3"),e(100,"Service inputs"),t(),n(101,"br"),i(102,"table",6)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"id"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"NUMERIC UNIQUE ID"),t()(),i(120,"div")(121,"b",3),e(122,"Unique id"),t()()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"images"),t()(),i(127,"td")(128,"div")(129,"i"),e(130,"Value: "),t(),i(131,"code"),e(132,"Image[]"),t()(),i(133,"div")(134,"b",3),e(135,"Array of "),i(136,"code"),e(137,"Image"),t(),e(138," objects"),t()()()(),i(139,"tr")(140,"td")(141,"code"),e(142,"currentImage"),t()(),i(143,"td")(144,"div")(145,"i"),e(146,"Value: "),t(),i(147,"code"),e(148,"Image"),t()(),i(149,"div")(150,"b",3)(151,"code"),e(152,"Image"),t(),e(153," object to show"),t()()()()()()()()),l&2&&(m(33),P(W(34,11,a.imageLoaded)),m(8),P(W(42,13,a.closeImageModal)),m(8),P(W(50,15,a.visibleIndex)),m(8),P(W(58,17,a.isFirstImage)),m(8),P(W(66,19,a.isLastImage)),m(8),P(W(74,21,a.buttonBeforeHook)),m(8),P(W(82,23,a.buttonAfterHook)),m(10),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S,si],styles:["td[_ngcontent-%COMP%]{min-width:162px!important}"]})}}return r})()});var Ie,we=y(()=>{"use strict";E();D();T();C();A();I();E();w();Ie=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Add image array"),this.codeHtml=`<button (click)="openModal(301, 0)">Click to open modal gallery id=1 at index=0</button>
<button (click)="addRandomImage()">Add random image</button>
  `,this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  addRandomImage() {
    const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
    const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.images = [...this.images, newImage]; // this is really important (you MUST create a new copy of the input array)
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
  `}ngOnInit(){this.metaData()}addRandomImage(){let o=this.images[Math.floor(Math.random()*this.images.length)],l=new F(this.images.length-1+1,o.modal,o.plain);this.images=[...this.images,l]}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l]})}metaData(){this.uiService.setMetaData({title:"Demo add image"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-add-image-array-page"]],standalone:!1,decls:88,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-plus"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Add image to array"),t()(),i(4,"p"),e(5,"Modal gallery example with a "),i(6,"b",3),e(7,"button to add new images."),t()(),n(8,"br"),i(9,"h3"),e(10,"Live Demo "),i(11,"button",4),f("click",function(){return a.addRandomImage()}),n(12,"i",5),e(13,"\xA0\xA0Add image"),t()(),n(14,"br"),i(15,"button",6),f("click",function(){return a.openModal(301,0)}),e(16,"Click to open modal gallery id=1 at index=0"),t(),n(17,"br")(18,"br"),i(19,"section")(20,"h3"),e(21,"Code"),t(),n(22,"br"),i(23,"h4"),e(24,"Template"),t(),n(25,"ks-codemirror",7)(26,"br"),i(27,"h4"),e(28,"Typescript"),t(),n(29,"ks-codemirror",7),t(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),e(34,"Service inputs"),t(),n(35,"br"),i(36,"table",8)(37,"thead")(38,"tr")(39,"th"),e(40,"Input"),t(),i(41,"th"),e(42,"Value"),t()()(),i(43,"tbody")(44,"tr")(45,"td")(46,"code"),e(47,"id"),t()(),i(48,"td")(49,"div")(50,"i"),e(51,"Value: "),t(),i(52,"code"),e(53,"NUMERIC UNIQUE ID"),t()(),i(54,"div")(55,"b",3),e(56,"Unique id"),t()()()(),i(57,"tr")(58,"td")(59,"code"),e(60,"images"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"Image[]"),t()(),i(67,"div")(68,"b",3),e(69,"Array of "),i(70,"code"),e(71,"Image"),t(),e(72," objects"),t()()()(),i(73,"tr")(74,"td")(75,"code"),e(76,"currentImage"),t()(),i(77,"td")(78,"div")(79,"i"),e(80,"Value: "),t(),i(81,"code"),e(82,"Image"),t()(),i(83,"div")(84,"b",3)(85,"code"),e(86,"Image"),t(),e(87," object to show"),t()()()()()()()()),l&2&&(m(25),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Me,Ae=y(()=>{"use strict";E();D();T();C();A();I();E();w();Me=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Description custom"),this.codeHtml='<button (click)="openModal(313, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          description: {
            strategy: DescriptionStrategy.ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{description:{strategy:ee.ALWAYS_VISIBLE,imageText:"Look this image ",numberSeparator:" of ",beforeTextDescription:" => "}}}})}metaData(){this.uiService.setMetaData({title:"Demo description custom"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-description-custom-page"]],standalone:!1,decls:133,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Description custom example"),t()(),i(4,"p"),e(5,"Minimal modal gallery "),i(6,"b",3),e(7,"with a custom description."),t()(),i(8,"p")(9,"b",3),e(10,"So imageText, numberSeparator and beforeTextDescription will be replaced with the provided values, but the final description will be the value defined inside the "),i(11,"code"),e(12,"Image"),t(),e(13," object"),t()(),n(14,"br"),i(15,"h3"),e(16,"Live Demo"),t(),n(17,"br"),i(18,"button",4),f("click",function(){return a.openModal(313,0)}),e(19,"Click to open modal gallery id=1 at index=0"),t(),n(20,"br")(21,"br"),i(22,"section")(23,"h3"),e(24,"Code"),t(),n(25,"br"),i(26,"h4"),e(27,"Template"),t(),n(28,"ks-codemirror",5)(29,"br"),i(30,"h4"),e(31,"Typescript"),t(),n(32,"ks-codemirror",5),t(),n(33,"br")(34,"br"),i(35,"section")(36,"h3"),e(37,"Service inputs"),t(),n(38,"br"),i(39,"table",6)(40,"thead")(41,"tr")(42,"th"),e(43,"Input"),t(),i(44,"th"),e(45,"Value"),t()()(),i(46,"tbody")(47,"tr")(48,"td")(49,"code"),e(50,"id"),t()(),i(51,"td")(52,"div")(53,"i"),e(54,"Value: "),t(),i(55,"code"),e(56,"NUMERIC UNIQUE ID"),t()(),i(57,"div")(58,"b",3),e(59,"Unique id"),t()()()(),i(60,"tr")(61,"td")(62,"code"),e(63,"images"),t()(),i(64,"td")(65,"div")(66,"i"),e(67,"Value: "),t(),i(68,"code"),e(69,"Image[]"),t()(),i(70,"div")(71,"b",3),e(72,"Array of "),i(73,"code"),e(74,"Image"),t(),e(75," objects"),t()()()(),i(76,"tr")(77,"td")(78,"code"),e(79,"currentImage"),t()(),i(80,"td")(81,"div")(82,"i"),e(83,"Value: "),t(),i(84,"code"),e(85,"Image"),t()(),i(86,"div")(87,"b",3)(88,"code"),e(89,"Image"),t(),e(90," object to show"),t()()()(),i(91,"tr")(92,"td")(93,"code"),e(94,"libConfig"),t()(),i(95,"td")(96,"div")(97,"i"),e(98,"Value: "),t(),i(99,"code"),e(100,"ModalLibConfig"),t()(),i(101,"div")(102,"b",3)(103,"code"),e(104,"ModalLibConfig"),t(),e(105," object to config the library. See below."),t()()()()()()(),i(106,"section")(107,"h4"),e(108,"ModalLibConfig"),t(),n(109,"br"),i(110,"table",6)(111,"thead")(112,"tr")(113,"th"),e(114,"Input"),t(),i(115,"th"),e(116,"Value"),t()()(),i(117,"tbody")(118,"tr")(119,"td")(120,"code"),e(121,"currentImageConfig"),t()(),i(122,"td")(123,"div")(124,"i"),e(125,"Value: "),t(),i(126,"code"),e(127,"{ description: { strategy: DescriptionStrategy.ALWAYS_VISIBLE, imageText: 'Look this image ', numberSeparator: ' of ', beforeTextDescription: ' => ' } }"),t()(),i(128,"div"),e(129,"Show a "),i(130,"b"),e(131,"CUSTOM description"),t(),e(132," (always visible)"),t()()()()()()()),l&2&&(m(28),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],styles:[".very-big-tds[_ngcontent-%COMP%]{min-width:180px!important}.big-tds[_ngcontent-%COMP%]{min-width:146px!important}"]})}}return r})()});var Te,ke=y(()=>{"use strict";E();D();T();C();A();I();E();w();Te=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Description full custom"),this.codeHtml='<button (click)="openModal(314, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          description: {
            strategy: DescriptionStrategy.ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{description:{strategy:ee.ALWAYS_VISIBLE,customFullDescription:"<ol><li>Custom</li><li>description of the</li><li>current visible</li><li>image</li></ol>",style:{bgColor:"rgba(255,0,0,.5)",textColor:"blue",marginTop:"3px",marginBottom:"0px",marginLeft:"5px",marginRight:"5px",position:"absolute",top:"0px",height:"125px"}}}}})}metaData(){this.uiService.setMetaData({title:"Demo description full"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-description-full-custom-page"]],standalone:!1,decls:130,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Description full custom example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery "),i(6,"b",3),e(7,"with a full custom text description and additional style."),t()(),i(8,"p")(9,"b",3),e(10,"Description will be replaced with the provided text (plain text or also HTML)."),t()(),n(11,"br"),i(12,"h3"),e(13,"Live Demo"),t(),n(14,"br"),i(15,"button",4),f("click",function(){return a.openModal(314,0)}),e(16,"Click to open modal gallery id=1 at index=0"),t(),n(17,"br")(18,"br"),i(19,"section")(20,"h3"),e(21,"Code"),t(),n(22,"br"),i(23,"h4"),e(24,"Template"),t(),n(25,"ks-codemirror",5)(26,"br"),i(27,"h4"),e(28,"Typescript"),t(),n(29,"ks-codemirror",5),t(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),e(34,"Service inputs"),t(),n(35,"br"),i(36,"table",6)(37,"thead")(38,"tr")(39,"th"),e(40,"Input"),t(),i(41,"th"),e(42,"Value"),t()()(),i(43,"tbody")(44,"tr")(45,"td")(46,"code"),e(47,"id"),t()(),i(48,"td")(49,"div")(50,"i"),e(51,"Value: "),t(),i(52,"code"),e(53,"NUMERIC UNIQUE ID"),t()(),i(54,"div")(55,"b",3),e(56,"Unique id"),t()()()(),i(57,"tr")(58,"td")(59,"code"),e(60,"images"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"Image[]"),t()(),i(67,"div")(68,"b",3),e(69,"Array of "),i(70,"code"),e(71,"Image"),t(),e(72," objects"),t()()()(),i(73,"tr")(74,"td")(75,"code"),e(76,"currentImage"),t()(),i(77,"td")(78,"div")(79,"i"),e(80,"Value: "),t(),i(81,"code"),e(82,"Image"),t()(),i(83,"div")(84,"b",3)(85,"code"),e(86,"Image"),t(),e(87," object to show"),t()()()(),i(88,"tr")(89,"td")(90,"code"),e(91,"libConfig"),t()(),i(92,"td")(93,"div")(94,"i"),e(95,"Value: "),t(),i(96,"code"),e(97,"ModalLibConfig"),t()(),i(98,"div")(99,"b",3)(100,"code"),e(101,"ModalLibConfig"),t(),e(102," object to config the library. See below."),t()()()()()()(),i(103,"section")(104,"h4"),e(105,"ModalLibConfig"),t(),n(106,"br"),i(107,"table",6)(108,"thead")(109,"tr")(110,"th"),e(111,"Input"),t(),i(112,"th"),e(113,"Value"),t()()(),i(114,"tbody")(115,"tr")(116,"td")(117,"code"),e(118,"currentImageConfig"),t()(),i(119,"td")(120,"div")(121,"i"),e(122,"Value: "),t(),i(123,"code"),e(124,"{ description: { strategy: DescriptionStrategy.ALWAYS_VISIBLE, customFullDescription: 'Custom full desc ', style: { bgColor: 'rgba(255,0,0,.5)', textColor: 'blue', marginTop: '3px', marginBottom: '0px', marginLeft: '5px', marginRight: '5px', position: 'absolute', top: '0px', height: '125px' } } }"),t()(),i(125,"div"),e(126,"Show a "),i(127,"b"),e(128,"CUSTOM HTML description with additional style"),t(),e(129," (remember to use always DescriptionStrategy.ALWAYS_VISIBLE when you want to use customFullDescription)"),t()()()()()()()),l&2&&(m(25),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],styles:[".very-big-tds[_ngcontent-%COMP%]{min-width:180px!important}.big-tds[_ngcontent-%COMP%]{min-width:146px!important}"]})}}return r})()});var De,Ge=y(()=>{"use strict";D();T();C();A();I();E();w();De=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - No close outside"),this.codeHtml='<button (click)="openModal(312, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        enableCloseOutside: false
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{enableCloseOutside:!1}})}metaData(){this.uiService.setMetaData({title:"Demo close outside"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-close-outside-page"]],standalone:!1,decls:124,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"No close outside example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example "),i(6,"b"),e(7,"without `Close Outside`"),t(),e(8," behaviour. So you cannot click on the semi-transparent background to close modal gallery."),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br"),i(13,"button",3),f("click",function(){return a.openModal(312,0)}),e(14,"Click to open modal gallery id=1 at index=0"),t(),n(15,"br")(16,"br"),i(17,"section")(18,"h3"),e(19,"Code"),t(),i(20,"h4"),e(21,"Template"),t(),n(22,"ks-codemirror",4)(23,"br"),i(24,"h4"),e(25,"Typescript"),t(),n(26,"ks-codemirror",4),t(),n(27,"br")(28,"br"),i(29,"section")(30,"h3"),e(31,"Service inputs"),t(),n(32,"br"),i(33,"table",5)(34,"thead")(35,"tr")(36,"th"),e(37,"Input"),t(),i(38,"th"),e(39,"Value"),t()()(),i(40,"tbody")(41,"tr")(42,"td")(43,"code"),e(44,"id"),t()(),i(45,"td")(46,"div")(47,"i"),e(48,"Value: "),t(),i(49,"code"),e(50,"NUMERIC UNIQUE ID"),t()(),i(51,"div")(52,"b",6),e(53,"Unique id"),t()()()(),i(54,"tr")(55,"td")(56,"code"),e(57,"images"),t()(),i(58,"td")(59,"div")(60,"i"),e(61,"Value: "),t(),i(62,"code"),e(63,"Image[]"),t()(),i(64,"div")(65,"b",6),e(66,"Array of "),i(67,"code"),e(68,"Image"),t(),e(69," objects"),t()()()(),i(70,"tr")(71,"td")(72,"code"),e(73,"currentImage"),t()(),i(74,"td")(75,"div")(76,"i"),e(77,"Value: "),t(),i(78,"code"),e(79,"Image"),t()(),i(80,"div")(81,"b",6)(82,"code"),e(83,"Image"),t(),e(84," object to show"),t()()()(),i(85,"tr")(86,"td")(87,"code"),e(88,"libConfig"),t()(),i(89,"td")(90,"div")(91,"i"),e(92,"Value: "),t(),i(93,"code"),e(94,"ModalLibConfig"),t()(),i(95,"div")(96,"b",6)(97,"code"),e(98,"ModalLibConfig"),t(),e(99," object to config the library. See below."),t()()()()()()(),i(100,"section")(101,"h4"),e(102,"ModalLibConfig"),t(),n(103,"br"),i(104,"table",5)(105,"thead")(106,"tr")(107,"th"),e(108,"Input"),t(),i(109,"th"),e(110,"Value"),t()()(),i(111,"tbody")(112,"tr")(113,"td")(114,"code"),e(115,"enableCloseOutside"),t()(),i(116,"td")(117,"div")(118,"i"),e(119,"Value: "),t(),i(120,"code"),e(121,"false"),t()(),i(122,"div"),e(123,"Clicking on the semi-transparent background, modal-gallery won't close"),t()()()()()()()),l&2&&(m(22),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var _e,Re=y(()=>{"use strict";D();T();C();A();I();E();w();_e=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Keyboard config"),this.codeHtml='<button (click)="openModal(320, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        keyboardConfig: {
          esc: 81,
          left: 40,
          right: 38
        }
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{keyboardConfig:{esc:"KeyQ",left:"ArrowDown",right:"ArrowUp"}}})}metaData(){this.uiService.setMetaData({title:"Demo keyboard config"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-keyboard-config-page"]],standalone:!1,decls:154,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"text-tail"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Keyboard Config example"),t()(),i(4,"p"),e(5,"Modal gallery example with Keyboard configuration"),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(320,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"keyboardConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{esc: 81, left: 40, right: 38}"),t()(),i(120,"div")(121,"p"),e(122,"This configuration will map actions to other keyboard's keys. So, if you want to change the key to close modal gallery, you can use this property. In this example:"),t(),i(123,"ul")(124,"li")(125,"span",6),e(126,"close gallery: "),i(127,"kbd"),e(128,"q"),t()(),i(129,"span",7),e(130," (instead of the default "),i(131,"kbd"),e(132,"esc"),t(),e(133,")"),t()(),i(134,"li")(135,"span",6),e(136,"previous image: "),i(137,"kbd"),e(138,"\u2193"),t()(),i(139,"span",7),e(140," (instead of the default "),i(141,"kbd"),e(142,"\u2190"),t(),e(143,")"),t()(),i(144,"li")(145,"span",6),e(146,"next image: "),i(147,"kbd"),e(148,"\u2191"),t()(),i(149,"span",7),e(150," (instead of the default "),i(151,"kbd"),e(152,"\u2192"),t(),e(153,")"),t()()()()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Le,Ue=y(()=>{"use strict";D();T();C();A();I();E();w();Le=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Infinite sliding"),this.codeHtml='<button (click)="openModal(318, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          infinite: true,
          sidePreviews: {
            show: false
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{slideConfig:{infinite:!0,sidePreviews:{show:!1}}}})}metaData(){this.uiService.setMetaData({title:"Demo infinite sliding"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-infinite-sliding-page"]],standalone:!1,decls:125,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Infinite sliding enabled"),t()(),i(4,"p"),e(5,"Modal gallery example with "),i(6,"b"),e(7,"infinite sliding enabled"),t(),e(8,", but without side-previews"),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br"),i(13,"button",3),f("click",function(){return a.openModal(318,0)}),e(14,"Click to open modal gallery id=1 at index=0"),t(),n(15,"br")(16,"br"),i(17,"section")(18,"h3"),e(19,"Code"),t(),n(20,"br"),i(21,"h4"),e(22,"Template"),t(),n(23,"ks-codemirror",4)(24,"br"),i(25,"h4"),e(26,"Typescript"),t(),n(27,"ks-codemirror",4),t(),n(28,"br")(29,"br"),i(30,"section")(31,"h3"),e(32,"Service inputs"),t(),n(33,"br"),i(34,"table",5)(35,"thead")(36,"tr")(37,"th"),e(38,"Input"),t(),i(39,"th"),e(40,"Value"),t()()(),i(41,"tbody")(42,"tr")(43,"td")(44,"code"),e(45,"id"),t()(),i(46,"td")(47,"div")(48,"i"),e(49,"Value: "),t(),i(50,"code"),e(51,"NUMERIC UNIQUE ID"),t()(),i(52,"div")(53,"b",6),e(54,"Unique id"),t()()()(),i(55,"tr")(56,"td")(57,"code"),e(58,"images"),t()(),i(59,"td")(60,"div")(61,"i"),e(62,"Value: "),t(),i(63,"code"),e(64,"Image[]"),t()(),i(65,"div")(66,"b",6),e(67,"Array of "),i(68,"code"),e(69,"Image"),t(),e(70," objects"),t()()()(),i(71,"tr")(72,"td")(73,"code"),e(74,"currentImage"),t()(),i(75,"td")(76,"div")(77,"i"),e(78,"Value: "),t(),i(79,"code"),e(80,"Image"),t()(),i(81,"div")(82,"b",6)(83,"code"),e(84,"Image"),t(),e(85," object to show"),t()()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"libConfig"),t()(),i(90,"td")(91,"div")(92,"i"),e(93,"Value: "),t(),i(94,"code"),e(95,"ModalLibConfig"),t()(),i(96,"div")(97,"b",6)(98,"code"),e(99,"ModalLibConfig"),t(),e(100," object to config the library. See below."),t()()()()()()(),i(101,"section")(102,"h4"),e(103,"ModalLibConfig"),t(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),e(109,"Input"),t(),i(110,"th"),e(111,"Value"),t()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"slideConfig"),t()(),i(117,"td")(118,"div")(119,"i"),e(120,"Value: "),t(),i(121,"code"),e(122,"{infinite: true, sidePreviews: {show: false }}"),t()(),i(123,"div"),e(124,"Infinite sliding is enabled and side previews are disabled"),t()()()()()()()),l&2&&(m(23),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Ve,Pe=y(()=>{"use strict";D();T();C();A();I();E();w();Ve=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - No dots and previews"),this.codeHtml='<button (click)="openModal(331, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: false
        },
        dotsConfig: {
          visible: false
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!1},dotsConfig:{visible:!1}}})}metaData(){this.uiService.setMetaData({title:"Demo no dots and previews"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-no-dots-and-previews-page"]],standalone:!1,decls:137,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Current image + buttons"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"without dots and previews"),t(),e(8,", but with side-previews."),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br"),i(13,"button",3),f("click",function(){return a.openModal(331,0)}),e(14,"Click to open modal gallery id=1 at index=0"),t(),n(15,"br")(16,"br"),i(17,"section")(18,"h3"),e(19,"Code"),t(),n(20,"br"),i(21,"h4"),e(22,"Template"),t(),n(23,"ks-codemirror",4)(24,"br"),i(25,"h4"),e(26,"Typescript"),t(),n(27,"ks-codemirror",4),t(),n(28,"br")(29,"br"),i(30,"section")(31,"h3"),e(32,"Service inputs"),t(),n(33,"br"),i(34,"table",5)(35,"thead")(36,"tr")(37,"th"),e(38,"Input"),t(),i(39,"th"),e(40,"Value"),t()()(),i(41,"tbody")(42,"tr")(43,"td")(44,"code"),e(45,"id"),t()(),i(46,"td")(47,"div")(48,"i"),e(49,"Value: "),t(),i(50,"code"),e(51,"NUMERIC UNIQUE ID"),t()(),i(52,"div")(53,"b",6),e(54,"Unique id"),t()()()(),i(55,"tr")(56,"td")(57,"code"),e(58,"images"),t()(),i(59,"td")(60,"div")(61,"i"),e(62,"Value: "),t(),i(63,"code"),e(64,"Image[]"),t()(),i(65,"div")(66,"b",6),e(67,"Array of "),i(68,"code"),e(69,"Image"),t(),e(70," objects"),t()()()(),i(71,"tr")(72,"td")(73,"code"),e(74,"currentImage"),t()(),i(75,"td")(76,"div")(77,"i"),e(78,"Value: "),t(),i(79,"code"),e(80,"Image"),t()(),i(81,"div")(82,"b",6)(83,"code"),e(84,"Image"),t(),e(85," object to show"),t()()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"libConfig"),t()(),i(90,"td")(91,"div")(92,"i"),e(93,"Value: "),t(),i(94,"code"),e(95,"ModalLibConfig"),t()(),i(96,"div")(97,"b",6)(98,"code"),e(99,"ModalLibConfig"),t(),e(100," object to config the library. See below."),t()()()()()()(),i(101,"section")(102,"h4"),e(103,"ModalLibConfig"),t(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),e(109,"Input"),t(),i(110,"th"),e(111,"Value"),t()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"dotsConfig"),t()(),i(117,"td")(118,"div")(119,"i"),e(120,"Value: "),t(),i(121,"code"),e(122,"{visible: false}"),t()(),i(123,"div"),e(124,"It will hide dots below the current modal image"),t()()(),i(125,"tr")(126,"td")(127,"code"),e(128,"previewConfig"),t()(),i(129,"td")(130,"div")(131,"i"),e(132,"Value: "),t(),i(133,"code"),e(134,"{visible: false}"),t()(),i(135,"div"),e(136,"It will hide previews below the current modal image"),t()()()()()()()),l&2&&(m(23),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Oe,He=y(()=>{"use strict";D();T();C();A();I();E();w();Oe=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Hidden side-previews"),this.codeHtml='<button (click)="openModal(339, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{slideConfig:{infinite:!1,sidePreviews:{show:!1}}}})}metaData(){this.uiService.setMetaData({title:"Demo previews hidden"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-side-previews-hidden-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Hidden side-previews"),t()(),i(4,"p"),e(5,"Modal gallery without side-previews."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(339,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"slideConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{infinite: false, sidePreviews: {show: false}}"),t()(),i(120,"div"),e(121,"Hide side previews and let infinite sliding to the default value (false)"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var je,Ne=y(()=>{"use strict";E();D();T();C();A();I();E();w();je=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Only current image"),this.codeHtml='<button (click)="openModal(332, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: false
        },
        dotsConfig: {
          visible: false
        },
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        },
        buttonsConfig: {
          visible: false,
          strategy: ButtonsStrategy.DEFAULT
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!1},dotsConfig:{visible:!1},slideConfig:{infinite:!1,sidePreviews:{show:!1}},buttonsConfig:{visible:!1,strategy:O.DEFAULT}}})}metaData(){this.uiService.setMetaData({title:"Demo only current"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-only-current-img-page"]],standalone:!1,decls:158,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Only current image"),t()(),i(4,"p"),e(5,"Modal gallery with only the current image."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(332,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"buttonsConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{visible: false, strategy: 1}"),t()(),i(120,"div"),e(121,"It will hide all buttons"),t()()(),i(122,"tr")(123,"td")(124,"code"),e(125,"dotsConfig"),t()(),i(126,"td")(127,"div")(128,"i"),e(129,"Value: "),t(),i(130,"code"),e(131,"{visible: false}"),t()(),i(132,"div"),e(133,"It will hide dots below the current modal image"),t()()(),i(134,"tr")(135,"td")(136,"code"),e(137,"previewConfig"),t()(),i(138,"td")(139,"div")(140,"i"),e(141,"Value: "),t(),i(142,"code"),e(143,"{visible: false}"),t()(),i(144,"div"),e(145,"It will hide previews below the current modal image"),t()()(),i(146,"tr")(147,"td")(148,"code"),e(149,"slideConfig"),t()(),i(150,"td")(151,"div")(152,"i"),e(153,"Value: "),t(),i(154,"code"),e(155,"{visible: false, sidePreviews: {show: false}}"),t()(),i(156,"div"),e(157,"Hide side previews and let infinite sliding to the default value (false)"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Be,Fe=y(()=>{"use strict";D();T();C();A();I();E();w();Be=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Previews custom size"),this.codeHtml='<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
          size: {
            width: '150px',
            height: 'auto'
          }
        }
      } as PlainLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0,size:{width:"150px",height:"auto"}}}})}metaData(){this.uiService.setMetaData({title:"Demo previews custom size"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-custom-size-page"]],standalone:!1,decls:125,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Custom preview size"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"with previews (custom size)"),t(),e(8,"."),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br"),i(13,"button",3),f("click",function(){return a.openModal(334,0)}),e(14,"Click to open modal gallery id=1 at index=0"),t(),n(15,"br")(16,"br"),i(17,"section")(18,"h3"),e(19,"Code"),t(),n(20,"br"),i(21,"h4"),e(22,"Template"),t(),n(23,"ks-codemirror",4)(24,"br"),i(25,"h4"),e(26,"Typescript"),t(),n(27,"ks-codemirror",4),t(),n(28,"br")(29,"br"),i(30,"section")(31,"h3"),e(32,"Service inputs"),t(),n(33,"br"),i(34,"table",5)(35,"thead")(36,"tr")(37,"th"),e(38,"Input"),t(),i(39,"th"),e(40,"Value"),t()()(),i(41,"tbody")(42,"tr")(43,"td")(44,"code"),e(45,"id"),t()(),i(46,"td")(47,"div")(48,"i"),e(49,"Value: "),t(),i(50,"code"),e(51,"NUMERIC UNIQUE ID"),t()(),i(52,"div")(53,"b",6),e(54,"Unique id"),t()()()(),i(55,"tr")(56,"td")(57,"code"),e(58,"images"),t()(),i(59,"td")(60,"div")(61,"i"),e(62,"Value: "),t(),i(63,"code"),e(64,"Image[]"),t()(),i(65,"div")(66,"b",6),e(67,"Array of "),i(68,"code"),e(69,"Image"),t(),e(70," objects"),t()()()(),i(71,"tr")(72,"td")(73,"code"),e(74,"currentImage"),t()(),i(75,"td")(76,"div")(77,"i"),e(78,"Value: "),t(),i(79,"code"),e(80,"Image"),t()(),i(81,"div")(82,"b",6)(83,"code"),e(84,"Image"),t(),e(85," object to show"),t()()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"libConfig"),t()(),i(90,"td")(91,"div")(92,"i"),e(93,"Value: "),t(),i(94,"code"),e(95,"ModalLibConfig"),t()(),i(96,"div")(97,"b",6)(98,"code"),e(99,"ModalLibConfig"),t(),e(100," object to config the library. See below."),t()()()()()()(),i(101,"section")(102,"h4"),e(103,"ModalLibConfig"),t(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),e(109,"Input"),t(),i(110,"th"),e(111,"Value"),t()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"previewConfig"),t()(),i(117,"td")(118,"div")(119,"i"),e(120,"Value: "),t(),i(121,"code"),e(122,"{ visible: true, size: { width: '150px', height: 'auto' }}"),t()(),i(123,"div"),e(124,"It will show 3 clickable previews (default size) with arrows"),t()()()()()()()),l&2&&(m(23),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Qe,Ke=y(()=>{"use strict";E();D();T();C();A();I();E();w();Qe=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Loading spinner disabled"),this.codeHtml='<button (click)="openModal(321, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          loadingConfig: {
            enable: false,
            type: LoadingType.STANDARD
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{loadingConfig:{enable:!1,type:bi.STANDARD}}}})}metaData(){this.uiService.setMetaData({title:"Demo spinner disable"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-loading-spinner-disable-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Loading spinner disabled"),t()(),i(4,"p"),e(5,"Modal gallery example without loading spinner."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(321,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"currentImageConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{ loadingConfig: { enable: false, type: LoadingType.STANDARD } }"),t()(),i(120,"div"),e(121,"No loading spinner because 'enable' is false. Spinner type is required by the Angular interface, also in case of 'enable: false'. It will be simply ignored."),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var ze,qe=y(()=>{"use strict";D();T();C();A();I();E();w();ze=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Loading spinner types"),this.codeHtml=`
  <p>1. Type STANDARD</p>
  <button (click)="openModal(322, 0, 1)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Type CIRCULAR</p>
  <button (click)="openModal(323, 0, 2)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Type BARS</p>
  <button (click)="openModal(324, 0, 3)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Type DOTS</p>
  <button (click)="openModal(325, 0, 4)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>5. Type CUBE_FLIPPING</p>
  <button (click)="openModal(326, 0, 5)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>6. Type CIRCLES</p>
  <button (click)="openModal(327, 0, 6)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>7. Type EXPLODING_SQUARES</p>
  <button (click)="openModal(328, 0, 7)">Open modal gallery id=1 at index=0</button>
  <br>
  `,this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number, loadingType: LoadingType): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          loadingConfig: {
            enable: true,
            type: loadingType
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l,a){let c=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{loadingConfig:{enable:!0,type:a}}}})}metaData(){this.uiService.setMetaData({title:"Demo spinner type"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-loading-spinner-type-page"]],standalone:!1,decls:161,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Loading spinner types"),t()(),i(4,"p"),e(5,"Modal gallery example with different types of loading spinners."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demos"),t(),n(9,"br"),i(10,"p"),e(11,"1. Type STANDARD"),t(),i(12,"button",3),f("click",function(){return a.openModal(322,0,1)}),e(13,"Open modal gallery id=1 at index=0"),t(),n(14,"br")(15,"br"),i(16,"p"),e(17,"2. Type CIRCULAR"),t(),i(18,"button",3),f("click",function(){return a.openModal(323,0,2)}),e(19,"Open modal gallery id=1 at index=0"),t(),n(20,"br")(21,"br"),i(22,"p"),e(23,"3. Type BARS"),t(),i(24,"button",3),f("click",function(){return a.openModal(324,0,3)}),e(25,"Open modal gallery id=1 at index=0"),t(),n(26,"br")(27,"br"),i(28,"p"),e(29,"4. Type DOTS"),t(),i(30,"button",3),f("click",function(){return a.openModal(325,0,4)}),e(31,"Open modal gallery id=1 at index=0"),t(),n(32,"br")(33,"br"),i(34,"p"),e(35,"5. Type CUBE_FLIPPING"),t(),i(36,"button",3),f("click",function(){return a.openModal(326,0,5)}),e(37,"Open modal gallery id=1 at index=0"),t(),n(38,"br")(39,"br"),i(40,"p"),e(41,"6. Type CIRCLES"),t(),i(42,"button",3),f("click",function(){return a.openModal(327,0,6)}),e(43,"Open modal gallery id=1 at index=0"),t(),n(44,"br")(45,"br"),i(46,"p"),e(47,"7. Type EXPLODING_SQUARES"),t(),i(48,"button",3),f("click",function(){return a.openModal(328,0,7)}),e(49,"Open modal gallery id=1 at index=0"),t(),n(50,"br")(51,"br"),i(52,"section")(53,"h3"),e(54,"Code"),t(),n(55,"br"),i(56,"h4"),e(57,"Template"),t(),n(58,"ks-codemirror",4)(59,"br"),i(60,"h4"),e(61,"Typescript"),t(),n(62,"ks-codemirror",4),t(),n(63,"br")(64,"br"),i(65,"section")(66,"h3"),e(67,"Service inputs"),t(),n(68,"br"),i(69,"table",5)(70,"thead")(71,"tr")(72,"th"),e(73,"Input"),t(),i(74,"th"),e(75,"Value"),t()()(),i(76,"tbody")(77,"tr")(78,"td")(79,"code"),e(80,"id"),t()(),i(81,"td")(82,"div")(83,"i"),e(84,"Value: "),t(),i(85,"code"),e(86,"from 1 to 7"),t(),e(87," (one for every instance in this example)"),t(),i(88,"div")(89,"b",6),e(90,"Unique id"),t()()()(),i(91,"tr")(92,"td")(93,"code"),e(94,"images"),t()(),i(95,"td")(96,"div")(97,"i"),e(98,"Value: "),t(),i(99,"code"),e(100,"Image[]"),t()(),i(101,"div")(102,"b",6),e(103,"Array of "),i(104,"code"),e(105,"Image"),t(),e(106," objects"),t()()()(),i(107,"tr")(108,"td")(109,"code"),e(110,"currentImage"),t()(),i(111,"td")(112,"div")(113,"i"),e(114,"Value: "),t(),i(115,"code"),e(116,"Image"),t()(),i(117,"div")(118,"b",6)(119,"code"),e(120,"Image"),t(),e(121," object to show"),t()()()(),i(122,"tr")(123,"td")(124,"code"),e(125,"libConfig"),t()(),i(126,"td")(127,"div")(128,"i"),e(129,"Value: "),t(),i(130,"code"),e(131,"ModalLibConfig"),t()(),i(132,"div")(133,"b",6)(134,"code"),e(135,"ModalLibConfig"),t(),e(136," object to config the library. See below."),t()()()()()()(),i(137,"section")(138,"h4"),e(139,"ModalLibConfig"),t(),n(140,"br"),i(141,"table",5)(142,"thead")(143,"tr")(144,"th"),e(145,"Input"),t(),i(146,"th"),e(147,"Value"),t()()(),i(148,"tbody")(149,"tr")(150,"td")(151,"code"),e(152,"currentImageConfig"),t()(),i(153,"td")(154,"div")(155,"i"),e(156,"Value: "),t(),i(157,"code"),e(158,"{ loadingConfig: { enable: true, type: 1 } }"),t()(),i(159,"div"),e(160,"It will show loading spinners of different types, based on the value of 'type' (number from 1 to 7, also available as LoadingType enum)"),t()()()()()()()),l&2&&(m(58),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Ye,We=y(()=>{"use strict";D();T();C();A();I();E();w();Ye=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Previews length"),this.codeHtml='<button (click)="openModal(335, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
          number: 1
        }
      } as PlainLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0,number:1}}})}metaData(){this.uiService.setMetaData({title:"Demo previews length"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-length-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Previews with custom length"),t()(),i(4,"p"),e(5,"Modal gallery example with only one preview (length === 1)."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(335,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"previewConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{ visible: true, number: 1 }"),t()(),i(120,"div"),e(121,"It will show only 1 clickable preview (default size) with arrows"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var $e,Xe=y(()=>{"use strict";D();T();C();A();I();E();w();$e=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Not clickable previews"),this.codeHtml='  <button (click)="openModal(337, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
          clickable: false
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0,clickable:!1}}})}metaData(){this.uiService.setMetaData({title:"Demo previews unclickable"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-not-clickable-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Not clickable previews"),t()(),i(4,"p"),e(5,"Modal gallery example with previews, but not clickable."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(337,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"PlainLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"PlainLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"previewConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{ visible: true, clickable: false }"),t()(),i(120,"div"),e(121,"It will show 3 NOT clickable previews."),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Je,Ze=y(()=>{"use strict";D();T();C();A();I();E();w();Je=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Previews no arrows"),this.codeHtml='<button (click)="openModal(336, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
          arrows: false
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0,arrows:!1}}})}metaData(){this.uiService.setMetaData({title:"Demo preview no arrow"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-no-arrow-page"]],standalone:!1,decls:118,vars:2,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Previews no arrow"),t()(),i(4,"p"),e(5,"Modal gallery example with previews, but without arrows"),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(336,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4),t(),n(21,"br")(22,"br"),i(23,"section")(24,"h3"),e(25,"Details"),t(),n(26,"br"),i(27,"table",5)(28,"thead")(29,"tr")(30,"th"),e(31,"Input"),t(),i(32,"th"),e(33,"Value"),t()()(),i(34,"tbody")(35,"tr")(36,"td")(37,"code"),e(38,"id"),t()(),i(39,"td")(40,"div")(41,"i"),e(42,"Value: "),t(),i(43,"code"),e(44,"NUMERIC UNIQUE ID"),t()(),i(45,"div")(46,"b",6),e(47,"Unique id"),t()()()(),i(48,"tr")(49,"td")(50,"code"),e(51,"images"),t()(),i(52,"td")(53,"div")(54,"i"),e(55,"Value: "),t(),i(56,"code"),e(57,"Image[]"),t()(),i(58,"div")(59,"b",6),e(60,"Array of "),i(61,"code"),e(62,"Image"),t(),e(63," objects"),t()()()(),i(64,"tr")(65,"td")(66,"code"),e(67,"currentImage"),t()(),i(68,"td")(69,"div")(70,"i"),e(71,"Value: "),t(),i(72,"code"),e(73,"Image"),t()(),i(74,"div")(75,"b",6)(76,"code"),e(77,"Image"),t(),e(78," object to show"),t()()()(),i(79,"tr")(80,"td")(81,"code"),e(82,"libConfig"),t()(),i(83,"td")(84,"div")(85,"i"),e(86,"Value: "),t(),i(87,"code"),e(88,"ModalLibConfig"),t()(),i(89,"div")(90,"b",6)(91,"code"),e(92,"ModalLibConfig"),t(),e(93," object to config the library. See below."),t()()()()()()(),i(94,"section")(95,"h4"),e(96,"ModalLibConfig"),t(),n(97,"br"),i(98,"table",5)(99,"thead")(100,"tr")(101,"th"),e(102,"Input"),t(),i(103,"th"),e(104,"Value"),t()()(),i(105,"tbody")(106,"tr")(107,"td")(108,"code"),e(109,"previewConfig"),t()(),i(110,"td")(111,"div")(112,"i"),e(113,"Value: "),t(),i(114,"code"),e(115,"{ visible: true, arrows: false }"),t()(),i(116,"div"),e(117,"It will show 3 clickable previews (default size) without arrows"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"))},dependencies:[S],encapsulation:2})}}return r})()});var et,tt=y(()=>{"use strict";D();T();C();A();I();E();w();et=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.accessibilityConfig={backgroundAriaLabel:"CUSTOM Modal gallery full screen background",backgroundTitle:"CUSTOM background title",plainGalleryContentAriaLabel:"CUSTOM Plain gallery content",plainGalleryContentTitle:"CUSTOM plain gallery content title",modalGalleryContentAriaLabel:"CUSTOM Modal gallery content",modalGalleryContentTitle:"CUSTOM modal gallery content title",loadingSpinnerAriaLabel:"CUSTOM The current image is loading. Please be patient.",loadingSpinnerTitle:"CUSTOM The current image is loading. Please be patient.",mainContainerAriaLabel:"CUSTOM Current image and navigation",mainContainerTitle:"CUSTOM main container title",mainPrevImageAriaLabel:"CUSTOM Previous image",mainPrevImageTitle:"CUSTOM Previous image",mainNextImageAriaLabel:"CUSTOM Next image",mainNextImageTitle:"CUSTOM Next image",dotsContainerAriaLabel:"CUSTOM Image navigation dots",dotsContainerTitle:"CUSTOM dots container title",dotAriaLabel:"CUSTOM Navigate to image number",previewsContainerAriaLabel:"CUSTOM Image previews",previewsContainerTitle:"CUSTOM previews title",previewScrollPrevAriaLabel:"CUSTOM Scroll previous previews",previewScrollPrevTitle:"CUSTOM Scroll previous previews",previewScrollNextAriaLabel:"CUSTOM Scroll next previews",previewScrollNextTitle:"CUSTOM Scroll next previews",carouselContainerAriaLabel:"Current image and navigation",carouselContainerTitle:"",carouselPrevImageAriaLabel:"Previous image",carouselPrevImageTitle:"Previous image",carouselNextImageAriaLabel:"Next image",carouselNextImageTitle:"Next image",carouselPreviewsContainerAriaLabel:"Image previews",carouselPreviewsContainerTitle:"",carouselPreviewScrollPrevAriaLabel:"Scroll previous previews",carouselPreviewScrollPrevTitle:"Scroll previous previews",carouselPreviewScrollNextAriaLabel:"Scroll next previews",carouselPreviewScrollNextTitle:"Scroll next previews"},this.titleService.titleEvent.emit("Examples - Custom accessibility"),this.codeHtml='<button (click)="openModal(300, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        accessibilityConfig: this.accessibilityConfig
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{accessibilityConfig:this.accessibilityConfig}})}metaData(){this.uiService.setMetaData({title:"Demo accessibility"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-accessibility-page"]],standalone:!1,decls:124,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Custom accessibility"),t()(),i(4,"p"),e(5,"Modal gallery example with custom accessibility"),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(300,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"accessibilityConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),e(118,"see "),i(119,"code"),e(120,"accessibilityConfig"),t(),e(121," above"),t(),i(122,"div"),e(123,"Custom accessibility values."),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var it,nt=y(()=>{"use strict";E();D();T();C();A();I();E();w();it=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.customButtonsConfig={visible:!0,strategy:O.CUSTOM,buttons:[{className:"fas fa-plus white",type:Q.CUSTOM,ariaLabel:"custom plus aria label",title:"custom plus title",fontSize:"20px"},{className:"fas fa-times white",type:Q.CLOSE,ariaLabel:"custom close aria label",title:"custom close title",fontSize:"20px"},{className:"fas fa-download white",type:Q.DOWNLOAD,ariaLabel:"custom download aria label",title:"custom download title",fontSize:"20px"},{className:"fas fa-external-link-alt white",type:Q.EXTURL,ariaLabel:"custom exturl aria label",title:"custom exturl title",fontSize:"20px"}]},this.titleService.titleEvent.emit("Examples - Custom buttons with Font Awesome 5"),this.codeHtml='  <button (click)="openModal(306, 0, customButtonsConfig)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fa fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-close white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-external-link white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: buttonsConfig,
        // 'downloadable: true' is required to enable download button (if visible)
        currentImageConfig: {
          downloadable: true
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable ADD button
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.

      if (event.button.type === ButtonType.CUSTOM) {
        console.log('adding a new random image at the end');

        // add to images array
        const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
        const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = [...this.images, newImage];

        setTimeout(() => {
          this.modalGalleryService.updateModalImages(this.images);
        }, 0);
      }
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonBeforeHookSubscription) {
      this.buttonBeforeHookSubscription.unsubscribe();
    }
  }
  `}openModal(o,l,a){let c=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:a,currentImageConfig:{downloadable:!0}}});this.buttonBeforeHookSubscription=c.buttonBeforeHook$.subscribe(L=>{if(!(!L||!L.button)&&L.button.type===Q.CUSTOM){console.log("adding a new random image at the end");let j=this.images[Math.floor(Math.random()*this.images.length)],$=new F(this.images.length-1+1,j.modal,j.plain);this.images=[...this.images,$],setTimeout(()=>{this.modalGalleryService.updateModalImages(this.images)},0)}})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo buttons custom fa"})}ngOnDestroy(){this.buttonBeforeHookSubscription&&this.buttonBeforeHookSubscription.unsubscribe()}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-buttons-custom-fa-page"]],standalone:!1,decls:138,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Custom buttons with Font Awesome 5"),t()(),i(4,"p"),e(5,"Modal custom buttons with Font Awesome"),t(),n(6,"br"),i(7,"p")(8,"b"),e(9,"Attention: to implement custom buttons using Font Awesome, you must include Font Awesome in your project"),t()(),n(10,"br"),i(11,"h3"),e(12,"Live Demo"),t(),n(13,"br"),i(14,"button",3),f("click",function(){return a.openModal(306,0,a.customButtonsConfig)}),e(15,"Click to open modal gallery id=1 at index=0"),t(),n(16,"br")(17,"br"),i(18,"section")(19,"h3"),e(20,"Code"),t(),n(21,"br"),i(22,"h4"),e(23,"Template"),t(),n(24,"ks-codemirror",4)(25,"br"),i(26,"h4"),e(27,"Typescript"),t(),n(28,"ks-codemirror",4),t(),n(29,"br")(30,"br"),i(31,"section")(32,"h3"),e(33,"Service inputs"),t(),n(34,"br"),i(35,"table",5)(36,"thead")(37,"tr")(38,"th"),e(39,"Input"),t(),i(40,"th"),e(41,"Value"),t()()(),i(42,"tbody")(43,"tr")(44,"td")(45,"code"),e(46,"id"),t()(),i(47,"td")(48,"div")(49,"i"),e(50,"Value: "),t(),i(51,"code"),e(52,"1, 2, 3 and 4"),t(),e(53," (one for every instance in this example)"),t(),i(54,"div")(55,"b",6),e(56,"Unique id"),t()()()(),i(57,"tr")(58,"td")(59,"code"),e(60,"images"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"Image[]"),t()(),i(67,"div")(68,"b",6),e(69,"Array of "),i(70,"code"),e(71,"Image"),t(),e(72," objects"),t()()()(),i(73,"tr")(74,"td")(75,"code"),e(76,"currentImage"),t()(),i(77,"td")(78,"div")(79,"i"),e(80,"Value: "),t(),i(81,"code"),e(82,"Image"),t()(),i(83,"div")(84,"b",6)(85,"code"),e(86,"Image"),t(),e(87," object to show"),t()()()(),i(88,"tr")(89,"td")(90,"code"),e(91,"libConfig"),t()(),i(92,"td")(93,"div")(94,"i"),e(95,"Value: "),t(),i(96,"code"),e(97,"ModalLibConfig"),t()(),i(98,"div")(99,"b",6)(100,"code"),e(101,"ModalLibConfig"),t(),e(102," object to config the library. See below."),t()()()()()()(),i(103,"section")(104,"h4"),e(105,"ModalLibConfig"),t(),n(106,"br"),i(107,"table",5)(108,"thead")(109,"tr")(110,"th"),e(111,"Input"),t(),i(112,"th"),e(113,"Value"),t()()(),i(114,"tbody")(115,"tr")(116,"td")(117,"code"),e(118,"currentImageConfig"),t()(),i(119,"td")(120,"div")(121,"i"),e(122,"Value: "),t(),i(123,"code"),e(124,"{ downloadable: true }"),t()(),i(125,"div"),e(126,"Image download is enabled with keyboard shortcuts"),t()()(),i(127,"tr")(128,"td")(129,"code"),e(130,"buttonsConfig"),t()(),i(131,"td")(132,"div")(133,"i"),e(134,"Value: "),t(),e(135,"see the ButtonsConfig object above"),t(),i(136,"div"),e(137,"It will show custom buttons, with icons taken from Font Awesome 5. To enable all features related to buttons, you need to implement some stuff like 'download' and 'add images'."),t()()()()()()()),l&2&&(m(24),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var lt,at=y(()=>{"use strict";E();D();T();C();A();I();E();w();lt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.buttonsConfigDefault={visible:!0,strategy:O.DEFAULT},this.buttonsConfigSimple={visible:!0,strategy:O.SIMPLE},this.buttonsConfigAdvanced={visible:!0,strategy:O.ADVANCED},this.buttonsConfigFull={visible:!0,strategy:O.FULL},this.titleService.titleEvent.emit("Examples - Button strategies"),this.codeHtml=`
  <p>1. Strategy DEFAULT</p>
  <button (click)="openModal(308, 0, buttonsConfigDefault)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Strategy SIMPLE</p>
  <button (click)="openModal(309, 0, buttonsConfigSimple)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Strategy ADVANCED</p>
  <button (click)="openModal(310, 0, buttonsConfigAdvanced)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Strategy FULL</p>
  <button (click)="openModal(311, 0, buttonsConfigFull)">Click to open modal gallery id=1 at index=0</button>`,this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: buttonsConfig,
        // 'downloadable: true' is required to enable download button (if visible)
        currentImageConfig: {
          downloadable: true
        },
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable DELETE button
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonAfterHook$:', event);
      if (!event || !event.button) {
        return;
      }
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
        this.modalGalleryService.updateModalImages(this.images);
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonAfterHookSubscription) {
      this.buttonAfterHookSubscription.unsubscribe();
    }
  }`}ngOnInit(){this.metaData()}openModal(o,l,a){let c=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:a,currentImageConfig:{downloadable:!0}}});this.buttonAfterHookSubscription=c.buttonAfterHook$.subscribe(L=>{console.log("OUTPUT - buttonAfterHook$:",L),!(!L||!L.button)&&L.button.type===Q.DELETE&&(this.images=this.images.filter(j=>L.image&&j.id!==L.image.id),this.modalGalleryService.updateModalImages(this.images))})}metaData(){this.uiService.setMetaData({title:"Demo buttons strategies"})}ngOnDestroy(){this.buttonAfterHookSubscription&&this.buttonAfterHookSubscription.unsubscribe()}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-buttons-strategies-page"]],standalone:!1,decls:155,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Button strategies"),t()(),i(4,"p"),e(5,"Modal button strategies."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"br"),i(11,"p"),e(12,"1. Strategy DEFAULT"),t(),i(13,"button",3),f("click",function(){return a.openModal(308,0,a.buttonsConfigDefault)}),e(14,"Click to open modal gallery id=1 at index=0"),t(),n(15,"br")(16,"br"),i(17,"p"),e(18,"2. Strategy SIMPLE"),t(),i(19,"button",3),f("click",function(){return a.openModal(309,0,a.buttonsConfigSimple)}),e(20,"Click to open modal gallery id=1 at index=0"),t(),n(21,"br")(22,"br"),i(23,"p"),e(24,"3. Strategy ADVANCED"),t(),i(25,"button",3),f("click",function(){return a.openModal(310,0,a.buttonsConfigAdvanced)}),e(26,"Click to open modal gallery id=1 at index=0"),t(),n(27,"br")(28,"br"),i(29,"p"),e(30,"4. Strategy FULL"),t(),i(31,"button",3),f("click",function(){return a.openModal(311,0,a.buttonsConfigFull)}),e(32,"Click to open modal gallery id=1 at index=0"),t(),n(33,"br")(34,"br"),i(35,"section")(36,"h3"),e(37,"Code"),t(),n(38,"br"),i(39,"h4"),e(40,"Template"),t(),n(41,"ks-codemirror",4)(42,"br"),i(43,"h4"),e(44,"Typescript"),t(),n(45,"ks-codemirror",4),t(),n(46,"br")(47,"br"),i(48,"section")(49,"h3"),e(50,"Service inputs"),t(),n(51,"br"),i(52,"table",5)(53,"thead")(54,"tr")(55,"th"),e(56,"Input"),t(),i(57,"th"),e(58,"Value"),t()()(),i(59,"tbody")(60,"tr")(61,"td")(62,"code"),e(63,"id"),t()(),i(64,"td")(65,"div")(66,"i"),e(67,"Value: "),t(),i(68,"code"),e(69,"1, 2, 3 and 4"),t(),e(70," (one for every instance in this example)"),t(),i(71,"div")(72,"b",6),e(73,"Unique id"),t()()()(),i(74,"tr")(75,"td")(76,"code"),e(77,"images"),t()(),i(78,"td")(79,"div")(80,"i"),e(81,"Value: "),t(),i(82,"code"),e(83,"Image[]"),t()(),i(84,"div")(85,"b",6),e(86,"Array of "),i(87,"code"),e(88,"Image"),t(),e(89," objects"),t()()()(),i(90,"tr")(91,"td")(92,"code"),e(93,"currentImage"),t()(),i(94,"td")(95,"div")(96,"i"),e(97,"Value: "),t(),i(98,"code"),e(99,"Image"),t()(),i(100,"div")(101,"b",6)(102,"code"),e(103,"Image"),t(),e(104," object to show"),t()()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"libConfig"),t()(),i(109,"td")(110,"div")(111,"i"),e(112,"Value: "),t(),i(113,"code"),e(114,"ModalLibConfig"),t()(),i(115,"div")(116,"b",6)(117,"code"),e(118,"ModalLibConfig"),t(),e(119," object to config the library. See below."),t()()()()()()(),i(120,"section")(121,"h4"),e(122,"ModalLibConfig"),t(),n(123,"br"),i(124,"table",5)(125,"thead")(126,"tr")(127,"th"),e(128,"Input"),t(),i(129,"th"),e(130,"Value"),t()()(),i(131,"tbody")(132,"tr")(133,"td")(134,"code"),e(135,"currentImageConfig"),t()(),i(136,"td")(137,"div")(138,"i"),e(139,"Value: "),t(),i(140,"code"),e(141,"{ downloadable: true }"),t()(),i(142,"div"),e(143,"Image download is enabled with keyboard shortcuts"),t()()(),i(144,"tr")(145,"td")(146,"code"),e(147,"buttonsConfig"),t()(),i(148,"td")(149,"div")(150,"i"),e(151,"Value: "),t(),e(152,"see all ButtonsConfig objects above"),t(),i(153,"div"),e(154,"It will show buttons, based on ButtonsStrategy. To enable all features related to buttons, you need to implement 'download' and 'delete images'."),t()()()()()()()),l&2&&(m(41),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var ot,rt=y(()=>{"use strict";E();D();T();C();A();I();E();w();ot=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Exturl button in a new tab"),this.codeHtml='  <button (click)="openModal(307, 0)">Click to open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: {
          visible: true,
          strategy: ButtonsStrategy.CUSTOM,
          buttons: [
            {
              className: 'ext-url-image',
              type: ButtonType.EXTURL,
              extUrlInNewTab: true
            }
          ]
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{buttonsConfig:{visible:!0,strategy:O.CUSTOM,buttons:[{className:"ext-url-image",type:Q.EXTURL,extUrlInNewTab:!0}]}}})}metaData(){this.uiService.setMetaData({title:"Demo buttons exturl newtab"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-buttons-exturl-newtab-page"]],standalone:!1,decls:121,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Exturl button in a new tab"),t()(),i(4,"p"),e(5,"Modal exturl button in a new tab."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(307,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Details"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"buttonsConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),e(118,"see the ButtonsConfig object above"),t(),i(119,"div"),e(120,"It will show only the exturl button as a custom button to navigate to an external url in a new tab"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var mt,dt=y(()=>{"use strict";E();D();T();C();A();E();I();w();mt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.modalGalleryService=l,this.titleService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.libConfigPlainGalleryRow={plainGalleryConfig:{strategy:X.ROW,layout:new te({width:"80px",height:"80px"},{length:2,wrap:!0},"flex-start")}},this.libConfigPlainGalleryRowSpaceAround={plainGalleryConfig:{strategy:X.ROW,layout:new te({width:"50px",height:"50px"},{length:2,wrap:!0},"space-around")}},this.libConfigPlainGalleryColumn={plainGalleryConfig:{strategy:X.COLUMN,layout:new te({width:"50px",height:"50px"},{length:3,wrap:!0},"flex-start")}},this.libConfigPlainGalleryGrid={plainGalleryConfig:{strategy:X.GRID,layout:new hi({width:"80px",height:"80px"},{length:3,wrap:!0})}},this.titleService.titleEvent.emit("Examples - Plain gallery layouts"),this.codeHtml=`<section>
    <h4>Plain gallery layout (limit 2) and custom size</h4>
    <br>
    <ks-plain-gallery [id]="200" [images]="images"
                      [config]="libConfigPlainGalleryRow"
                      (clickImage)="onShow(200, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery row layout space around (limit 2)</h4>
    <br>
    <ks-plain-gallery [id]="201" [images]="images"
                      [config]="libConfigPlainGalleryRowSpaceAround"
                      (clickImage)="onShow(201, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery column layout (limit 3)</h4>
    <br>
    <ks-plain-gallery [id]="202" [images]="images"
                      [config]="libConfigPlainGalleryColumn"
                      (clickImage)="onShow(202, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery grid layout and custom size</h4>
    <br>
    <ks-plain-gallery [id]="203" [images]="images"
                      [config]="libConfigPlainGalleryGrid"
                      (clickImage)="onShow(203, $event)"></ks-plain-gallery>
  </section>`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryRowSpaceAround: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 2, wrap: true}, 'space-around')
    }
  };
  libConfigPlainGalleryColumn: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.COLUMN,
      layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
    }
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}onShow(o,l,a=this.images){let c=this.modalGalleryService.open({id:o,images:a,currentImage:a[l]})}metaData(){this.uiService.setMetaData({title:"Demo plain layouts"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(v),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-plain-gallery-layouts-page"]],standalone:!1,decls:124,vars:16,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"clickImage","id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Plain gallery layouts"),t()(),i(4,"p"),e(5,"Plain gallery with different layouts."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"section")(11,"h4"),e(12,"Plain gallery layout (limit 2) and custom size"),t(),n(13,"br"),i(14,"ks-plain-gallery",3),f("clickImage",function(L){return a.onShow(200,L)}),t()(),i(15,"section")(16,"h4"),e(17,"Plain gallery row layout space around (limit 2)"),t(),n(18,"br"),i(19,"ks-plain-gallery",3),f("clickImage",function(L){return a.onShow(201,L)}),t()(),i(20,"section")(21,"h4"),e(22,"Plain gallery column layout (limit 3)"),t(),n(23,"br"),i(24,"ks-plain-gallery",3),f("clickImage",function(L){return a.onShow(202,L)}),t()(),i(25,"section")(26,"h4"),e(27,"Plain gallery grid layout and custom size"),t(),n(28,"br"),i(29,"ks-plain-gallery",3),f("clickImage",function(L){return a.onShow(203,L)}),t()(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),e(34,"Code"),t(),n(35,"br"),i(36,"h4"),e(37,"Template"),t(),n(38,"ks-codemirror",4)(39,"br"),i(40,"h4"),e(41,"Typescript"),t(),n(42,"ks-codemirror",4),t(),n(43,"br")(44,"br"),i(45,"section")(46,"h3"),e(47,"Details"),t(),n(48,"br"),i(49,"table",5)(50,"thead")(51,"tr")(52,"th"),e(53,"Input (.html)"),t(),i(54,"th"),e(55,"Value (.ts)"),t()()(),i(56,"tbody")(57,"tr")(58,"td")(59,"code"),e(60,"id"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"NUMERIC UNIQUE ID"),t()(),i(67,"div")(68,"b",6),e(69,"Unique id"),t()()()(),i(70,"tr")(71,"td")(72,"code"),e(73,"images"),t()(),i(74,"td")(75,"div")(76,"i"),e(77,"Value: "),t(),i(78,"code"),e(79,"Image[]"),t()(),i(80,"div")(81,"b",6),e(82,"Array of "),i(83,"code"),e(84,"Image"),t(),e(85," objects"),t()()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"config"),t()(),i(90,"td")(91,"div")(92,"i"),e(93,"Value: "),t(),i(94,"code"),e(95,"PlainLibConfig"),t()(),i(96,"div")(97,"b",6)(98,"code"),e(99,"PlainLibConfig"),t(),e(100," object to config the library. See below."),t()()()()()()(),i(101,"section")(102,"h4"),e(103,"PlainLibConfig"),t(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),e(109,"Input"),t(),i(110,"th"),e(111,"Value"),t()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"plainGalleryConfig"),t()(),i(117,"td")(118,"div")(119,"i"),e(120,"Value: "),t(),e(121,"see above"),t(),i(122,"div"),e(123,"Plain gallery with different layouts"),t()()()()()()()),l&2&&(m(14),s("id",200)("images",a.images)("config",a.libConfigPlainGalleryRow),m(5),s("id",201)("images",a.images)("config",a.libConfigPlainGalleryRowSpaceAround),m(5),s("id",202)("images",a.images)("config",a.libConfigPlainGalleryColumn),m(5),s("id",203)("images",a.images)("config",a.libConfigPlainGalleryGrid),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[pe,S],encapsulation:2})}}return r})()});var st,ct=y(()=>{"use strict";E();D();T();C();A();E();I();w();st=(()=>{class r{constructor(o,l,a){this.uiService=o,this.modalGalleryService=l,this.titleService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.libConfigPlainGalleryRowATags={plainGalleryConfig:{strategy:X.ROW,layout:new te({width:"50px",height:"50px"},{length:4,wrap:!0},"flex-start"),advanced:{aTags:!0,additionalBackground:"50% 50%/cover"}}},this.titleService.titleEvent.emit("Examples - Plain gallery with <a> tags"),this.codeHtml=`<ks-plain-gallery [id]="204" [images]="images"
                    [config]="libConfigPlainGalleryRowATags"
                    (clickImage)="onShow(204, $event)"></ks-plain-gallery>`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGalleryRowATags: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 4, wrap: true}, 'flex-start'),
      advanced: {aTags: true, additionalBackground: '50% 50%/cover'}
    } as PlainGalleryConfig
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}onShow(o,l,a=this.images){let c=this.modalGalleryService.open({id:o,images:a,currentImage:a[l]})}metaData(){this.uiService.setMetaData({title:"Demo plain atags"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(v),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-plain-gallery-atags-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"clickImage","id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Plain gallery <a> tags"),t()(),i(4,"p"),e(5,"Plain gallery in a row with <a> tags."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"ks-plain-gallery",3),f("clickImage",function(L){return a.onShow(204,L)}),t(),n(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"PlainLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"PlainLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"PlainLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"plainGalleryConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"{strategy: PlainGalleryStrategy.ROW, layout: new LineLayout({width: '50px', height: '50px'}, {length: 4, wrap: true}, 'flex-start'), advanced: {aTags: true, additionalBackground: '50% 50%/cover'}}"),t()(),i(104,"div"),e(105,"Custom plain gallery with <a> tags"),t()()()()()()()),l&2&&(m(10),s("id",204)("images",a.images)("config",a.libConfigPlainGalleryRowATags),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[pe,S],encapsulation:2})}}return r})()});function Li(r,H){if(r&1){let o=q();i(0,"a",12),f("click",function(){K(o);let a=N(2).$implicit,c=N();return z(c.openImageModalRow(205,a))}),e(1),t()}if(r&2){let o=N(3);m(),de(" +",o.images.length-2-1," more ")}}function Ui(r,H){if(r&1){let o=q();i(0,"img",13),f("click",function(){K(o);let a=N(2).$implicit,c=N();return z(c.openImageModalRow(205,a))}),t()}if(r&2){let o=N(2).$implicit;s("src",o.plain.img,ie)("alt",o.modal.description)}}function Vi(r,H){if(r&1){let o=q();i(0,"img",13),f("click",function(){K(o);let a=N(2).$implicit,c=N();return z(c.openImageModalRow(205,a))}),t()}if(r&2){let o=N(2).$implicit;s("src",o.modal.img,ie)("alt",o.modal.description)}}function Pi(r,H){if(r&1&&(i(0,"div"),B(1,Li,2,1,"a",10)(2,Ui,1,2,"img",11)(3,Vi,1,2,"ng-template",null,0,J),t()),r&2){let o=ri(4),l=N(),a=l.$implicit,c=l.index;m(),s("ngIf",c==2),m(),s("ngIf",a.plain&&a.plain.img)("ngIfElse",o)}}function Oi(r,H){if(r&1&&(ne(0),B(1,Pi,5,3,"div",9),le()),r&2){let o=H.index;m(),s("ngIf",o<=2)}}var pt,gt=y(()=>{"use strict";D();T();C();A();E();I();Z();w();pt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.modalGalleryService=l,this.titleService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Plain gallery with image pointer"),this.codeHtml=`<div class="my-app-custom-plain-container-row">
  <ng-container *ngFor="let img of images; let i = index">
    <div *ngIf="i <= 2">
      <a class="more" *ngIf="i==2" (click)="openImageModalRow(205, img)"> +{{images.length - 2 - 1}} more </a>
      <img *ngIf="img.plain && img.plain.img; else noThumb"
           class="my-app-custom-image-row"
           [src]="img.plain.img"
           (click)="openImageModalRow(205, img)"
           [alt]="img.modal.description"/>

      <ng-template #noThumb>
        <img class="my-app-custom-image-row"
             [src]="img.modal.img"
             (click)="openImageModalRow(205, img)"
             [alt]="img.modal.description"/>
      </ng-template>
    </div>
  </ng-container>
</div>`,this.codeTypescript=`
constructor(private modalGalleryService: ModalGalleryService) {}

openImageModalRow(id: number, image: Image): void {
  const index: number = this.getCurrentIndexCustomLayout(image, this.images);
  const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
    id,
    images: this.images,
    currentImage: this.images[index]
  }) as ModalGalleryRef;
}

private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
  return image ? images.indexOf(image) : -1;
}`,this.codeScss=`$text-color: #FFF;
  $background: rgba(0, 0, 0, .7);

  .my-app-custom-plain-container-row {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .my-app-custom-image-row {
      cursor: pointer;
      height: auto;
      margin-right: 2px;
      width: 50px;

      &.after {
        border-top: 2px;
        cursor: pointer;
        display: none;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }

  .more {
    background: $background;
    cursor: pointer;
    color: $text-color !important;
    padding-top: 4px;
    height: 50px;
    position: absolute;
    text-align: center;
    width: 50px;
  }`}openImageModalRow(o,l){console.log("Opening modal gallery from custom plain gallery row, with image: ",l);let a=this.getCurrentIndexCustomLayout(l,this.images),c=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[a]})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo plain pointer"})}getCurrentIndexCustomLayout(o,l){return o?l.indexOf(o):-1}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(v),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-plain-gallery-image-pointer-page"]],standalone:!1,decls:72,vars:7,consts:[["noThumb",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-row"],[4,"ngFor","ngForOf"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[4,"ngIf"],["class","more",3,"click",4,"ngIf"],["class","my-app-custom-image-row",3,"src","alt","click",4,"ngIf","ngIfElse"],[1,"more",3,"click"],[1,"my-app-custom-image-row",3,"click","src","alt"]],template:function(l,a){l&1&&(i(0,"div",1)(1,"h2",2)(2,"a",3),e(3,"Plain gallery with image pointer"),t()(),i(4,"p"),e(5,"Plain gallery with image pointer."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"div",4),B(11,Oi,2,1,"ng-container",5),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",6)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",6)(25,"br"),i(26,"h4"),e(27,"Style (SCSS)"),t(),n(28,"ks-codemirror",6),t(),n(29,"br")(30,"br"),i(31,"section")(32,"h3"),e(33,"Details"),t(),n(34,"br"),i(35,"table",7)(36,"thead")(37,"tr")(38,"th"),e(39,"Input (.html)"),t(),i(40,"th"),e(41,"Value (.ts)"),t()()(),i(42,"tbody")(43,"tr")(44,"td")(45,"code"),e(46,"id"),t()(),i(47,"td")(48,"div")(49,"i"),e(50,"Value: "),t(),i(51,"code"),e(52,"NUMERIC UNIQUE ID"),t()(),i(53,"div")(54,"b",8),e(55,"Unique id"),t()()()(),i(56,"tr")(57,"td")(58,"code"),e(59,"images"),t()(),i(60,"td")(61,"div")(62,"i"),e(63,"Value: "),t(),i(64,"code"),e(65,"Image[]"),t()(),i(66,"div")(67,"b",8),e(68,"Array of "),i(69,"code"),e(70,"Image"),t(),e(71," objects"),t()()()()()()()()),l&2&&(m(11),s("ngForOf",a.images),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"),m(4),s("content",a.codeScss)("language","scss"))},dependencies:[se,mi,S],styles:[".my-app-custom-plain-container-row[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row[_ngcontent-%COMP%]{cursor:pointer;height:auto;margin-right:2px;width:50px}.my-app-custom-plain-container-row[_ngcontent-%COMP%]   .my-app-custom-image-row.after[_ngcontent-%COMP%]{border-top:2px;cursor:pointer;display:none;height:100%;left:0;position:absolute;top:0;width:100%}.more[_ngcontent-%COMP%]{background:#000000b3;cursor:pointer;color:#fff!important;padding-top:4px;height:50px;position:absolute;text-align:center;width:50px}"]})}}return r})()});function Hi(r,H){if(r&1){let o=q();ne(0),i(1,"figure",8)(2,"img",9),f("click",function(){let a=K(o).$implicit,c=N();return z(c.openImageModalRowDescription(206,a))}),t(),i(3,"figcaption",10),e(4),t()(),le()}if(r&2){let o=H.$implicit;m(2),s("src",o.modal.img,ie),m(2),de("",o.modal.description?o.modal.description:"No description available"," ")}}var ut,ht=y(()=>{"use strict";D();T();C();A();E();I();Z();w();ut=(()=>{class r{constructor(o,l,a){this.uiService=o,this.modalGalleryService=l,this.titleService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Plain gallery custom with description"),this.codeHtml=`<div class="my-app-custom-plain-container-with-desc">
    <ng-container *ngFor="let img of images">
      <figure class="my-app-custom-image-with-desc">
        <img [src]="img.modal.img"
             (click)="openImageModalRowDescription(206, img)"/>
        <figcaption class="description">{{img.modal.description ? img.modal.description : 'No description available'}}
        </figcaption>
      </figure>
    </ng-container>
  </div>
`,this.codeTypescript=`
  constructor(private modalGalleryService: ModalGalleryService) {}

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };`,this.codeScss=`$background: rgba(0, 0, 0, .7);

.my-app-custom-plain-container-with-desc {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  figure {
    margin: 0;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }

    figcaption {
      background: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: 85%;
      padding: 5px;
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
    }
  }

  .description {
    font-weight: 400;
    text-align: center;
  }

  .my-app-custom-image-with-desc {
    height: auto;
    margin-right: 2px;
    width: 200px;
    align-self: start;
  }
}`}ngOnInit(){this.metaData()}openImageModalRowDescription(o,l){console.log("Opening modal gallery from custom plain gallery row and description, with image: ",l);let a=this.getCurrentIndexCustomLayout(l,this.images),c=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[a]})}metaData(){this.uiService.setMetaData({title:"Demo plain custom desc"})}getCurrentIndexCustomLayout(o,l){return o?l.indexOf(o):-1}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(v),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-plain-gallery-custom-with-desc-page"]],standalone:!1,decls:72,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"my-app-custom-plain-container-with-desc"],[4,"ngFor","ngForOf"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"my-app-custom-image-with-desc"],[3,"click","src"],[1,"description"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Plain gallery custom with description"),t()(),i(4,"p"),e(5,"Custom plain gallery with descriptions."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"div",3),B(11,Hi,5,2,"ng-container",4),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",5)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",5)(25,"br"),i(26,"h3"),e(27,"Styles (SCSS)"),t(),n(28,"ks-codemirror",5),t(),n(29,"br")(30,"br"),i(31,"section")(32,"h3"),e(33,"Details"),t(),n(34,"br"),i(35,"table",6)(36,"thead")(37,"tr")(38,"th"),e(39,"Input (.html)"),t(),i(40,"th"),e(41,"Value (.ts)"),t()()(),i(42,"tbody")(43,"tr")(44,"td")(45,"code"),e(46,"id"),t()(),i(47,"td")(48,"div")(49,"i"),e(50,"Value: "),t(),i(51,"code"),e(52,"NUMERIC UNIQUE ID"),t()(),i(53,"div")(54,"b",7),e(55,"Unique id"),t()()()(),i(56,"tr")(57,"td")(58,"code"),e(59,"images"),t()(),i(60,"td")(61,"div")(62,"i"),e(63,"Value: "),t(),i(64,"code"),e(65,"Image[]"),t()(),i(66,"div")(67,"b",7),e(68,"Array of "),i(69,"code"),e(70,"Image"),t(),e(71," objects"),t()()()()()()()()),l&2&&(m(11),s("ngForOf",a.images),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"),m(4),s("content",a.codeScss)("language","scss"))},dependencies:[se,S],styles:[".my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;position:relative}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;cursor:pointer}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{background:#00000080;color:#fff;font-size:85%;padding:5px;position:absolute;bottom:3px;left:0;right:0}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:400;text-align:center}.my-app-custom-plain-container-with-desc[_ngcontent-%COMP%]   .my-app-custom-image-with-desc[_ngcontent-%COMP%]{height:auto;margin-right:2px;width:200px;align-self:start}"]})}}return r})()});var bt,St=y(()=>{"use strict";E();D();T();C();A();I();E();w();bt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.count=0,this.titleService.titleEvent.emit("Examples - Gallery service"),this.codeHtml='  <button (click)="openModalWithAutoClose(303, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeHtml2='  <button (click)="openModalWithAutoUpdate(304, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>',this.codeTypescript=`  private timeout: any;

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModalWithAutoClose(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      const galleryId: number = event.galleryId;
      // clear previous timeout
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('setTimeout end - closing gallery with id=' + galleryId);
        this.modalGalleryService.close(galleryId, false);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`,this.codeTypescript2=`  private count = 0;

  openModalWithAutoUpdate(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      if (this.count !== 0) {
        return;
      }
      const indexToRefresh = 1;
      const image: Image = new Image(1, {
        img: '../assets/images/gallery/img5.jpg',
        description: 'Description 2 updated with imag5.jpg'
      });

      // create the new array of images with the updated image inside
      const newImages: Image[] = [...this.images];
      newImages[indexToRefresh] = image;

      setTimeout(() => {
        this.modalGalleryService.updateModalImages(newImages);
        console.log('image updated successfully!');
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`}openModalWithAutoClose(o,l,a){let c=l[a],L=this.modalGalleryService.open({id:o,images:l,currentImage:c});this.showSubscription=L.show$.subscribe(j=>{console.log("OUTPUT - show$: ",j);let $=j.galleryId;console.log(`onShowAutoCloseExample with id=${$} action: `+ui[j.action]),console.log("onShowAutoCloseExample result:"+j.result),console.log("Starting timeout of 3 seconds to close modal gallery automatically"),clearTimeout(this.timeout),this.timeout=setTimeout(()=>{console.log("setTimeout end - closing gallery with id="+$),this.modalGalleryService.close($,!1)},3e3)})}openModalWithAutoUpdate(o,l,a){let c=l[a],L=this.modalGalleryService.open({id:o,images:l,currentImage:c});this.showSubscription=L.show$.subscribe(j=>{if(console.log("OUTPUT - show$: ",j),this.count!==0)return;let $=1,ki=new F(1,{img:"../assets/images/gallery/img5.jpg",description:"Description 2 updated with imag5.jpg"});console.log("updating image at index "+$+", after 4 seconds");let li=[...this.images];li[$]=ki,setTimeout(()=>{this.modalGalleryService.updateModalImages(li),console.log("image updated successfully!")},4e3)})}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Demo gallery service"})}ngOnDestroy(){this.showSubscription&&this.showSubscription.unsubscribe()}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-auto-close-and-auto-update-page"]],standalone:!1,decls:129,vars:8,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Gallery service example"),t()(),i(4,"p"),e(5,"Minimal example of Modal gallery service with "),i(6,"code"),e(7,"close"),t(),e(8," and "),i(9,"code"),e(10,"updateModalImages"),t(),e(11," methods."),t(),n(12,"br"),i(13,"h3"),e(14,"Live Demos"),t(),n(15,"br")(16,"br"),i(17,"h4"),e(18,"1) Example of "),i(19,"code"),e(20,"close"),t(),e(21," method"),t(),i(22,"p"),e(23,"Modal gallery (with id=1) "),i(24,"b"),e(25,"will close automatically after 3 seconds."),t()(),n(26,"br"),i(27,"button",3),f("click",function(){return a.openModalWithAutoClose(303,a.images,2)}),e(28,"Click to open modal gallery id=1 at index=2 (third image)"),t(),n(29,"br")(30,"br")(31,"br")(32,"br"),i(33,"section")(34,"h3"),e(35,"Code"),t(),n(36,"br"),i(37,"h4"),e(38,"Template"),t(),n(39,"ks-codemirror",4)(40,"br"),i(41,"h4"),e(42,"Typescript"),t(),n(43,"ks-codemirror",4),t(),n(44,"br")(45,"br"),i(46,"h4"),e(47,"2) Example of "),i(48,"code"),e(49,"updateModalImages"),t(),e(50," method"),t(),i(51,"p"),e(52,"Modal gallery (with id=2) "),i(53,"b"),e(54,"will update second image automatically after 4 seconds."),t()(),n(55,"br"),i(56,"button",3),f("click",function(){return a.openModalWithAutoUpdate(304,a.images,2)}),e(57,"Click to open modal gallery id=1 at index=2 (third image)"),t(),n(58,"br")(59,"br"),i(60,"section")(61,"h3"),e(62,"Code"),t(),n(63,"br"),i(64,"h4"),e(65,"Template"),t(),n(66,"ks-codemirror",4)(67,"br"),i(68,"h4"),e(69,"Typescript"),t(),n(70,"ks-codemirror",4),t(),n(71,"br")(72,"br"),i(73,"section")(74,"h3"),e(75,"Service inputs"),t(),n(76,"br"),i(77,"table",5)(78,"thead")(79,"tr")(80,"th"),e(81,"Input"),t(),i(82,"th"),e(83,"Value"),t()()(),i(84,"tbody")(85,"tr")(86,"td")(87,"code"),e(88,"id"),t()(),i(89,"td")(90,"div")(91,"i"),e(92,"Value: "),t(),i(93,"code"),e(94,"NUMERIC UNIQUE ID"),t()(),i(95,"div")(96,"b",6),e(97,"Unique id"),t()()()(),i(98,"tr")(99,"td")(100,"code"),e(101,"images"),t()(),i(102,"td")(103,"div")(104,"i"),e(105,"Value: "),t(),i(106,"code"),e(107,"Image[]"),t()(),i(108,"div")(109,"b",6),e(110,"Array of "),i(111,"code"),e(112,"Image"),t(),e(113," objects"),t()()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"currentImage"),t()(),i(118,"td")(119,"div")(120,"i"),e(121,"Value: "),t(),i(122,"code"),e(123,"Image"),t()(),i(124,"div")(125,"b",6)(126,"code"),e(127,"Image"),t(),e(128," object to show"),t()()()()()()()()),l&2&&(m(39),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"),m(23),s("content",a.codeHtml2)("language","html"),m(4),s("content",a.codeTypescript2)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var ft,vt=y(()=>{"use strict";E();T();C();A();Di();I();E();w();ft=(()=>{class r{constructor(o,l,a,c){this.uiService=o,this.sanitizer=l,this.titleService=a,this.modalGalleryService=c,this.base64String="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABN0lEQVR4nO3SQQ2AQBDAwAVlaMEhCkAVb2RcQmcU9NEZAAAAAOD/tvN675k5VoewxLOvLmAtA8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGQAAAAAA4Pc+8asEoPPGqxUAAAAASUVORK5CYII",this.base64RedString="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/AAD/////WVn/+vr/qan/Nzf/ERH/2tr/s7P/KSn/7+//vr7/0ND/W1v/6+v/m5v/4+P/U1P/HR3/o6P/rq7/g4P/k5P/t7f/dXX/SEj/zMz/ZWX/h4f/bm7/amr/np7/yMhDG/2oAAAC8ElEQVR4nO3dC3KqQBCF4WkHERHFRyKIL/a/ymDuVYMMFipTbbfnW8H5S4lQVGUMaWe4B3iHQvlQKB8K5UOhfCiUD4XyoVA+FJ7Myijd5dvBO9nmuzQqZ68X2mI9NO9suC7s84VxNuAO6GSQxU8VJvuQe3pn4T55uLDYcK9+0KZ4qDB574vPbej+HF2Fcc499km563p0FAbcQ18QdCi0B+6VLzk0fjtuC0dj7o0vGo/uF064B/agvFcYca/rRdReeOTe1pNjW6HkP6J1gbtQwzV4NnEVJtyrepU0C2M599ldhHGjcMq9qWfT28KUe1Hv0nrhnHuPB/Na4YJ7jgeLv4UZ9xovsmuhXXKP8WJpL4Ur7i2erC6Fun4Kr8Jz4Rf3Em++/hdKf+htN/5XqOuGtC75LfzmnuHR96nQ6v2SVl9TWxVq/pKevqaG1twjvFpXhTLeLz1rQMZyb/DMmhH3BM9GRudjxVVmtN51n62M1DdpXeVG2rveR22MxLe9jxgazfdsJ2Oj9en3THsfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHba/+98+AFnI+g/30L/GSX6z5nRf1aQ/vOe9J/Zpf/cNf1n533A+Yf6z7DUfw6p/rNkVX9Nkw850/kDzuXWf7Y6ab37Xl0K7ZJ7ixdLeykknQ8YGV0LacG9xoMF/S2cc8/xYF4rpJR7T+9SqhfSlHtRz6Z0Wxjr+lEM40ahstvThJqFNOFe1aMJuQop4N7Vm4DchXTkXtaTI7UVUsS9rRcRtRequBZLuldII+mPw+MR3S8ke+De+JKDvQ1qFMr+kxo0cxyFFEt945bHjhpXYXV/I/HN8DBxtrgLiQpp74Y3RUtJW2H1Oe7l3IuHe/fnd7+wuh4zGe+lBpnr+utSWLHF+r0vyeG6aPw+PFT4a1ZG6S7fDt7JNt+lUTnrsL5LoWwolA+F8qFQPhTKh0L5UCgfCuVDoXw/lnQz7dm7GjoAAAAASUVORK5CYII=",this.base64GreenString="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAAy/ysy/ysy/ysyTcibAAAAA3RSTlMA2r/af0dWAAAAQUlEQVRo3u3YMREAMAzEsJAMyZJsMXy3XORdBFySJK3qxFXH1Y1DEARBEARBEARBEARBEARBkNmk436mvSRJ0o4eOKL2P81eyn8AAAAASUVORK5CYII=",this.base64Image=this.sanitizer.bypassSecurityTrustResourceUrl(this.base64String),this.base64RedImage=this.sanitizer.bypassSecurityTrustResourceUrl(this.base64RedString),this.base64GreenImage=this.sanitizer.bypassSecurityTrustResourceUrl(this.base64GreenString),this.images=[new F(0,{img:this.base64Image,extUrl:"http://www.google.com"}),new F(1,{img:this.base64GreenImage,description:"Description 2"}),new F(2,{img:this.base64RedImage,description:"Description 3",extUrl:"http://www.google.com"},{img:this.base64RedImage,title:"custom title 2",alt:"custom alt 2",ariaLabel:"arial label 2"})],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Base64"),this.codeHtml='  <button (click)="openModal(305, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`  import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

  // inside the component class:

  base64String =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABN0lEQV' +
    'R4nO3SQQ2AQBDAwAVlaMEhCkAV' +
    'b2RcQmcU9NEZAAAAAOD/tvN675k5VoewxLOvLmAtA8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0C' +
    'cAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4g' +
    'wQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGSDOAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4A4A8QZIM4AcQaIM0CcAeIMEGeAOAPEGQAAAAAA4Pc+8asEoPPGq' +
    'xUAAAAASUVORK5CYII';

  base64RedString =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/AAD/////WVn/+vr/qan/Nzf/ERH/2tr/s7P/KSn/' +
    '7+//vr7/0ND/W1v/6+v/m5v/4+P/U1P/HR3/o6P/rq7/g4P/k5P/t7f/dXX/SEj/zMz/ZWX/h4f/bm7/amr/np7/yMhDG/2oAAAC8ElEQVR4nO3dC3KqQBCF4WkHERHFRyKIL/' +
    'a/ymDuVYMMFipTbbfnW8H5S4lQVGUMaWe4B3iHQvlQKB8K5UOhfCiUD4XyoVA+FJ7Myijd5dvBO9nmuzQqZ68X2mI9NO9suC7s84VxNuAO6GSQxU8VJvuQe3pn4T55uLDYcK9+' +
    '0KZ4qDB574vPbej+HF2Fcc499km563p0FAbcQ18QdCi0B+6VLzk0fjtuC0dj7o0vGo/uF064B/agvFcYca/rRdReeOTe1pNjW6HkP6J1gbtQwzV4NnEVJtyrepU0C2M599ldhH' +
    'GjcMq9qWfT28KUe1Hv0nrhnHuPB/Na4YJ7jgeLv4UZ9xovsmuhXXKP8WJpL4Ur7i2erC6Fun4Kr8Jz4Rf3Em++/hdKf+htN/5XqOuGtC75LfzmnuHR96nQ6v2SVl9TWxVq/pKevq' +
    'aG1twjvFpXhTLeLz1rQMZyb/DMmhH3BM9GRudjxVVmtN51n62M1DdpXeVG2rveR22MxLe9jxgazfdsJ2Oj9en3THsfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
    'AAAAAAAAAAAAAAgHba/+98+AFnI+g/30L/GSX6z5nRf1aQ/vOe9J/Zpf/cNf1n533A+Yf6z7DUfw6p/rNkVX9Nkw850/kDzuXWf7Y6ab37Xl0K7ZJ7ixdLeykknQ8YGV0LacG9xo' +
    'MF/S2cc8/xYF4rpJR7T+9SqhfSlHtRz6Z0Wxjr+lEM40ahstvThJqFNOFe1aMJuQop4N7Vm4DchXTkXtaTI7UVUsS9rRcRtRequBZLuldII+mPw+MR3S8ke+De+JKDvQ1qFMr+kx' +
    'o0cxyFFEt945bHjhpXYXV/I/HN8DBxtrgLiQpp74Y3RUtJW2H1Oe7l3IuHe/fnd7+wuh4zGe+lBpnr+utSWLHF+r0vyeG6aPw+PFT4a1ZG6S7fDt7JNt+lUTnrsL5LoWwolA+F8q' +
    'FQPhTKh0L5UCgfCuVDoXw/lnQz7dm7GjoAAAAASUVORK5CYII=';
  base64GreenString =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAAy/ysy/ysy/ysyTcibAAAAA3RSTlMA2r/af0d' +
    'WAAAAQUlEQVRo3u3YMREAMAzEsJAMyZJsMXy3XORdBFySJK3qxFXH1Y1DEARBEARBEARBEARBEARBkNmk436mvSRJ0o4eOKL2P81eyn8AAAAASUVORK5CYII=';

  base64Image: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64String);
  base64RedImage: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64RedString);
  base64GreenImage: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64GreenString);

  images: Image[] = [
    new Image(0, {
      img: this.base64Image,
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: this.base64GreenImage,
      description: 'Description 2'
    }),
    new Image(
      2,
      {
        img: this.base64RedImage,
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      {
        img: this.base64RedImage,
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    )
  ];

  constructor(private modalGalleryService: ModalGalleryService,
      private sanitizer: DomSanitizer) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{downloadable:!0},buttonsConfig:{visible:!0,strategy:O.SIMPLE}}})}metaData(){this.uiService.setMetaData({title:"Demo base64"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(pi),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-base64-page"]],standalone:!1,decls:83,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Base64 example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example with base64 images."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(305,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var xt,Et=y(()=>{"use strict";E();D();T();C();A();I();E();w();xt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x].map(c=>{let L=Object.assign({},c);return c.modal.downloadFileName="custom-file-name.jpg",L}),this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Download custom filenames"),this.codeHtml='<button (click)="openModal(316, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  // init this array with your images with 'modal.downloadFileName': 'custom file name'
  images: Image[];

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          downloadable: true
        },
        buttonsConfig: {
          visible: true,
          strategy: ButtonsStrategy.SIMPLE
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{downloadable:!0},buttonsConfig:{visible:!0,strategy:O.SIMPLE}}})}metaData(){this.uiService.setMetaData({title:"Demo download filename"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-download-custom-filename-page"]],standalone:!1,decls:150,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],["href","https://developers.google.com/web/updates/2018/02/chrome-65-deprecations#block_cross-origin_wzxhzdk5a_download"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Download custom filenames"),t()(),i(4,"p"),e(5,"Modal gallery example with "),i(6,"b",3),e(7,"downloadable images"),t(),e(8,", "),i(9,"b",3),e(10,"download button"),t(),e(11," and "),i(12,"b",3),e(13,"custom file names"),t(),e(14,"."),t(),n(15,"br"),i(16,"p")(17,"b"),e(18,"Attention: for security reasons Google Chrome and other browsers decided to block cross-origin downloads."),t(),e(19," So to use the download feature of this example, your images must be in the same server of your Angular application, otherwise the browser will navigate to the image itself, without to download it automatically. For more information check: "),i(20,"a",4),e(21,"HERE"),t()(),n(22,"br"),i(23,"h3"),e(24,"Live Demo"),t(),n(25,"br"),i(26,"button",5),f("click",function(){return a.openModal(316,0)}),e(27,"Click to open modal gallery id=1 at index=0"),t(),n(28,"br")(29,"br"),i(30,"section")(31,"h3"),e(32,"Code"),t(),n(33,"br"),i(34,"h4"),e(35,"Template"),t(),n(36,"ks-codemirror",6)(37,"br"),i(38,"h4"),e(39,"Typescript"),t(),n(40,"ks-codemirror",6),t(),n(41,"br")(42,"br"),i(43,"section")(44,"h3"),e(45,"Service inputs"),t(),n(46,"br"),i(47,"table",7)(48,"thead")(49,"tr")(50,"th"),e(51,"Input"),t(),i(52,"th"),e(53,"Value"),t()()(),i(54,"tbody")(55,"tr")(56,"td")(57,"code"),e(58,"id"),t()(),i(59,"td")(60,"div")(61,"i"),e(62,"Value: "),t(),i(63,"code"),e(64,"NUMERIC UNIQUE ID"),t()(),i(65,"div")(66,"b",3),e(67,"Unique id"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"images"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image[]"),t()(),i(78,"div")(79,"b",3),e(80,"Array of "),i(81,"code"),e(82,"Image"),t(),e(83," objects"),t()()()(),i(84,"tr")(85,"td")(86,"code"),e(87,"currentImage"),t()(),i(88,"td")(89,"div")(90,"i"),e(91,"Value: "),t(),i(92,"code"),e(93,"Image"),t()(),i(94,"div")(95,"b",3)(96,"code"),e(97,"Image"),t(),e(98," object to show"),t()()()(),i(99,"tr")(100,"td")(101,"code"),e(102,"libConfig"),t()(),i(103,"td")(104,"div")(105,"i"),e(106,"Value: "),t(),i(107,"code"),e(108,"ModalLibConfig"),t()(),i(109,"div")(110,"b",3)(111,"code"),e(112,"ModalLibConfig"),t(),e(113," object to config the library. See below."),t()()()()()()(),i(114,"section")(115,"h4"),e(116,"ModalLibConfig"),t(),n(117,"br"),i(118,"table",7)(119,"thead")(120,"tr")(121,"th"),e(122,"Input"),t(),i(123,"th"),e(124,"Value"),t()()(),i(125,"tbody")(126,"tr")(127,"td")(128,"code"),e(129,"currentImageConfig"),t()(),i(130,"td")(131,"div")(132,"i"),e(133,"Value: "),t(),i(134,"code"),e(135,"{ downloadable: true }"),t()(),i(136,"div"),e(137,"Image download is enabled with keyboard shortcuts"),t()()(),i(138,"tr")(139,"td")(140,"code"),e(141,"buttonsConfig"),t()(),i(142,"td")(143,"div")(144,"i"),e(145,"Value: "),t(),i(146,"code"),e(147,"{ visible: true, strategy: ButtonsStrategy.SIMPLE }"),t()(),i(148,"div"),e(149,"It will show download button"),t()()()()()()()),l&2&&(m(36),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var yt,Ct=y(()=>{"use strict";D();T();C();A();I();E();w();yt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Invert swipe direction"),this.codeHtml='  <button (click)="openModal(319, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          invertSwipe: true
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{currentImageConfig:{invertSwipe:!0}}})}metaData(){this.uiService.setMetaData({title:"Demo invert swipe"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-invert-swipe-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Invert swipe direction example"),t()(),i(4,"p"),e(5,"Minimal and simple example with swipe direction inverted on devices with touchscreen."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(319,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"currentImageConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{ invertSwipe: true }"),t()(),i(120,"div"),e(121,"The swipe direction is inverted on devices with touchscreen"),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var It,wt=y(()=>{"use strict";D();T();C();A();I();E();w();It=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Carousel minimal"),this.codeHtml='  <ks-carousel [id]="100" [images]="images"></ks-carousel>',this.codeTypescript="  images: Image[]; // init this array with your images"}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel minimal"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-minimal-page"]],standalone:!1,decls:67,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel minimal"),t()(),i(4,"p"),e(5,"Carousel minimal demo."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()()()()()()),l&2&&(m(10),s("id",100)("images",a.images),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Mt,At=y(()=>{"use strict";D();T();C();A();I();E();w();Mt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfigCarouselFixed={carouselPreviewsConfig:{visible:!0,number:5,width:"auto",maxHeight:"100px"},carouselConfig:{maxWidth:"766px",maxHeight:"400px",showArrows:!0,objectFit:"cover",keyboardEnable:!0,modalGalleryEnable:!0}},this.titleService.titleEvent.emit("Examples - Carousel width fixed width"),this.codeHtml='  <ks-carousel [id]="109" [images]="images" [config]="libConfigCarouselFixed"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfigCarouselFixed: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 5,
      width: 'auto',
      maxHeight: '100px'
    },
    carouselConfig: {
      maxWidth: '766px',
      maxHeight: '400px',
      showArrows: true,
      objectFit: 'cover',
      keyboardEnable: true,
      modalGalleryEnable: true
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel fixed width"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-fixed-width-page"]],standalone:!1,decls:120,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel with fixed width"),t()(),i(4,"p"),e(5,"Carousel with fixed width 766px, height 100px and 5 previews."),t(),i(6,"p"),e(7,"Also you can open modal gallery clicking on the current carousel image."),t(),n(8,"br"),i(9,"h3"),e(10,"Live Demo"),t(),n(11,"br")(12,"ks-carousel",3)(13,"br")(14,"br"),i(15,"section")(16,"h3"),e(17,"Code"),t(),n(18,"br"),i(19,"h4"),e(20,"Template"),t(),n(21,"ks-codemirror",4)(22,"br"),i(23,"h4"),e(24,"Typescript"),t(),n(25,"ks-codemirror",4),t(),n(26,"br")(27,"br"),i(28,"section")(29,"h3"),e(30,"Details"),t(),n(31,"br"),i(32,"table",5)(33,"thead")(34,"tr")(35,"th"),e(36,"Input (.html)"),t(),i(37,"th"),e(38,"Value (.ts)"),t()()(),i(39,"tbody")(40,"tr")(41,"td")(42,"code"),e(43,"id"),t()(),i(44,"td")(45,"div")(46,"i"),e(47,"Value: "),t(),i(48,"code"),e(49,"NUMERIC UNIQUE ID"),t()(),i(50,"div")(51,"b",6),e(52,"Unique id"),t()()()(),i(53,"tr")(54,"td")(55,"code"),e(56,"images"),t()(),i(57,"td")(58,"div")(59,"i"),e(60,"Value: "),t(),i(61,"code"),e(62,"Image[]"),t()(),i(63,"div")(64,"b",6),e(65,"Array of "),i(66,"code"),e(67,"Image"),t(),e(68," objects"),t()()()(),i(69,"tr")(70,"td")(71,"code"),e(72,"config"),t()(),i(73,"td")(74,"div")(75,"i"),e(76,"Value: "),t(),i(77,"code"),e(78,"CarouselLibConfig"),t()(),i(79,"div")(80,"b",6)(81,"code"),e(82,"CarouselLibConfig"),t(),e(83," object to config the library. See below."),t()()()()()()(),i(84,"section")(85,"h4"),e(86,"CarouselLibConfig"),t(),n(87,"br"),i(88,"table",5)(89,"thead")(90,"tr")(91,"th"),e(92,"Input"),t(),i(93,"th"),e(94,"Value"),t()()(),i(95,"tbody")(96,"tr")(97,"td")(98,"code"),e(99,"carouselConfig"),t()(),i(100,"td")(101,"div")(102,"i"),e(103,"Value: "),t(),i(104,"code"),e(105,"{ maxWidth: '766px', maxHeight: '400px', showArrows: true, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: true }"),t()(),i(106,"div"),e(107,"Fixed width 766px, all other properties have default values"),t()()(),i(108,"tr")(109,"td")(110,"code"),e(111,"carouselPreviewsConfig"),t()(),i(112,"td")(113,"div")(114,"i"),e(115,"Value: "),t(),i(116,"code"),e(117,"{ number: 5, width: 'auto', maxHeight: '100px' }"),t()(),i(118,"div"),e(119,"It will show 5 clickable previews (height 100px) with arrows"),t()()()()()()()),l&2&&(m(12),s("id",109)("images",a.images)("config",a.libConfigCarouselFixed),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Tt,kt=y(()=>{"use strict";D();T();C();A();I();E();w();Tt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Carousel content projection"),this.codeHtml=`  <ks-carousel [id]="101" [images]="images">
    <div class="projected">This is my projected content!</div>
  </ks-carousel>`,this.codeTypescript="  images: Image[]; // init this array with your images"}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel content projection"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-content-projection-page"]],standalone:!1,decls:69,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images"],[1,"projected"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel with content projection"),t()(),i(4,"p"),e(5,"Carousel with content projection demo."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"ks-carousel",3)(11,"div",4),e(12,"This is my projected content!"),t()(),n(13,"br")(14,"br"),i(15,"section")(16,"h3"),e(17,"Code"),t(),n(18,"br"),i(19,"h4"),e(20,"Template"),t(),n(21,"ks-codemirror",5)(22,"br"),i(23,"h4"),e(24,"Typescript"),t(),n(25,"ks-codemirror",5),t(),n(26,"br")(27,"br"),i(28,"section")(29,"h3"),e(30,"Details"),t(),n(31,"br"),i(32,"table",6)(33,"thead")(34,"tr")(35,"th"),e(36,"Input"),t(),i(37,"th"),e(38,"Value"),t()()(),i(39,"tbody")(40,"tr")(41,"td")(42,"code"),e(43,"id"),t()(),i(44,"td")(45,"div")(46,"i"),e(47,"Value: "),t(),i(48,"code"),e(49,"NUMERIC UNIQUE ID"),t()(),i(50,"div")(51,"b",7),e(52,"Unique id"),t()()()(),i(53,"tr")(54,"td")(55,"code"),e(56,"images"),t()(),i(57,"td")(58,"div")(59,"i"),e(60,"Value: "),t(),i(61,"code"),e(62,"Image[]"),t()(),i(63,"div")(64,"b",7),e(65,"Array of "),i(66,"code"),e(67,"Image"),t(),e(68," objects"),t()()()()()()()()),l&2&&(m(10),s("id",101)("images",a.images),m(11),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],styles:[".projected[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-size:24px;text-align:center;position:absolute;top:50%;width:100%;pointer-events:none}"]})}}return r})()});var Dt,Gt=y(()=>{"use strict";D();T();C();A();I();E();w();Dt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.autoPlay=!0,this.showArrows=!0,this.showDots=!0,this.titleService.titleEvent.emit("Examples - Carousel disable features"),this.codeHtml=`  <p>Autoplay: <button class="btn btn-primary" (click)="onChangeAutoPlay()">{{autoPlay ? 'disable autoplay' : 'enable autoplay'}}</button></p>
  <p>Show Arrows: <button class="btn btn-primary" (click)="onChangeShowArrows()">{{showArrows ? 'Hide Arrows' : 'Show Arrows'}}</button></p>
  <p>Show Dots: <button class="btn btn-primary" (click)="onChangeShowDots()">{{showDots ? 'Hide Dots' : 'Show Dots'}}</button></p>
  <br>
  <ks-carousel [id]="108" [images]="images" [config]="getLibConfig(autoPlay, showArrows, showDots)"></ks-carousel>`,this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  getLibConfig(autoPlay: boolean, showArrows: boolean, showDots: boolean): CarouselLibConfig {
    return {
      carouselDotsConfig: {
        visible: showDots
      },
      carouselPlayConfig: {
        autoPlay: autoPlay,
        interval: 3000,
        pauseOnHover: true
      },
      carouselConfig: {
        maxWidth: '100%',
        maxHeight: '400px',
        showArrows: showArrows,
        objectFit: 'cover',
        keyboardEnable: true,
        modalGalleryEnable: false
      }
    } as CarouselLibConfig;
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }`}getLibConfig(o,l,a){return{carouselDotsConfig:{visible:a},carouselPlayConfig:{autoPlay:o,interval:3e3,pauseOnHover:!0},carouselConfig:{maxWidth:"100%",maxHeight:"400px",showArrows:l,objectFit:"cover",keyboardEnable:!0,modalGalleryEnable:!1}}}onChangeAutoPlay(){this.autoPlay=!this.autoPlay}onChangeShowArrows(){this.showArrows=!this.showArrows}onChangeShowDots(){this.showDots=!this.showDots}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel disable features"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-features-disables-page"]],standalone:!1,decls:143,vars:10,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary",3,"click"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel disable features"),t()(),i(4,"p"),e(5,"Carousel disable features demo without previews."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"p"),e(11,"Autoplay: "),i(12,"button",3),f("click",function(){return a.onChangeAutoPlay()}),e(13),t()(),i(14,"p"),e(15,"Show Arrows: "),i(16,"button",3),f("click",function(){return a.onChangeShowArrows()}),e(17),t()(),i(18,"p"),e(19,"Show Dots: "),i(20,"button",3),f("click",function(){return a.onChangeShowDots()}),e(21),t()(),n(22,"br")(23,"ks-carousel",4)(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Code"),t(),n(29,"br"),i(30,"h4"),e(31,"Template"),t(),n(32,"ks-codemirror",5)(33,"br"),i(34,"h4"),e(35,"Typescript"),t(),n(36,"ks-codemirror",5),t(),n(37,"br")(38,"br"),i(39,"section")(40,"h3"),e(41,"Details"),t(),n(42,"br"),i(43,"table",6)(44,"thead")(45,"tr")(46,"th"),e(47,"Input (.html)"),t(),i(48,"th"),e(49,"Value (.ts)"),t()()(),i(50,"tbody")(51,"tr")(52,"td")(53,"code"),e(54,"id"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"NUMERIC UNIQUE ID"),t()(),i(61,"div")(62,"b",7),e(63,"Unique id"),t()()()(),i(64,"tr")(65,"td")(66,"code"),e(67,"images"),t()(),i(68,"td")(69,"div")(70,"i"),e(71,"Value: "),t(),i(72,"code"),e(73,"Image[]"),t()(),i(74,"div")(75,"b",7),e(76,"Array of "),i(77,"code"),e(78,"Image"),t(),e(79," objects"),t()()()(),i(80,"tr")(81,"td")(82,"code"),e(83,"config"),t()(),i(84,"td")(85,"div")(86,"i"),e(87,"Value: "),t(),i(88,"code"),e(89,"CarouselLibConfig"),t()(),i(90,"div")(91,"b",7)(92,"code"),e(93,"CarouselLibConfig"),t(),e(94," object to config the library. See below."),t()()()()()()(),i(95,"section")(96,"h4"),e(97,"CarouselLibConfig"),t(),n(98,"br"),i(99,"table",6)(100,"thead")(101,"tr")(102,"th"),e(103,"Input"),t(),i(104,"th"),e(105,"Value"),t()()(),i(106,"tbody")(107,"tr")(108,"td")(109,"code"),e(110,"carouselConfig"),t()(),i(111,"td")(112,"div")(113,"i"),e(114,"Value: "),t(),i(115,"code"),e(116,"{ maxWidth: '100%', maxHeight: '400px', showArrows: showArrows, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false }"),t()(),i(117,"div"),e(118,"Full width carousel with height 400px, image cover, toggleable arrows via an external variable, keyboard navigation, but without modal gallery"),t()()(),i(119,"tr")(120,"td")(121,"code"),e(122,"carouselPlayConfig"),t()(),i(123,"td")(124,"div")(125,"i"),e(126,"Value: "),t(),i(127,"code"),e(128,"{ autoPlay: autoPlay, interval: 3000, pauseOnHover: true }"),t()(),i(129,"div"),e(130,"toggleable autoPlay via an external variable, pauseOnHover is enabled and there are 3000mx of delay"),t()()(),i(131,"tr")(132,"td")(133,"code"),e(134,"carouselDotsConfig"),t()(),i(135,"td")(136,"div")(137,"i"),e(138,"Value: "),t(),i(139,"code"),e(140,"visible: showDots"),t()(),i(141,"div"),e(142,"toggleable dots via an external variable"),t()()()()()()()),l&2&&(m(13),P(a.autoPlay?"disable autoplay":"enable autoplay"),m(4),P(a.showArrows?"Hide Arrows":"Show Arrows"),m(4),P(a.showDots?"Hide Dots":"Show Dots"),m(2),s("id",108)("images",a.images)("config",a.getLibConfig(a.autoPlay,a.showArrows,a.showDots)),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var _t,Rt=y(()=>{"use strict";D();T();C();A();I();E();w();_t=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig={carouselPlayConfig:{autoPlay:!1,interval:5e3,pauseOnHover:!0}},this.titleService.titleEvent.emit("Examples - Carousel no autoplay"),this.codeHtml='  <ks-carousel [id]="105" [images]="images" [config]="libConfig"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselPlayConfig: {
      autoPlay: false,
      interval: 5000,
      pauseOnHover: true
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel no autoplay"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-no-autoplay-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel no autoplay"),t()(),i(4,"p"),e(5,"Carousel no autoplay demo."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"CarouselLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"CarouselLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"CarouselLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"carouselPlayConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"{ autoPlay: false, interval: 5000, pauseOnHover: true }"),t()(),i(104,"div"),e(105,"AutoPlay is disabled"),t()()()()()()()),l&2&&(m(10),s("id",105)("images",a.images)("config",a.libConfig),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Lt,Ut=y(()=>{"use strict";D();T();C();A();I();E();w();Lt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig={carouselSlideInfinite:!1},this.titleService.titleEvent.emit("Examples - Carousel no infinite"),this.codeHtml='  <ks-carousel [id]="103" [images]="images" [config]="libConfig"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselSlideInfinite: false
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel no infinite"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-no-infinite-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel no infinite"),t()(),i(4,"p"),e(5,"Carousel with infinite sliding disabled."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"CarouselLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"CarouselLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"CarouselLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"carouselSlideInfinite"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"false"),t()(),i(104,"div"),e(105,"Infinite sliding is disable"),t()()()()()()()),l&2&&(m(10),s("id",103)("images",a.images)("config",a.libConfig),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Vt,Pt=y(()=>{"use strict";D();T();C();A();I();E();w();Vt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig={carouselPlayConfig:{autoPlay:!0,interval:1e4,pauseOnHover:!1}},this.titleService.titleEvent.emit("Examples - Carousel custom autoplay"),this.codeHtml='  <ks-carousel [id]="106" [images]="images" [config]="libConfig"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselPlayConfig: {
      autoPlay: true,
      interval: 10000,
      pauseOnHover: false
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel custom autoplay"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-custom-autoplay-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel custom autoplay"),t()(),i(4,"p"),e(5,"Carousel custom autoplay demo (10s of interval and pauseOnHover disabled)."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"CarouselLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"CarouselLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"CarouselLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"carouselPlayConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"{ autoPlay: true, interval: 10000, pauseOnHover: false }"),t()(),i(104,"div"),e(105,"AutoPlay enabled with 10000ms of delay, but pauseOnHover is disabled"),t()()()()()()()),l&2&&(m(10),s("id",106)("images",a.images)("config",a.libConfig),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Ot,Ht=y(()=>{"use strict";D();T();C();A();I();E();w();Ot=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig={carouselPreviewsConfig:{visible:!0,number:7,width:"auto",maxHeight:"100px"}},this.titleService.titleEvent.emit("Examples - Carousel custom previews"),this.codeHtml=`  <ks-carousel [id]="107" [images]="images" [config]="libConfig">
  </ks-carousel>`,this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 7,
      width: 'auto',
      maxHeight: '100px'
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel custom previews"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-custom-previews-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel custom previews"),t()(),i(4,"p"),e(5,"Carousel custom previews demo (7 previews with height = 100px and auto width)."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"CarouselLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"CarouselLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"CarouselLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"carouselPreviewsConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"{ visible: true, number: 7, width: 'auto', maxHeight: '100px' }"),t()(),i(104,"div"),e(105,"It will show 7 clickable previews (height 100px) with arrows"),t()()()()()()()),l&2&&(m(10),s("id",107)("images",a.images)("config",a.libConfig),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var jt,Nt=y(()=>{"use strict";E();D();T();C();A();I();E();w();jt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig={carouselImageConfig:{description:{strategy:ee.ALWAYS_VISIBLE}}},this.titleService.titleEvent.emit("Examples - Carousel with description"),this.codeHtml='  <ks-carousel [id]="113" [images]="images" [config]="libConfig"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images

  libConfig: CarouselLibConfig = {
    carouselImageConfig: {
      description: {
        strategy: DescriptionStrategy.ALWAYS_VISIBLE
      }
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel with description"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-with-description-page"]],standalone:!1,decls:106,vars:7,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel with description"),t()(),i(4,"p"),e(5,"Carousel with description demo."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br")(10,"ks-carousel",3)(11,"br")(12,"br"),i(13,"section")(14,"h3"),e(15,"Code"),t(),n(16,"br"),i(17,"h4"),e(18,"Template"),t(),n(19,"ks-codemirror",4)(20,"br"),i(21,"h4"),e(22,"Typescript"),t(),n(23,"ks-codemirror",4),t(),n(24,"br")(25,"br"),i(26,"section")(27,"h3"),e(28,"Details"),t(),n(29,"br"),i(30,"table",5)(31,"thead")(32,"tr")(33,"th"),e(34,"Input (.html)"),t(),i(35,"th"),e(36,"Value (.ts)"),t()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"code"),e(41,"id"),t()(),i(42,"td")(43,"div")(44,"i"),e(45,"Value: "),t(),i(46,"code"),e(47,"NUMERIC UNIQUE ID"),t()(),i(48,"div")(49,"b",6),e(50,"Unique id"),t()()()(),i(51,"tr")(52,"td")(53,"code"),e(54,"images"),t()(),i(55,"td")(56,"div")(57,"i"),e(58,"Value: "),t(),i(59,"code"),e(60,"Image[]"),t()(),i(61,"div")(62,"b",6),e(63,"Array of "),i(64,"code"),e(65,"Image"),t(),e(66," objects"),t()()()(),i(67,"tr")(68,"td")(69,"code"),e(70,"config"),t()(),i(71,"td")(72,"div")(73,"i"),e(74,"Value: "),t(),i(75,"code"),e(76,"CarouselLibConfig"),t()(),i(77,"div")(78,"b",6)(79,"code"),e(80,"CarouselLibConfig"),t(),e(81," object to config the library. See below."),t()()()()()()(),i(82,"section")(83,"h4"),e(84,"CarouselLibConfig"),t(),n(85,"br"),i(86,"table",5)(87,"thead")(88,"tr")(89,"th"),e(90,"Input"),t(),i(91,"th"),e(92,"Value"),t()()(),i(93,"tbody")(94,"tr")(95,"td")(96,"code"),e(97,"carouselImageConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"{ description: { strategy: DescriptionStrategy.ALWAYS_VISIBLE } }"),t()(),i(104,"div"),e(105,"Description is visible, and swipe not inverted"),t()()()()()()()),l&2&&(m(10),s("id",113)("images",a.images)("config",a.libConfig),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Bt,Ft=y(()=>{"use strict";D();T();C();A();I();E();w();Bt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Carousel outputs"),this.codeHtml=`  <ks-carousel [id]="114" [images]="images"
  (changeImage)="onChangeImage($event)"
  (firstImage)="onFirstImage($event)"
  (lastImage)="onLastImage($event)"></ks-carousel>`,this.codeTypescript=`  images: Image[]; // init this array with your images
  // output events
  onChangeImage(event: ImageEvent) {
    console.log('showImage', event);
  }

  onFirstImage(event: ImageEvent) {
    console.log('firstImage', event);
  }

  onLastImage(event: ImageEvent) {
    console.log('lastImage', event);
  }`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel outputs"})}onChangeImage(o){console.log("show",o)}onFirstImage(o){console.log("firstImage",o)}onLastImage(o){console.log("lastImage",o)}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-outputs-page"]],standalone:!1,decls:129,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"text-success"],[3,"changeImage","firstImage","lastImage","id","images"],[3,"content","language"],[1,"table","table-hover","table-sm"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel output events"),t()(),i(4,"p"),e(5,"Carousel with "),i(6,"b",3),e(7,"output events logged in console."),t()(),n(8,"br"),i(9,"h3"),e(10,"Live Demo"),t(),n(11,"br"),i(12,"ks-carousel",4),f("changeImage",function(L){return a.onChangeImage(L)})("firstImage",function(L){return a.onFirstImage(L)})("lastImage",function(L){return a.onLastImage(L)}),t(),n(13,"br")(14,"br"),i(15,"section")(16,"h3"),e(17,"Code"),t(),n(18,"br"),i(19,"h4"),e(20,"Template"),t(),n(21,"ks-codemirror",5)(22,"br"),i(23,"h4"),e(24,"Typescript"),t(),n(25,"ks-codemirror",5),t(),n(26,"br")(27,"br"),i(28,"section")(29,"h3"),e(30,"Details"),t(),n(31,"br"),i(32,"table",6)(33,"thead")(34,"tr")(35,"th"),e(36,"Input (.html)"),t(),i(37,"th"),e(38,"Value (.ts)"),t()()(),i(39,"tbody")(40,"tr")(41,"td")(42,"code"),e(43,"id"),t()(),i(44,"td")(45,"div")(46,"i"),e(47,"Value: "),t(),i(48,"code"),e(49,"NUMERIC UNIQUE ID"),t()(),i(50,"div")(51,"b",3),e(52,"Unique id"),t()()()(),i(53,"tr")(54,"td")(55,"code"),e(56,"images"),t()(),i(57,"td")(58,"div")(59,"i"),e(60,"Value: "),t(),i(61,"code"),e(62,"Image[]"),t()(),i(63,"div")(64,"b",3),e(65,"Array of "),i(66,"code"),e(67,"Image"),t(),e(68," objects"),t()()()()()(),n(69,"br"),i(70,"table",6)(71,"thead")(72,"tr")(73,"th"),e(74,"Output"),t(),i(75,"th"),e(76,"Return"),t()()(),i(77,"tbody")(78,"tr")(79,"td")(80,"code"),e(81,"(clickImage)"),t()(),i(82,"td")(83,"div")(84,"i"),e(85,"Type: "),t(),e(86,"number"),t(),i(87,"div")(88,"b",3),e(89,"Open the console of your browser to see the result"),t()()()(),i(90,"tr")(91,"td")(92,"code"),e(93,"(changeImage)"),t()(),i(94,"td")(95,"div")(96,"i"),e(97,"Type: "),t(),i(98,"code"),e(99,"ImageEvent"),t()(),i(100,"div")(101,"b",3),e(102,"Open the console of your browser to see the result"),t()()()(),i(103,"tr")(104,"td")(105,"code"),e(106,"(firstImage)"),t()(),i(107,"td")(108,"div")(109,"i"),e(110,"Type: "),t(),i(111,"code"),e(112,"ImageEvent"),t()(),i(113,"div")(114,"b",3),e(115,"Open the console of your browser to see the result"),t()()()(),i(116,"tr")(117,"td")(118,"code"),e(119,"(lastImage)"),t()(),i(120,"td")(121,"div")(122,"i"),e(123,"Type: "),t(),i(124,"code"),e(125,"ImageEvent"),t()(),i(126,"div")(127,"b",3),e(128,"Open the console of your browser to see the result"),t()()()()()()()()),l&2&&(m(12),s("id",114)("images",a.images),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var Qt,Kt=y(()=>{"use strict";D();T();C();A();I();E();w();Qt=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...V],this.configHtml=b,this.configTs=h,this.libConfig1={carouselPreviewsConfig:{visible:!0,breakpoints:{xSmall:50,small:60,medium:80,large:150,xLarge:180}}},this.libConfig2={carouselPreviewsConfig:{visible:!0,breakpoints:{xSmall:50,small:60,medium:70,large:80,xLarge:100}},carouselConfig:{maxWidth:"500px",maxHeight:"400px",showArrows:!0,objectFit:"cover",keyboardEnable:!0,modalGalleryEnable:!1}},this.titleService.titleEvent.emit("Examples - Carousel custom breakpoints"),this.codeHtml='  <ks-carousel [id]="115" [images]="images" [config]="libConfig1"></ks-carousel>',this.codeTypescript="  images: Image[]; // init this array with your images",this.codeHtml2='  <ks-carousel [id]="116" [images]="images" [config]="libConfig2"></ks-carousel>',this.codeTypescript2=`  images: Image[]; // init this array with your images

  libConfig1: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      breakpoints: {
        xSmall: 50,
        small: 60,
        medium: 80,
        large: 150,
        xLarge: 180
      }
    }
  };
  libConfig2: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      breakpoints: {
        xSmall: 50,
        small: 60,
        medium: 70,
        large: 80,
        xLarge: 100
      }
    },
    carouselConfig: {
      maxWidth: '500px',
      maxHeight: '400px',
      showArrows: true,
      objectFit: 'cover',
      keyboardEnable: true,
      modalGalleryEnable: false
    }
  };`}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel custom breakpoints"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-breakpoints"]],standalone:!1,decls:231,vars:14,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[3,"id","images","config"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel custom breakpoints"),t()(),i(4,"p"),e(5,"2 Carousels with custom breakpoints, one full width, the other one with fixed width 500px."),t(),i(6,"p"),e(7,"To see how they work, use a browser on your PC and try to reduce the width of the browser's window."),t(),n(8,"br"),i(9,"h3"),e(10,"Live Demos"),t(),n(11,"br"),i(12,"p"),e(13,"1. Full width"),t(),n(14,"ks-carousel",3)(15,"br"),i(16,"section")(17,"h3"),e(18,"Code"),t(),n(19,"br"),i(20,"h4"),e(21,"Template"),t(),n(22,"ks-codemirror",4)(23,"br"),i(24,"h4"),e(25,"Typescript"),t(),n(26,"ks-codemirror",4),t(),n(27,"br"),i(28,"p"),e(29,"2. Fixed width 500px"),t(),n(30,"ks-carousel",3)(31,"br"),i(32,"section")(33,"h3"),e(34,"Code"),t(),n(35,"br"),i(36,"h4"),e(37,"Template"),t(),n(38,"ks-codemirror",4)(39,"br"),i(40,"h4"),e(41,"Typescript"),t(),n(42,"ks-codemirror",4),t(),n(43,"br")(44,"br"),i(45,"section")(46,"h3"),e(47,"Details - example 1 - full width"),t(),n(48,"br"),i(49,"table",5)(50,"thead")(51,"tr")(52,"th"),e(53,"Input (.html)"),t(),i(54,"th"),e(55,"Value (.ts)"),t()()(),i(56,"tbody")(57,"tr")(58,"td")(59,"code"),e(60,"id"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"NUMERIC UNIQUE ID"),t()(),i(67,"div")(68,"b",6),e(69,"Unique id"),t()()()(),i(70,"tr")(71,"td")(72,"code"),e(73,"images"),t()(),i(74,"td")(75,"div")(76,"i"),e(77,"Value: "),t(),i(78,"code"),e(79,"Image[]"),t()(),i(80,"div")(81,"b",6),e(82,"Array of "),i(83,"code"),e(84,"Image"),t(),e(85," objects"),t()()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"config"),t()(),i(90,"td")(91,"div")(92,"i"),e(93,"Value: "),t(),i(94,"code"),e(95,"CarouselLibConfig"),t()(),i(96,"div")(97,"b",6)(98,"code"),e(99,"CarouselLibConfig"),t(),e(100," object to config the library. See below."),t()()()()()()(),i(101,"section")(102,"h4"),e(103,"CarouselLibConfig for example 1"),t(),n(104,"br"),i(105,"table",5)(106,"thead")(107,"tr")(108,"th"),e(109,"Input"),t(),i(110,"th"),e(111,"Value"),t()()(),i(112,"tbody")(113,"tr")(114,"td")(115,"code"),e(116,"carouselConfig"),t()(),i(117,"td")(118,"div")(119,"i"),e(120,"Value: "),t(),i(121,"code"),e(122,"undefined"),t()(),i(123,"div"),e(124,"Default full width carousel with height 400px, image cover, arrows, keyboard navigation, but without modal gallery"),t()()(),i(125,"tr")(126,"td")(127,"code"),e(128,"carouselPreviewConfig"),t()(),i(129,"td")(130,"div")(131,"i"),e(132,"Value: "),t(),i(133,"code"),e(134,"{ visible: true, breakpoints: { xSmall: 50, small: 60, medium: 80, large: 150, xLarge: 180 } }"),t()(),i(135,"div"),e(136,"Custom breakpoint but all the other properties have default values."),t()()()()()(),n(137,"br")(138,"br"),i(139,"section")(140,"h3"),e(141,"Service inputs - example 2 - fixed width 500px"),t(),n(142,"br"),i(143,"table",5)(144,"thead")(145,"tr")(146,"th"),e(147,"Input"),t(),i(148,"th"),e(149,"Value"),t()()(),i(150,"tbody")(151,"tr")(152,"td")(153,"code"),e(154,"id"),t()(),i(155,"td")(156,"div")(157,"i"),e(158,"Value: "),t(),i(159,"code"),e(160,"NUMERIC UNIQUE ID"),t()(),i(161,"div")(162,"b",6),e(163,"Unique id"),t()()()(),i(164,"tr")(165,"td")(166,"code"),e(167,"images"),t()(),i(168,"td")(169,"div")(170,"i"),e(171,"Value: "),t(),i(172,"code"),e(173,"Image[]"),t()(),i(174,"div")(175,"b",6),e(176,"Array of "),i(177,"code"),e(178,"Image"),t(),e(179," objects"),t()()()(),i(180,"tr")(181,"td")(182,"code"),e(183,"config"),t()(),i(184,"td")(185,"div")(186,"i"),e(187,"Value: "),t(),i(188,"code"),e(189,"CarouselLibConfig"),t()(),i(190,"div")(191,"b",6)(192,"code"),e(193,"CarouselLibConfig"),t(),e(194," object to config the library. See below."),t()()()()()()(),i(195,"section")(196,"h4"),e(197,"CarouselLibConfig for example 2"),t(),n(198,"br"),i(199,"table",5)(200,"thead")(201,"tr")(202,"th"),e(203,"Input"),t(),i(204,"th"),e(205,"Value"),t()()(),i(206,"tbody")(207,"tr")(208,"td")(209,"code"),e(210,"carouselConfig"),t()(),i(211,"td")(212,"div")(213,"i"),e(214,"Value: "),t(),i(215,"code"),e(216,"{ maxWidth: '500px', maxHeight: '400px', showArrows: true, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false }"),t()(),i(217,"div"),e(218,"Fixed width 500px, all other properties have default values"),t()()(),i(219,"tr")(220,"td")(221,"code"),e(222,"carouselPreviewConfig"),t()(),i(223,"td")(224,"div")(225,"i"),e(226,"Value: "),t(),i(227,"code"),e(228,"{ visible: true, breakpoints: { xSmall: 50, small: 60, medium: 70, large: 80, xLarge: 100 } }"),t()(),i(229,"div"),e(230,"Custom breakpoint but all the other properties have default values."),t()()()()()()()),l&2&&(m(14),s("id",115)("images",a.images)("config",a.libConfig1),m(8),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"),m(4),s("id",116)("images",a.images)("config",a.libConfig2),m(8),s("content",a.codeHtml2)("language","html"),m(4),s("content",a.codeTypescript2)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var zt,qt=y(()=>{"use strict";D();T();C();A();I();E();w();zt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...Ei],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Same images"),this.codeHtml='  <button (click)="openModal(338, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`  images: Image[] = [
  new Image(0, {
    img: '/assets/images/gallery/img1.jpg?0',
    extUrl: 'http://www.google.com'
  }),
  new Image(1, {
    img: '/assets/images/gallery/img1.jpg?1',
    extUrl: 'http://www.google.com'
  }),
  new Image(2, {
    img: '/assets/images/gallery/img1.jpg?2',
    extUrl: 'http://www.google.com'
  })];

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l]})}metaData(){this.uiService.setMetaData({title:"Demo same images"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-same-images-page"]],standalone:!1,decls:88,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Same images example"),t()(),i(4,"p"),e(5,"Array with the same image multiple times."),t(),n(6,"br"),i(7,"p")(8,"b"),e(9,"Attention: to prevent caching issues, you MUST use unique src paths."),t(),e(10," Since in this example I'm using the same image multiple times, to make paths unique I added '?imgIndex' at the end of every image path. "),n(11,"br"),t(),i(12,"h3"),e(13,"Live Demo"),t(),n(14,"br"),i(15,"button",3),f("click",function(){return a.openModal(338,0)}),e(16,"Click to open modal gallery id=1 at index=0"),t(),n(17,"br")(18,"br"),i(19,"section")(20,"h3"),e(21,"Code"),t(),n(22,"br"),i(23,"h4"),e(24,"Template"),t(),n(25,"ks-codemirror",4)(26,"br"),i(27,"h4"),e(28,"Typescript"),t(),n(29,"ks-codemirror",4),t(),n(30,"br")(31,"br"),i(32,"section")(33,"h3"),e(34,"Service inputs"),t(),n(35,"br"),i(36,"table",5)(37,"thead")(38,"tr")(39,"th"),e(40,"Input"),t(),i(41,"th"),e(42,"Value"),t()()(),i(43,"tbody")(44,"tr")(45,"td")(46,"code"),e(47,"id"),t()(),i(48,"td")(49,"div")(50,"i"),e(51,"Value: "),t(),i(52,"code"),e(53,"NUMERIC UNIQUE ID"),t()(),i(54,"div")(55,"b",6),e(56,"Unique id"),t()()()(),i(57,"tr")(58,"td")(59,"code"),e(60,"images"),t()(),i(61,"td")(62,"div")(63,"i"),e(64,"Value: "),t(),i(65,"code"),e(66,"Image[]"),t()(),i(67,"div")(68,"b",6),e(69,"Array of "),i(70,"code"),e(71,"Image"),t(),e(72," objects"),t()()()(),i(73,"tr")(74,"td")(75,"code"),e(76,"currentImage"),t()(),i(77,"td")(78,"div")(79,"i"),e(80,"Value: "),t(),i(81,"code"),e(82,"Image"),t()(),i(83,"div")(84,"b",6)(85,"code"),e(86,"Image"),t(),e(87," object to show"),t()()()()()()()()),l&2&&(m(25),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var Yt,Wt=y(()=>{"use strict";D();T();C();A();I();E();w();Yt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Autoplay simple"),this.codeHtml='  <button (click)="openModal(330, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modal GalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          playConfig: {
            autoPlay: true,
            interval: 5000,
            pauseOnHover: true
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{slideConfig:{playConfig:{autoPlay:!0,interval:5e3,pauseOnHover:!0}}}})}metaData(){this.uiService.setMetaData({title:"Autoplay simple"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-modal-autoplay-minimal-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Autoplay Simple example"),t()(),i(4,"p"),e(5,"Minimal and simple modal gallery example with autoplay."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(330,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"slideConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"undefined"),t()(),i(120,"div"),e(121,"Autoplay is enabled with 5s of interval and 'pause on hover' enabled."),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});var $t,Xt=y(()=>{"use strict";D();T();C();A();I();E();w();$t=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Autoplay custom"),this.codeHtml='  <button (click)="openModal(329, 0)">Open modal gallery id=1 at index=0</button>',this.codeTypescript=`
  images: Image[]; // init this array with your images

  constructor(private modal GalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          playConfig: {
            autoPlay: true,
            interval: 2000,
            pauseOnHover: false
          }
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{slideConfig:{playConfig:{autoPlay:!0,interval:2e3,pauseOnHover:!1}}}})}metaData(){this.uiService.setMetaData({title:"Autoplay custom"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-modal-autoplay-minimal-page"]],standalone:!1,decls:122,vars:4,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Autoplay Custom example"),t()(),i(4,"p"),e(5,"Modal gallery example with custom autoplay (interval=2000 and pauseOnHover disabled)."),t(),n(6,"br"),i(7,"h3"),e(8,"Live Demo"),t(),n(9,"br"),i(10,"button",3),f("click",function(){return a.openModal(329,0)}),e(11,"Click to open modal gallery id=1 at index=0"),t(),n(12,"br")(13,"br"),i(14,"section")(15,"h3"),e(16,"Code"),t(),n(17,"br"),i(18,"h4"),e(19,"Template"),t(),n(20,"ks-codemirror",4)(21,"br"),i(22,"h4"),e(23,"Typescript"),t(),n(24,"ks-codemirror",4),t(),n(25,"br")(26,"br"),i(27,"section")(28,"h3"),e(29,"Service inputs"),t(),n(30,"br"),i(31,"table",5)(32,"thead")(33,"tr")(34,"th"),e(35,"Input"),t(),i(36,"th"),e(37,"Value"),t()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"code"),e(42,"id"),t()(),i(43,"td")(44,"div")(45,"i"),e(46,"Value: "),t(),i(47,"code"),e(48,"NUMERIC UNIQUE ID"),t()(),i(49,"div")(50,"b",6),e(51,"Unique id"),t()()()(),i(52,"tr")(53,"td")(54,"code"),e(55,"images"),t()(),i(56,"td")(57,"div")(58,"i"),e(59,"Value: "),t(),i(60,"code"),e(61,"Image[]"),t()(),i(62,"div")(63,"b",6),e(64,"Array of "),i(65,"code"),e(66,"Image"),t(),e(67," objects"),t()()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"currentImage"),t()(),i(72,"td")(73,"div")(74,"i"),e(75,"Value: "),t(),i(76,"code"),e(77,"Image"),t()(),i(78,"div")(79,"b",6)(80,"code"),e(81,"Image"),t(),e(82," object to show"),t()()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"libConfig"),t()(),i(87,"td")(88,"div")(89,"i"),e(90,"Value: "),t(),i(91,"code"),e(92,"ModalLibConfig"),t()(),i(93,"div")(94,"b",6)(95,"code"),e(96,"ModalLibConfig"),t(),e(97," object to config the library. See below."),t()()()()()()(),i(98,"section")(99,"h4"),e(100,"ModalLibConfig"),t(),n(101,"br"),i(102,"table",5)(103,"thead")(104,"tr")(105,"th"),e(106,"Input"),t(),i(107,"th"),e(108,"Value"),t()()(),i(109,"tbody")(110,"tr")(111,"td")(112,"code"),e(113,"slideConfig"),t()(),i(114,"td")(115,"div")(116,"i"),e(117,"Value: "),t(),i(118,"code"),e(119,"{playConfig: {autoPlay: true, interval: 2000, pauseOnHover: false}}"),t()(),i(120,"div"),e(121,"Autoplay is enabled with 2s of interval and 'pause on hover' disabled."),t()()()()()()()),l&2&&(m(20),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[S],encapsulation:2})}}return r})()});function Ni(r,H){r&1&&ae(0)}function Bi(r,H){if(r&1&&(i(0,"div",8)(1,"div",9),e(2),t(),i(3,"div",10),B(4,Ni,1,0,"ng-container",11),t()()),r&2){let o,l=H.preview,a=H.defaultTemplate;m(2),P((o=l==null||l.modal==null?null:l.modal.description)!==null&&o!==void 0?o:"\xA0"),m(2),s("ngTemplateOutlet",a)}}var ji,Jt,Zt=y(()=>{"use strict";D();T();C();A();I();E();Z();w();ji=["previewsTemplate"];Jt=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.images=[...x],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-description">{{preview?.modal?.description ?? '&nbsp;'}}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>
`,this.codeCss=`.preview-description {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`,this.codeTypescript=`  // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
        }
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0}},previewsTemplate:this.previewsTemplate})}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-template"]],viewQuery:function(l,a){if(l&1&&oe(ji,5),l&2){let c;re(c=me())&&(a.previewsTemplate=c.first)}},standalone:!1,decls:159,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-description"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(l,a){if(l&1){let c=q();i(0,"div",1)(1,"h2",2)(2,"a",3),e(3,"Previews custom template"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"with custom previews"),t(),e(8,", using an Angular template."),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br"),i(13,"button",4),f("click",function(){return K(c),z(a.openModal(334,0))}),e(14,"Click to open modal gallery id=1 at index=0"),t(),B(15,Bi,5,2,"ng-template",null,0,J),n(17,"br")(18,"br"),i(19,"section")(20,"h3"),e(21,"Code"),t(),n(22,"br"),i(23,"h4"),e(24,"Template"),t(),n(25,"ks-codemirror",5)(26,"br"),i(27,"h4"),e(28,"Css"),t(),n(29,"ks-codemirror",5)(30,"br"),i(31,"h4"),e(32,"Typescript"),t(),n(33,"ks-codemirror",5),t(),n(34,"br")(35,"br"),i(36,"section")(37,"h3"),e(38,"Service inputs"),t(),n(39,"br"),i(40,"table",6)(41,"thead")(42,"tr")(43,"th"),e(44,"Input"),t(),i(45,"th"),e(46,"Value"),t()()(),i(47,"tbody")(48,"tr")(49,"td")(50,"code"),e(51,"id"),t()(),i(52,"td")(53,"div")(54,"i"),e(55,"Value: "),t(),i(56,"code"),e(57,"NUMERIC UNIQUE ID"),t()(),i(58,"div")(59,"b",7),e(60,"Unique id"),t()()()(),i(61,"tr")(62,"td")(63,"code"),e(64,"images"),t()(),i(65,"td")(66,"div")(67,"i"),e(68,"Value: "),t(),i(69,"code"),e(70,"Image[]"),t()(),i(71,"div")(72,"b",7),e(73,"Array of "),i(74,"code"),e(75,"Image"),t(),e(76," objects"),t()()()(),i(77,"tr")(78,"td")(79,"code"),e(80,"currentImage"),t()(),i(81,"td")(82,"div")(83,"i"),e(84,"Value: "),t(),i(85,"code"),e(86,"Image"),t()(),i(87,"div")(88,"b",7)(89,"code"),e(90,"Image"),t(),e(91," object to show"),t()()()(),i(92,"tr")(93,"td")(94,"code"),e(95,"libConfig"),t()(),i(96,"td")(97,"div")(98,"i"),e(99,"Value: "),t(),i(100,"code"),e(101,"ModalLibConfig"),t()(),i(102,"div")(103,"b",7)(104,"code"),e(105,"ModalLibConfig"),t(),e(106," object to config the library. See below."),t()()()(),i(107,"tr")(108,"td")(109,"code"),e(110,"previewsTemplate"),t()(),i(111,"td")(112,"div")(113,"i"),e(114,"Value: "),t(),i(115,"code"),e(116,"TemplateRef<HTMLElement>"),t()(),i(117,"div")(118,"b",7),e(119,"A reference to an Angular template."),t(),n(120,"br"),e(121," This template can take 2 template variables: "),i(122,"ul")(123,"li")(124,"b"),e(125,"let-preview"),t(),e(126,": gives access to the "),i(127,"code"),e(128,"Image"),t(),e(129," associated with the preview"),t(),i(130,"li")(131,"b"),e(132,"let-defaultTemplate"),t(),e(133,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),i(134,"code"),e(135,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),t(),e(136,". "),t()()()()()()()(),i(137,"section")(138,"h4"),e(139,"ModalLibConfig"),t(),n(140,"br"),i(141,"table",6)(142,"thead")(143,"tr")(144,"th"),e(145,"Input"),t(),i(146,"th"),e(147,"Value"),t()()(),i(148,"tbody")(149,"tr")(150,"td")(151,"code"),e(152,"previewConfig"),t()(),i(153,"td")(154,"div")(155,"i"),e(156,"Value: "),t(),i(157,"code"),e(158,"{ visible: true }"),t()()()()()()()()}l&2&&(m(25),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeCss)("language","css"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[ce,S],styles:[".preview-description[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"]})}}return r})()});function Qi(r,H){r&1&&ae(0)}function Ki(r,H){if(r&1&&(i(0,"div",8)(1,"div",9),e(2),Y(3,"date"),t(),i(4,"div",10),B(5,Qi,1,0,"ng-container",11),t()()),r&2){let o=H.preview,l=H.defaultTemplate;m(2),P(W(3,2,o.modal.pictureDate)),m(3),s("ngTemplateOutlet",l)}}var Fi,ei,ti=y(()=>{"use strict";E();D();T();C();A();I();E();Z();w();Fi=["previewsTemplate"];ei=(()=>{class r{constructor(o,l,a){this.uiService=o,this.titleService=l,this.modalGalleryService=a,this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Previews custom template"),this.codeHtml=`<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-date">{{ preview.modal.pictureDate | date }}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>`,this.codeCss=`.preview-block {
  scroll-margin-left: 10px;
  margin-right: 10px;
}
.preview-date {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`,this.codeTypescript=`// Here, we extends ModalImage, but we could extend Image and/or PlainImage as well
interface CustomModalImage extends ModalImage {
  pictureDate: Date;
}

@Component()
export class MyComponent implements OnInit {
    // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[] = []; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
    // when creating the Image array, use the CustomModalImage structure
    // to add the picture-specific data
    this.images.push(new Image( 
      imageId,
      {
        img: imageUrl,
        pictureDate: imageDate, // here, we provide the date of each picture, to show in the previews
        ...,
      } as CustomModalImage,
      // Thumbnail (aka 'plain' image)
      {
        img: thumbUrl,
      } as PlainImage,    
    );    
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
        }
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}`;let c=[new Date(2022,1,13,14,15),new Date(2022,1,15,16,30),new Date(2022,1,16,11,0),new Date(2022,1,20,14,15),new Date(2022,2,2,17,0),new Date(2022,2,10,18,0),new Date(2022,2,13,9,0),new Date(2022,3,3,9,30)];this.images=x.map((L,j)=>new F(L.id,Object.assign({},L.modal,{pictureDate:c[j]}),L.plain))}ngOnInit(){this.metaData()}openModal(o,l){let a=this.modalGalleryService.open({id:o,images:this.images,currentImage:this.images[l],libConfig:{previewConfig:{visible:!0}},previewsTemplate:this.previewsTemplate})}metaData(){this.uiService.setMetaData({title:"Demo previews custom template"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g),d(v))}}static{this.\u0275cmp=p({type:r,selectors:[["app-previews-template"]],viewQuery:function(l,a){if(l&1&&oe(Fi,5),l&2){let c;re(c=me())&&(a.previewsTemplate=c.first)}},standalone:!1,decls:161,vars:6,consts:[["previewsTemplate",""],[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],[1,"btn","btn-primary","btn-sm",3,"click"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"],[1,"preview-block"],[1,"preview-date"],[1,"preview-default"],[4,"ngTemplateOutlet"]],template:function(l,a){if(l&1){let c=q();i(0,"div",1)(1,"h2",2)(2,"a",3),e(3,"Previews custom template with additional data"),t()(),i(4,"p"),e(5,"Modal gallery example "),i(6,"b"),e(7,"with custom previews"),t(),e(8,", using an Angular template and custom image-related data."),t(),i(9,"p"),e(10,"This example demonstrates how to use custom image-specific data (here, the date of the picture) to render the previews."),t(),n(11,"br"),i(12,"h3"),e(13,"Live Demo"),t(),n(14,"br"),i(15,"button",4),f("click",function(){return K(c),z(a.openModal(334,0))}),e(16,"Click to open modal gallery id=1 at index=0"),t(),B(17,Ki,6,4,"ng-template",null,0,J),n(19,"br")(20,"br"),i(21,"section")(22,"h3"),e(23,"Code"),t(),n(24,"br"),i(25,"h4"),e(26,"Template"),t(),n(27,"ks-codemirror",5)(28,"br"),i(29,"h4"),e(30,"Css"),t(),n(31,"ks-codemirror",5)(32,"br"),i(33,"h4"),e(34,"Typescript"),t(),n(35,"ks-codemirror",5),t(),n(36,"br")(37,"br"),i(38,"section")(39,"h3"),e(40,"Service inputs"),t(),n(41,"br"),i(42,"table",6)(43,"thead")(44,"tr")(45,"th"),e(46,"Input"),t(),i(47,"th"),e(48,"Value"),t()()(),i(49,"tbody")(50,"tr")(51,"td")(52,"code"),e(53,"id"),t()(),i(54,"td")(55,"div")(56,"i"),e(57,"Value: "),t(),i(58,"code"),e(59,"NUMERIC UNIQUE ID"),t()(),i(60,"div")(61,"b",7),e(62,"Unique id"),t()()()(),i(63,"tr")(64,"td")(65,"code"),e(66,"images"),t()(),i(67,"td")(68,"div")(69,"i"),e(70,"Value: "),t(),i(71,"code"),e(72,"Image[]"),t()(),i(73,"div")(74,"b",7),e(75,"Array of "),i(76,"code"),e(77,"Image"),t(),e(78," objects"),t()()()(),i(79,"tr")(80,"td")(81,"code"),e(82,"currentImage"),t()(),i(83,"td")(84,"div")(85,"i"),e(86,"Value: "),t(),i(87,"code"),e(88,"Image"),t()(),i(89,"div")(90,"b",7)(91,"code"),e(92,"Image"),t(),e(93," object to show"),t()()()(),i(94,"tr")(95,"td")(96,"code"),e(97,"libConfig"),t()(),i(98,"td")(99,"div")(100,"i"),e(101,"Value: "),t(),i(102,"code"),e(103,"ModalLibConfig"),t()(),i(104,"div")(105,"b",7)(106,"code"),e(107,"ModalLibConfig"),t(),e(108," object to config the library. See below."),t()()()(),i(109,"tr")(110,"td")(111,"code"),e(112,"previewsTemplate"),t()(),i(113,"td")(114,"div")(115,"i"),e(116,"Value: "),t(),i(117,"code"),e(118,"TemplateRef<HTMLElement>"),t()(),i(119,"div")(120,"b",7),e(121,"A reference to an Angular template."),t(),n(122,"br"),e(123," This template can take 2 template variables: "),i(124,"ul")(125,"li")(126,"b"),e(127,"let-preview"),t(),e(128,": gives access to the "),i(129,"code"),e(130,"Image"),t(),e(131," associated with the preview"),t(),i(132,"li")(133,"b"),e(134,"let-defaultTemplate"),t(),e(135,": gives access to the default template used to render the preview; helpful if the need is to wrap the preview with additional information. Insert the default template with: "),i(136,"code"),e(137,'<ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>'),t(),e(138,". "),t()()()()()()()(),i(139,"section")(140,"h4"),e(141,"ModalLibConfig"),t(),n(142,"br"),i(143,"table",6)(144,"thead")(145,"tr")(146,"th"),e(147,"Input"),t(),i(148,"th"),e(149,"Value"),t()()(),i(150,"tbody")(151,"tr")(152,"td")(153,"code"),e(154,"previewConfig"),t()(),i(155,"td")(156,"div")(157,"i"),e(158,"Value: "),t(),i(159,"code"),e(160,"{ visible: true }"),t()()()()()()()()}l&2&&(m(27),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeCss)("language","css"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[ce,S,di],styles:[".preview-block[_ngcontent-%COMP%]{scroll-margin-left:10px;margin-right:10px}.preview-date[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:3px;opacity:.8}.preview-default[_ngcontent-%COMP%]{text-align:center}"]})}}return r})()});var ii,ni=y(()=>{"use strict";D();T();C();A();I();E();w();ii=(()=>{class r{constructor(o,l){this.uiService=o,this.titleService=l,this.images=[...yi],this.configHtml=b,this.configTs=h,this.titleService.titleEvent.emit("Examples - Carousel lcp"),this.codeHtml='  <ks-carousel [id]="110" [images]="images"></ks-carousel>',this.codeTypescript=`  images: Image[]; // init this array with your images
/*
  image would be like:
    new Image(
      0,
      {
        img: "/assets/images/carousel/milan-pegasus-gallery-statue.jpg",
        description: "Description 1",
        sources: [
          {
            media: "(max-width: 480px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-480w.jpg",
          },
          {
            media: "(max-width: 768px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-768w.jpg",
          },
          {
            media: "(max-width: 1024px)",
            srcset:
              "/assets/images/carousel/milan-pegasus-gallery-statue-1024w.jpg",
          },
        ],
      },
      {
        img: "/assets/images/carousel/thumbs/t-milan-pegasus-gallery-statue.jpg",
        title: "First image title",
        alt: "First image alt",
        ariaLabel: "First image aria-label",
      }
    )
*/
      `}ngOnInit(){this.metaData()}metaData(){this.uiService.setMetaData({title:"Carousel lcp"})}static{this.\u0275fac=function(l){return new(l||r)(d(u),d(g))}}static{this.\u0275cmp=p({type:r,selectors:[["app-carousel-lcp-page"]],standalone:!1,decls:70,vars:6,consts:[[1,"container"],[1,"link","clickable"],["href","https://github.com/Ks89/angular-modal-gallery",1,"link-title"],["href","https://web.dev/lcp/"],[3,"id","images"],[3,"content","language"],[1,"table","table-hover","table-sm"],[1,"text-success"]],template:function(l,a){l&1&&(i(0,"div",0)(1,"h2",1)(2,"a",2),e(3,"Carousel lcp"),t()(),i(4,"p"),e(5,"Carousel LCP demo. Largest Contentful Paint (LCP) is an important metric for measuring perceived load speed, because it marks the point in the page load timeline when the page's main content has likely loaded. For further information please refer to "),i(6,"a",3),e(7,"web.dev"),t(),e(8,". "),t(),n(9,"br"),i(10,"h3"),e(11,"Live Demo"),t(),n(12,"br")(13,"ks-carousel",4)(14,"br")(15,"br"),i(16,"section")(17,"h3"),e(18,"Code"),t(),n(19,"br"),i(20,"h4"),e(21,"Template"),t(),n(22,"ks-codemirror",5)(23,"br"),i(24,"h4"),e(25,"Typescript"),t(),n(26,"ks-codemirror",5),t(),n(27,"br")(28,"br"),i(29,"section")(30,"h3"),e(31,"Details"),t(),n(32,"br"),i(33,"table",6)(34,"thead")(35,"tr")(36,"th"),e(37,"Input (.html)"),t(),i(38,"th"),e(39,"Value (.ts)"),t()()(),i(40,"tbody")(41,"tr")(42,"td")(43,"code"),e(44,"id"),t()(),i(45,"td")(46,"div")(47,"i"),e(48,"Value: "),t(),i(49,"code"),e(50,"NUMERIC UNIQUE ID"),t()(),i(51,"div")(52,"b",7),e(53,"Unique id"),t()()()(),i(54,"tr")(55,"td")(56,"code"),e(57,"images"),t()(),i(58,"td")(59,"div")(60,"i"),e(61,"Value: "),t(),i(62,"code"),e(63,"Image[]"),t()(),i(64,"div")(65,"b",7),e(66,"Array of "),i(67,"code"),e(68,"Image"),t(),e(69," objects"),t()()()()()()()()),l&2&&(m(13),s("id",110)("images",a.images),m(9),s("content",a.codeHtml)("language","html"),m(4),s("content",a.codeTypescript)("language","typescript"))},dependencies:[U,S],encapsulation:2})}}return r})()});var zi,Mi,Ai=y(()=>{"use strict";xi();he();Se();ve();Ee();Ce();we();Ae();ke();Ge();Re();Ue();Pe();He();Ne();Fe();Ke();qe();We();Xe();Ze();tt();nt();at();rt();dt();ct();gt();ht();St();vt();Et();Ct();wt();At();kt();Gt();Rt();Ut();Pt();Ht();Nt();Ft();Kt();qt();Wt();Xt();Zt();ti();ni();zi=[{path:"",component:be,children:[{path:"",component:ge},{path:"array-simple",component:ge},{path:"output-events",component:ye},{path:"add-image-array",component:Ie},{path:"no-dots-and-previews",component:Ve},{path:"side-previews-hidden",component:Oe},{path:"only-current-img",component:je},{path:"close-outside",component:De},{path:"download-simple",component:fe},{path:"download-advanced",component:xe},{path:"download-custom-filename",component:xt},{path:"infinite-sliding",component:Le},{path:"loading-spinner-disable",component:Qe},{path:"loading-spinner-type",component:ze},{path:"keyboard-config",component:_e},{path:"description-strategy",component:Me},{path:"description-full-custom",component:Te},{path:"previews-custom-size",component:Be},{path:"previews-length",component:Ye},{path:"previews-no-arrows",component:Je},{path:"previews-not-clickable",component:$e},{path:"previews-template",component:Jt},{path:"previews-template-additional-data",component:ei},{path:"buttons-strategies",component:lt},{path:"buttons-exturl-newtab",component:ot},{path:"buttons-custom-fa",component:it},{path:"plain-layouts",component:mt},{path:"plain-atags",component:st},{path:"plain-image-pointer",component:pt},{path:"plain-custom-desc",component:ut},{path:"accessibility",component:et},{path:"auto-close-and-auto-update",component:bt},{path:"base64",component:ft},{path:"invert-swipe",component:yt},{path:"same-images",component:zt},{path:"autoplay-minimal",component:Yt},{path:"autoplay-custom",component:$t},{path:"carousel",component:It},{path:"carousel-fixed",component:Mt},{path:"carousel-content-projection",component:Tt},{path:"carousel-features-disable",component:Dt},{path:"carousel-noautoplay",component:_t},{path:"carousel-noinfinite",component:Lt},{path:"carousel-custom-autoplay",component:Vt},{path:"carousel-custom-previews",component:Ot},{path:"carousel-with-description",component:jt},{path:"carousel-outputs",component:Bt},{path:"carousel-breakpoints",component:Qt},{path:"carousel-lcp",component:ii}]}],Mi=vi.forChild(zi)});var Ti=y(()=>{"use strict";Se();he();Ee();ve();Ce();we();ke();Ae();Ge();Re();Ue();Pe();He();Ne();Fe();Ke();qe();We();Ze();Xe();tt();at();rt();nt();ht();gt();dt();ct();St();vt();Et();Ct();Wt();Xt();wt();At();kt();Gt();Rt();Ut();Pt();Ht();Nt();Ft();Kt();qt();Zt();ti();ni()});var Zr,qi=y(()=>{Z();Gi();Ai();Ti();Ri();E();w();C();Zr=(()=>{class r{static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275mod=oi({type:r})}static{this.\u0275inj=ai({imports:[ci,Mi,wi,gi,Si,Ci]})}}return r})()});qi();export{Zr as DemoModule};
